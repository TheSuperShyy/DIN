<script setup lang="ts">
import { content } from '~/content'

const { about } = content
</script>

<template>
  <section class="section bg-off-black home-about" data-section-theme="off-black">
    <div class="container">
      <!-- Item A: Our Progress -->
      <div class="home-about-item">
        <h2 class="about-label">{{ about.progress.label }}</h2>

        <div class="about-head">
          <h3 class="about-subtitle">{{ about.progress.subtitle }}</h3>
          <NuxtLink :to="about.progress.linkHref" class="arrow-link about-link">
            <span class="arrow-oval">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z" fill="currentColor"/>
              </svg>
            </span>
            <span>{{ about.progress.linkLabel }}</span>
          </NuxtLink>
        </div>

        <div class="about-copy">
          <h3>{{ about.progress.heading }}</h3>
          <p v-for="(para, i) in about.progress.paragraphs" :key="i">{{ para }}</p>
        </div>

        <p class="about-sub-copy">
          <span>*</span> {{ about.progress.subCopy.replace(/^\*\s*/, '') }}
        </p>

        <div class="about-line" />
      </div>

      <!-- Item B: Our Aim -->
      <div class="home-about-item">
        <h2 class="about-label">{{ about.aim.label }}</h2>

        <div class="about-head">
          <h3 class="about-subtitle">{{ about.aim.subtitle }}</h3>
          <NuxtLink :to="about.aim.linkHref" class="arrow-link about-link">
            <span class="arrow-oval">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z" fill="currentColor"/>
              </svg>
            </span>
            <span>{{ about.aim.linkLabel }}</span>
          </NuxtLink>
        </div>

        <div class="about-copy">
          <h3>{{ about.aim.heading }}</h3>
          <p v-for="(para, i) in about.aim.paragraphs" :key="i">{{ para }}</p>
        </div>

        <p class="about-sub-copy">
          <span>*</span> {{ about.aim.subCopy.replace(/^\*\s*/, '') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-about {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
  padding: 20.513vw 0;
}

@media only screen and (min-width: 834px) {
  .home-about { padding: 9.028vw 0; }
}

/* Each item occupies full width of inner grid */
.home-about-item {
  column-gap: var(--grid-gutter);
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(4, 1fr);
  opacity: 1;
  row-gap: 8rem;
}

@media only screen and (min-width: 834px) {
  .home-about-item {
    grid-column: 2 / 6;
    row-gap: 3.194vw;
  }
}

.home-about-item:not(:first-child) {
  padding-top: 10.256vw;
}

@media only screen and (min-width: 834px) {
  .home-about-item:not(:first-child) { padding-top: 4.861vw; }
}

/* Label ("Our Progress") */
.about-label {
  font-size: 1.4rem;
  font-weight: 350;
  grid-column: 1 / -1;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offWhite);
}

@media only screen and (min-width: 834px) {
  .about-label { grid-column: 1 / 3; }
}

/* Head (subtitle + link) */
.about-head {
  grid-column: 1 / 6;
  display: flex;
  flex-direction: column;
  row-gap: 0;
}

@media only screen and (min-width: 834px) {
  .about-head { grid-column: 1 / 2; }
}

.about-subtitle {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  max-width: 19rem;
  color: var(--color-offWhite);
}

.about-link {
  color: var(--color-blue);
  margin-top: 2.5rem;
}

@media only screen and (min-width: 834px) {
  .about-link { margin-top: 2.1rem; }
}

/* Rich copy */
.about-copy {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 350;
  grid-column: 1 / -1;
  letter-spacing: -0.02em;
  line-height: 1.2;
  max-width: 35rem;
  row-gap: 2rem;
}

@media only screen and (min-width: 834px) {
  .about-copy {
    grid-column: 2 / 4;
    max-width: 19rem;
  }
}

.about-copy h3 {
  font-size: 1.4rem;
  font-weight: 350;
  color: var(--color-offWhite);
}

.about-copy p {
  opacity: 0.5;
  color: var(--color-offWhite);
}

/* Sub copy (muted note) */
.about-sub-copy {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 350;
  grid-column: 1 / 4;
  letter-spacing: -0.02em;
  line-height: 1.2;
  max-width: 22rem;
  opacity: 0.4;
  row-gap: 2rem;
  color: var(--color-offWhite);
}

@media only screen and (min-width: 834px) {
  .about-sub-copy {
    grid-column: 4 / 5;
    max-width: 17rem;
  }
}

/* Hairline divider between items */
.about-line {
  background-color: rgba(255, 255, 255, 0.1);
  grid-column: 1 / -1;
  height: 0.5px;
  transform-origin: left center;
}

@media only screen and (min-width: 834px) {
  .about-line { margin-top: 4.861vw; }
}
</style>
