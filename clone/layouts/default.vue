<template>
  <div class="layout">
    <a class="skip-to-content" href="#main-content">דלג לתוכן הראשי</a>
    <div class="layout-content">
      <SiteNav />
      <main id="main-content" class="layout-main">
        <slot />
      </main>
      <SiteFooter />
    </div>
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
