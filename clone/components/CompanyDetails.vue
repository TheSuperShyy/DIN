<script setup lang="ts">
</script>

<template>
  <section class="section bg-off-black home-company-details" data-section-theme="off-black">
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
              <div class="services-cell"><span class="check-icon">✓</span> חברתנו מתמחה בכל סוגי הדברת המזיקים - מכרסמים / חרקים / מעופפים / פרעושים</div>
              <div class="services-cell"><span class="check-icon">✓</span> טיפול במטרדי בעלי כנף - יונים, דרורים, עורבים, מיינות, דררות ועוד...</div>
              <div class="services-cell"><span class="check-icon">✓</span> הקמת מערך ניטור והדברה ממוחשב</div>
              <div class="services-cell"><span class="check-icon">✓</span> הדברת מזיקי מחסן - ממגורות, מכולות, ספריות ועוד...</div>
            </div>
            <div class="services-divider" />
            <div class="services-column">
              <div class="services-cell"><span class="check-icon">✓</span> איוד בגז</div>
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
          <img src="/iso-14001.svg" alt="ISO 14001:2015" class="iso-badge iso-badge-14001" />
          <img src="/iso-9001.svg" alt="ISO 9001:2015" class="iso-badge iso-badge-9001" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-company-details {
  background-color: var(--color-offBlack);
  color: var(--color-offWhite);
}

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

/* 14001 SVG's outer ring artwork is drawn meaningfully smaller inside its
   viewBox than 9001's, so its rendered ring looks ~20-25% smaller at the
   same CSS width. Bump width to compensate so the two rings visually match.
   Filter (invert + hue-rotate) flips the dark MIQC text to white while
   preserving the green ring. */
.iso-badge-14001 {
  width: 16rem;
  filter: invert(1) hue-rotate(180deg);
}

@media only screen and (max-width: 833px) {
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
    width: 13.5rem;
  }
}
</style>
