export const useScrollLock = () => {
  let isLocked = false
  let lenisInstance = null
  let originalOverflow = ''
  let originalPosition = ''
  let scrollPosition = 0

  const lockScroll = () => {
    if (isLocked) return

    isLocked = true
    
    // Store current scroll position
    scrollPosition = window.scrollY || document.documentElement.scrollTop
    
    // Store original styles
    originalOverflow = document.body.style.overflow
    originalPosition = document.body.style.position
    
    // Apply scroll lock styles
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
    
    // Disable Lenis if available
    if (process.client) {
      const { $lenis } = useNuxtApp()
      if ($lenis) {
        lenisInstance = $lenis
        $lenis.stop()
      }
      
      // Prevent scroll events
      document.addEventListener('wheel', preventScroll, { passive: false })
      document.addEventListener('touchmove', preventScroll, { passive: false })
      document.addEventListener('keydown', preventKeyScroll, { passive: false })
    }
  }

  const unlockScroll = () => {
    if (!isLocked) return

    isLocked = false
    
    // Restore original styles
    document.body.style.overflow = originalOverflow
    document.body.style.position = originalPosition
    document.body.style.top = ''
    document.body.style.width = ''
    
    // Restore scroll position
    window.scrollTo(0, scrollPosition)
    
    // Re-enable Lenis if available
    if (process.client) {
      if (lenisInstance) {
        lenisInstance.start()
        lenisInstance.scrollTo(scrollPosition, { immediate: true })
      }
      
      // Remove scroll event listeners
      document.removeEventListener('wheel', preventScroll)
      document.removeEventListener('touchmove', preventScroll)
      document.removeEventListener('keydown', preventKeyScroll)
    }
  }

  const preventScroll = (e) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  const preventKeyScroll = (e) => {
    // Prevent scroll with arrow keys, page up/down, home, end
    const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40]
    if (scrollKeys.includes(e.keyCode)) {
      e.preventDefault()
      e.stopPropagation()
      return false
    }
  }

  const isScrollLocked = () => isLocked

  return {
    lockScroll,
    unlockScroll,
    isScrollLocked
  }
}
