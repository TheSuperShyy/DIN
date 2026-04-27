<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

type Prefs = {
  fontScale: number
  highContrast: boolean
  highlightLinks: boolean
  stopAnimations: boolean
  readableFont: boolean
}

const STORAGE_KEY = 'tal-a11y'
const DEFAULTS: Prefs = {
  fontScale: 1,
  highContrast: false,
  highlightLinks: false,
  stopAnimations: false,
  readableFont: false
}

const open = ref(false)
const fontScale = ref(DEFAULTS.fontScale)
const highContrast = ref(DEFAULTS.highContrast)
const highlightLinks = ref(DEFAULTS.highlightLinks)
const stopAnimations = ref(DEFAULTS.stopAnimations)
const readableFont = ref(DEFAULTS.readableFont)

const fabRef = ref<HTMLButtonElement | null>(null)
const panelRef = ref<HTMLDivElement | null>(null)

function applyPrefs() {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  html.style.setProperty('--a11y-font-scale', String(fontScale.value))
  html.toggleAttribute('data-a11y-contrast', highContrast.value)
  html.toggleAttribute('data-a11y-links', highlightLinks.value)
  html.toggleAttribute('data-a11y-no-motion', stopAnimations.value)
  html.toggleAttribute('data-a11y-font', readableFont.value)
}

function persist() {
  if (typeof window === 'undefined') return
  const prefs: Prefs = {
    fontScale: fontScale.value,
    highContrast: highContrast.value,
    highlightLinks: highlightLinks.value,
    stopAnimations: stopAnimations.value,
    readableFont: readableFont.value
  }
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)) } catch {}
}

function loadPrefs() {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const prefs = JSON.parse(raw) as Partial<Prefs>
    if (typeof prefs.fontScale === 'number') fontScale.value = prefs.fontScale
    if (typeof prefs.highContrast === 'boolean') highContrast.value = prefs.highContrast
    if (typeof prefs.highlightLinks === 'boolean') highlightLinks.value = prefs.highlightLinks
    if (typeof prefs.stopAnimations === 'boolean') stopAnimations.value = prefs.stopAnimations
    if (typeof prefs.readableFont === 'boolean') readableFont.value = prefs.readableFont
  } catch {}
}

function commit() {
  applyPrefs()
  persist()
}

function bumpFont(delta: number) {
  fontScale.value = Math.min(1.4, Math.max(0.9, +(fontScale.value + delta).toFixed(2)))
  commit()
}

function resetFont() { fontScale.value = 1; commit() }
function toggleContrast() { highContrast.value = !highContrast.value; commit() }
function toggleLinks() { highlightLinks.value = !highlightLinks.value; commit() }
function toggleMotion() { stopAnimations.value = !stopAnimations.value; commit() }
function toggleReadableFont() { readableFont.value = !readableFont.value; commit() }

function resetAll() {
  fontScale.value = DEFAULTS.fontScale
  highContrast.value = DEFAULTS.highContrast
  highlightLinks.value = DEFAULTS.highlightLinks
  stopAnimations.value = DEFAULTS.stopAnimations
  readableFont.value = DEFAULTS.readableFont
  commit()
}

async function togglePanel() {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    // Move focus into the panel so keyboard users can interact immediately
    const firstButton = panelRef.value?.querySelector<HTMLElement>('button, a')
    firstButton?.focus()
  } else {
    fabRef.value?.focus()
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    open.value = false
    fabRef.value?.focus()
  }
}

function onDocClick(e: MouseEvent) {
  if (!open.value) return
  const target = e.target as Node
  if (panelRef.value?.contains(target)) return
  if (fabRef.value?.contains(target)) return
  open.value = false
}

onMounted(() => {
  loadPrefs()
  applyPrefs()
  window.addEventListener('keydown', onKey)
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <div class="a11y-root">
    <Transition name="a11y-panel">
      <div v-if="open" ref="panelRef" class="a11y-panel" role="dialog" aria-label="הגדרות נגישות">
        <div class="a11y-panel-header">
          <span class="a11y-panel-title">תפריט נגישות</span>
          <button class="a11y-panel-close" type="button" aria-label="סגור" @click="togglePanel">✕</button>
        </div>

        <!-- Font size -->
        <div class="a11y-row">
          <span class="a11y-row-label">גודל טקסט</span>
          <div class="a11y-row-actions">
            <button type="button" class="a11y-btn" aria-label="הגדל טקסט" @click="bumpFont(0.1)">A+</button>
            <button type="button" class="a11y-btn a11y-btn-reset" aria-label="גודל ברירת מחדל" @click="resetFont">A</button>
            <button type="button" class="a11y-btn" aria-label="הקטן טקסט" @click="bumpFont(-0.1)">A−</button>
          </div>
        </div>

        <!-- High contrast -->
        <div class="a11y-row">
          <span class="a11y-row-label">ניגודיות גבוהה</span>
          <button
            type="button"
            class="a11y-toggle"
            :class="{ 'is-on': highContrast }"
            :aria-pressed="highContrast"
            aria-label="ניגודיות גבוהה"
            @click="toggleContrast"
          >
            <span class="a11y-toggle-knob" />
          </button>
        </div>

        <!-- Highlight links -->
        <div class="a11y-row">
          <span class="a11y-row-label">הדגשת קישורים</span>
          <button
            type="button"
            class="a11y-toggle"
            :class="{ 'is-on': highlightLinks }"
            :aria-pressed="highlightLinks"
            aria-label="הדגשת קישורים"
            @click="toggleLinks"
          >
            <span class="a11y-toggle-knob" />
          </button>
        </div>

        <!-- Stop animations -->
        <div class="a11y-row">
          <span class="a11y-row-label">עצירת אנימציות</span>
          <button
            type="button"
            class="a11y-toggle"
            :class="{ 'is-on': stopAnimations }"
            :aria-pressed="stopAnimations"
            aria-label="עצירת אנימציות"
            @click="toggleMotion"
          >
            <span class="a11y-toggle-knob" />
          </button>
        </div>

        <!-- Readable font -->
        <div class="a11y-row">
          <span class="a11y-row-label">פונט קריא</span>
          <button
            type="button"
            class="a11y-toggle"
            :class="{ 'is-on': readableFont }"
            :aria-pressed="readableFont"
            aria-label="פונט קריא"
            @click="toggleReadableFont"
          >
            <span class="a11y-toggle-knob" />
          </button>
        </div>

        <!-- Reset all -->
        <button type="button" class="a11y-reset-all" @click="resetAll">איפוס הגדרות</button>

        <!-- Statement link -->
        <NuxtLink to="/accessibility" class="a11y-link" @click="open = false">
          הצהרת נגישות
          <span aria-hidden="true">←</span>
        </NuxtLink>
      </div>
    </Transition>

    <button
      ref="fabRef"
      class="a11y-fab"
      type="button"
      :aria-label="open ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'"
      :aria-expanded="open"
      @click="togglePanel"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="4" r="2" />
        <path d="M19 8.5a1 1 0 0 0-1.2-.74l-4.3 1.04a8 8 0 0 1-3 0L6.2 7.76A1 1 0 0 0 5 8.5a1 1 0 0 0 .76 1.2l3.74.9V13l-1.96 6.1a1 1 0 0 0 1.9.62L11.4 14h1.2l1.96 5.72a1 1 0 0 0 1.9-.62L14.5 13v-2.4l3.74-.9A1 1 0 0 0 19 8.5z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.a11y-root {
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
  z-index: 100;
  pointer-events: none;
}

.a11y-fab {
  pointer-events: auto;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  background: #0071e3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  box-shadow: 0 10px 30px rgba(0, 113, 227, 0.35), 0 4px 10px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.a11y-fab:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 16px 40px rgba(0, 113, 227, 0.45), 0 6px 14px rgba(0, 0, 0, 0.15);
}

.a11y-fab:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}

@media only screen and (max-width: 833px) {
  .a11y-root {
    bottom: 1.6rem;
    right: 1.6rem;
  }

  .a11y-fab {
    width: 4.8rem;
    height: 4.8rem;
  }

  .a11y-fab svg {
    width: 24px;
    height: 24px;
  }
}

@media print {
  .a11y-root { display: none; }
}

/* ── Panel ── */
.a11y-panel {
  pointer-events: auto;
  position: absolute;
  bottom: calc(100% + 1.2rem);
  right: 0;
  width: 30rem;
  max-height: calc(100vh - 12rem);
  overflow-y: auto;
  background: #fff;
  color: #1a1a1a;
  border-radius: 1.2rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.6rem 1.6rem 1.4rem;
  direction: rtl;
}

@media only screen and (max-width: 400px) {
  .a11y-panel {
    width: calc(100vw - 3.2rem);
  }
}

.a11y-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

.a11y-panel-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.a11y-panel-close {
  background: transparent;
  border: 0;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 1.4rem;
  color: #666;
  border-radius: 0.4rem;
}

.a11y-panel-close:hover {
  color: #000;
  background: rgba(0, 0, 0, 0.06);
}

.a11y-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0.9rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.a11y-row:first-of-type {
  border-top: 0;
}

.a11y-row-label {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #1a1a1a;
  flex: 1;
}

.a11y-row-actions {
  display: flex;
  column-gap: 0.4rem;
}

.a11y-btn {
  font-family: "Heebo", system-ui, sans-serif;
  background: rgba(0, 113, 227, 0.08);
  border: 1px solid rgba(0, 113, 227, 0.2);
  color: #0071e3;
  border-radius: 0.6rem;
  padding: 0.5rem 0.9rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  min-width: 3.4rem;
  transition: background 0.15s, border-color 0.15s;
}

.a11y-btn:hover {
  background: rgba(0, 113, 227, 0.16);
  border-color: rgba(0, 113, 227, 0.45);
}

.a11y-btn-reset {
  font-size: 1.2rem;
  opacity: 0.85;
}

.a11y-toggle {
  width: 4.2rem;
  height: 2.4rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.18);
  border: 0;
  cursor: pointer;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
}

.a11y-toggle.is-on {
  background: #0071e3;
}

.a11y-toggle-knob {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 1.8rem;
  height: 1.8rem;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

.a11y-toggle.is-on .a11y-toggle-knob {
  transform: translateX(-1.8rem);
}

.a11y-reset-all {
  display: block;
  width: 100%;
  margin-top: 1.2rem;
  padding: 0.9rem 1rem;
  background: #fff;
  color: #b00020;
  border: 1px solid rgba(176, 0, 32, 0.35);
  border-radius: 0.6rem;
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.a11y-reset-all:hover {
  background: rgba(176, 0, 32, 0.06);
}

.a11y-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.6rem;
  padding: 0.9rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #0071e3;
  text-decoration: none;
}

.a11y-link:hover {
  text-decoration: underline;
}

/* ── Panel transition ── */
.a11y-panel-enter-active,
.a11y-panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.a11y-panel-enter-from,
.a11y-panel-leave-to {
  opacity: 0;
  transform: translateY(0.6rem);
}
</style>
