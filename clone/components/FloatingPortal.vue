<script setup lang="ts">
import { content } from '~/content'
</script>

<template>
  <a
    class="portal-fab"
    :href="content.nav.portal.href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="content.nav.portal.label"
    :title="content.nav.portal.label"
  >
    <img class="portal-fab-icon" src="/logo-button.png" alt="" aria-hidden="true" />
  </a>
</template>

<style scoped>
.portal-fab {
  position: fixed;
  /* Stack directly above the WhatsApp FAB (bottom 2.4rem + 5.4rem + 1.2rem gap) */
  bottom: 9rem;
  left: 2.4rem;
  z-index: 50;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 113, 227, 0.35), 0 4px 10px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.portal-fab-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.portal-fab:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 16px 40px rgba(0, 113, 227, 0.45), 0 6px 14px rgba(0, 0, 0, 0.15);
}

.portal-fab:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

@media only screen and (max-width: 833px) {
  .portal-fab {
    /* WhatsApp on mobile: bottom 1.6rem + 4.8rem + 1rem gap */
    bottom: 7.4rem;
    left: 1.6rem;
    width: 4.8rem;
    height: 4.8rem;
  }
}

@media print {
  .portal-fab {
    display: none;
  }
}
</style>
