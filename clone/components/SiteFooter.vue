<script setup lang="ts">
import { useRoute } from 'vue-router'
import { content } from '~/content'

const { footer, brand } = content
const route = useRoute()
</script>

<template>
  <footer class="site-footer" data-section-theme="off-black">
    <div class="container footer-container">
      <!-- Top row: wordmark left, link groups right -->
      <div class="footer-top">
        <!-- Wordmark -->
        <NuxtLink to="/" class="footer-wordmark">{{ brand.name }}</NuxtLink>

        <!-- Link groups -->
        <div class="footer-groups">
          <!-- Pages -->
          <div class="footer-group">
            <span class="footer-group-label">{{ footer.pagesLabel }}</span>
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
            <span class="footer-group-label">{{ footer.followLabel }}</span>
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

      <!-- Hairline -->
      <div class="footer-line" />

      <!-- Bottom row: legal + location -->
      <div class="footer-bottom">
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
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
  padding: 15.385vw 0 8rem;
}

@media only screen and (min-width: 834px) {
  .site-footer {
    padding: 5.556vw 0 4.167vw;
  }
}

.footer-container {
  /* inherits 5-col grid */
}

/* ── Top ── */
.footer-top {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
}

@media only screen and (min-width: 834px) {
  .footer-top {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
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

/* Link groups */
.footer-groups {
  display: flex;
  column-gap: 10rem;
  row-gap: 6rem;
  flex-wrap: wrap;
}

@media only screen and (min-width: 834px) {
  .footer-groups {
    column-gap: 8rem;
  }
}

.footer-group {
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
}

.footer-group-label {
  color: var(--color-offWhite);
  font-size: 1.2rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  opacity: 0.4;
}

.footer-links {
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
}

.footer-link {
  color: var(--color-offWhite);
  font-size: 2.5rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
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
  grid-column: 1 / -1;
  height: 0.5px;
  margin-top: 8rem;
}

@media only screen and (min-width: 834px) {
  .footer-line {
    margin-top: 5.556vw;
  }
}

/* ── Bottom ── */
.footer-bottom {
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  justify-content: space-between;
  margin-top: 3.6rem;
  row-gap: 3rem;
}

@media only screen and (min-width: 834px) {
  .footer-bottom {
    flex-direction: row;
    row-gap: 0;
  }
}

.footer-legal {
  display: flex;
  column-gap: 3.2rem;
  flex-wrap: wrap;
  row-gap: 1.6rem;
  justify-content: center;
}

@media only screen and (min-width: 834px) {
  .footer-legal {
    justify-content: flex-start;
  }
}

.footer-legal-link {
  color: var(--color-offWhite);
  font-size: 1.2rem;
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
  font-size: 1.2rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  opacity: 0.4;
}
</style>
