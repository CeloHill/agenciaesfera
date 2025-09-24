import { useGsap } from '~/composables/useGsap'

export const magneticDirective = {
  // Add SSR support
  getSSRProps() {
    return {}
  },
  
  mounted(el, binding) {
    if (!process.client) return
    
    const { gsap } = useGsap()
    
    // Default options
    const defaultOptions = {
      maxDistance: 150,
      intensity: 0.6,
      duration: 0.2,
      ease: "power2.out",
      returnDuration: 0.5,
      returnEase: "elastic.out(1, 0.5)",
      textAnimation: false
    }
    
    // Merge with user options
    const options = { ...defaultOptions, ...binding.value }
    
    // State
    let isMouseOver = false
    let magneticTween = null
    let textTween = null
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      if (!isMouseOver) return
      
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      const deltaX = mouseX - centerX
      const deltaY = mouseY - centerY
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      if (distance < options.maxDistance) {
        const strength = (options.maxDistance - distance) / options.maxDistance
        const moveX = deltaX * strength * options.intensity
        const moveY = deltaY * strength * options.intensity
        
        if (magneticTween) magneticTween.kill()
        
        magneticTween = gsap.to(el, {
          x: moveX,
          y: moveY,
          duration: options.duration,
          ease: options.ease
        })
      }
    }
    
    // Mouse enter handler
    const handleMouseEnter = () => {
      isMouseOver = true
      
      if (options.textAnimation) {
        const textElement = el.querySelector('.magnetic-text')
        if (textElement) {
          if (textTween) textTween.kill()
          
          textTween = gsap.timeline()
            .to(textElement, {
              y: -30,
              opacity: 0,
              duration: 0.15,
              ease: "power2.in"
            })
            .set(textElement, {
              y: 30,
              opacity: 0
            })
            .to(textElement, {
              y: 0,
              opacity: 1,
              duration: 0.15,
              ease: "power2.out"
            })
        }
      }
    }
    
    // Mouse leave handler
    const handleMouseLeave = () => {
      isMouseOver = false
      
      if (magneticTween) magneticTween.kill()
      
      if (options.textAnimation) {
        const textElement = el.querySelector('.magnetic-text')
        if (textElement) {
          if (textTween) textTween.kill()
          
          textTween = gsap.timeline()
            .to(textElement, {
              y: 30,
              opacity: 0,
              duration: 0.15,
              ease: "power2.in"
            })
            .set(textElement, {
              y: -30,
              opacity: 0
            })
            .to(textElement, {
              y: 0,
              opacity: 1,
              duration: 0.15,
              ease: "power2.out"
            })
        }
      }
      
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: options.returnDuration,
        ease: options.returnEase
      })
    }
    
    // Add event listeners
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousemove', handleMouseMove)
    
    // Store cleanup function
    el._magneticCleanup = () => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousemove', handleMouseMove)
      if (magneticTween) magneticTween.kill()
      if (textTween) textTween.kill()
    }
  },
  
  unmounted(el) {
    if (el._magneticCleanup) {
      el._magneticCleanup()
    }
  }
}
