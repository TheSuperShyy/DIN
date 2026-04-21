<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { content } from '~/content'
import { useScrollScrub } from '~/composables/useScrollScrub'

const { breakthrough } = content
const currentLine = ref(0)
let interval: ReturnType<typeof setInterval>

const ratVideo = ref<HTMLVideoElement | null>(null)
const ratCanvas = ref<HTMLCanvasElement | null>(null)
const ratWrapper = ref<HTMLElement | null>(null)

const pigeonVideo = ref<HTMLVideoElement | null>(null)
const pigeonCanvas = ref<HTMLCanvasElement | null>(null)
const pigeonWrapper = ref<HTMLElement | null>(null)

useScrollScrub({ video: ratVideo, canvas: ratCanvas, wrapper: ratWrapper, end: 0.7 })
useScrollScrub({ video: pigeonVideo, canvas: pigeonCanvas, wrapper: pigeonWrapper, end: 0.7 })

onMounted(() => {
  interval = setInterval(() => {
    currentLine.value = (currentLine.value + 1) % breakthrough.rotatingLines.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="section bg-grey-light home-intro" data-section-theme="off-white">
    <!-- Section header — top of section -->
    <h1 class="section-header reveal">{{ breakthrough.sectionHeader }}</h1>

    <div class="home-intro-container container">
      <!-- Copy column -->
      <div class="intro-content reveal" data-delay="1">
        <p
          v-for="(para, i) in breakthrough.paragraphs"
          :key="i"
          class="intro-copy"
          v-html="para"
        ></p>
      </div>
    </div>

    <div ref="ratWrapper" class="intro-rat">
      <video
        ref="ratVideo"
        src="/rat-vid-scrub.mp4"
        muted
        playsinline
        preload="auto"
        class="video-source"
      />
      <canvas ref="ratCanvas" class="intro-rat-canvas" />
    </div>

    <div ref="pigeonWrapper" class="intro-bird reveal" data-delay="2">
      <video
        ref="pigeonVideo"
        src="/pigeon-animation-scrub.mp4"
        muted
        playsinline
        preload="auto"
        class="video-source"
      />
      <canvas ref="pigeonCanvas" class="intro-bird-canvas" />
    </div>
  </section>
</template>

<style scoped>
.home-intro {
  background:
    radial-gradient(ellipse at 20% 0%, rgba(212, 160, 23, 0.10), transparent 55%),
    radial-gradient(ellipse at 100% 100%, rgba(212, 160, 23, 0.07), transparent 60%),
    linear-gradient(180deg, var(--color-offWhite) 0%, var(--color-greyLighter) 100%);
  padding: 8vw 0 30vw;
  position: relative;
}

.home-intro::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(15, 16, 18, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 16, 18, 0.035) 1px, transparent 1px);
  background-size: 4rem 4rem;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  pointer-events: none;
  z-index: 0;
}

.home-intro > * {
  position: relative;
  z-index: 1;
}

@media only screen and (min-width: 834px) {
  .home-intro { padding: 6vw 0 20vw; }
}

.home-intro-container {
  /* inherits .container 5-col grid */
}

/* Section header */
.section-header {
  text-align: center;
  direction: rtl;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-offBlack);
  margin: 0 0 3vw;
  padding: 0 var(--grid-outerGutter);
}

@media only screen and (min-width: 834px) {
  .section-header {
    font-size: 3.2rem;
    margin-bottom: 2vw;
  }
}

/* Label column */
.head {
  grid-column: 1 / -1;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .head {
    grid-column: 2 / 3;
    text-align: left;
  }
}

.intro-title {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.intro-title span {
  display: block;
}

.intro-title .muted {
  opacity: 0.5;
}

/* Copy column */
.intro-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  grid-column: 1 / -1;
}

@media only screen and (min-width: 834px) {
  .intro-content {
    align-items: flex-end;
    grid-column: 1 / 5;
  }
}

.intro-copy {
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.6;
  margin-top: 17.949vw;
  text-align: right;
  direction: rtl;
  color: var(--color-offBlack);
}

.intro-copy + .intro-copy {
  margin-top: 2rem;
}

.intro-copy :deep(.text-blue) {
  color: var(--color-blue);
  font-weight: 600;
}

@media only screen and (min-width: 834px) {
  .intro-copy {
    font-size: 2rem;
    line-height: 1.5;
    margin-top: 0;
    max-width: 100%;
    text-align: right;
    margin-right: -8vw;
  }

  .intro-copy + .intro-copy {
    margin-top: 2.4rem;
  }
}

/* Source videos — hidden, feed the canvases */
.video-source {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

/* Rat */
.intro-rat {
  display: none;
}

@media only screen and (min-width: 834px) {
  .intro-rat {
    display: block;
    position: absolute;
    bottom: 2vw;
    left: var(--grid-outerGutter);
    width: 32rem;
    pointer-events: none;
  }
}

.intro-rat-canvas {
  width: 100%;
  height: auto;
  display: block;
  mix-blend-mode: multiply;
}

/* Bird */
.intro-bird {
  display: none;
}

@media only screen and (min-width: 834px) {
  .intro-bird {
    display: block;
    position: absolute;
    bottom: 3.5vw;
    right: 0;
    width: 40rem;
    pointer-events: none;
    z-index: 0;
  }
}

.intro-bird-canvas {
  width: 100%;
  height: auto;
  display: block;
  mix-blend-mode: multiply;
}

/* Rotating line */
.copy-lines-wrapper {
  display: flex;
  height: 3.5rem;
  position: relative;
  width: 100%;
}

.copy-line-slot {
  position: relative;
  width: 100%;
}

.rotating-line {
  color: var(--color-blue);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
}

.rotate-line-enter-active,
.rotate-line-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.rotate-line-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.rotate-line-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Arrow link */
.intro-link {
  color: var(--color-blue);
  margin-top: 16.667vw;
}

@media only screen and (min-width: 834px) {
  .intro-link { margin-top: 4.444vw; }
}

/* Mobile — intro polish */
@media only screen and (max-width: 833px) {
  .home-intro {
    padding: 23vw 0 30vw;
  }

  .section-header {
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.15;
    position: relative;
    padding-bottom: 1.4rem;
    width: fit-content;
    margin: 0 auto 4vw;
    text-align: center;
  }

  .section-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 3.6rem;
    height: 2px;
    background: var(--color-blue);
    border-radius: 2px;
  }

  .intro-content {
    padding: 0 2.2rem;
  }

  .intro-copy {
    margin-top: 6vw;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.85;
    text-align: right;
  }

  .intro-copy + .intro-copy {
    margin-top: 1.6rem;
  }

  .intro-copy :deep(.text-blue) {
    font-weight: 600;
  }

  .intro-rat {
    display: block;
    position: absolute;
    bottom: 4vw;
    left: 2vw;
    width: 16rem;
    pointer-events: none;
    z-index: 0;
  }

  .intro-bird {
    display: block;
    position: absolute;
    bottom: 6vw;
    right: 0;
    width: 18rem;
    pointer-events: none;
    z-index: 0;
  }
}
</style>
