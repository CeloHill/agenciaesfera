export const useFirstVisit = () => {
  const checkDirectNavigation = () => {
    if (!import.meta.client) return false
    
    // Check for Nuxt internal navigation marker
    const nuxtNavigating = window.__NUXT_NAVIGATING__ || sessionStorage.getItem('nuxt-navigating')
    
    if (nuxtNavigating) {
      console.log('Nuxt internal navigation detected - skipping loader')
      sessionStorage.removeItem('nuxt-navigating')
      return false
    }
    
    // Check if this is a direct navigation (typed URL, refresh, or entered via address bar)
    const navigation = window.performance?.getEntriesByType?.('navigation')?.[0]
    
    if (navigation) {
      console.log('Navigation type:', navigation.type)
      
      // Always show loader for page refresh
      if (navigation.type === 'reload') {
        return true
      }
      
      // For 'navigate', check if it's from address bar or external
      if (navigation.type === 'navigate') {
        const referrer = document.referrer
        const currentDomain = window.location.origin
        
        console.log('Referrer:', referrer)
        console.log('Current domain:', currentDomain)
        
        // Check if referrer is from same domain but different than current page
        if (referrer && referrer.startsWith(currentDomain)) {
          // This is likely internal navigation - check session state
          const sessionStarted = sessionStorage.getItem('esfera-session-started')
          if (sessionStarted) {
            console.log('Internal navigation detected via referrer')
            return false // Don't show loader for internal navigation
          }
        }
        
        // No referrer or external referrer = direct navigation
        if (!referrer || !referrer.startsWith(currentDomain)) {
          return true
        }
      }
      
      // Back/forward navigation - don't show loader
      if (navigation.type === 'back_forward') {
        return false
      }
    }
    
    // Fallback: check if this is the first page load in this session
    const sessionKey = 'esfera-session-started'
    const sessionStarted = sessionStorage.getItem(sessionKey)
    
    if (!sessionStarted) {
      sessionStorage.setItem(sessionKey, 'true')
      return true
    }
    
    return false
  }
  
  // Legacy function - now uses direct navigation check
  const checkFirstVisit = (pageName) => {
    return checkDirectNavigation()
  }
  
  const resetFirstVisit = (pageName) => {
    if (!import.meta.client) return
    
    // Clear session storage to force loader on next navigation
    sessionStorage.removeItem('esfera-session-started')
  }
  
  const resetAllVisits = () => {
    if (!import.meta.client) return
    
    // Clear all session data
    sessionStorage.clear()
  }
  
  const forceLoader = () => {
    if (!import.meta.client) return false
    
    // Remove session marker to force loader
    sessionStorage.removeItem('esfera-session-started')
    return true
  }
  
  return {
    checkFirstVisit,
    checkDirectNavigation,
    resetFirstVisit,
    resetAllVisits,
    forceLoader
  }
}
