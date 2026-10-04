<script setup lang="ts">
import type { NuxtError } from '#app'
import { content } from '~/content'

// Replaces Nuxt's built-in English error page, whose
// "<status> - <message> | Nuxt" title must never reach search results.
const props = defineProps<{ error: NuxtError }>()

const { errorPage } = content
const copy = props.error?.statusCode === 404 ? errorPage.notFound : errorPage.generic

useHead({ title: copy.title })

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="error-page">
    <img class="error-logo" src="/TAL-logov2.svg" :alt="errorPage.logoAlt">
    <h1 class="error-heading">{{ copy.heading }}</h1>
    <p class="error-body">{{ copy.body }}</p>
    <button type="button" class="error-cta" @click="goHome">{{ errorPage.homeCta }}</button>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--grid-outerGutter);
  background: var(--color-offWhite);
  color: var(--color-offBlack);
  text-align: center;
}

.error-logo {
  width: var(--space-24);
  height: auto;
  margin-bottom: var(--space-4);
}

.error-heading {
  font-size: var(--text-4xl);
}

.error-body {
  font-size: var(--text-lg);
  opacity: 0.8;
}

.error-cta {
  margin-top: var(--space-4);
  padding: var(--space-3) var(--space-8);
  border: none;
  border-radius: var(--radius-pill);
  background: var(--color-blue);
  color: var(--color-white);
  font: inherit;
  font-size: var(--text-base);
  font-weight: 500;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: opacity 0.25s ease;
}

.error-cta:hover {
  opacity: 0.9;
}

.error-cta:focus-visible {
  outline: 2px solid var(--color-offBlack);
  outline-offset: 3px;
}
</style>
