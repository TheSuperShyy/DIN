<script setup lang="ts">
import { content } from '~/content'

const { company } = content
</script>

<template>
  <section class="section bg-off-black home-company-details" data-section-theme="off-black">
    <!-- Top: title + mission items -->
    <div class="top">
      <div class="container home-company-details-container">
        <div class="head reveal">
          <h3 class="cd-title">
            <span>{{ company.titleLine1 }}</span>
            <span class="title-blue">{{ company.titleLine2 }}</span>
          </h3>
        </div>

        <ul class="top-items">
          <li
            v-for="item in company.items"
            :key="item.number"
            class="top-item reveal"
          >
            <div class="item-head">
              <span class="item-head-number">{{ item.number }}</span>
              <span>{{ item.label }}</span>
            </div>
            <div class="item-head-title">
              {{ item.statement }}
              <div class="item-head-line" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom: data cells + abbreviations -->
    <div class="bottom">
      <div class="container home-company-details-container">
        <ul class="bottom-items reveal">
          <li
            v-for="cell in company.cells"
            :key="cell.label"
            class="bottom-item"
          >
            <div class="bottom-item-title">{{ cell.label }}</div>
            <div class="bottom-item-copy">
              <span>{{ cell.value }}</span>
            </div>
          </li>
        </ul>

        <div class="bottom-line" />

        <div class="bottom-services reveal">
          <div class="item-head">
            <span class="item-head-number">0.4</span>
            <span>{{ company.abbreviations.length ? 'How We Talk' : '' }}</span>
          </div>
          <div class="bottom-services-items">
            <div
              v-for="abbr in company.abbreviations"
              :key="abbr.label"
              class="bottom-services-item"
            >
              <div class="bracket-text">{{ abbr.label }}</div>
              <div class="bottom-services-item-name">{{ abbr.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-company-details {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
}

/* ── Top ── */
.top {
  background-color: rgba(29, 30, 32, 0.5);
  padding: 21.026vw 0;
}

@media only screen and (min-width: 834px) {
  .top { padding: 7.847vw 0; }
}

.home-company-details-container {
  /* inherits .container 5-col grid */
}

.head {
  grid-column: 1 / -1;
}

@media only screen and (min-width: 834px) {
  .head { grid-column: 3 / 5; }
}

.cd-title {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.cd-title span {
  display: block;
}

.title-blue {
  color: var(--color-blue);
}

/* Mission items list */
.top-items {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  list-style: none;
  margin-top: 7rem;
  row-gap: 5.7rem;
}

@media only screen and (min-width: 834px) {
  .top-items {
    grid-column: 2 / 6;
    margin-top: 8.2rem;
    row-gap: 4.2rem;
  }
}

.top-item {
  display: flex;
  flex-direction: column;
  row-gap: 5.2rem;
}

@media only screen and (min-width: 834px) {
  .top-item {
    column-gap: var(--grid-gutter);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 4.2rem;
  }
}

.item-head {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media only screen and (min-width: 834px) {
  .item-head { grid-column: 1 / 2; }
}

.item-head-number {
  display: block;
  margin-bottom: 0.5rem;
  opacity: 0.5;
}

.item-head-title {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding-bottom: 2.5rem;
  position: relative;
  color: var(--color-offWhite);
}

@media only screen and (min-width: 834px) {
  .item-head-title {
    grid-column: 2 / 5;
    padding-bottom: 2rem;
  }
}

.item-head-line {
  background-color: rgba(255, 255, 255, 0.1);
  bottom: 0;
  height: 0.5px;
  left: 0;
  position: absolute;
  transform-origin: left center;
  width: 100%;
}

/* ── Bottom ── */
.bottom {
  padding: 23.077vw 0 19.231vw;
}

@media only screen and (min-width: 834px) {
  .bottom { padding: 5.208vw 0 7.639vw; }
}

.bottom-items {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  list-style: none;
  margin-bottom: 8.5rem;
  row-gap: 4.5rem;
}

@media only screen and (min-width: 834px) {
  .bottom-items {
    column-gap: var(--grid-gutter);
    display: grid;
    grid-column: 3 / 6;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0;
  }
}

.bottom-item {
  display: flex;
  flex-direction: column;
}

.bottom-item::before {
  background-color: var(--color-blue);
  content: "";
  height: 1px;
  margin-bottom: 1rem;
  width: 0.72rem;
}

.bottom-item-title {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  opacity: 0.5;
}

.bottom-item-copy {
  font-size: 1.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 2rem;
  color: var(--color-offWhite);
}

.bottom-line {
  background-color: rgba(255, 255, 255, 0.2);
  grid-column: 1 / -1;
  height: 0.5px;
}

@media only screen and (min-width: 834px) {
  .bottom-line { grid-column: 2 / 6; }
}

/* Abbreviations row */
.bottom-services {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  padding-top: 5.6rem;
  row-gap: 5.2rem;
}

@media only screen and (min-width: 834px) {
  .bottom-services {
    column-gap: var(--grid-gutter);
    display: grid;
    grid-column: 2 / 6;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 4.2rem;
  }
}

.bottom-services-items {
  display: flex;
  justify-content: space-between;
}

@media only screen and (min-width: 834px) {
  .bottom-services-items {
    column-gap: 6rem;
    grid-column: 2 / 5;
    justify-content: flex-start;
  }
}

.bottom-services-item {
  width: 9rem;
}

@media only screen and (min-width: 834px) {
  .bottom-services-item { width: 7rem; }
}

/* Bracket text like [Pha¹] */
.bracket-text {
  align-items: center;
  color: var(--color-offWhite);
  display: inline-flex;
  column-gap: 0.5rem;
  font-size: 1.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  white-space: nowrap;
}

.bracket-text::before {
  content: "[";
  color: var(--color-blue);
}

.bracket-text::after {
  content: "]";
  color: var(--color-blue);
}

.bottom-services-item-name {
  font-size: 1.2rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 2.8rem;
  color: var(--color-offWhite);
  opacity: 0.7;
}
</style>
