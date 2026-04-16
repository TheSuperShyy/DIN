<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { content } from '~/content'

const isMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const sectionTheme = ref('off-white')
const sideLogoTheme = ref('off-white')
const showSideLogo = ref(false)
const hideNav = ref(false)
const menuRef = ref<HTMLElement | null>(null)

function toggleDropdown(key: string) {
  activeDropdown.value = activeDropdown.value === key ? null : key
}

function closeAll() {
  activeDropdown.value = null
  isMenuOpen.value = false
}

function scrollToSection(href: string) {
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      closeAll()
    }
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function detectTheme() {
  const sections = document.querySelectorAll('[data-section-theme]')
  const scrollY = window.scrollY + 60
  let theme = 'off-white'
  sections.forEach((el) => {
    const rect = (el as HTMLElement).getBoundingClientRect()
    const top = rect.top + window.scrollY
    if (scrollY >= top) {
      theme = (el as HTMLElement).dataset.sectionTheme || 'off-white'
    }
  })
  sectionTheme.value = theme

  // Compute side logo theme based on viewport midpoint
  const midY = window.innerHeight / 2
  let sideTheme = 'off-white'
  sections.forEach((el) => {
    const rect = (el as HTMLElement).getBoundingClientRect()
    if (rect.top <= midY && rect.bottom > midY) {
      sideTheme = (el as HTMLElement).dataset.sectionTheme || 'off-white'
    }
  })
  sideLogoTheme.value = sideTheme

  // Show side logo only after hero and before footer
  const hero = document.querySelector('.home-hero')
  const footer = document.querySelector('.site-footer')
  if (hero && footer) {
    const heroBottom = hero.getBoundingClientRect().bottom
    const footerTop = footer.getBoundingClientRect().top
    showSideLogo.value = heroBottom < 0 && footerTop > window.innerHeight * 0.5
  } else {
    showSideLogo.value = false
  }

  // Hide nav when footer is in view
  const footerEl = document.querySelector('.site-footer')
  if (footerEl) {
    const footerTop = footerEl.getBoundingClientRect().top
    hideNav.value = footerTop < 100
  }
}

onMounted(() => {
  window.addEventListener('scroll', detectTheme, { passive: true })
  detectTheme()
  if (menuRef.value) {
    menuRef.value.addEventListener('animationend', () => {
      if (menuRef.value) menuRef.value.style.animation = 'none'
    }, { once: true })
  }
})
onUnmounted(() => window.removeEventListener('scroll', detectTheme))
</script>

<template>
  <!-- Side logo (fixed left-center, visible between hero and footer) -->
  <button
    class="side-logo"
    :class="[sideLogoTheme, { 'is-visible': showSideLogo }]"
    type="button"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <svg class="side-logo-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.8 8.4L20.5 3.5L15.6 10.2L24 12L15.6 13.8L20.5 20.5L13.8 15.6L12 24L10.2 15.6L3.5 20.5L8.4 13.8L0 12L8.4 10.2L3.5 3.5L10.2 8.4L12 0Z" fill="currentColor"/>
    </svg>
  </button>

  <div ref="menuRef" class="menu" :class="[sectionTheme, { open: isMenuOpen, 'sub-menu-open': activeDropdown, 'is-hidden': hideNav }]">
    <!-- Logo beside nav pill -->
    <NuxtLink to="/" class="nav-logo" aria-label="Go to homepage" @click="closeAll">
      <svg class="nav-logo-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L13.8 8.4L20.5 3.5L15.6 10.2L24 12L15.6 13.8L20.5 20.5L13.8 15.6L12 24L10.2 15.6L3.5 20.5L8.4 13.8L0 12L8.4 10.2L3.5 3.5L10.2 8.4L12 0Z" fill="currentColor"/>
      </svg>
    </NuxtLink>

    <!-- Desktop centered nav pill -->
    <nav class="nav">
      <div class="nav-inner">
        <ul class="nav-list">
          <li
            v-for="item in content.nav.items"
            :key="item.number"
            class="nav-list-item"
          >
            <button
              v-if="item.type === 'dropdown'"
              class="nav-list-item-link"
              type="button"
              @click="toggleDropdown(item.key!)"
            >
              {{ item.label }}
            </button>
            <a
              v-else-if="item.type === 'link'"
              :href="item.href"
              class="nav-list-item-link"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ item.label }}
            </a>
            <button v-else class="nav-list-item-link" type="button">
              {{ item.label }}
            </button>
          </li>
        </ul>

        <!-- Dropdown sub-panel (overlays the pill) -->
        <Transition name="sub-slide">
          <div
            v-if="activeDropdown"
            class="nav-sub-items"
          >
            <div class="nav-sub-items-inner">
              <div class="nav-sub-title">
                {{ content.nav.items.find(i => i.key === activeDropdown)?.label }}
                <button class="nav-sub-close" type="button" @click="activeDropdown = null">✕</button>
              </div>
              <ul class="nav-sub-list">
                <li
                  v-for="child in content.nav.items.find(i => i.key === activeDropdown)?.children"
                  :key="child.label"
                >
                  <NuxtLink :to="child.href" class="nav-sub-link" @click="closeAll">
                    <span>{{ child.label }}</span>
                    <span class="nav-sub-arrow">→</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </nav>

    <!-- Mobile burger -->
    <button
      class="burger"
      type="button"
      aria-label="Toggle menu"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span /><span />
    </button>

    <!-- Mobile full-screen overlay -->
    <div class="mobile-bg" @click="closeAll" />

    <!-- Mobile nav container -->
    <div v-if="isMenuOpen" class="nav-container">
      <div class="nav-title">Navigation</div>
      <ul class="mobile-nav-list">
        <li
          v-for="item in content.nav.items"
          :key="item.number"
          class="mobile-nav-item"
        >
          <div class="mobile-nav-row">
            <span class="nav-list-item-index">{{ item.number }}</span>
            <button
              v-if="item.type === 'dropdown'"
              class="mobile-nav-link"
              type="button"
              @click="toggleDropdown(item.key!)"
            >
              {{ item.label }}
            </button>
            <a
              v-else-if="item.type === 'link'"
              :href="item.href"
              class="mobile-nav-link"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ item.label }}
            </a>
            <button v-else class="mobile-nav-link" type="button">{{ item.label }}</button>
          </div>
          <div v-if="item.type === 'dropdown' && activeDropdown === item.key" class="mobile-sub">
            <NuxtLink
              v-for="child in item.children"
              :key="child.label"
              :to="child.href"
              class="mobile-sub-link"
              @click="closeAll"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* ── Load animation ── */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Base menu wrapper ── */
.menu {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
  padding-top: 3rem;
  column-gap: 0.6rem;
  transition: opacity 0.3s, visibility 0.3s;
  animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}

.menu.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* ── Nav logo (beside nav pill) ── */
.nav-logo {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 50%;
  height: 4.5rem;
  width: 4.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
}

@media only screen and (min-width: 834px) {
  .nav-logo { display: flex; }
}

.off-white .nav-logo {
  background-color: rgba(15, 16, 18, 0.06);
  color: var(--color-offBlack);
}

.off-black .nav-logo,
.blue .nav-logo {
  background-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

.nav-logo-text {
  font-size: 1.2rem;
  font-weight: 350;
  letter-spacing: 0.04em;
}

/* ── Side logo (fixed left-center) ── */
.side-logo {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1.6rem;
  height: 4.5rem;
  width: 4.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: var(--grid-outerGutter);
  top: 50%;
  transform: translateY(-50%);
  z-index: 102;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s;
}

@media only screen and (min-width: 834px) {
  .side-logo { display: flex; }
}

.side-logo.is-visible {
  opacity: 1;
  pointer-events: auto;
}

.side-logo.is-visible:hover {
  opacity: 0.7;
}

.side-logo.off-white {
  background-color: rgba(15, 16, 18, 0.06);
  color: var(--color-offBlack);
}

.side-logo.off-black,
.side-logo.blue {
  background-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

.side-logo-text {
  font-size: 1.2rem;
  font-weight: 350;
  letter-spacing: 0.04em;
}

/* ── Desktop nav ── */
.nav {
  display: none;
  height: 4.5rem;
  position: relative;
}

@media only screen and (min-width: 834px) {
  .nav {
    display: block;
  }
}

.nav-inner {
  display: grid;
  position: relative;
}

.nav-list {
  align-items: center;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1rem;
  column-gap: 5.5rem;
  display: flex;
  flex-direction: row;
  grid-column: 1 / -1;
  grid-row: 1;
  height: 4.5rem;
  padding: 0 3.6rem;
  list-style: none;
  transition: background-color 0.3s, color 0.3s;
}

/* Nav pill colour by section theme */
.off-white .nav-list {
  background-color: rgba(15, 16, 18, 0.06);
  color: var(--color-offBlack);
}

.off-black .nav-list {
  background-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

.blue .nav-list {
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--color-white);
}

.nav-list-item-link {
  font-size: 1.6rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.3s, filter 0.3s, color 0.3s;
}

.nav-list-item:hover ~ .nav-list-item .nav-list-item-link,
.nav-list-item:has(~ .nav-list-item:hover) .nav-list-item-link {
  color: gray;
}

/* ── Dropdown sub-panel ── */
.nav-sub-items {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1rem;
  grid-column: 1 / -1;
  grid-row: 1;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.off-white .nav-sub-items {
  background-color: rgba(120, 120, 120, 0.1);
  color: var(--color-offBlack);
}

.off-black .nav-sub-items,
.blue .nav-sub-items {
  background-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

.nav-sub-items-inner {
  padding: 1rem 0 2rem;
}

.nav-sub-title {
  align-items: center;
  border-bottom: 0.5px solid rgba(15, 16, 18, 0.2);
  display: flex;
  font-size: 1.4rem;
  font-weight: 350;
  height: 4.5rem;
  justify-content: center;
  letter-spacing: -0.02em;
  margin: 0 2rem;
  position: relative;
}

.off-black .nav-sub-title,
.blue .nav-sub-title {
  border-color: rgba(255, 255, 255, 0.2);
}

.nav-sub-close {
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.nav-sub-close:hover {
  opacity: 1;
}

.nav-sub-list {
  list-style: none;
  margin-top: 0.8rem;
  text-align: center;
}

.nav-sub-link {
  align-items: center;
  border-radius: 1rem;
  display: flex;
  font-size: 1.2rem;
  font-weight: 350;
  height: 2.9rem;
  justify-content: center;
  letter-spacing: -0.02em;
  margin: 0 auto 0.5rem;
  position: relative;
  width: 30rem;
  background-color: rgba(120, 120, 120, 0.1);
  transition: opacity 0.2s;
}

.off-black .nav-sub-link,
.blue .nav-sub-link {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-sub-link:hover {
  opacity: 0.7;
}

.nav-sub-arrow {
  align-items: center;
  border: 1px solid currentColor;
  border-radius: 6.3rem;
  display: flex;
  font-size: 0.9rem;
  height: 1.3rem;
  justify-content: center;
  position: absolute;
  right: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.2rem;
}

/* Sub-panel transition */
.sub-slide-enter-active,
.sub-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.sub-slide-enter-from,
.sub-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Mobile burger ── */
.burger {
  align-items: center;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  height: 4.5rem;
  justify-content: center;
  margin-right: var(--grid-outerGutter);
  position: absolute;
  right: 0;
  row-gap: 0.8rem;
  top: 3rem;
  width: 4.5rem;
  z-index: 1;
}

.off-white .burger {
  background-color: rgba(120, 120, 120, 0.1);
  color: var(--color-offBlack);
}

.off-black .burger,
.blue .burger {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

.burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  width: 1.9rem;
  transition: transform 0.3s, opacity 0.3s;
}

.open .burger span:first-child {
  transform: translateY(4.5px) rotate(45deg);
}
.open .burger span:nth-child(2) {
  transform: translateY(-4.5px) rotate(-45deg);
}

@media only screen and (min-width: 834px) {
  .burger { display: none; }
}

/* ── Mobile overlay backdrop ── */
.mobile-bg {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  height: 100vh;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity 0.4s, visibility 0.4s;
  visibility: hidden;
  width: 100%;
  z-index: -1;
}

.open .mobile-bg {
  opacity: 1;
  pointer-events: all;
  visibility: visible;
}

.off-white .mobile-bg { background-color: rgba(255, 255, 255, 0.3); }
.off-black .mobile-bg,
.blue .mobile-bg      { background-color: rgba(0, 0, 0, 0.1); }

/* ── Mobile nav container ── */
.nav-container {
  left: 0;
  overflow: hidden;
  padding: 4.5rem var(--grid-outerGutter) 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.off-white .nav-container {
  background-color: rgba(120, 120, 120, 0.1);
  color: var(--color-offBlack);
}
.off-black .nav-container,
.blue .nav-container {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

.nav-title {
  border-bottom: 0.5px solid rgba(15, 16, 18, 0.2);
  font-size: 1.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  padding-bottom: 2.5rem;
  text-align: center;
  width: 100%;
}

.off-black .nav-title,
.blue .nav-title {
  border-color: rgba(255, 255, 255, 0.2);
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 3rem;
  padding-bottom: 4rem;
  row-gap: 0.6rem;
}

.mobile-nav-row {
  align-items: center;
  display: flex;
  gap: 4.2rem;
}

.nav-list-item-index {
  font-size: 1rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  opacity: 0.5;
}

.mobile-nav-link {
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-align: left;
  cursor: pointer;
}

.mobile-sub {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0 1rem 6rem;
}

.mobile-sub-link {
  font-size: 1.6rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.mobile-sub-link:hover {
  opacity: 1;
}

@media only screen and (min-width: 834px) {
  .nav-container { display: none; }
}
</style>
