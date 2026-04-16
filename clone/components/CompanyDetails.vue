<script setup lang="ts">
import { content } from '~/content'

const { company } = content
</script>

<template>
  <section class="section bg-off-black home-company-details" data-section-theme="off-black">
    <!-- Top: data cells + abbreviations -->
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
          <img src="/iso-9001.svg" alt="ISO 9001" class="iso-badge" />
          <img src="/iso-14001.svg" alt="ISO 14001" class="iso-badge" />
        </div>
      </div>
    </div>

    <!-- Bottom: title + mission items -->
    <div class="bottom">
      <div class="container home-company-details-container">
        <div class="head reveal">
          <h3 class="cd-title"><span class="title-blue">כיצד השירות מתבצע</span></h3>
        </div>

        <ul class="top-items">
          <li
            v-for="(step, i) in company.steps"
            :key="i"
            class="top-item reveal"
          >
            <div class="item-head">
              <span class="item-head-number">{{ step.number }}</span>
              <span>{{ step.title }}</span>
            </div>
            <div class="item-head-title">
              {{ step.description }}
              <div class="item-head-line" />
            </div>
          </li>
        </ul>
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

.home-company-details-container {
  /* inherits .container 5-col grid */
}

.top-header {
  grid-column: 1 / -1;
  text-align: center;
}

.top-header .cd-title {
  font-size: 3.5rem;
  white-space: nowrap;
  margin-bottom: 3rem;
}

.head {
  grid-column: 1 / -1;
  text-align: center;
  direction: rtl;
}

.cd-title {
  font-size: 2.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media only screen and (min-width: 834px) {
  .cd-title {
    font-size: 3.5rem;
  }
}

.cd-title span {
  display: inline;
}

.title-blue {
  color: var(--color-blue);
}

/* Mission items list */
.top-items {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  list-style: none;
  margin-top: 7rem;
  row-gap: 5.7rem;
}

@media only screen and (min-width: 834px) {
  .top-items {
    grid-column: 2 / 6;
    margin-top: 8.2rem;
    row-gap: 4.2rem;
    transform: translateX(-2.4rem);
  }
}

.top-item {
  display: flex;
  flex-direction: column;
  row-gap: 5.2rem;
}

@media only screen and (min-width: 834px) {
  .top-item {
    column-gap: var(--grid-gutter);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 4.2rem;
    align-items: center;
  }
}

.item-head {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media only screen and (min-width: 834px) {
  .item-head { grid-column: 1 / 2; }
}

.item-head-number {
  display: block;
  margin-bottom: 0.5rem;
  opacity: 0.5;
}

.item-head-title {
  font-size: 2rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding-bottom: 2.5rem;
  position: relative;
  color: var(--color-offWhite);
}

@media only screen and (min-width: 834px) {
  .item-head-title {
    grid-column: 2 / 5;
    padding-bottom: 2rem;
  }
}

.item-head-line {
  background-color: rgba(255, 255, 255, 0.1);
  bottom: 0;
  height: 0.5px;
  left: 0;
  position: absolute;
  transform-origin: left center;
  width: 100%;
}

/* ── Bottom ── */
.bottom {
  background-color: rgba(29, 30, 32, 0.5);
  padding: 23.077vw 0 19.231vw;
}

@media only screen and (min-width: 834px) {
  .bottom { padding: 5.208vw 0 7.639vw; }
}

.bottom-items {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  list-style: none;
  margin-bottom: 8.5rem;
  row-gap: 4.5rem;
}

@media only screen and (min-width: 834px) {
  .bottom-items {
    column-gap: var(--grid-gutter);
    display: grid;
    grid-column: 3 / 6;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0;
  }
}

.bottom-item {
  display: flex;
  flex-direction: column;
}

.bottom-item::before {
  background-color: var(--color-blue);
  content: "";
  height: 1px;
  margin-bottom: 1rem;
  width: 0.72rem;
}

.bottom-item-title {
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  opacity: 0.5;
}

.bottom-item-copy {
  font-size: 1.8rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 2rem;
  color: var(--color-offWhite);
}

.bottom-line {
  background-color: rgba(255, 255, 255, 0.2);
  grid-column: 1 / -1;
  height: 0.5px;
}

@media only screen and (min-width: 834px) {
  .bottom-line { grid-column: 2 / 6; }
}

/* Services grid */
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
  row-gap: 1.6rem;
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
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  font-size: 1.4rem;
  font-weight: 350;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-offWhite);
  padding: 0.4rem 0;
}

@media only screen and (min-width: 834px) {
  .services-cell {
    font-size: 1.6rem;
  }
}

.check-icon {
  color: var(--color-blue);
  font-size: 1.4rem;
}

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
</style>
