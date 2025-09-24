export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/scripts'],
  pages: true,
  css: ['bootstrap/dist/css/bootstrap.min.css', 'lenis/dist/lenis.css', '~/assets/css/main.css'],
  app: {
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
