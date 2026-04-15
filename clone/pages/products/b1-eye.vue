<script setup lang="ts">
useHead({ title: 'D¹ Form — DIN' })
useReveal()
</script>

<template>
  <div class="inner-page">
    <div class="container inner-hero">
      <span class="section-label">Wearable / 02</span>
      <h1 class="inner-headline">D¹ Form</h1>
      <p class="inner-sub">Interface design refined to its essential form.</p>
    </div>

    <div class="container inner-body reveal">
      <div class="inner-placeholder">
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="var(--color-neutral-100)"/>
          <ellipse cx="200" cy="150" rx="120" ry="80" fill="var(--color-neutral-200)"/>
          <ellipse cx="200" cy="150" rx="80" ry="50" fill="var(--color-neutral-500)" opacity="0.2"/>
          <circle cx="200" cy="150" r="20" fill="var(--color-secondary)" opacity="0.4"/>
          <circle cx="200" cy="150" r="8" fill="var(--color-secondary)"/>
          <text x="200" y="260" text-anchor="middle" font-size="12" fill="var(--color-text-muted)" font-family="DM Sans">D¹ Form</text>
        </svg>
      </div>

      <div class="inner-content">
        <h2>Visual intelligence, refined</h2>
        <p>D¹ Form is DIN's optical interface device — a platform for augmented visual computing that prioritises clarity, comfort, and invisibility in equal measure.</p>
        <p>Full product detail coming soon.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inner-page { padding-top: var(--header-height); }
.inner-hero { padding-block: var(--space-24); display: flex; flex-direction: column; gap: var(--space-4); }
.inner-headline { font-size: clamp(var(--text-5xl), 8vw, var(--text-7xl)); font-weight: 300; letter-spacing: -0.03em; color: var(--color-text); }
.inner-sub { font-size: var(--text-xl); color: var(--color-text-muted); font-weight: 300; max-width: 50ch; }
.inner-body { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); padding-bottom: var(--space-24); align-items: center; }
.inner-placeholder svg { width: 100%; border-radius: var(--radius-lg); }
.inner-content { display: flex; flex-direction: column; gap: var(--space-6); }
.inner-content h2 { font-size: var(--text-3xl); font-weight: 300; }
.inner-content p { color: var(--color-text-muted); line-height: 1.7; }
@media (max-width: 768px) { .inner-body { grid-template-columns: 1fr; } }
</style>
