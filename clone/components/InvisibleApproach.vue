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
  column-gap: 1.4rem;
  margin-bottom: 1rem;
}

.pillar-number {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--color-blue);
  letter-spacing: -0.02em;
  flex-shrink: 0;
  line-height: 1;
}

@media only screen and (min-width: 834px) {
  .pillar-number {
    font-size: 3.4rem;
  }
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
  background: rgba(212, 160, 23, 0.08);
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
