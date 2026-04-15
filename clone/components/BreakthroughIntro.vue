<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { content } from '~/content'

const { breakthrough } = content
const currentLine = ref(0)
let interval: ReturnType<typeof setInterval>

const ratVideo = ref<HTMLVideoElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  interval = setInterval(() => {
    currentLine.value = (currentLine.value + 1) % breakthrough.rotatingLines.length
  }, 3000)
  if (ratVideo.value) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (ratVideo.value) ratVideo.value.playbackRate = 1.2
          ratVideo.value?.play()
        } else {
          if (ratVideo.value) {
            ratVideo.value.pause()
            ratVideo.value.currentTime = 0
          }
        }
      })
    }, { threshold: 0.3 })
    observer.observe(ratVideo.value)
  }
})

onUnmounted(() => {
  clearInterval(interval)
  observer?.disconnect()
})
</script>

<template>
  <section class="section bg-grey-light home-intro" data-section-theme="off-white">
    <!-- Section header — top of section -->
    <h1 class="section-header">{{ breakthrough.sectionHeader }}</h1>

    <div class="home-intro-container container">
      <!-- Copy column -->
      <div class="intro-content reveal" data-delay="1">
        <p class="intro-copy" v-html="breakthrough.copy"></p>
      </div>
    </div>

    <video
      ref="ratVideo"
      src="/rat-vid.mp4"
      muted
      playsinline
      preload="auto"
      class="intro-rat"
    />

    <img src="/eagle.svg" alt="" class="intro-bird reveal" data-delay="2" />
  </section>
</template>

<style scoped>
.home-intro {
  background-color: var(--color-greyLight);
  padding: 8vw 0 30vw;
  position: relative;
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
  grid-column: 1 / -1;
}

@media only screen and (min-width: 834px) {
  .intro-content {
    align-items: flex-end;
    grid-column: 1 / 5;
  }
}

.intro-copy {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 17.949vw;
  text-align: right;
  direction: rtl;
  color: var(--color-offBlack);
}

.intro-copy :deep(.text-blue) {
  color: var(--color-blue);
}

@media only screen and (min-width: 834px) {
  .intro-copy {
    margin-top: 0;
    max-width: 100%;
    text-align: right;
    margin-right: -8vw;
  }
}

/* Rat video */
.intro-rat {
  display: none;
}

@media only screen and (min-width: 834px) {
  .intro-rat {
    display: block;
    position: absolute;
    bottom: 6vw;
    left: var(--grid-outerGutter);
    width: 32rem;
    height: auto;
    filter: none !important;
    pointer-events: none;
  }
}

/* Bird image */
.intro-bird {
  display: none;
}

@media only screen and (min-width: 834px) {
  .intro-bird {
    display: block;
    position: absolute;
    bottom: 6vw;
    right: var(--grid-outerGutter);
    width: 32rem;
    height: auto;
    pointer-events: none;
  }
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
</style>
