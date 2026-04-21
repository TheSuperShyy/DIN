<script setup lang="ts">
import { ref } from 'vue'
import { content } from '~/content'
import { useScrollScrub } from '~/composables/useScrollScrub'

const { approach } = content

const themisVideo = ref<HTMLVideoElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const videoWrapperRef = ref<HTMLElement | null>(null)

useScrollScrub({ video: themisVideo, canvas: canvasRef, wrapper: videoWrapperRef })
</script>

<template>
  <section class="section bg-off-white home-products" data-section-theme="off-white">
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
          src="/themis-logo-scrub.mp4"
          muted
          playsinline
          preload="auto"
          class="video-source"
        />
        <canvas ref="canvasRef" class="product-video" />
      </div>

      <!-- Themis description -->
      <div class="themis-description reveal-rtl">
        <h3 class="themis-headline">{{ approach.headline }}</h3>
        <p class="intro-line" v-html="approach.intro"></p>

        <p class="pillars-title">{{ approach.pillarsTitle }}</p>

        <div class="pillars">
          <div
            v-for="(pillar, i) in approach.pillars"
            :key="i"
            class="pillar"
          >
            <div class="pillar-head">
              <span class="pillar-number">{{ pillar.number }}</span>
              <h4 class="pillar-title">{{ pillar.title }}</h4>
            </div>
            <p class="pillar-body" v-html="pillar.body"></p>
            <ul v-if="pillar.bullets" class="pillar-bullets">
              <li v-for="(b, j) in pillar.bullets" :key="j">{{ b }}</li>
            </ul>
          </div>
        </div>

        <p class="value-title">{{ approach.valueTitle }}</p>
        <div class="values">
          <div v-for="(v, i) in approach.values" :key="i" class="value">
            <span class="value-label">{{ v.title }}</span>
            <span class="value-body">{{ v.body }}</span>
          </div>
        </div>

        <p class="closing" v-html="approach.closing"></p>
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
  direction: rtl;
}

/* ── Themis description ── */
.themis-description {
  grid-column: 1 / -1;
  margin-top: 8vw;
  direction: rtl;
  text-align: right;
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.7;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .themis-description {
    grid-column: 2 / 5;
    margin-top: 5vw;
    font-size: 1.6rem;
  }
}

.themis-description :deep(.themis-brand) {
  color: var(--color-blue);
  font-weight: 700;
}

.themis-headline {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offBlack);
  margin: 0 0 1.6rem;
}

@media only screen and (min-width: 834px) {
  .themis-headline {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }
}

.intro-line {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  margin: 0 0 3rem;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}

@media only screen and (min-width: 834px) {
  .intro-line {
    font-size: 1.7rem;
  }
}

.pillars-title,
.value-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-offBlack);
  margin: 0 0 2rem;
  letter-spacing: -0.01em;
}

@media only screen and (min-width: 834px) {
  .pillars-title,
  .value-title {
    font-size: 1.9rem;
  }
}

.pillars {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  margin-bottom: 3rem;
}

@media only screen and (min-width: 834px) {
  .pillars {
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
  }
}

.pillar {
  background: var(--color-white);
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-right: 2px solid var(--color-blue);
  border-radius: 1rem;
  padding: 1.8rem 1.6rem;
}

.pillar-head {
  display: flex;
  align-items: baseline;
  column-gap: 1rem;
  margin-bottom: 0.8rem;
}

.pillar-number {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-blue);
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.pillar-title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin: 0;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .pillar-title {
    font-size: 1.7rem;
  }
}

.pillar-body {
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--color-offBlack);
  opacity: 0.85;
  margin: 0;
}

@media only screen and (min-width: 834px) {
  .pillar-body {
    font-size: 1.5rem;
  }
}

.pillar-bullets {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.pillar-bullets li {
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--color-offBlack);
  opacity: 0.75;
  padding-right: 1.2rem;
  position: relative;
  margin-bottom: 0.4rem;
}

.pillar-bullets li::before {
  content: '•';
  position: absolute;
  right: 0;
  top: 0;
  color: var(--color-blue);
  font-weight: 700;
}

.values {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 1.6rem 1.8rem;
  background: rgba(0, 113, 227, 0.06);
  border-radius: 1rem;
}

@media only screen and (min-width: 834px) {
  .values {
    padding: 2rem 2.4rem;
  }
}

.value {
  display: flex;
  column-gap: 1rem;
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .value {
    font-size: 1.5rem;
  }
}

.value-label {
  font-weight: 700;
  color: var(--color-blue);
  flex-shrink: 0;
}

.value-body {
  opacity: 0.85;
}

.closing {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  color: var(--color-offBlack);
  margin: 0;
  text-align: center;
  padding-top: 2rem;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
}

@media only screen and (min-width: 834px) {
  .closing {
    font-size: 1.6rem;
  }
}

/* Mobile — Themis description polish */
@media only screen and (max-width: 833px) {
  .themis-description {
    margin: 10vw 1.6rem 0;
  }
}
</style>
