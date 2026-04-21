<script setup lang="ts">
useHead({ title: 'הצהרת נגישות — טל שולמרק' })
</script>

<template>
  <div class="legal-page">
    <div class="container legal-hero">
      <span class="legal-label">נגישות</span>
      <h1 class="legal-headline">הצהרת נגישות</h1>
      <p class="legal-sub">האתר של חברת "טל שולמרק בע"מ" פועל לאפשר שימוש נוח, נגיש ועצמאי לכלל הגולשים.</p>
    </div>

    <div class="container legal-body">
      <section class="legal-section">
        <h2>מחויבות לנגישות</h2>
        <p>
          אנו מאמינים כי יש להבטיח שוויון הזדמנויות ונגישות מלאה לכלל ציבור המשתמשים,
          לרבות אנשים עם מוגבלויות. אנו פועלים להתאמת האתר לדרישות תקנות שוויון זכויות
          לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג–2013, ברמה AA של תקן WCAG 2.1.
        </p>
      </section>

      <section class="legal-section">
        <h2>התאמות נגישות באתר</h2>
        <ul>
          <li>מבנה סמנטי של כותרות ומרכיבי תוכן לקריאה נוחה בתוכנות הקראה.</li>
          <li>ניגודיות צבעים תואמת תקן.</li>
          <li>טקסטים חלופיים (alt) לתמונות מרכזיות באתר.</li>
          <li>תמיכה בניווט באמצעות מקלדת בלבד.</li>
          <li>טפסים עם תוויות ברורות לכל שדה קלט.</li>
          <li>האתר בנוי במבנה רספונסיבי המתאים לגדלי מסך שונים ולמכשירים ניידים.</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>חריגים</h2>
        <p>
          ייתכנו חלקים באתר שבהם טרם הושלמה התאמת הנגישות המלאה. אנו פועלים לתיקון
          ליקויים אלה באופן שוטף ומזמינים אתכם לדווח לנו על כל תקלת נגישות שתגלו.
        </p>
      </section>

      <section class="legal-section">
        <h2>יצירת קשר — רכז נגישות</h2>
        <p>
          נתקלתם בבעיית נגישות, רוצים להציע התאמה נוספת, או מבקשים לקבל תוכן בפורמט נגיש?
          נשמח לסייע. פרטי רכז הנגישות מטעם החברה:
        </p>
        <ul class="contact-list">
          <li><strong>טלפון:</strong> 054-319-9289</li>
          <li><strong>ווצאפ:</strong> <a href="https://wa.me/972543199289">972543199289</a></li>
        </ul>
        <p class="small-note">נעשה את מירב המאמצים לחזור אליכם בהקדם האפשרי.</p>
      </section>

      <section class="legal-section">
        <p class="small-note">הצהרה זו עודכנה לאחרונה בחודש אפריל 2026.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  direction: rtl;
  color: var(--color-offBlack);
  background: var(--color-offWhite);
  min-height: 100vh;
  padding-top: 12rem;
}

.legal-hero {
  padding: 4vw var(--grid-outerGutter) 2vw;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.legal-label {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-blue);
  letter-spacing: 0.04em;
}

.legal-headline {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--color-offBlack);
  margin: 0;
}

@media only screen and (min-width: 834px) {
  .legal-headline {
    font-size: 6rem;
  }
}

.legal-sub {
  font-size: 1.6rem;
  line-height: 1.6;
  opacity: 0.75;
  max-width: 60rem;
  margin: 0;
}

@media only screen and (min-width: 834px) {
  .legal-sub {
    font-size: 1.8rem;
  }
}

.legal-body {
  padding: 4vw var(--grid-outerGutter) 10vw;
  max-width: 80rem;
  margin: 0 auto;
}

.legal-section {
  margin-bottom: 4rem;
}

.legal-section h2 {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 1.4rem;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .legal-section h2 {
    font-size: 2.4rem;
  }
}

.legal-section p {
  font-size: 1.5rem;
  line-height: 1.8;
  margin: 0 0 1.4rem;
  opacity: 0.85;
}

@media only screen and (min-width: 834px) {
  .legal-section p {
    font-size: 1.6rem;
  }
}

.legal-section ul {
  font-size: 1.5rem;
  line-height: 1.8;
  padding-right: 2rem;
  margin: 0 0 1.4rem;
  opacity: 0.85;
}

.legal-section ul li {
  margin-bottom: 0.4rem;
}

.legal-section a {
  color: var(--color-blue);
  text-decoration: none;
}

.legal-section a:hover {
  text-decoration: underline;
}

.contact-list {
  list-style: none;
  padding: 0 !important;
}

.contact-list li {
  margin-bottom: 0.8rem !important;
}

.small-note {
  font-size: 1.3rem !important;
  opacity: 0.6 !important;
}
</style>
