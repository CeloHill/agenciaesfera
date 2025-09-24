export default defineNuxtRouteMiddleware((to, from) => {
  // Only run on client side
  if (import.meta.client) {
    // If we're navigating from one route to another (not initial page load)
    if (from && from.path !== to.path) {
      console.log('🔄 Nuxt internal navigation:', from.path, '→', to.path)
      
      // Mark that this is internal navigation
      sessionStorage.setItem('nuxt-navigating', 'true')
      
      // Also set a flag on window for immediate access
      if (typeof window !== 'undefined') {
        ;(window as any).__NUXT_NAVIGATING__ = true
        
        // Clear the flag after a short delay
        setTimeout(() => {
          ;(window as any).__NUXT_NAVIGATING__ = false
        }, 100)
      }
    } else if (!from) {
      console.log('🚀 Initial page load:', to.path)
    }
  }
})
