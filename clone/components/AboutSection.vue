<script setup lang="ts">
import { content } from '~/content'

const { about } = content
</script>

<template>
  <section class="section bg-off-black home-about" data-section-theme="off-black">
    <div class="about-inner">
      <p class="about-heading reveal">{{ about.heading }}</p>
      <h2 class="about-title reveal">{{ about.title }}</h2>

      <p class="about-intro reveal">{{ about.intro }}</p>
      <p class="about-lead reveal">{{ about.lead }}</p>

      <div
        v-for="(section, i) in about.sections"
        :key="i"
        class="about-chapter reveal"
      >
        <h3 class="about-chapter-title">{{ section.title }}</h3>
        <p
          v-for="(para, j) in section.paragraphs"
          :key="j"
          class="about-chapter-copy"
        >{{ para }}</p>
      </div>

      <p class="about-closing reveal">{{ about.closing }}</p>
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
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-offWhite);
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 3.2rem;
}

@media only screen and (min-width: 834px) {
  .about-title { font-size: 4.2rem; }
}

.about-intro {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 2.4rem;
  color: var(--color-offWhite);
  border-right: 3px solid var(--color-blue);
  padding-right: 1.8rem;
}

@media only screen and (min-width: 834px) {
  .about-intro { font-size: 2.1rem; }
}

.about-lead {
  font-size: 1.5rem;
  font-weight: 350;
  line-height: 1.8;
  margin-bottom: 5rem;
  opacity: 0.8;
}

@media only screen and (min-width: 834px) {
  .about-lead {
    font-size: 1.7rem;
  }
}

.about-chapter {
  margin-bottom: 4rem;
}

.about-chapter-title {
  font-family: "Heebo", system-ui, sans-serif;
  color: var(--color-blue);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0 0 1.6rem;
}

@media only screen and (min-width: 834px) {
  .about-chapter-title { font-size: 2.4rem; }
}

.about-chapter-copy {
  font-size: 1.5rem;
  font-weight: 350;
  line-height: 1.8;
  margin: 0 0 1.6rem;
  opacity: 0.8;
  color: var(--color-offWhite);
}

.about-chapter-copy:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 834px) {
  .about-chapter-copy {
    font-size: 1.7rem;
  }
}

.about-closing {
  border-top: 0.5px solid rgba(255, 255, 255, 0.15);
  color: var(--color-offWhite);
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.4;
  padding-top: 3rem;
  margin-top: 3rem;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .about-closing { font-size: 2.4rem; }
}
</style>
