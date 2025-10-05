export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/scripts'],
  pages: true,
  css: ['bootstrap/dist/css/bootstrap.min.css', 'lenis/dist/lenis.css', '~/assets/css/main.css'],
  app: {
    head: {
      title: 'Agência Esfera | Eventos que conectam pessoas, ideias e marcas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Agência 360° especializada em eventos corporativos. Transformamos ideias em experiências únicas com energia, paixão e respeito.' },
        { name: 'keywords', content: 'eventos corporativos, agência de eventos, marketing de eventos, produção de eventos' },
        { property: 'og:title', content: 'Esfera - Agência de Eventos Corporativos' },
        { property: 'og:description', content: 'Agência 360° especializada em eventos corporativos. Transformamos ideias em experiências únicas com energia, paixão e respeito.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
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
