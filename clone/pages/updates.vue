<script setup lang="ts">
useHead({ title: 'Updates — DIN' })
useReveal()
</script>

<template>
  <div class="inner-page">
    <div class="container inner-hero">
      <span class="section-label">04 / Updates</span>
      <h1 class="inner-headline">Updates</h1>
      <p class="inner-sub">Research notes, field findings, and dispatches from the DIN lab.</p>
    </div>

    <div class="container inner-body reveal">
      <p class="placeholder-text">Full updates page coming soon.</p>
    </div>
  </div>
</template>

<style scoped>
.inner-page { padding-top: var(--header-height); }
.inner-hero { padding-block: var(--space-24); display: flex; flex-direction: column; gap: var(--space-4); }
.inner-headline { font-size: clamp(var(--text-5xl), 8vw, var(--text-7xl)); font-weight: 300; letter-spacing: -0.03em; color: var(--color-text); }
.inner-sub { font-size: var(--text-xl); color: var(--color-text-muted); font-weight: 300; max-width: 50ch; }
.inner-body { padding-bottom: var(--space-24); }
.placeholder-text { color: var(--color-text-muted); font-size: var(--text-lg); }
</style>
