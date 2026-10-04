<script setup lang="ts">
import { content } from '~/content'

// The site chrome lives here instead of layouts/default.vue on purpose: Nuxt
// loads layouts as separate async chunks *during* hydration, and if that chunk
// fails to load the whole page is swapped for Nuxt's error screen (see
// plugins/keep-ssr-on-boot-failure.client.ts). Here it ships in the entry bundle.
const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

useHead({
  // Fallback title for pages without their own (the homepage). Set here so it's
  // restored on client-side navigation back from a page that overrides it.
  title: content.seo.siteTitle,
  // Self-referencing canonical on the www host so Google consolidates the
  // apex (shulmarkcontrol.com) and www duplicates onto one URL per page.
  link: [{ rel: 'canonical', href: computed(() => siteUrl + route.path) }]
})
</script>

<template>
  <div class="layout">
    <a class="skip-to-content" href="#main-content">דלג לתוכן הראשי</a>
    <div class="layout-content">
      <SiteNav />
      <main id="main-content" class="layout-main">
        <NuxtPage />
      </main>
      <SiteFooter />
    </div>
    <FloatingPortal />
    <FloatingWhatsApp />
    <AccessibilityWidget />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-main {
  flex: 1;
}

/* Skip-to-content link — invisible until focused via keyboard */
.skip-to-content {
  position: fixed;
  top: -100px;
  right: 1rem;
  z-index: 200;
  background: var(--color-blue);
  color: #fff;
  padding: 1rem 1.6rem;
  border-radius: 0.6rem;
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  transition: top 0.2s ease;
}

.skip-to-content:focus {
  top: 1rem;
  outline: 2px solid #fff;
  outline-offset: 2px;
}
</style>
