<script setup lang="ts">
import { content } from '~/content'

const { textBlocks } = content
</script>

<template>
  <section class="section bg-off-white text-block blue" data-section-theme="off-white">
    <div class="container text-block-container">
      <div
        v-for="(block, i) in textBlocks"
        :key="block.number"
        class="tb-item"
        :class="`item-${i}`"
      >
        <div class="tb-content">
          <div class="tb-number">{{ block.number }}</div>
          <div class="tb-inner">
            <h2 class="tb-title">{{ block.title }}</h2>
            <p class="tb-copy">{{ block.copy }}</p>
            <NuxtLink :to="block.linkHref" class="arrow-link tb-link">
              <span class="arrow-oval">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z" fill="currentColor"/>
                </svg>
              </span>
              <span>{{ block.linkLabel }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-block {
  background-color: var(--color-offWhite);
  padding: 23.077vw 0;
}

@media only screen and (min-width: 834px) {
  .text-block { padding: 10vw 0; }
}

.text-block-container {
  row-gap: 9rem;
}

@media only screen and (min-width: 834px) {
  .text-block-container { row-gap: 0; }
}

/* Items */
.tb-item {
  grid-column: 1 / -1;
}

@media (max-width: 833px) {
  .tb-item:not(:last-child) {
    border-bottom: 0.5px solid rgba(15, 16, 18, 0.2);
    padding-bottom: 9rem;
  }
}

@media only screen and (min-width: 834px) {
  .item-0 { grid-column: 2 / 4; }
  .item-1 { grid-column: 4 / 6; }
}

.tb-content {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
}

@media only screen and (min-width: 834px) {
  .tb-content {
    column-gap: 3.8rem;
    flex-direction: row;
    row-gap: 0;
  }
}

/* Number */
.tb-number {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 auto;
  color: var(--color-blue);
}

@media only screen and (min-width: 834px) {
  .tb-number { margin: 0.4rem 0 0; }
}

.tb-inner {
  align-items: center;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 834px) {
  .tb-inner { align-items: flex-start; }
}

/* Title */
.tb-title {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offBlack);
}

/* Copy */
.tb-copy {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 3.6rem;
  max-width: 28rem;
  opacity: 0.5;
  text-align: center;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .tb-copy {
    margin-top: 2.2rem;
    max-width: 19rem;
    text-align: left;
  }
}

/* Link */
.tb-link {
  color: var(--color-blue);
  margin-top: 4rem;
}

@media only screen and (min-width: 834px) {
  .tb-link { margin-top: 3.6rem; }
}
</style>
