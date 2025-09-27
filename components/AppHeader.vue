<template>
  <header ref="headerRef" class="header">
    <div class="header-content">
      <NuxtLink to="/" class="header-logo">
        <img 
          ref="logoRef" 
          src="/images/logos/icon-black.svg" 
          alt="Agência Esfera" 
          class="logo-image"
        >
      </NuxtLink>
      <button ref="buttonRef" class="button">
        <span class="magnetic-text">let's talk</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useMagneticEffect } from '~/composables/useMagneticEffect'

const { gsap, ScrollTrigger } = useGsap()
const headerRef = ref(null)
const logoRef = ref(null)

const { 
  elementRef: buttonRef, 
  initMagneticEffect 
} = useMagneticEffect({
  maxDistance: 150,
  intensity: 0.6,
  textAnimation: true
})


onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    
    nextTick(() => {
      window.scrollTo(0, 0)
      
      gsap.set(logoRef.value, {
        filter: `invert(0)`
      })
      
      if (buttonRef.value) {
        buttonRef.value.classList.remove('white')
      }
      
      initMagneticEffect()
      
      // Always start header hidden
      gsap.set(headerRef.value, {
        y: -100,
        opacity: 0
      })
      
      // Listen for page visibility to animate header down
      window.addEventListener('appLoaderAnimationComplete', () => {
        gsap.to(headerRef.value, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.3
        })
      })
      
      // Listen for immediate page visibility (no loader)
      window.addEventListener('pageVisibleImmediately', () => {
        gsap.to(headerRef.value, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.1
        })
      })
      
      window.addEventListener('colorTransitionUpdate', (event) => {
        const progress = event.detail.progress
        
        const logoInvert = gsap.utils.interpolate(0, 1, progress)
        
        gsap.set(logoRef.value, {
          filter: `invert(${logoInvert})`
        })
        
        if (buttonRef.value) {
          if (progress > 0.5) {
            buttonRef.value.classList.add('white')
          } else {
            buttonRef.value.classList.remove('white')
          }
        }
      })
      
      // Listen for intro animation completion to reset state
      window.addEventListener('introAnimationComplete', () => {
        // Reset logo filter to default (will be controlled by scroll again)
        gsap.set(logoRef.value, {
          filter: `invert(0)`
        })
        
        // Reset button class
        if (buttonRef.value) {
          buttonRef.value.classList.remove('white')
        }
      })
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('colorTransitionUpdate', () => {})
    window.removeEventListener('appLoaderAnimationComplete', () => {})
    window.removeEventListener('pageVisibleImmediately', () => {})
    window.removeEventListener('introAnimationComplete', () => {})
    
    if (logoRef.value) {
      gsap.set(logoRef.value, {
        clearProps: "filter"
      })
    }
    
    if (buttonRef.value) {
      buttonRef.value.classList.remove('white')
    }
    
    if (headerRef.value) {
      gsap.set(headerRef.value, {
        clearProps: "y,opacity"
      })
    }
  }
})

</script>

<style scoped>
.header {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 10001;
  padding-top: 50px;
  transform: translateY(-100vh);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px var(--body-horizontal-padding);
}

.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 50px;
  height: 100%;
  transition: filter 0.1s ease;
}

.button {
  transition: all 0s ease;
  cursor: pointer;
  will-change: transform;
  transform-origin: center;
  overflow: hidden;
  position: relative;
  background: transparent;
}

.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--color-yellow);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: -1;
}

.button:hover::before {
  width: 300px;
  height: 300px;
}

.magnetic-text {
  display: inline-block;
  will-change: transform, opacity;
  position: relative;
  z-index: 1;
  color: var(--color-black);
  transition: color 0.3s ease;
}

.button.white .magnetic-text {
  color: var(--color-white);
}

@media (max-width: 768px) {
  .header {
    padding-top: 15px;
  }
}
</style>