import { useGsap } from '~/composables/useGsap'

export const useAnimateNumbers = () => {
  const { gsap, ScrollTrigger } = useGsap()
  
  /**
   * Animates numbers from 0 to their final value with ScrollTrigger
   * @param {string} selector - CSS selector for elements to animate (default: '.big-number')
   * @param {object} options - Animation options
   * @param {number} options.duration - Animation duration in seconds (default: 2)
   * @param {string} options.ease - GSAP easing (default: 'power2.out')
   * @param {string} options.start - ScrollTrigger start position (default: 'top 80%')
   * @param {boolean} options.once - Animate only once (default: true)
   * @param {string} options.locale - Number formatting locale (default: 'pt-BR')
   * @param {boolean} options.formatNumbers - Apply locale formatting (default: true)
   */
  const animateNumbers = (selector = '.big-number', options = {}) => {
    if (!process.client || !gsap || !ScrollTrigger) {
      console.warn('animateNumbers: GSAP or ScrollTrigger not available')
      return
    }
    
    const defaultOptions = {
      duration: 2,
      ease: 'power2.out',
      start: 'top 80%',
      once: true,
      locale: 'pt-BR',
      formatNumbers: true
    }
    
    const config = { ...defaultOptions, ...options }
    const numberElements = document.querySelectorAll(selector)
    
    if (numberElements.length === 0) {
      console.warn(`animateNumbers: No elements found with selector "${selector}"`)
      return
    }
    
    numberElements.forEach(element => {
      const originalText = element.textContent
      const finalValue = parseInt(originalText.replace(/[^\d]/g, ''))
      
      if (finalValue && finalValue > 0) {
        // Set initial value to 0
        gsap.set(element, { textContent: 0 })
        
        // Create ScrollTrigger animation
        ScrollTrigger.create({
          trigger: element,
          start: config.start,
          once: config.once,
          onEnter: () => {
            gsap.to(element, {
              textContent: finalValue,
              duration: config.duration,
              ease: config.ease,
              snap: { textContent: 1 },
              onUpdate: function() {
                const currentValue = Math.round(this.targets()[0].textContent)
                
                if (config.formatNumbers) {
                  element.textContent = currentValue.toLocaleString(config.locale)
                } else {
                  element.textContent = currentValue
                }
              },
              onComplete: () => {
                // Ensure final value is exactly right
                if (config.formatNumbers) {
                  element.textContent = finalValue.toLocaleString(config.locale)
                } else {
                  element.textContent = finalValue
                }
              }
            })
          }
        })
      }
    })
    
    console.log(`animateNumbers: Initialized ${numberElements.length} elements with selector "${selector}"`)
  }
  
  /**
   * Animate numbers immediately without ScrollTrigger
   * @param {string} selector - CSS selector for elements to animate
   * @param {object} options - Animation options (same as animateNumbers)
   */
  const animateNumbersImmediately = (selector = '.big-number', options = {}) => {
    if (!process.client || !gsap) {
      console.warn('animateNumbersImmediately: GSAP not available')
      return
    }
    
    const defaultOptions = {
      duration: 2,
      ease: 'power2.out',
      locale: 'pt-BR',
      formatNumbers: true,
      delay: 0
    }
    
    const config = { ...defaultOptions, ...options }
    const numberElements = document.querySelectorAll(selector)
    
    if (numberElements.length === 0) {
      console.warn(`animateNumbersImmediately: No elements found with selector "${selector}"`)
      return
    }
    
    numberElements.forEach((element, index) => {
      const originalText = element.textContent
      const finalValue = parseInt(originalText.replace(/[^\d]/g, ''))
      
      if (finalValue && finalValue > 0) {
        gsap.set(element, { textContent: 0 })
        
        gsap.to(element, {
          textContent: finalValue,
          duration: config.duration,
          ease: config.ease,
          delay: config.delay + (index * 0.2),
          snap: { textContent: 1 },
          onUpdate: function() {
            const currentValue = Math.round(this.targets()[0].textContent)
            
            if (config.formatNumbers) {
              element.textContent = currentValue.toLocaleString(config.locale)
            } else {
              element.textContent = currentValue
            }
          },
          onComplete: () => {
            if (config.formatNumbers) {
              element.textContent = finalValue.toLocaleString(config.locale)
            } else {
              element.textContent = finalValue
            }
          }
        })
      }
    })
    
    console.log(`animateNumbersImmediately: Started animation for ${numberElements.length} elements`)
  }
  
  /**
   * Reset numbers to their original values
   * @param {string} selector - CSS selector for elements to reset
   */
  const resetNumbers = (selector = '.big-number') => {
    if (!process.client || !gsap) return
    
    const numberElements = document.querySelectorAll(selector)
    
    numberElements.forEach(element => {
      const originalValue = element.getAttribute('data-original-value')
      if (originalValue) {
        gsap.set(element, { textContent: originalValue })
      }
    })
  }
  
  return {
    animateNumbers,
    animateNumbersImmediately,
    resetNumbers
  }
}
