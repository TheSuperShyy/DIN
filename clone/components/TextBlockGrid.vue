<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  purpose: 'client',
  fullName: '',
  phone: '',
  email: '',
  note: '',
  resume: null as File | null
})

const resumeName = ref('')

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.value.resume = target.files[0]
    resumeName.value = target.files[0].name
  }
}

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <section class="section contact-section" data-section-theme="off-white">
    <div class="contact-inner">
      <!-- Left: heading -->
      <div class="contact-heading reveal">
        <Transition name="blur-reveal" mode="out-in">
          <div :key="form.purpose">
            <h2 class="contact-title">{{ form.purpose === 'client' ? 'השאירו פרטים' : 'מחפש עבודה?' }}</h2>
            <p class="contact-subtitle">{{ form.purpose === 'client' ? 'השאירו שם וטלפון, ומומחה הדברה מוסמך מטעמנו יחזור אליכם בהקדם לתיאום ייעוץ וניטור בשטח. פריסה ארצית ומענה מקצועי מובטח.' : 'השאר את הפרטים שלך וצרף קורות חיים. נשמח לעיין וליצור איתך קשר.' }}</p>
          </div>
        </Transition>
      </div>

      <!-- Right: form -->
      <div class="form-card reveal">
        <div v-if="submitted" class="success-msg">
          <span class="success-icon">&#10003;</span>
          <p>הפרטים נשלחו בהצלחה!</p>
          <p class="success-sub">ניצור איתך קשר בהקדם</p>
          <button class="reset-btn" @click="submitted = false; resumeName = ''; form = { purpose: 'client', fullName: '', phone: '', email: '', note: '', resume: null }">
            שליחה נוספת
          </button>
        </div>

        <form v-else @submit.prevent="handleSubmit">
          <div class="form-toggle">
            <button
              type="button"
              class="toggle-btn"
              :class="{ active: form.purpose === 'client' }"
              @click="form.purpose = 'client'"
            >לקוח מעוניין</button>
            <button
              type="button"
              class="toggle-btn"
              :class="{ active: form.purpose === 'job' }"
              @click="form.purpose = 'job'"
            >מעוניין בעבודה</button>
          </div>

          <Transition name="blur-reveal" mode="out-in">
            <div :key="form.purpose" class="form-body">
              <div class="form-row">
                <div class="form-group">
                  <label for="fullName">שם מלא</label>
                  <input
                    id="fullName"
                    v-model="form.fullName"
                    type="text"
                    placeholder="הכנס את שמך"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="phone">טלפון</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="050-000-0000"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email">אימייל</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="note">{{ form.purpose === 'client' ? 'איך נוכל לעזור? (אופציונלי)' : 'ספר לנו על עצמך (אופציונלי)' }}</label>
                <textarea
                  id="note"
                  v-model="form.note"
                  :placeholder="form.purpose === 'client' ? 'ספר לנו על הבעיה שלך...' : 'ניסיון, תחום התמחות...'"
                  rows="3"
                />
              </div>

              <div v-if="form.purpose === 'job'" class="form-group">
                <label for="resume">קורות חיים (PDF, DOC)</label>
                <label class="file-upload" :class="{ 'has-file': resumeName }">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    @change="handleFileChange"
                  />
                  <span class="file-upload-icon">📎</span>
                  <span class="file-upload-text">{{ resumeName || 'העלה קובץ' }}</span>
                </label>
              </div>

              <button type="submit" class="submit-btn">
                שליחה
              </button>
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background:
    radial-gradient(ellipse at 80% 0%, rgba(212, 160, 23, 0.08), transparent 60%),
    linear-gradient(180deg, var(--color-offWhite) 0%, var(--color-white) 100%);
  color: var(--color-offBlack);
  padding: 10vw var(--grid-outerGutter);
  direction: rtl;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

@media only screen and (min-width: 834px) {
  .contact-section {
    padding: 3vw var(--grid-outerGutter);
  }
}

.contact-inner {
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

@media only screen and (min-width: 834px) {
  .contact-inner {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 6vw;
  }
}

/* Heading */
.contact-heading {
  flex-shrink: 0;
  text-align: center;
}

@media only screen and (min-width: 834px) {
  .contact-heading {
    text-align: right;
    padding-top: 2rem;
    min-width: 18rem;
  }
}

.contact-title {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 3.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 1.4rem;
  color: var(--color-offBlack);
}

@media only screen and (min-width: 834px) {
  .contact-title { font-size: 4.4rem; }
}

.contact-subtitle {
  font-family: "Heebo", system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  opacity: 0.7;
  line-height: 1.7;
  max-width: 34rem;
}

@media only screen and (min-width: 834px) {
  .contact-subtitle {
    font-size: 1.5rem;
  }
}

/* Form card */
.form-card {
  flex: 1;
  background: var(--color-white);
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  border-radius: 2rem;
  padding: 3.2rem 2.8rem;
  box-shadow: 0 12px 40px rgba(15, 16, 18, 0.06);
}

@media only screen and (min-width: 834px) {
  .form-card {
    max-width: 56rem;
    padding: 4rem 4rem;
  }
}

/* Two-column row for name + phone */
.form-row {
  display: flex;
  flex-direction: column;
  gap: 0;
}

@media only screen and (min-width: 834px) {
  .form-row {
    flex-direction: row;
    gap: 1.6rem;
  }
  .form-row .form-group {
    flex: 1;
  }
}

.form-group {
  margin-bottom: 1.6rem;
}

.form-group label {
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
  opacity: 0.7;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: var(--color-offWhite);
  border: 0.5px solid rgba(0, 0, 0, 0.10);
  border-radius: 0.8rem;
  padding: 1.3rem 1.4rem;
  font-size: 1.4rem;
  font-family: inherit;
  color: var(--color-offBlack);
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;
  direction: rtl;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(0, 0, 0, 0.3);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-blue);
  background: var(--color-white);
}

.form-group textarea {
  resize: vertical;
  min-height: 6rem;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 0.8rem;
  background: var(--color-blue);
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-top: 0.2rem;
}

.submit-btn:hover {
  opacity: 0.85;
}

/* File upload */
.file-upload {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  background: var(--color-offWhite);
  border: 1px dashed rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.file-upload:hover {
  border-color: var(--color-blue);
  background: rgba(0, 113, 227, 0.03);
}

.file-upload.has-file {
  border-style: solid;
  border-color: var(--color-blue);
}

.file-upload input {
  display: none;
}

.file-upload-icon {
  font-size: 1.4rem;
}

.file-upload-text {
  font-size: 1.3rem;
  color: var(--color-offBlack);
  opacity: 0.5;
}

.file-upload.has-file .file-upload-text {
  opacity: 0.8;
}

/* Purpose toggle */
.form-toggle {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2.4rem;
  padding-bottom: 2.4rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
}

.toggle-btn {
  flex: 1;
  padding: 1rem;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  background: transparent;
  color: var(--color-offBlack);
  font-size: 1.3rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
  transition: color 0.35s ease, border-color 0.35s ease;
}

.toggle-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-blue);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: inherit;
}

.toggle-btn.active::after {
  transform: scaleX(1);
}

.toggle-btn.active {
  color: var(--color-white);
  border-color: var(--color-blue);
}

.toggle-btn:not(.active):hover {
  background: rgba(0, 0, 0, 0.04);
}

/* Success state */
.success-msg {
  text-align: center;
  padding: 3rem 2rem;
}

.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: var(--color-blue);
  color: var(--color-white);
  font-size: 2rem;
  margin-bottom: 1.6rem;
}

.success-msg p {
  font-size: 1.6rem;
  font-weight: 600;
}

.success-sub {
  font-size: 1.3rem !important;
  font-weight: 350 !important;
  opacity: 0.5;
  margin-top: 0.6rem;
}

.reset-btn {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 10rem;
  background: transparent;
  color: var(--color-offBlack);
  font-size: 1.3rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s ease;
}

.reset-btn:hover {
  background: rgba(0, 0, 0, 0.04);
}

/* Blur reveal transition */
.blur-reveal-enter-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.blur-reveal-leave-active {
  transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
}

.blur-reveal-enter-from {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(6px);
}

.blur-reveal-leave-to {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(-4px);
}

.form-body {
  /* Ensure layout doesn't jump */
}
</style>
