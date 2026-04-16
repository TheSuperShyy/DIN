<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { content } from '~/content'

const { approach } = content

const themisVideo = ref<HTMLVideoElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const videoWrapperRef = ref<HTMLElement | null>(null)
const sectionRef = ref<HTMLElement | null>(null)

let lastProgress = -1
let rafId = 0

function drawFrame() {
  const video = themisVideo.value
  const canvas = canvasRef.value
  if (!video || !canvas || !video.videoWidth) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
  }
  ctx.drawImage(video, 0, 0)
}

function updateVideoTime() {
  const video = themisVideo.value
  const wrapper = videoWrapperRef.value
  if (!video || !wrapper || !video.duration) return

  const rect = wrapper.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  // Video fully plays from when wrapper top hits viewport bottom
  // to when wrapper bottom hits viewport top
  const totalTravel = rect.height + viewportHeight
  const traveled = viewportHeight - rect.top
  const progress = Math.min(Math.max(traveled / totalTravel, 0), 1)

  // Only update when progress actually changed
  if (Math.abs(progress - lastProgress) < 0.0005) return
  lastProgress = progress

  const targetTime = progress * video.duration
  video.currentTime = targetTime
}

function onSeeked() {
  drawFrame()
}

function loop() {
  updateVideoTime()
  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  const video = themisVideo.value
  if (video) {
    video.addEventListener('seeked', onSeeked)
    // Draw first frame once metadata is loaded
    video.addEventListener('loadeddata', () => {
      video.currentTime = 0
      drawFrame()
    })
  }
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  themisVideo.value?.removeEventListener('seeked', onSeeked)
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

      <!-- Body copy -->
      <div class="products-content reveal">
        <p class="products-copy">
          <span class="copy-muted">{{ approach.copy }}</span>
          <span class="copy-sub">{{ approach.subCopy }}</span>
        </p>
      </div>

      <!-- Explore links -->
      <div class="links-wrapper reveal">
        <div class="links-label">Explore in depth</div>
        <div class="links">
          <NuxtLink
            v-for="pill in approach.pills"
            :key="pill.label"
            :to="pill.href"
            :class="['pill', pill.filled ? 'pill-filled' : 'pill-outline']"
          >
            {{ pill.label }}
          </NuxtLink>
        </div>
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

/* ── Body copy ── */
.products-content {
  grid-column: 1 / -1;
  margin: 10vw auto 0;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .products-content {
    grid-column: 2 / 4;
    margin: 5vw 0 0;
    text-align: left;
  }
}

.products-copy {
  font-size: 1.6rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  max-width: 31rem;
}

.copy-muted {
  opacity: 0.5;
  display: block;
}

.copy-sub {
  display: block;
  margin-top: 2rem;
}

/* ── Explore links ── */
.links-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  margin-top: 6.9rem;
  row-gap: 2.6rem;
  text-align: right;
}

@media only screen and (min-width: 834px) {
  .links-wrapper {
    align-items: flex-end;
    grid-column: 4 / 5;
    justify-content: flex-end;
    margin-top: 0;
    row-gap: 2.2rem;
  }
}

.links-label {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.links {
  column-gap: 0.6rem;
  display: flex;
}
</style>
