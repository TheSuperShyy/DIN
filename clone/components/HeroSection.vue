<script setup lang="ts">
import { content } from '~/content'
</script>

<template>
  <header class="home-hero" data-section-theme="off-white">
    <!-- Layered modern background: radial glow + subtle mesh blobs -->
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-bg-blob hero-bg-blob--one" />
      <div class="hero-bg-blob hero-bg-blob--two" />
      <div class="hero-bg-blob hero-bg-blob--three" />
      <div class="hero-bg-noise" />
    </div>

    <div class="container home-hero-container">
      <!-- Announcement bar (desktop top) -->
      <div class="head">
        <NuxtLink :to="content.brand.announcement.href" class="hero-link">
          <span>{{ content.brand.announcement.text }}</span>
          <span class="link-icon-wrapper">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z" fill="currentColor"/>
            </svg>
          </span>
        </NuxtLink>
      </div>

      <!-- Centered logo + tagline stack -->
      <div class="hero-stack">
        <div class="hero-logo-wrapper">
          <img src="/TAL-logo.png" alt="TAL" class="hero-logo" />
        </div>
        <h1 class="hero-tagline">השקט שלכם ממזיקים.</h1>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* ── Load animations ── */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes appearIn {
  from { opacity: 0; filter: blur(12px); transform: scale(0.95); }
  to { opacity: 1; filter: blur(0); transform: scale(1); }
}

@keyframes revealUp {
  0% { opacity: 0; filter: blur(12px); transform: translateY(2rem); }
  100% { opacity: 1; filter: blur(0); transform: translateY(0); }
}

@keyframes blobDrift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(3vw, -2vw) scale(1.05); }
  66% { transform: translate(-2vw, 3vw) scale(0.95); }
}

.home-hero {
  background-color: var(--color-offWhite);
  overflow: hidden;
  position: relative;
  min-height: 100svh;
}

/* ── Layered background ── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.hero-bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  will-change: transform;
}

/* Subtle warm-grey wash, like cement with a hint of warmth from the TAL palette */
.hero-bg-blob--one {
  top: -10%;
  left: -5%;
  width: 55vw;
  height: 55vw;
  background: radial-gradient(circle at 30% 30%, rgba(180, 165, 140, 0.18), transparent 65%);
  animation: blobDrift 22s ease-in-out infinite;
}

.hero-bg-blob--two {
  bottom: -15%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle at 60% 60%, rgba(150, 140, 125, 0.14), transparent 70%);
  animation: blobDrift 28s ease-in-out infinite reverse;
}

.hero-bg-blob--three {
  top: 40%;
  left: 45%;
  width: 32vw;
  height: 32vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.35), transparent 70%);
  animation: blobDrift 34s ease-in-out infinite;
}

/* Fine concrete grain — higher frequency for tighter texture, lower opacity,
   multiply blend so it darkens the wash subtly instead of glowing over it. */
.hero-bg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.22;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55 0 0 0 0 0.5 0 0 0 0 0.45 0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* Soft vignette so edges read as deeper concrete, center stays open */
.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(60, 50, 35, 0.08) 100%);
  pointer-events: none;
  z-index: 0;
}

.home-hero-container {
  min-height: 100svh;
  padding-top: 15rem !important;
  padding-bottom: 3rem !important;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 834px) {
  .home-hero-container {
    padding-top: 9.4rem !important;
    padding-bottom: 4.3rem !important;
  }
}

/* ── Announcement bar (desktop only) ── */
.head {
  display: none;
  grid-column: 1 / -1;
  animation: slideDown 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
}

@media only screen and (min-width: 834px) {
  .head { display: block; }
}

.hero-link {
  align-items: center;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  color: rgba(0, 0, 0, 0.55);
  display: flex;
  font-size: 1.2rem;
  font-weight: 350;
  height: 3rem;
  justify-content: center;
  letter-spacing: -0.02em;
  margin: 0 auto;
  min-width: 30rem;
  padding: 0 1rem;
  position: relative;
  width: fit-content;
}

.link-icon-wrapper {
  align-items: center;
  border: 1px solid;
  border-radius: 6.3rem;
  color: var(--color-blue);
  display: flex;
  height: 1.3rem;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.2rem;
}

/* ── Centered hero stack ── */
.hero-stack {
  grid-column: 1 / -1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  direction: rtl;
  position: relative;
  z-index: 2;
  gap: 4rem;
}

.hero-logo-wrapper {
  animation: appearIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  display: flex;
  justify-content: center;
}

.hero-logo {
  max-height: 40vh;
  width: auto;
  object-fit: contain;
  filter:
    drop-shadow(0 2.4rem 5rem rgba(0, 0, 0, 0.42))
    drop-shadow(0 0.8rem 1.6rem rgba(0, 0, 0, 0.28));
}

.hero-tagline {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: var(--color-offBlack);
  margin: 0;
  animation: revealUp 2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s both;
}

@media only screen and (min-width: 834px) {
  .hero-tagline {
    font-size: 6rem;
  }

  .hero-logo {
    max-height: 45vh;
  }
}

@media only screen and (min-width: 1200px) {
  .hero-tagline {
    font-size: 7.2rem;
  }
}

@media only screen and (max-width: 833px) {
  .hero-stack {
    gap: 2.4rem;
    padding: 0 2rem;
  }

  .hero-logo {
    max-height: 32vh;
  }

  .hero-tagline {
    font-size: 3.2rem;
  }
}
</style>
