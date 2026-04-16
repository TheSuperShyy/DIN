<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { content } from '~/content'

const { approach } = content

const themisVideo = ref<HTMLVideoElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const videoWrapperRef = ref<HTMLElement | null>(null)
const sectionRef = ref<HTMLElement | null>(null)

let rafId = 0
let targetTime = 0
let smoothTime = 0
let isSeeking = false
let ctx: CanvasRenderingContext2D | null = null

function drawFrame() {
  const video = themisVideo.value
  const canvas = canvasRef.value
  if (!video || !canvas || !video.videoWidth) return

  if (!ctx) ctx = canvas.getContext('2d')
  if (!ctx) return

  if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
  }
  ctx.drawImage(video, 0, 0)
}

function getScrollProgress(): number {
  const wrapper = videoWrapperRef.value
  const video = themisVideo.value
  if (!wrapper || !video || !video.duration) return 0

  const rect = wrapper.getBoundingClientRect()
  const vh = window.innerHeight
  const totalTravel = rect.height + vh
  const traveled = vh - rect.top
  return Math.min(Math.max(traveled / totalTravel, 0), 1)
}

function loop() {
  const video = themisVideo.value
  if (!video || !video.duration) {
    rafId = requestAnimationFrame(loop)
    return
  }

  targetTime = getScrollProgress() * video.duration

  // Smooth lerp toward target
  const diff = targetTime - smoothTime
  if (Math.abs(diff) > 0.001) {
    smoothTime += diff * 0.12
  } else {
    smoothTime = targetTime
  }

  // Only seek when browser finished previous seek
  if (!isSeeking && Math.abs(video.currentTime - smoothTime) > 0.01) {
    isSeeking = true
    video.currentTime = smoothTime
  }

  // Always draw latest available frame to canvas
  drawFrame()

  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  const video = themisVideo.value
  if (video) {
    video.addEventListener('seeked', () => {
      isSeeking = false
    })
    video.addEventListener('loadeddata', () => {
      video.currentTime = 0
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
</script>

<template>
  <section ref="sectionRef" class="section bg-off-white home-products" data-section-theme="off-white">
    <div class="container home-products-container">
      <!-- Section head (icon + label) -->
      <div class="home-products-section-head reveal">
        <div class="section-icon-wrapper">
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.20742 9.02441H0.12651C0.0566404 9.02441 0 9.08105 0 9.15092V9.85095C0 9.92081 0.0566404 9.97745 0.12651 9.97745H6.20742C6.27728 9.97745 6.33392 9.92081 6.33392 9.85095V9.15092C6.33392 9.08105 6.27728 9.02441 6.20742 9.02441Z" fill="currentColor"/>
            <path d="M18.8754 9.02441H12.7945C12.7246 9.02441 12.668 9.08105 12.668 9.15092V9.85095C12.668 9.92081 12.7246 9.97745 12.7945 9.97745H18.8754C18.9453 9.97745 19.0019 9.92081 19.0019 9.85095V9.15092C19.0019 9.08105 18.9453 9.02441 18.8754 9.02441Z" fill="currentColor"/>
            <path d="M9.02441 0.12657V6.20747C9.02441 6.27734 9.08105 6.33398 9.15092 6.33398H9.85094C9.92081 6.33398 9.97745 6.27734 9.97745 6.20747V0.12657C9.97745 0.0567002 9.92081 5.96046e-05 9.85094 5.96046e-05H9.15092C9.08105 5.96046e-05 9.02441 0.0567002 9.02441 0.12657Z" fill="currentColor"/>
            <path d="M9.0332 12.8028V18.8837C9.0332 18.9536 9.08984 19.0103 9.15971 19.0103H9.85974C9.9296 19.0103 9.98624 18.9536 9.98624 18.8837V12.8028C9.98624 12.733 9.9296 12.6763 9.85974 12.6763H9.15971C9.08984 12.6763 9.0332 12.733 9.0332 12.8028Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="section-head-label">{{ approach.sectionLabel }}</div>
      </div>

      <!-- Video — canvas renders frames, hidden video is the source -->
      <div ref="videoWrapperRef" class="video-wrapper">
        <video
          ref="themisVideo"
          src="/themis-logo.mp4"
          muted
          playsinline
          preload="auto"
          class="video-source"
        />
        <canvas ref="canvasRef" class="product-video" />
      </div>

      <!-- Themis description -->
      <div class="themis-description reveal-rtl">
        <p>כחלק מהשירות לקוחותיה, החברה מפעילה את מערכת Themis - מערכת בקרה מתקדמת, המעניקה<br>במהלך העבודה אצל הלקוח שקיפות, שליטה, בטיחות וביטחון מלא בכל משימה, בכל רגע ובכל מקום.</p>
        <p>לאחר כל ביקור וביצוע המשימות מופק דו"ח דיגיטלי מפורט הכולל:</p>
        <p class="bullet-line">•&nbsp;&nbsp;תיאור טקסט חופשי • תמונות • סרטוני וידאו</p>
        <p class="bullet-line">•&nbsp;&nbsp;תאריך, שעה וחתימה ועוד...</p>
        <p>באמצעות Themis תוכלו לדעת באופן מיידי ומדויק מה נעשה באתרכם, מתי ועל-ידי מי - ולהבטיח<br>תיעוד מלא ושקט נפשי.</p>
        <p>המערכת גמישה ומותאמת למגוון רחב של בעלי מקצוע, ומאפשרת ניהול יעיל ושקוף בכל סדר גודל של<br>פעילות.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-products {
  background-color: var(--color-offWhite);
}

/* ── Video wrapper — in-flow, centered ── */
.video-wrapper {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 10vw;
  pointer-events: none;
}

@media only screen and (min-width: 834px) {
  .video-wrapper {
    margin-top: 5vw;
  }
}

.video-source {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.product-video {
  width: 75vw;
  height: auto;
  mix-blend-mode: multiply;
  filter: contrast(1.5) brightness(1.15);
}

@media only screen and (min-width: 834px) {
  .product-video {
    width: 40vw;
  }
}

.home-products-container {
  overflow: hidden;
  padding-top: 22.564vw !important;
  padding-bottom: 21.795vw !important;
}

@media only screen and (min-width: 834px) {
  .home-products-container {
    padding-top: 10vw !important;
    padding-bottom: 5.903vw !important;
  }
}

/* ── Section head ── */
.home-products-section-head {
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  row-gap: 2rem;
}

.section-icon-wrapper {
  align-self: center;
  background-color: var(--color-offBlack);
  border-radius: 1.8px;
  color: var(--color-offWhite);
  display: flex;
  height: 2.8rem;
  justify-content: center;
  width: 2.8rem;
}

.section-icon-wrapper svg {
  height: auto;
  width: calc(100% - 0.8rem);
}

.section-head-label {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-align: center;
}

/* ── Themis description ── */
.themis-description {
  grid-column: 1 / -1;
  margin-top: 8vw;
  direction: rtl;
  text-align: right;
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.6;
  color: var(--color-offBlack);
  margin-right: 6vw;
  padding-right: 3.5rem;
  border-right: 1px solid var(--color-blue);
}

@media only screen and (min-width: 834px) {
  .themis-description {
    grid-column: 2 / 5;
    margin-top: 5vw;
    font-size: 1.5rem;
  }
}

.themis-description p {
  margin-bottom: 1.6rem;
}

.themis-description .bullet-line {
  margin-bottom: 0.4rem;
}
</style>
