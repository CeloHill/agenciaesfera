// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/scripts'],
  pages: true,
  css: ['bootstrap/dist/css/bootstrap.min.css', 'lenis/dist/lenis.css', '~/assets/css/main.css'],
  plugins: ['~/plugins/gsap.client.js', '~/plugins/lenis.client.js'],
  vite: {
    server: { hmr: { overlay: false } }
  },
  nitro: {
    storage: {
      redis: { driver: 'redis' }
    }
  },

  // ⬇️ O que faltava
  routeRules: {
    // Nunca cachear HTML (tanto no browser quanto em CDN)
    '/**': {
      headers: {
        // Be explicit for browser and proxies/CDNs
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0, s-maxage=0, private',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    },
    // Mas mantenha cache agressivo dos assets versionados
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    }
  }
})
