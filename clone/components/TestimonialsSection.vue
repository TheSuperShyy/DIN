<script setup lang="ts">
import { ref } from 'vue'
import { content } from '~/content'

const { testimonials } = content
const activeReview = ref<null | (typeof testimonials.items)[number]>(null)

function openReview(item: (typeof testimonials.items)[number]) {
  activeReview.value = item
}
function closeReview() {
  activeReview.value = null
}
</script>

<template>
  <section class="section bg-blue home-testimonials" data-section-theme="blue">
    <h2 class="testimonials-title reveal">{{ testimonials.heading }}</h2>

    <div class="marquee-wrapper">
      <div class="marquee-track" :class="{ paused: activeReview }">
        <div
          v-for="(item, i) in [...testimonials.items, ...testimonials.items]"
          :key="i"
          class="review-card"
          @click="openReview(item)"
        >
          <div class="review-top">
            <div class="review-stars" :aria-label="`${item.stars} stars`">
              <span v-for="n in 5" :key="n" class="star" :class="{ 'star-empty': n > item.stars }">★</span>
            </div>
            <span class="review-time">{{ item.date }}</span>
          </div>
          <p class="review-text">{{ item.text }}</p>
          <div class="review-author">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <Transition name="popup">
      <div v-if="activeReview" class="popup-overlay" @click.self="closeReview">
        <div class="popup-card">
          <button type="button" class="popup-close" @click="closeReview" aria-label="Close">×</button>
          <div class="review-top">
            <div class="review-stars" :aria-label="`${activeReview.stars} stars`">
              <span v-for="n in 5" :key="n" class="star" :class="{ 'star-empty': n > activeReview.stars }">★</span>
            </div>
            <span class="review-time">{{ activeReview.date }}</span>
          </div>
          <p class="popup-text">{{ activeReview.text }}</p>
          <div class="popup-author">{{ activeReview.name }}</div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.home-testimonials {
  background-color: var(--color-blue);
  color: var(--color-offWhite);
  overflow: hidden;
  padding: 8vw 0 10vw;
}

@media only screen and (min-width: 834px) {
  .home-testimonials { padding: 3vw 0 5vw; }
}

.testimonials-title {
  color: var(--color-offWhite);
  direction: rtl;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 5vw;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .testimonials-title { margin-bottom: 3vw; }
}

.marquee-wrapper {
  mask-image: linear-gradient(90deg, transparent 0, #000 15%, #000 85%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 15%, #000 85%, transparent);
  overflow: hidden;
  position: relative;
  width: 100%;
}

.marquee-track {
  animation: marquee 50s linear infinite;
  column-gap: 2.5rem;
  display: flex;
  padding: 1rem 0;
  width: max-content;
}

.marquee-track.paused,
.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.review-card {
  background-color: var(--color-offWhite);
  border-radius: 1.2rem;
  box-shadow: 0 0.8rem 3rem rgba(0, 0, 0, 0.18), 0 0.2rem 0.8rem rgba(0, 0, 0, 0.08);
  color: var(--color-offBlack);
  cursor: pointer;
  direction: rtl;
  flex-shrink: 0;
  max-width: 36rem;
  min-width: 28rem;
  padding: 2.4rem;
  text-align: right;
  transition: transform 0.25s ease;
  width: calc(33.3333vw - 3.3333rem);
}

.review-card:hover { transform: scale(1.02); }

.review-top {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

.review-stars {
  column-gap: 0.2rem;
  display: flex;
}

.star {
  color: #f5a623;
  font-size: 1.6rem;
}

.star-empty { opacity: 0.25; }

.review-time {
  font-size: 1.2rem;
  opacity: 0.5;
}

.review-text {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1.6rem;
}

.review-author {
  font-size: 1.3rem;
  font-weight: 700;
  opacity: 0.7;
}

.popup-overlay {
  align-items: center;
  backdrop-filter: blur(1.2rem);
  -webkit-backdrop-filter: blur(1.2rem);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 9999;
}

.popup-card {
  background: var(--color-white);
  border-radius: 2rem;
  box-shadow: 0 2.4rem 6.4rem rgba(0, 0, 0, 0.25), 0 0.8rem 2rem rgba(0, 0, 0, 0.12);
  color: var(--color-offBlack);
  direction: rtl;
  max-width: 48rem;
  padding: 3.6rem;
  position: relative;
  text-align: right;
  width: 90vw;
}

.popup-close {
  align-items: center;
  background: rgba(0, 0, 0, 0.06);
  border: none;
  border-radius: 50%;
  color: var(--color-offBlack);
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 3.2rem;
  justify-content: center;
  left: 1.6rem;
  line-height: 1;
  position: absolute;
  top: 1.2rem;
  transition: background 0.2s ease;
  width: 3.2rem;
}

.popup-close:hover { background: rgba(0, 0, 0, 0.12); }

.popup-card .review-top { margin-bottom: 2rem; }
.popup-card .star { font-size: 2rem; }
.popup-card .review-time { color: rgba(0, 0, 0, 0.5); }

.popup-text {
  font-size: 1.8rem;
  line-height: 1.7;
  margin-bottom: 2.4rem;
}

.popup-author {
  font-size: 1.5rem;
  font-weight: 700;
  opacity: 0.8;
}

.popup-enter-active,
.popup-leave-active { transition: opacity 0.3s ease; }

.popup-enter-active .popup-card,
.popup-leave-active .popup-card {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
}

.popup-enter-from,
.popup-leave-to { opacity: 0; }

.popup-enter-from .popup-card {
  opacity: 0;
  transform: scale(0.9) translateY(2rem);
}

.popup-leave-to .popup-card {
  opacity: 0;
  transform: scale(0.95);
}
</style>
