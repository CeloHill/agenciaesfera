export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/scripts'],
  pages: true,
  css: ['bootstrap/dist/css/bootstrap.min.css', 'lenis/dist/lenis.css', '~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Agência Esfera',
      titleTemplate: '%s — Agência Esfera',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logos/icon-white.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Esfera — Agência 360 de comunicação e marketing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Agência Esfera' },
        { property: 'og:description', content: 'Esfera — Agência 360 de comunicação e marketing.' },
        { property: 'og:image', content: '/images/logos/logo-dark.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Agência Esfera' },
        { name: 'twitter:description', content: 'Esfera — Agência 360 de comunicação e marketing.' },
        { name: 'twitter:image', content: '/images/logos/logo-dark.png' }
      ]
    }
  },
  plugins: [
    '~/plugins/gsap.client.js', 
    '~/plugins/lenis.client.js',
    '~/plugins/magnetic.client.js'
  ],
  vite: {
    server: { hmr: { overlay: false } }
  },
  nitro: {
    storage: {
      redis: { driver: 'redis' }
    }
  },

  routeRules: {
    '/**': {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0, s-maxage=0, private',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    },
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    }
  }
})
