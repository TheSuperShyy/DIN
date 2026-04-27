<script setup lang="ts">
import { content } from '~/content'

useHead({ title: 'יונים / בעלי כנף — טל שולמרק' })
useReveal()

const { birds } = content
</script>

<template>
  <div class="birds-page">
    <!-- Hero -->
    <section class="section bg-off-black birds-hero" data-section-theme="off-black">
      <div class="birds-wrap birds-hero-inner">
        <p class="birds-eyebrow reveal">{{ birds.navLabel }}</p>
        <h1 class="birds-title reveal">{{ birds.title }}</h1>
      </div>
    </section>

    <!-- Two numbered approach cards -->
    <section class="section bg-off-black birds-cards" data-section-theme="off-black">
      <div class="birds-wrap birds-cards-inner">
        <ol class="birds-list">
          <li
            v-for="(item, i) in birds.sections"
            :key="i"
            class="birds-card reveal"
            :data-delay="(i + 1) + ''"
          >
            <div class="birds-number-wrap">
              <span class="birds-number">{{ item.number }}</span>
              <span v-if="i < birds.sections.length - 1" class="birds-connector" aria-hidden="true" />
            </div>
            <div class="birds-body">
              <h2 class="birds-card-title">{{ item.title }}</h2>
              <p class="birds-card-copy">{{ item.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Owner's word -->
    <section class="section bg-off-black birds-owner-section" data-section-theme="off-black">
      <div class="birds-wrap birds-owner-inner reveal">
        <figure class="birds-owner-card">
          <span class="birds-owner-quote-mark" aria-hidden="true">״</span>
          <blockquote class="birds-owner-quote">{{ birds.ownersWord.quote }}</blockquote>
          <figcaption class="birds-owner-label">— {{ birds.ownersWord.label }}</figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<style scoped>
.birds-page {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
  direction: rtl;
}

/* Simple max-width wrapper — sidesteps the global .container 5-col grid
   that would otherwise squeeze the page content into one narrow column. */
.birds-wrap {
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding-left: var(--grid-outerGutter);
  padding-right: var(--grid-outerGutter);
}

/* ── Hero ── */
.birds-hero {
  padding: 22vw 0 8vw;
}

@media only screen and (min-width: 834px) {
  .birds-hero {
    padding: 12vw 0 5vw;
  }
}

.birds-hero-inner {
  text-align: center;
}

.birds-eyebrow {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-blue);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0;
  opacity: 0.85;
  margin: 0 0 1.6rem;
}

.birds-title {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-offWhite);
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0 auto;
  max-width: 90rem;
}

@media only screen and (min-width: 834px) {
  .birds-title {
    font-size: 4.6rem;
  }
}

/* ── Numbered cards ── */
.birds-cards {
  padding: 4vw 0 8vw;
}

@media only screen and (min-width: 834px) {
  .birds-cards {
    padding: 3vw 0 8vw;
  }
}

.birds-cards-inner {
  display: flex;
  justify-content: center;
}

.birds-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 88rem;
  width: 100%;
}

@media only screen and (min-width: 834px) {
  .birds-list {
    row-gap: 2.4rem;
  }
}

.birds-card {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: flex-start;
  padding: 2.4rem 2.2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-right: 3px solid var(--color-blue);
  border-radius: 1.2rem;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  position: relative;
}

.birds-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  border-right-color: var(--color-blue);
  transform: translateX(-0.4rem);
}

@media only screen and (min-width: 834px) {
  .birds-card {
    padding: 3rem 3.2rem;
    column-gap: 3rem;
  }
}

.birds-number-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.birds-number {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--color-blue);
  background: rgba(0, 113, 227, 0.12);
  border: 1px solid rgba(0, 113, 227, 0.35);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}

@media only screen and (min-width: 834px) {
  .birds-number {
    font-size: 3.6rem;
    width: 7.2rem;
    height: 7.2rem;
  }
}

.birds-connector {
  position: absolute;
  top: 6.2rem;
  width: 1px;
  height: calc(100% + 2rem);
  background: linear-gradient(180deg, rgba(0, 113, 227, 0.5), rgba(0, 113, 227, 0));
}

@media only screen and (min-width: 834px) {
  .birds-connector {
    top: 7.4rem;
    height: calc(100% + 2.4rem);
  }
}

.birds-body {
  min-width: 0;
}

.birds-card-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--color-offWhite);
  margin: 0 0 1.2rem;
}

@media only screen and (min-width: 834px) {
  .birds-card-title {
    font-size: 2.6rem;
  }
}

.birds-card-copy {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-offWhite);
  opacity: 0.8;
  margin: 0;
}

@media only screen and (min-width: 834px) {
  .birds-card-copy {
    font-size: 1.7rem;
  }
}

/* ── Owner's word ── */
.birds-owner-section {
  /* Tighter top padding so it reads as the natural conclusion of the
     two cards above, not a separate floating section. */
  padding: 2vw 0 10vw;
}

@media only screen and (min-width: 834px) {
  .birds-owner-section {
    padding: 1vw 0 7vw;
  }
}

.birds-owner-inner {
  max-width: 78rem;
  margin: 0 auto;
}

.birds-owner-card {
  position: relative;
  margin: 0;
  padding: 4rem 3rem 3rem;
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-right: 3px solid var(--color-blue);
  border-radius: 1.6rem;
  text-align: center;
  overflow: hidden;
}

@media only screen and (min-width: 834px) {
  .birds-owner-card {
    padding: 5rem 5rem 4rem;
  }
}

.birds-owner-quote-mark {
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 9rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color-blue);
  opacity: 0.18;
  pointer-events: none;
  user-select: none;
}

.birds-owner-quote {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-offWhite);
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0 0 2rem;
  position: relative;
  z-index: 1;
}

@media only screen and (min-width: 834px) {
  .birds-owner-quote {
    font-size: 3.2rem;
  }
}

.birds-owner-label {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-offWhite);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  opacity: 0.6;
  margin: 0;
}
</style>
