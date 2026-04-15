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

      <!-- Left content column -->
      <div class="content">
        <div class="content-inner">
          <!-- Brand wordmark -->
          <div class="brand-wordmark">{{ content.brand.name }}</div>

          <!-- Headline -->
          <h1 class="hero-title">{{ content.hero.headline }}</h1>

          <!-- Category pills -->
          <div class="category-wrapper">
            <span class="category-label">Explore</span>
            <div class="categories">
              <NuxtLink
                v-for="pill in content.hero.pills"
                :key="pill.label"
                :to="pill.href"
                class="pill pill-outline"
              >
                {{ pill.label }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <button class="scroll-indicator" type="button" aria-label="Scroll to next section">
          <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.92737 6.71384L2.92737 0.15979L3.76869 0.15979L3.76869 6.57215L5.576 4.76484L6.1709 5.35975L3.57464 7.956L3.27719 8.25346L2.97974 7.956L0.383476 5.35974L0.978378 4.76484L2.92737 6.71384Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Hero background gradient (replaces image) -->
    <div class="hero-image-wrapper" aria-hidden="true">
      <div class="hero-gradient" />
    </div>
  </header>
</template>

<style scoped>
.home-hero {
  background-color: #fdfdfd;
  overflow: hidden;
  position: relative;
  min-height: 100svh;
}

.home-hero::before {
  background: linear-gradient(0deg, #fdfdfe, rgba(253, 253, 254, 0));
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

/* ── Main content column ── */
.content {
  align-self: end;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  height: 70svh;
  justify-content: space-between;
}

@media only screen and (min-width: 834px) {
  .content {
    grid-column: 1 / 3;
    height: auto;
    padding-top: 6rem;
  }
}

.content-inner {
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .content-inner { text-align: left; }
}

/* ── Brand wordmark ── */
.brand-wordmark {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-offBlack);
  opacity: 0.5;
  margin: 0 auto;
}

@media only screen and (min-width: 834px) {
  .brand-wordmark { margin: 0; }
}

/* ── Hero title ── */
.hero-title {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 1.2rem auto 0;
  max-width: 22rem;
}

@media only screen and (min-width: 834px) {
  .hero-title { margin: 1.2rem 0 0; }
}

/* ── Category pills ── */
.category-wrapper {
  margin-top: 2.6rem;
}

@media only screen and (min-width: 834px) {
  .category-wrapper {
    align-items: center;
    column-gap: 0.6rem;
    display: flex;
  }
}

.category-label {
  display: none;
}

@media only screen and (min-width: 834px) {
  .category-label {
    color: var(--color-offBlack);
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 350;
    letter-spacing: -0.02em;
    line-height: 1.2;
    opacity: 0.5;
  }
}

.categories {
  column-gap: 0.3rem;
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 834px) {
  .categories { justify-content: flex-start; }
}

/* ── Scroll indicator ── */
.scroll-indicator {
  align-items: center;
  background-color: rgba(12, 13, 15, 0.05);
  border-radius: 3.4rem;
  color: var(--color-offBlack);
  display: flex;
  height: 5.1rem;
  justify-content: center;
  overflow: hidden;
  width: 2.4rem;
  animation: scroll-pulse 2.5s ease-in-out infinite;
}

@media only screen and (min-width: 834px) {
  .scroll-indicator {
    border-radius: 2.6rem;
    height: 4rem;
    margin-top: 7.2rem;
    width: 1.8rem;
  }
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* ── Hero background ── */
.hero-image-wrapper {
  height: 60%;
  left: 0;
  position: absolute;
  bottom: 0;
  top: unset;
  width: 100%;
  z-index: 0;
}

@media only screen and (min-width: 834px) {
  .hero-image-wrapper {
    height: 100%;
    top: 0;
    bottom: unset;
  }
}

.hero-gradient {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at 65% 50%, rgba(15, 16, 18, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse at 80% 20%, rgba(15, 16, 18, 0.08) 0%, transparent 60%);
}
</style>
