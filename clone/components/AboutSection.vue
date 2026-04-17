<script setup lang="ts">
import { content } from '~/content'

const { about } = content
</script>

<template>
  <section class="section bg-off-black home-about" data-section-theme="off-black">
    <div class="about-inner">
      <p class="about-heading reveal">{{ about.heading }}</p>
      <h2 class="about-title reveal">{{ about.title }}</h2>
      <p class="about-description reveal">{{ about.description }}</p>

      <h3 class="about-why reveal">{{ about.whyTitle }}</h3>

      <div class="about-features">
        <div v-for="(feature, i) in about.features" :key="i" class="about-feature reveal">
          <h4 class="feature-title">{{ feature.title }}</h4>
          <p class="feature-text">{{ feature.text }}</p>
        </div>
      </div>

      <p class="about-tagline reveal">{{ about.tagline }}</p>
    </div>
  </section>
</template>

<style scoped>
.home-about {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
  direction: rtl;
  padding: 20.513vw 0;
}

@media only screen and (min-width: 834px) {
  .home-about { padding: 9.028vw 0; }
}

.about-inner {
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 var(--grid-outerGutter);
}

.about-heading {
  color: var(--color-offWhite);
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 1.6rem;
  opacity: 0.5;
}

.about-title {
  color: var(--color-offWhite);
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 3.2rem;
}

@media only screen and (min-width: 834px) {
  .about-title { font-size: 4.2rem; }
}

.about-description {
  font-size: 1.6rem;
  font-weight: 350;
  line-height: 1.8;
  margin-bottom: 5.6rem;
  max-width: 60rem;
  opacity: 0.7;
}

@media only screen and (min-width: 834px) {
  .about-description { font-size: 1.8rem; }
}

.about-why {
  color: var(--color-blue);
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 3.2rem;
}

@media only screen and (min-width: 834px) {
  .about-why { font-size: 2.8rem; }
}

.about-features {
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  margin-bottom: 5.6rem;
}

@media only screen and (min-width: 834px) {
  .about-features {
    gap: var(--grid-gutter);
    grid-template-columns: repeat(3, 1fr);
  }
}

.about-feature {
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 2.8rem 2.4rem;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.about-feature:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.feature-title {
  color: var(--color-offWhite);
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 1.2rem;
}

.feature-text {
  color: var(--color-offWhite);
  font-size: 1.4rem;
  font-weight: 350;
  line-height: 1.7;
  opacity: 0.6;
}

.about-tagline {
  border-top: 0.5px solid rgba(255, 255, 255, 0.1);
  color: var(--color-offWhite);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.4;
  opacity: 0.85;
  padding-top: 2rem;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .about-tagline { font-size: 2.2rem; }
}
</style>
