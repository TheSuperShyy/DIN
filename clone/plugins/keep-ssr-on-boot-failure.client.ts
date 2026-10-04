// When the browser can't finish booting the app on a page the server already
// rendered (usually a /_nuxt/*.js chunk that fails to load — e.g. a newer deploy
// replaced it before Googlebot's renderer fetched it), Nuxt mounts its built-in
// error page over the good HTML and crawlers index
// "500 - Internal Server Error | Nuxt". Skip mounting instead and keep the
// server-rendered page (body and <head>) exactly as delivered: it stays readable
// and its links still work as normal page loads.
export default defineNuxtPlugin({
  name: 'keep-ssr-on-boot-failure',
  // Run right after the payload is revived (-30) and before nuxt:head and
  // nuxt:router (-20). The router starts the first navigation inside its own
  // setup, so a failed page chunk is reported before default-order plugins run —
  // and at this point payload.error can only be a genuine server-side error.
  order: -25,
  setup(nuxtApp) {
    // Genuine server errors (real 404/500 responses) keep the normal error page.
    if (!nuxtApp.payload.serverRendered || nuxtApp.payload.error) return

    let mounted = false
    nuxtApp.hook('app:mounted', () => { mounted = true })
    const bootFailed = () => !mounted && !!nuxtApp.payload.error

    // nuxt:head re-renders <head> on app:error. This hook is registered before
    // nuxt:head's, so it runs first and can veto that render — keeping the
    // server's <title>/meta. (The head instance doesn't exist yet at setup.)
    let headGuarded = false
    nuxtApp.hook('app:error', () => {
      if (headGuarded || mounted) return
      headGuarded = true
      nuxtApp.runWithContext(() => {
        injectHead()?.hooks.hook('dom:beforeRender', (ctx) => {
          if (bootFailed()) ctx.shouldRender = false
        })
      })
    })

    nuxtApp.hook('app:beforeMount', () => {
      if (!bootFailed()) return
      console.error('[keep-ssr] client boot failed, keeping server-rendered page:', nuxtApp.payload.error)
      // Scroll-reveal sections stay at opacity 0 until JS runs — show them.
      document.querySelectorAll('.reveal, .reveal-fade').forEach((el) => el.classList.add('is-visible'))
      // Throwing here makes Nuxt's client entry skip vueApp.mount().
      throw nuxtApp.payload.error
    })
  }
})
