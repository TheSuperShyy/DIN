<script setup lang="ts">
useHead({ title: 'D¹ Core — DIN' })
useReveal()
</script>

<template>
  <div class="inner-page">
    <div class="container inner-hero">
      <span class="section-label">Neural / 01</span>
      <h1 class="inner-headline">D¹ Core</h1>
      <p class="inner-sub">Neural computation at the edge of cognition.</p>
    </div>

    <div class="container inner-body reveal">
      <div class="inner-placeholder">
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="var(--color-neutral-800)"/>
          <circle cx="200" cy="140" r="60" stroke="var(--color-primary)" stroke-width="1" opacity="0.4"/>
          <circle cx="200" cy="140" r="40" stroke="var(--color-primary)" stroke-width="1" opacity="0.3"/>
          <circle cx="200" cy="140" r="20" fill="var(--color-primary)" opacity="0.6"/>
          <circle cx="200" cy="140" r="8" fill="var(--color-primary)"/>
          <line x1="200" y1="80" x2="200" y2="60" stroke="var(--color-accent)" stroke-width="1.5" opacity="0.5"/>
          <line x1="200" y1="200" x2="200" y2="220" stroke="var(--color-accent)" stroke-width="1.5" opacity="0.5"/>
          <line x1="140" y1="140" x2="120" y2="140" stroke="var(--color-accent)" stroke-width="1.5" opacity="0.5"/>
          <line x1="260" y1="140" x2="280" y2="140" stroke="var(--color-accent)" stroke-width="1.5" opacity="0.5"/>
          <text x="200" y="270" text-anchor="middle" font-size="12" fill="var(--color-neutral-500)" font-family="DM Sans">D¹ Core</text>
        </svg>
      </div>

      <div class="inner-content">
        <h2>Beyond conventional compute</h2>
        <p>D¹ Core is DIN's neural processing unit — a radical rethinking of where computation happens. Designed to sit at the boundary between silicon and synapse.</p>
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
