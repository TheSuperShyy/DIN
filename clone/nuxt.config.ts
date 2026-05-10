export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tokens.css', '~/assets/css/global.css'],
  routeRules: {
    '/updates':     { redirect: { to: '/', statusCode: 301 } },
    '/programs':    { redirect: { to: '/', statusCode: 301 } },
    '/products/**': { redirect: { to: '/', statusCode: 301 } },
    '/neurals/**':  { redirect: { to: '/', statusCode: 301 } }
  },
  runtimeConfig: {
    // Server-only — read by /api/contact when relaying form submissions.
    // Set these in clone/.env locally and in Vercel → Settings → Environment
    // Variables for production.
    smtpHost: process.env.NUXT_SMTP_HOST || '',
    smtpPort: process.env.NUXT_SMTP_PORT || '465',
    smtpUser: process.env.NUXT_SMTP_USER || '',
    smtpPass: process.env.NUXT_SMTP_PASS || '',
    mailFrom: process.env.NUXT_MAIL_FROM || '',
    mailTo: process.env.NUXT_MAIL_TO || ''
  },
  app: {
    head: {
      title: 'טל שולמרק בע"מ - שירותי הדברה מקצועיים',
      htmlAttrs: { lang: 'he', dir: 'rtl' },
      meta: [
        { name: 'description', content: 'טל שולמרק בע"מ — החברה המובילה בישראל בתחום הדברת מזיקים וטיפול במטרדי בעלי כנף. שירות מקצועי בפריסה ארצית, בעמידה בתקני ISO 9001 ו-ISO 14001.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/TAL-logov2.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Heebo:wght@400;500;700;800;900&family=Lora:ital,wght@0,400;1,400&display=swap'
        }
      ]
    }
  }
})
