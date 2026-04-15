<script setup lang="ts">
import { content } from '~/content'

const { approach } = content
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

      <!-- Big display title -->
      <div class="title-wrapper reveal">
        <div class="title-inner">
          <h2 class="products-title">{{ approach.headline }}</h2>
        </div>
        <!-- Floating product placeholder (replaces actual image) -->
        <div class="product-placeholder" aria-hidden="true">
          <div class="product-placeholder-inner" />
        </div>
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

/* ── Title wrapper ── */
.title-wrapper {
  display: flex;
  grid-column: 1 / -1;
  justify-content: center;
  margin-top: 20vw;
  position: relative;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .title-wrapper {
    grid-column: 1 / 6;
    margin-top: 10.417vw;
  }
}

.title-inner {
  max-width: 84.615vw;
}

@media only screen and (min-width: 834px) {
  .title-inner { max-width: 55.556vw; }
}

.products-title {
  color: var(--color-blue);
  font-size: clamp(8rem, 9.722vw, 9.722vw);
  font-weight: 300;
  letter-spacing: 0.008em;
  line-height: 0.9;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .products-title {
    line-height: 1.2;
    max-width: 56.111vw;
  }
}

/* Product placeholder */
.product-placeholder {
  height: 51.282vw;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 51.282vw;
  z-index: 1;
  pointer-events: none;
  opacity: 0.05;
}

@media only screen and (min-width: 834px) {
  .product-placeholder {
    height: 18.056vw;
    width: 18.056vw;
  }
}

.product-placeholder-inner {
  background: radial-gradient(ellipse, var(--color-offBlack) 0%, transparent 70%);
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

/* ── Body copy ── */
.products-content {
  grid-column: 1 / -1;
  margin: 60vw auto 0;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .products-content {
    grid-column: 2 / 4;
    margin: 11.806vw 0 0;
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
