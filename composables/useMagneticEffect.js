import { ref, onMounted, onUnmounted } from 'vue'
import { useGsap } from '~/composables/useGsap'

export const useMagneticEffect = (options = {}) => {
  const { gsap } = useGsap()
  
  // Default options
  const defaultOptions = {
    maxDistance: 150,
    intensity: 0.6,
    duration: 0.2,
    ease: "power2.out",
    returnDuration: 0.5,
    returnEase: "elastic.out(1, 0.5)",
    textAnimation: false,
    textUpDuration: 0.15,
    textDownDuration: 0.15
  }
  
  const config = { ...defaultOptions, ...options }
  
  // State
  const elementRef = ref(null)
  let isMouseOver = false
  let magneticTween = null
  let textTween = null
  
  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!elementRef.value || !isMouseOver) return
    
    const rect = elementRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX
    const mouseY = e.clientY
    
    const deltaX = mouseX - centerX
    const deltaY = mouseY - centerY
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance < config.maxDistance) {
      const strength = (config.maxDistance - distance) / config.maxDistance
      const moveX = deltaX * strength * config.intensity
      const moveY = deltaY * strength * config.intensity
      
      // Cancel previous animation if exists
      if (magneticTween) {
        magneticTween.kill()
      }
      
      // Apply magnetic movement
      magneticTween = gsap.to(elementRef.value, {
        x: moveX,
        y: moveY,
        duration: config.duration,
        ease: config.ease
      })
    }
  }
  
  // Mouse enter handler
  const handleMouseEnter = () => {
    isMouseOver = true
    
    // Text animation if enabled
    if (config.textAnimation && elementRef.value) {
      const textElement = elementRef.value.querySelector('.magnetic-text')
      if (textElement) {
        animateTextIn(textElement)
      }
    }
  }
  
  // Mouse leave handler
  const handleMouseLeave = () => {
    isMouseOver = false
    
    // Cancel magnetic animation
    if (magneticTween) {
      magneticTween.kill()
    }
    
    // Text animation if enabled
    if (config.textAnimation && elementRef.value) {
      const textElement = elementRef.value.querySelector('.magnetic-text')
      if (textElement) {
        animateTextOut(textElement)
      }
    }
    
    // Return to original position
    gsap.to(elementRef.value, {
      x: 0,
      y: 0,
      duration: config.returnDuration,
      ease: config.returnEase
    })
  }
  
  // Text animation in
  const animateTextIn = (textElement) => {
    if (textTween) textTween.kill()
    
    textTween = gsap.timeline()
      .to(textElement, {
        y: -30,
        opacity: 0,
        duration: config.textUpDuration,
        ease: "power2.in"
      })
      .set(textElement, {
        y: 30,
        opacity: 0
      })
      .to(textElement, {
        y: 0,
        opacity: 1,
        duration: config.textDownDuration,
        ease: "power2.out"
      })
  }
  
  // Text animation out
  const animateTextOut = (textElement) => {
    if (textTween) textTween.kill()
    
    textTween = gsap.timeline()
      .to(textElement, {
        y: 30,
        opacity: 0,
        duration: config.textUpDuration,
        ease: "power2.in"
      })
      .set(textElement, {
        y: -30,
        opacity: 0
      })
      .to(textElement, {
        y: 0,
        opacity: 1,
        duration: config.textDownDuration,
        ease: "power2.out"
      })
  }
  
  // Initialize magnetic effect
  const initMagneticEffect = () => {
    if (!elementRef.value || !process.client) return
    
    elementRef.value.addEventListener('mouseenter', handleMouseEnter)
    elementRef.value.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousemove', handleMouseMove)
  }
  
  // Cleanup magnetic effect
  const destroyMagneticEffect = () => {
    if (!elementRef.value || !process.client) return
    
    elementRef.value.removeEventListener('mouseenter', handleMouseEnter)
    elementRef.value.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mousemove', handleMouseMove)
    
    if (magneticTween) magneticTween.kill()
    if (textTween) textTween.kill()
  }
  
  // Auto cleanup on unmount
  onUnmounted(() => {
    destroyMagneticEffect()
  })
  
  return {
    elementRef,
    initMagneticEffect,
    destroyMagneticEffect,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  }
}
