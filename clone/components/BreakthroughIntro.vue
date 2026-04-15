<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { content } from '~/content'

const { breakthrough } = content
const currentLine = ref(0)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentLine.value = (currentLine.value + 1) % breakthrough.rotatingLines.length
  }, 3000)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <section class="section bg-grey-light home-intro" data-section-theme="off-white">
    <div class="home-intro-container container">
      <!-- Left: label column (col 2 on desktop) -->
      <div class="head">
        <h2 class="intro-title">
          <span class="muted">{{ breakthrough.labelTop }}</span>
          <span>{{ breakthrough.labelBottom }}</span>
        </h2>
      </div>

      <!-- Right: copy column (cols 3–5 on desktop) -->
      <div class="intro-content">
        <p class="intro-copy">
          {{ breakthrough.copy }}
          <span class="copy-lines-wrapper">
            <span class="copy-line-slot">
              <Transition name="rotate-line" mode="out-in">
                <span :key="currentLine" class="rotating-line">
                  {{ breakthrough.rotatingLines[currentLine] }}
                </span>
              </Transition>
            </span>
          </span>
        </p>

        <NuxtLink :to="breakthrough.linkHref" class="arrow-link intro-link">
          <span class="arrow-oval">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z" fill="currentColor"/>
            </svg>
          </span>
          <span>{{ breakthrough.linkLabel }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-intro {
  background-color: var(--color-greyLight);
  padding: 23.077vw 0;
}

@media only screen and (min-width: 834px) {
  .home-intro { padding: 15.278vw 0; }
}

.home-intro-container {
  /* inherits .container 5-col grid */
}

/* Label column */
.head {
  grid-column: 1 / -1;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .head {
    grid-column: 2 / 3;
    text-align: left;
  }
}

.intro-title {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.intro-title span {
  display: block;
}

.intro-title .muted {
  opacity: 0.5;
}

/* Copy column */
.intro-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
}

@media only screen and (min-width: 834px) {
  .intro-content {
    align-items: flex-start;
    grid-column: 3 / 5;
  }
}

.intro-copy {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 17.949vw;
  text-align: center;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .intro-copy {
    margin-top: 0;
    max-width: 50rem;
    text-align: left;
  }
}

/* Rotating line */
.copy-lines-wrapper {
  display: flex;
  height: 3.5rem;
  position: relative;
  width: 100%;
}

.copy-line-slot {
  position: relative;
  width: 100%;
}

.rotating-line {
  color: var(--color-blue);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
}

.rotate-line-enter-active,
.rotate-line-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.rotate-line-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.rotate-line-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Arrow link */
.intro-link {
  color: var(--color-blue);
  margin-top: 16.667vw;
}

@media only screen and (min-width: 834px) {
  .intro-link { margin-top: 4.444vw; }
}
</style>
