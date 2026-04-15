<script setup lang="ts">
import { content } from '~/content'
</script>

<template>
  <header class="home-hero" data-section-theme="off-white">
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

      <!-- Hero tagline (bottom-right) -->
      <p class="hero-tagline">טל שולמרק. השקט שלכם ממזיקים.</p>
    </div>

    <!-- Hero product image -->
    <div class="hero-image-wrapper" aria-hidden="true">
      <img src="/TAL-logo.png" alt="TAL" class="hero-product-image" />
    </div>
  </header>
</template>

<style scoped>
/* ── Load animations ── */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes appearIn {
  from {
    opacity: 0;
    filter: blur(12px);
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
}

@keyframes revealRTL {
  0% {
    opacity: 0;
    filter: blur(12px);
    transform: translateX(4rem);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
}

.home-hero {
  background-color: var(--color-white);
  overflow: hidden;
  position: relative;
  min-height: 100svh;
}

.home-hero::before {
  background: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0));
  bottom: 0;
  content: "";
  height: 55%;
  left: 0;
  opacity: 0.78;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.home-hero-container {
  min-height: 100svh;
  padding-top: 15rem !important;
  padding-bottom: 3rem !important;
  position: relative;
  z-index: 1;
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
  background-color: rgba(120, 120, 120, 0.1);
  border-radius: 1rem;
  color: rgba(0, 0, 0, 0.4);
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

/* ── Hero tagline (bottom-right) ── */
.hero-tagline {
  position: absolute;
  bottom: 5rem;
  right: var(--grid-outerGutter);
  font-size: 2rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  color: var(--color-offBlack);
  direction: rtl;
  z-index: 2;
  animation: revealRTL 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s both;
}

@media only screen and (max-width: 833px) {
  .hero-tagline {
    bottom: 2rem;
    right: 2rem;
    font-size: 1.2rem;
  }
}

/* ── Hero background ── */
.hero-image-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  animation: appearIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hero-product-image {
  max-height: 68%;
  width: auto;
  margin-top: 8rem;
  object-fit: contain;
  filter: drop-shadow(0 1rem 3rem rgba(0, 0, 0, 0.3));
}

@media only screen and (max-width: 833px) {
  .hero-product-image {
    max-height: 40%;
  }
}
</style>
