<script setup lang="ts">
import { content } from '~/content'

const { evidence } = content
</script>

<template>
  <section class="section bg-blue home-master-plan" data-section-theme="blue">
    <div class="container home-master-plan-container">
      <div class="mp-content">
        <!-- Number -->
        <div class="mp-number">{{ evidence.number }}</div>

        <div class="mp-inner">
          <h2 class="mp-title">{{ evidence.title }}</h2>
          <p class="mp-copy">{{ evidence.copy }}</p>

          <!-- Down arrow link -->
          <NuxtLink :to="evidence.linkHref" class="arrow-link mp-link">
            <span class="arrow-oval arrow-oval-down">
              <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.92737 6.71384L2.92737 0.15979L3.76869 0.15979L3.76869 6.57215L5.576 4.76484L6.1709 5.35975L3.57464 7.956L3.27719 8.25346L2.97974 7.956L0.383476 5.35974L0.978378 4.76484L2.92737 6.71384Z" fill="currentColor"/>
              </svg>
            </span>
            <span>{{ evidence.linkLabel }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-master-plan {
  background-color: var(--color-blue);
  color: var(--color-offWhite);
  padding: 23.077vw 0;
}

@media only screen and (min-width: 834px) {
  .home-master-plan { padding: 8.125vw 0 9.722vw; }
}

.home-master-plan-container {
  /* inherits 5-col grid */
}

.mp-content {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
}

@media only screen and (min-width: 834px) {
  .mp-content {
    flex-direction: row;
    grid-column: 2 / 5;
  }
}

/* Number */
.mp-number {
  font-size: 1.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 auto 3rem;
  color: var(--color-offWhite);
}

@media only screen and (min-width: 834px) {
  .mp-number {
    margin: 0.5rem 0 0;
  }
}

.mp-inner {
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .mp-inner {
    margin-left: 6rem;
    text-align: left;
  }
}

.mp-title {
  font-size: 3.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offWhite);
}

.mp-copy {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 3.4rem auto 0;
  max-width: 20.6rem;
  opacity: 0.7;
  text-align: center;
  color: var(--color-offWhite);
}

@media only screen and (min-width: 834px) {
  .mp-copy {
    margin: 2.8rem 0 0;
    max-width: 16rem;
    text-align: left;
  }
}

/* Down arrow link */
.mp-link {
  color: var(--color-offWhite);
  column-gap: 0;
  flex-direction: column;
  margin-top: 8.6rem;
  row-gap: 2.5rem;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .mp-link {
    flex-direction: row;
    column-gap: 3.5rem;
    margin-top: 6.5rem;
    row-gap: 0;
    text-align: left;
  }
}

.arrow-oval-down {
  height: 3.35rem;
  width: 2.5rem;
  border: 1.2px solid currentColor;
  border-radius: 9.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@media only screen and (min-width: 834px) {
  .arrow-oval-down {
    height: 2.2rem;
    width: 1.4rem;
  }
}
</style>
