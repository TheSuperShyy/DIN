<script setup lang="ts">
useHead({ title: 'מדיניות פרטיות — טל שולמרק' })
</script>

<template>
  <div class="legal-page">
    <div class="container legal-hero">
      <span class="legal-label">פרטיות</span>
      <h1 class="legal-headline">מדיניות פרטיות</h1>
      <p class="legal-sub">
        חברת "טל שולמרק בע"מ" מכבדת את פרטיותכם ופועלת לשמור על המידע הנמסר לה במסגרת
        הפעילות באתר ובשירותי ההדברה שהיא מספקת.
      </p>
    </div>

    <div class="container legal-body">
      <section class="legal-section">
        <h2>איזה מידע נאסף?</h2>
        <p>
          במסגרת השימוש באתר ובטפסי יצירת הקשר שלנו, אנו עשויים לאסוף את הפרטים הבאים:
          שם מלא, מספר טלפון, כתובת דוא"ל ותוכן הפנייה.
          המידע נאסף אך ורק ישירות מכם ורק כאשר אתם בוחרים למסור אותו.
        </p>
      </section>

      <section class="legal-section">
        <h2>מטרות השימוש במידע</h2>
        <ul>
          <li>יצירת קשר לצורך מתן שירות, הצעות מחיר ותיאום פגישות.</li>
          <li>שיפור השירות, התאמת פתרונות הדברה ומתן מענה מקצועי.</li>
          <li>עמידה בדרישות חוקיות ורגולטוריות.</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>שיתוף מידע עם צדדים שלישיים</h2>
        <p>
          החברה אינה מוסרת מידע אישי אודותיכם לצדדים שלישיים, אלא במקרים הבאים:
          בהסכמתכם, לצורך מתן השירות (למשל ספקי תשתית מאובטחים), או בתוקף דרישה חוקית.
        </p>
      </section>

      <section class="legal-section">
        <h2>אבטחת מידע</h2>
        <p>
          החברה נוקטת באמצעים סבירים לשמירה על אבטחת המידע הנאסף, לרבות הגבלת גישה,
          אחסון בסביבה מאובטחת ושימוש בכלי ניהול עדכניים. יחד עם זאת, אין באפשרותנו להבטיח
          חסינות מוחלטת מפני חדירות וניסיונות פגיעה.
        </p>
      </section>

      <section class="legal-section">
        <h2>זכויותיכם</h2>
        <p>
          בכל עת תוכלו לפנות אלינו בבקשה לעיין במידע הנשמר עלכם, לעדכנו או לבקש את
          הסרתו ממאגרי החברה, וזאת בהתאם להוראות חוק הגנת הפרטיות, התשמ"א–1981.
        </p>
      </section>

      <section class="legal-section">
        <h2>יצירת קשר</h2>
        <ul class="contact-list">
          <li><strong>טלפון:</strong> 054-319-9289</li>
          <li><strong>ווצאפ:</strong> <a href="https://wa.me/972543199289">972543199289</a></li>
        </ul>
        <p class="small-note">מסמך זה עודכן לאחרונה בחודש אפריל 2026.</p>
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
