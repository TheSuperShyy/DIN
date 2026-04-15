<script setup lang="ts">
import { useRoute } from 'vue-router'
import { content } from '~/content'

const { footer, brand } = content
const route = useRoute()
</script>

<template>
  <footer class="site-footer" data-section-theme="off-black">
    <div class="footer-inner">
      <!-- Top section -->
      <div class="footer-top reveal">
        <!-- Wordmark -->
        <NuxtLink to="/" class="footer-wordmark">{{ brand.name }}</NuxtLink>

        <!-- Right side: groups -->
        <div class="footer-right">
          <!-- Pages -->
          <div class="footer-group">
            <div class="footer-group-label">
              <span class="footer-group-number">1.0</span>
              <span>Pages</span>
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
              <span>Follow</span>
            </div>
            <div class="footer-links">
              <a
                v-for="social in footer.social"
                :key="social.label"
                :href="social.href"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ social.label }}</a>
            </div>
          </div>
        </div>
      </div>


      <!-- Bottom row -->
      <div class="footer-bottom">
        <NuxtLink to="/" class="footer-icon" aria-label="Go to homepage">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L13.8 8.4L20.5 3.5L15.6 10.2L24 12L15.6 13.8L20.5 20.5L13.8 15.6L12 24L10.2 15.6L3.5 20.5L8.4 13.8L0 12L8.4 10.2L3.5 3.5L10.2 8.4L12 0Z" fill="currentColor"/>
          </svg>
        </NuxtLink>
        <div class="footer-bottom-right">
          <div class="footer-legal">
            <a
              v-for="link in footer.legal"
              :key="link.label"
              :href="link.href"
              class="footer-legal-link"
            >{{ link.label }}</a>
          </div>
          <span class="footer-location">{{ footer.location }}</span>
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
  justify-content: flex-end;
}

@media only screen and (min-width: 834px) {
  .site-footer {
    padding: 6vw 0 3vw;
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
  margin-bottom: 100px;
}

@media only screen and (min-width: 834px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

/* Wordmark */
.footer-wordmark {
  color: var(--color-offWhite);
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-wordmark:hover {
  opacity: 0.6;
}

/* Right side groups */
.footer-right {
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
}

@media only screen and (min-width: 834px) {
  .footer-right {
    row-gap: 6rem;
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
  opacity: 0.4;
  min-width: 6rem;
}

.footer-group-number {
  display: block;
}

.footer-links {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.footer-link {
  color: var(--color-offWhite);
  font-size: 2.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.25;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 0.6;
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
  margin-top: 3.6rem;
  row-gap: 3rem;
}

@media only screen and (min-width: 834px) {
  .footer-bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
  opacity: 0.8;
}

.footer-location {
  color: var(--color-offWhite);
  font-size: 1.6rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  opacity: 0.4;
}
</style>
