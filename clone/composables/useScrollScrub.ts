import { onMounted, onUnmounted, type Ref } from 'vue'

interface UseScrollScrubOptions {
  video: Ref<HTMLVideoElement | null>
  canvas: Ref<HTMLCanvasElement | null>
  wrapper: Ref<HTMLElement | null>
  smoothing?: number
  end?: number
}

export function useScrollScrub({ video, canvas, wrapper, smoothing = 0.08, end = 1 }: UseScrollScrubOptions) {
  let rafId = 0
  let targetTime = 0
  let smoothTime = 0
  let isSeeking = false
  let ctx: CanvasRenderingContext2D | null = null

  function drawFrame() {
    const v = video.value
    const c = canvas.value
    if (!v || !c || !v.videoWidth) return
    if (!ctx) ctx = c.getContext('2d')
    if (!ctx) return
    if (c.width !== v.videoWidth || c.height !== v.videoHeight) {
      c.width = v.videoWidth
      c.height = v.videoHeight
    }
    ctx.drawImage(v, 0, 0)
  }

  function getScrollProgress(): number {
    const w = wrapper.value
    const v = video.value
    if (!w || !v || !v.duration) return 0
    const rect = w.getBoundingClientRect()
    const vh = window.innerHeight
    const totalTravel = rect.height + vh
    const traveled = vh - rect.top
    const raw = traveled / totalTravel
    return Math.min(Math.max(raw / end, 0), 1)
  }

  function loop() {
    const v = video.value
    if (!v || !v.duration) {
      rafId = requestAnimationFrame(loop)
      return
    }
    targetTime = getScrollProgress() * v.duration
    const diff = targetTime - smoothTime
    if (Math.abs(diff) > 0.001) smoothTime += diff * smoothing
    else smoothTime = targetTime
    if (!isSeeking && Math.abs(v.currentTime - smoothTime) > 0.01) {
      isSeeking = true
      v.currentTime = smoothTime
    }
    drawFrame()
    rafId = requestAnimationFrame(loop)
  }

  onMounted(() => {
    const v = video.value
    if (v) {
      v.addEventListener('seeked', () => { isSeeking = false })
      v.addEventListener('loadeddata', () => {
        v.currentTime = 0
        smoothTime = 0
        targetTime = 0
        drawFrame()
      })
    }
    rafId = requestAnimationFrame(loop)
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
  })
}
