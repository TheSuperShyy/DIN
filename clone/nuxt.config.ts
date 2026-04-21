export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tokens.css', '~/assets/css/global.css'],
  app: {
    head: {
      title: 'TAL',
      meta: [
        { name: 'description', content: 'DIN: precision computing for the human scale.' }
      ],
      link: [
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
