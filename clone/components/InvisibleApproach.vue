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
        <p class="intro-line">כחלק מהשירות לקוחותיה, החברה מפעילה את מערכת <span class="themis-brand">Themis</span> - מערכת בקרה מתקדמת, המעניקה במהלך העבודה אצל הלקוח שקיפות, שליטה, בטיחות וביטחון מלא בכל משימה, בכל רגע ובכל מקום.</p>
        <p class="lead-in">לאחר כל ביקור וביצוע המשימות מופק דו"ח דיגיטלי מפורט הכולל:</p>
        <p class="bullet-line">•&nbsp;&nbsp;תיאור טקסט חופשי • תמונות • סרטוני וידאו</p>
        <p class="bullet-line">•&nbsp;&nbsp;תאריך, שעה וחתימה ועוד...</p>
        <p>באמצעות <span class="themis-brand">Themis</span> תוכלו לדעת באופן מיידי ומדויק מה נעשה באתרכם, מתי ועל-ידי מי - ולהבטיח תיעוד מלא ושקט נפשי.</p>
        <p>המערכת גמישה ומותאמת למגוון רחב של בעלי מקצוע, ומאפשרת ניהול יעיל ושקוף בכל סדר גודל של פעילות.</p>
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

/* Mobile — Themis description polish */
@media only screen and (max-width: 833px) {
  .themis-description {
    margin: 10vw 1.6rem 0;
    padding: 2.4rem 2rem;
    font-family: inherit;
    font-size: 1.45rem;
    font-weight: 400;
    line-height: 1.8;
    color: var(--color-offBlack);
    border: none;
    background: var(--color-white);
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }

  .themis-description p {
    margin-bottom: 1.6rem;
  }

  .themis-description p:last-child {
    margin-bottom: 0;
  }

  .themis-description .themis-brand {
    color: var(--color-blue);
    font-weight: 600;
  }

  .themis-description .intro-line {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.7;
    margin-bottom: 2rem;
    padding-bottom: 1.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .themis-description .lead-in {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-blue);
    margin-bottom: 1.2rem;
    letter-spacing: 0.01em;
  }

  .themis-description .bullet-line {
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0.2rem 0;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.6rem;
    box-shadow: none;
  }

  .themis-description .bullet-line + .bullet-line {
    margin-bottom: 2rem;
  }
}
</style>
