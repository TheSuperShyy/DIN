<script setup lang="ts">
useHead({ title: 'D¹ Sight — DIN' })
useReveal()
</script>

<template>
  <div class="inner-page">
    <div class="container inner-hero">
      <span class="section-label">Wearable / 01</span>
      <h1 class="inner-headline">D¹ Sight</h1>
      <p class="inner-sub">Precision sensing at the edge of human perception.</p>
    </div>

    <div class="container inner-body reveal">
      <div class="inner-placeholder">
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="var(--color-neutral-100)"/>
          <rect x="160" y="40" width="80" height="220" rx="40" fill="var(--color-neutral-200)"/>
          <rect x="180" y="70" width="40" height="140" rx="20" fill="var(--color-neutral-500)" opacity="0.25"/>
          <circle cx="200" cy="235" r="10" fill="var(--color-primary)" opacity="0.7"/>
          <text x="200" y="290" text-anchor="middle" font-size="12" fill="var(--color-text-muted)" font-family="DM Sans">D¹ Sight</text>
        </svg>
      </div>

      <div class="inner-content">
        <h2>Sensing at your scale</h2>
        <p>D¹ Sight is DIN's first-generation wearable sensing platform — built to capture physiological and environmental data with sub-millisecond precision. Designed to be worn, not noticed.</p>
        <p>Full product detail coming soon.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inner-page { padding-top: var(--header-height); }

.inner-hero {
  padding-block: var(--space-24);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.inner-headline {
  font-size: clamp(var(--text-5xl), 8vw, var(--text-7xl));
  font-weight: 300;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.inner-sub {
  font-size: var(--text-xl);
  color: var(--color-text-muted);
  font-weight: 300;
  max-width: 50ch;
}

.inner-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  padding-bottom: var(--space-24);
  align-items: center;
}

.inner-placeholder svg { width: 100%; border-radius: var(--radius-lg); }

.inner-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.inner-content h2 {
  font-size: var(--text-3xl);
  font-weight: 300;
}

.inner-content p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .inner-body { grid-template-columns: 1fr; }
}
</style>
