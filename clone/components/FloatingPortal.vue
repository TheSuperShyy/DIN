<script setup lang="ts">
import { content } from '~/content'
</script>

<template>
  <a
    class="portal-fab notranslate"
    translate="no"
    :href="content.nav.portal.href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="content.nav.portal.label"
  >
    <img class="portal-fab-icon" src="/logo-button.png" alt="" aria-hidden="true" />
    <span class="portal-fab-label">{{ content.nav.portal.label }}</span>
  </a>
</template>

<style scoped>
.portal-fab {
  position: fixed;
  /* Top-right, aligned with the navbar band (toolbar area) */
  top: 3rem;
  right: var(--grid-outerGutter);
  /* Sit above the nav menu (z-index 101) so it stays clickable */
  z-index: 103;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 4.6rem;
  padding: 0 0.6rem 0 1.8rem;
  border-radius: 5.4rem;
  background: var(--color-blue);
  color: #fff;
  box-shadow: 0 10px 30px rgba(0, 113, 227, 0.35), 0 4px 10px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.portal-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(0, 113, 227, 0.45), 0 6px 14px rgba(0, 0, 0, 0.15);
}

.portal-fab:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

.portal-fab-icon {
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 1rem;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
}

.portal-fab-label {
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

@media only screen and (max-width: 833px) {
  .portal-fab {
    /* Bottom, centered between the WhatsApp button (left) and the
       accessibility/utility icon (right) so it's easy to reach. */
    top: auto;
    bottom: 1.6rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    height: 4.4rem;
    padding: 0 0.5rem 0 1.5rem;
  }

  .portal-fab-icon {
    width: 3.2rem;
    height: 3.2rem;
  }

  .portal-fab-label {
    font-size: 1.4rem;
  }
}

@media print {
  .portal-fab {
    display: none;
  }
}
</style>
