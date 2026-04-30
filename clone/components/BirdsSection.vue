<script setup lang="ts">
import { content } from '~/content'

const { birds } = content
</script>

<template>
  <section class="section bg-off-black birds-section" data-section-theme="off-black">
    <!-- Header -->
    <div class="birds-wrap birds-header reveal">
      <p class="birds-eyebrow">{{ birds.navLabel }}</p>
      <h2 class="birds-title">{{ birds.title }}</h2>
    </div>

    <!-- Two numbered approach cards -->
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
            <h3 class="birds-card-title">{{ item.title }}</h3>
            <p class="birds-card-copy" style="white-space: pre-line">{{ item.body }}</p>
          </div>
        </li>
      </ol>
    </div>

    <!-- Owner's word -->
    <div class="birds-wrap birds-owner-inner reveal">
      <figure class="birds-owner-card">
        <span class="birds-owner-quote-mark" aria-hidden="true">״</span>
        <blockquote class="birds-owner-quote">{{ birds.ownersWord.quote }}</blockquote>
        <figcaption class="birds-owner-label">— {{ birds.ownersWord.label }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.birds-section {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
  direction: rtl;
  padding: 12vw 0 8vw;
}

@media only screen and (min-width: 834px) {
  .birds-section {
    padding: 6vw 0 5vw;
  }
}

.birds-wrap {
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding-left: var(--grid-outerGutter);
  padding-right: var(--grid-outerGutter);
}

/* Header */
.birds-header {
  text-align: center;
  margin-bottom: 4vw;
}

.birds-eyebrow {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-blue);
  font-size: 1.4rem;
  font-weight: 500;
  opacity: 0.9;
  margin: 0 0 1.6rem;
}

.birds-title {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-offWhite);
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.3;
  margin: 0 auto;
  max-width: 90rem;
  /* Prevent any single token from forcing horizontal overflow on narrow
     viewports (the em-dash separator can otherwise stretch a line wider
     than the device width). */
  overflow-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}

@media only screen and (min-width: 834px) {
  .birds-title {
    font-size: 4rem;
  }
}

/* Cards */
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

.birds-body { min-width: 0; }

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
    font-size: 2.4rem;
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
    font-size: 1.6rem;
  }
}

/* Owner's word */
.birds-owner-inner {
  max-width: 78rem;
  margin: 4vw auto 0;
}

@media only screen and (min-width: 834px) {
  .birds-owner-inner {
    margin-top: 3vw;
  }
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
    font-size: 3rem;
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
