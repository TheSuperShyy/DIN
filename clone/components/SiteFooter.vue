<script setup lang="ts">
import { useRoute } from 'vue-router'
import { content } from '~/content'

const { footer } = content
const route = useRoute()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer" data-section-theme="off-black">
    <div class="footer-inner">
      <!-- Top section -->
      <div class="footer-top reveal">
        <span class="footer-wordmark">TAL</span>
        <!-- Right side: groups -->
        <div class="footer-right">
          <!-- Pages -->
          <div class="footer-group">
            <div class="footer-group-label">
              <span class="footer-group-number">1.0</span>
              <span class="footer-group-name">Pages</span>
            </div>
            <nav class="footer-links">
              <NuxtLink
                v-for="page in footer.pages"
                :key="page.href"
                :to="page.href"
                class="footer-link"
                :class="{ 'is-current': route.path === page.href }"
              >{{ page.label }}</NuxtLink>
            </nav>
          </div>

          <!-- Follow -->
          <div class="footer-group">
            <div class="footer-group-label">
              <span class="footer-group-number">2.0</span>
              <span class="footer-group-name">Follow</span>
            </div>
            <div class="footer-socials">
              <a
                v-for="social in footer.social"
                :key="social.label"
                :href="social.href"
                class="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
              >
                <svg v-if="social.icon === 'facebook'" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21.95v-8.3h2.79l.42-3.24H13.5V8.35c0-.94.26-1.58 1.6-1.58h1.72V3.87a23 23 0 0 0-2.5-.13c-2.48 0-4.18 1.52-4.18 4.3v2.39H7.33v3.23h2.81v8.3h3.36Z"/>
                </svg>
                <svg v-else-if="social.icon === 'instagram'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="3.8"/>
                  <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
                <span class="footer-social-label">{{ social.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <!-- Bottom row -->
      <div class="footer-bottom">
        <button class="footer-icon" type="button" aria-label="Scroll to top" @click="scrollToTop">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L13.8 8.4L20.5 3.5L15.6 10.2L24 12L15.6 13.8L20.5 20.5L13.8 15.6L12 24L10.2 15.6L3.5 20.5L8.4 13.8L0 12L8.4 10.2L3.5 3.5L10.2 8.4L12 0Z" fill="currentColor"/>
          </svg>
        </button>
        <div class="footer-bottom-right">
          <div class="footer-legal">
            <NuxtLink
              v-for="link in footer.legal"
              :key="link.label"
              :to="link.href"
              class="footer-legal-link"
            >{{ link.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
  padding: 8vw 0 4rem;
  margin-top: auto;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (min-width: 834px) {
  .site-footer {
    padding: 4vw 0 3vw;
  }
}

.footer-inner {
  padding-left: var(--grid-outerGutter);
  padding-right: var(--grid-outerGutter);
}

/* ── Top ── */
.footer-top {
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  margin-bottom: 0;
}

@media only screen and (min-width: 834px) {
  .footer-top {
    flex-direction: row;
    align-items: flex-start;
    column-gap: 44.5vw;
  }
}

/* Wordmark */
.footer-wordmark {
  color: var(--color-offWhite);
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

/* Right side groups */
.footer-right {
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
}

@media only screen and (min-width: 834px) {
  .footer-right {
    row-gap: 10rem;
  }
}

/* Each group: label left, links right */
.footer-group {
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
}

@media only screen and (min-width: 834px) {
  .footer-group {
    flex-direction: row;
    column-gap: 8rem;
    row-gap: 0;
    align-items: flex-start;
  }
}

.footer-group-label {
  color: var(--color-offWhite);
  font-size: 1.2rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.6;
  min-width: 6rem;
}

.footer-group-number {
  display: block;
  opacity: 0.4;
}

.footer-group-name {
  color: var(--color-white);
  font-size: 1.56rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.footer-socials {
  display: flex;
  column-gap: 1.4rem;
  align-items: center;
  flex-wrap: wrap;
}

.footer-social {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-offWhite);
  opacity: 0.75;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  transition: opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.footer-social:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.25);
}

.footer-social-label {
  display: inline;
}

@media only screen and (max-width: 833px) {
  .footer-social-label {
    font-size: 1.3rem;
  }
}

.footer-link {
  color: var(--color-offWhite);
  font-size: 2.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.25;
  text-decoration: none;
  transition: opacity 0.2s;
  pointer-events: none;
  cursor: default;
}

.footer-link.is-current {
  color: var(--color-blue);
}

/* Hairline */
.footer-line {
  background-color: rgba(255, 255, 255, 0.1);
  height: 0.5px;
  margin-top: 6rem;
}

@media only screen and (min-width: 834px) {
  .footer-line {
    margin-top: 6vw;
  }
}

/* ── Bottom ── */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 6rem;
  row-gap: 3rem;
}

@media only screen and (min-width: 834px) {
  .footer-bottom {
    flex-direction: row;
    align-items: center;
  }
  .footer-bottom-right {
    margin-left: auto;
    margin-right: 28.5vw;
  }
}

.footer-icon {
  color: var(--color-offWhite);
  opacity: 0.4;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.footer-icon:hover {
  opacity: 0.8;
}

.footer-bottom-right {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: flex-start;
}

@media only screen and (min-width: 834px) {
  .footer-bottom-right {
    flex-direction: row;
    align-items: center;
    column-gap: 4rem;
  }
}

.footer-legal {
  display: flex;
  column-gap: 3.2rem;
  flex-wrap: wrap;
  row-gap: 1.6rem;
}

.footer-legal-link {
  color: var(--color-offWhite);
  font-size: 1.6rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  opacity: 0.4;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-legal-link:hover {
  opacity: 0.9;
}

</style>
