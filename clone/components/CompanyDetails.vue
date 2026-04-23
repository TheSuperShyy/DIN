<script setup lang="ts">
import { content } from '~/content'

const { company } = content
</script>

<template>
  <section class="section bg-off-black home-company-details" data-section-theme="off-black">
    <!-- Top: service types -->
    <div class="top">
      <div class="container home-company-details-container">
        <div class="top-header reveal">
          <h3 class="cd-title">סוגי <span class="title-blue">שירותי ההדברה</span></h3>
        </div>

        <div class="bottom-line" />

        <div class="services-grid reveal">
          <div class="services-columns">
            <div class="services-divider" />
            <div class="services-column">
              <div class="services-cell"><span class="check-icon">✓</span> הקמת מערך ניטור והדברה ממוחשב</div>
              <div class="services-cell"><span class="check-icon">✓</span> הדברת מזיקי מחסן - ממגורות, מכולות, ספריות ועוד...</div>
              <div class="services-cell"><span class="check-icon">✓</span> חברתנו מתמחה בכל סוגי הדברת המזיקים - מכרסמים / זוחלים / מעופפים</div>
              <div class="services-cell"><span class="check-icon">✓</span> טיפול במטרדי בעלי כנף</div>
            </div>
            <div class="services-divider" />
            <div class="services-column">
              <div class="services-cell"><span class="check-icon">✓</span> איוד בגז, ערפול חם / קר</div>
              <div class="services-cell"><span class="check-icon">✓</span> התמחות מיוחדת בהדברת התיקן הגרמני בבתי מלון, בתי חולים, מפעלי מזון, אולמות אירועים, שירותי הסעדה ועוד...</div>
              <div class="services-cell"><span class="check-icon">✓</span> חיטוי נגד מזהמים בקטריאליים, עובשים ושמרים.</div>
            </div>
            <div class="services-divider" />
            <div class="services-column">
              <div class="services-cell"><span class="check-icon">✓</span> בקרת מזיקים בפרמצבטיקה</div>
              <div class="services-cell"><span class="check-icon">✓</span> ייעוץ ועריכת מבדקים תברואתיים</div>
              <div class="services-cell"><span class="check-icon">✓</span> הכנה למבדקים - HCCP, GMP, FDA, משרד הבריאות מכון התקנים ועוד...</div>
            </div>
          </div>
        </div>

        <div class="iso-badges reveal">
          <img src="/iso-9001.svg" alt="ISO 9001:2015" class="iso-badge iso-badge-9001" />
          <img src="/iso-14001.svg" alt="ISO 14001:2015" class="iso-badge iso-badge-14001" />
        </div>
      </div>
    </div>

    <!-- Bottom: 5-step process -->
    <div class="bottom">
      <div class="container home-company-details-container">
        <div class="head reveal">
          <h3 class="cd-title process-title"><span class="title-blue">{{ company.processHeader }}</span></h3>
        </div>

        <ol class="process-list">
          <li
            v-for="(step, i) in company.steps"
            :key="i"
            class="process-card reveal"
            :data-delay="(i + 1) + ''"
          >
            <div class="process-number-wrap">
              <span class="process-number">{{ step.number }}</span>
              <span v-if="i < company.steps.length - 1" class="process-connector" aria-hidden="true" />
            </div>
            <div class="process-body">
              <h4 class="process-step-title">{{ step.title }}</h4>
              <p class="process-step-copy">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-company-details {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
}

/* ── Top ── */
.top {
  padding: 21.026vw 0;
  position: relative;
}

@media only screen and (min-width: 834px) {
  .top { padding: 5vw 0 12vw; }
}

.top-header {
  grid-column: 1 / -1;
  text-align: center;
}

.top-header .cd-title {
  font-size: 4rem;
  white-space: nowrap;
  margin-bottom: 3rem;
}

@media only screen and (min-width: 834px) {
  .top-header .cd-title {
    font-size: 5.2rem;
  }
}

.head {
  grid-column: 1 / -1;
  text-align: center;
  direction: rtl;
}

.cd-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media only screen and (min-width: 834px) {
  .cd-title {
    font-size: 4.2rem;
  }
}

.cd-title span {
  display: inline;
}

.title-blue {
  color: var(--color-blue);
}

/* ── Bottom (process) ── */
.bottom {
  background: linear-gradient(180deg, rgba(29, 30, 32, 0.5) 0%, rgba(15, 16, 18, 0.9) 100%);
  padding: 23.077vw 0 19.231vw;
}

@media only screen and (min-width: 834px) {
  .bottom { padding: 6vw 0 9vw; }
}

.process-title {
  margin-bottom: 3rem;
  font-size: 3.2rem;
}

@media only screen and (min-width: 834px) {
  .process-title {
    font-size: 4.8rem;
    margin-bottom: 5rem;
  }
}

.process-list {
  list-style: none;
  margin: 4rem auto 0;
  padding: 0;
  grid-column: 1 / -1;
  direction: rtl;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 88rem;
}

@media only screen and (min-width: 834px) {
  .process-list {
    margin-top: 5rem;
    row-gap: 2.4rem;
  }
}

.process-card {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: flex-start;
  padding: 2.4rem 2.2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-right: 3px solid var(--color-blue);
  border-radius: 1.2rem;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  position: relative;
}

.process-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  border-right-color: var(--color-blue);
  transform: translateX(-0.4rem);
}

@media only screen and (min-width: 834px) {
  .process-card {
    padding: 3rem 3.2rem;
    column-gap: 3rem;
  }
}

.process-number-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.process-number {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--color-blue);
  background: rgba(0, 113, 227, 0.12);
  border: 1px solid rgba(0, 113, 227, 0.35);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}

@media only screen and (min-width: 834px) {
  .process-number {
    font-size: 3.6rem;
    width: 7.2rem;
    height: 7.2rem;
  }
}

.process-connector {
  position: absolute;
  top: 6.2rem;
  width: 1px;
  height: calc(100% + 2rem);
  background: linear-gradient(180deg, rgba(0, 113, 227, 0.5), rgba(0, 113, 227, 0));
}

@media only screen and (min-width: 834px) {
  .process-connector {
    top: 7.4rem;
    height: calc(100% + 2.4rem);
  }
}

.process-body {
  min-width: 0;
}

.process-step-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offWhite);
  margin: 0 0 1rem;
}

@media only screen and (min-width: 834px) {
  .process-step-title {
    font-size: 2.4rem;
  }
}

.process-step-copy {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-offWhite);
  opacity: 0.75;
  margin: 0;
}

@media only screen and (min-width: 834px) {
  .process-step-copy {
    font-size: 1.6rem;
  }
}

.bottom-line {
  background-color: rgba(255, 255, 255, 0.2);
  grid-column: 1 / -1;
  height: 0.5px;
}

@media only screen and (min-width: 834px) {
  .bottom-line { grid-column: 2 / 6; }
}

/* ── Services grid ── */
.services-grid {
  grid-column: 1 / -1;
  padding-top: 4rem;
  direction: rtl;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

@media only screen and (min-width: 834px) {
  .services-grid {
    grid-column: 1 / -1;
  }
}

.services-columns {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

@media only screen and (min-width: 834px) {
  .services-columns {
    flex-direction: row;
    justify-content: center;
    column-gap: 3rem;
    padding-right: 5rem;
  }
}

.services-column {
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
  flex: 1;
  min-width: 0;
  border-bottom: 1px solid var(--color-blue);
  padding-bottom: 2rem;
}

.services-column:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

@media only screen and (min-width: 834px) {
  .services-column {
    border-bottom: none;
    padding-bottom: 0;
    row-gap: 2.2rem;
  }
}

.services-divider {
  display: none;
}

@media only screen and (min-width: 834px) {
  .services-divider {
    display: block;
    width: 1px;
    background-color: var(--color-blue);
    align-self: stretch;
  }
}

.services-cell {
  font-family: "Heebo", system-ui, sans-serif;
  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.4;
  color: var(--color-offWhite);
  padding: 0.4rem 0;
}

@media only screen and (min-width: 834px) {
  .services-cell {
    font-size: 1.8rem;
  }
}

.check-icon {
  color: #00A651;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1.3;
  flex-shrink: 0;
}

@media only screen and (min-width: 834px) {
  .check-icon {
    font-size: 2.1rem;
  }
}

/* ── ISO badges (recolored to ISO green) ── */
.iso-badges {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 2rem;
  position: absolute;
  bottom: 1rem;
  right: var(--grid-outerGutter);
}

.iso-badge {
  width: 14rem;
  height: auto;
}

/* 14001 SVG's drawn content is slightly smaller inside its viewBox than
   9001's (measured content-width ratio ~1.02). Compensate for visual match. */
.iso-badge-14001 {
  width: 14.3rem;
}




/* ── Mobile ── */
@media only screen and (max-width: 833px) {
  .bottom .head {
    padding: 0 2rem;
    position: relative;
  }

  .bottom .head .cd-title {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    display: inline-block;
    padding-bottom: 1.4rem;
    position: relative;
  }

  .bottom .head .cd-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 4rem;
    height: 2px;
    background: var(--color-blue);
    border-radius: 2px;
  }

  .process-list {
    padding: 0 2rem;
  }

  .process-card {
    grid-template-columns: auto 1fr;
    column-gap: 1.6rem;
    padding: 2rem 1.6rem;
  }

  .process-number {
    width: 5rem;
    height: 5rem;
    font-size: 2.2rem;
  }

  .process-connector {
    top: 5.2rem;
  }

  .iso-badges {
    position: static;
    justify-content: center;
    column-gap: 2.4rem;
    margin-top: 3.5rem;
  }

  .iso-badge {
    width: 12rem;
  }

  .iso-badge-14001 {
    width: 12.3rem;
  }
}
</style>
