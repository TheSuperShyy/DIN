<script setup lang="ts">
import { content } from '~/content'

const { company } = content
</script>

<template>
  <section class="section bg-off-black home-process" data-section-theme="off-black">
    <div class="process-wrap">
      <div class="container home-process-container">
        <div class="head reveal">
          <h3 class="cd-title process-title"><span class="title-blue">{{ company.processHeader }}</span></h3>
        </div>

        <ol class="process-list">
          <li
            v-for="(step, i) in company.steps"
            :key="i"
            class="process-card reveal"
            :data-delay="(i + 1) + ''"
          >
            <div class="process-number-wrap">
              <span class="process-number">{{ step.number }}</span>
              <span v-if="i < company.steps.length - 1" class="process-connector" aria-hidden="true" />
            </div>
            <div class="process-body">
              <h4 class="process-step-title">{{ step.title }}</h4>
              <p class="process-step-copy">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-process {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
}

.process-wrap {
  background: linear-gradient(180deg, rgba(29, 30, 32, 0.5) 0%, rgba(15, 16, 18, 0.9) 100%);
  padding: 23.077vw 0 19.231vw;
}

@media only screen and (min-width: 834px) {
  .process-wrap { padding: 6vw 0 9vw; }
}

.head {
  grid-column: 1 / -1;
  text-align: center;
  direction: rtl;
}

.cd-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media only screen and (min-width: 834px) {
  .cd-title {
    font-size: 4.2rem;
  }
}

.cd-title span {
  display: inline;
}

.title-blue {
  color: var(--color-blue);
}

.process-title {
  margin-bottom: 3rem;
  font-size: 3.2rem;
}

@media only screen and (min-width: 834px) {
  .process-title {
    font-size: 4.8rem;
    margin-bottom: 5rem;
  }
}

.process-list {
  list-style: none;
  margin: 4rem auto 0;
  padding: 0;
  grid-column: 1 / -1;
  direction: rtl;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 88rem;
}

@media only screen and (min-width: 834px) {
  .process-list {
    margin-top: 5rem;
    row-gap: 2.4rem;
  }
}

.process-card {
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

.process-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  border-right-color: var(--color-blue);
  transform: translateX(-0.4rem);
}

@media only screen and (min-width: 834px) {
  .process-card {
    padding: 3rem 3.2rem;
    column-gap: 3rem;
  }
}

.process-number-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.process-number {
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
  .process-number {
    font-size: 3.6rem;
    width: 7.2rem;
    height: 7.2rem;
  }
}

.process-connector {
  position: absolute;
  top: 6.2rem;
  width: 1px;
  height: calc(100% + 2rem);
  background: linear-gradient(180deg, rgba(0, 113, 227, 0.5), rgba(0, 113, 227, 0));
}

@media only screen and (min-width: 834px) {
  .process-connector {
    top: 7.4rem;
    height: calc(100% + 2.4rem);
  }
}

.process-body {
  min-width: 0;
}

.process-step-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offWhite);
  margin: 0 0 1rem;
}

@media only screen and (min-width: 834px) {
  .process-step-title {
    font-size: 2.4rem;
  }
}

.process-step-copy {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-offWhite);
  opacity: 0.75;
  margin: 0;
}

@media only screen and (min-width: 834px) {
  .process-step-copy {
    font-size: 1.6rem;
  }
}

@media only screen and (max-width: 833px) {
  .head {
    padding: 0 2rem;
    position: relative;
  }

  .head .cd-title {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    display: inline-block;
    padding-bottom: 1.4rem;
    position: relative;
  }

  .head .cd-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 4rem;
    height: 2px;
    background: var(--color-blue);
    border-radius: 2px;
  }

  .process-list {
    padding: 0 2rem;
  }

  .process-card {
    grid-template-columns: auto 1fr;
    column-gap: 1.6rem;
    padding: 2rem 1.6rem;
  }

  .process-number {
    width: 5rem;
    height: 5rem;
    font-size: 2.2rem;
  }

  .process-connector {
    top: 5.2rem;
  }
}
</style>
