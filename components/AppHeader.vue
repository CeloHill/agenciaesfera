<template>
  <header ref="headerRef" class="header">
    <div class="header-content">
      <div ref="logoContainerRef" class="header-logo-wrapper">
        <NuxtLink to="/" class="header-logo">
          <img 
            ref="logoRef" 
            src="/images/logos/icon-white.svg" 
            alt="Agência Esfera" 
            class="logo-image"
          >
        </NuxtLink>
      </div>
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
  initMagneticEffect: initButtonMagnetic
} = useMagneticEffect({
  maxDistance: 150,
  intensity: 0.6,
  textAnimation: true
})

const { 
  elementRef: logoContainerRef, 
  initMagneticEffect: initLogoMagnetic
} = useMagneticEffect({
  maxDistance: 100,
  intensity: 0.4,
  textAnimation: false
})


onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    
    nextTick(() => {
      window.scrollTo(0, 0)
      
      initButtonMagnetic()
      initLogoMagnetic()
      
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
      
      // Listen for video expand start (AppIntro)
      window.addEventListener('videoExpandStart', () => {
        gsap.to(headerRef.value, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        })
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
    window.removeEventListener('videoExpandStart', () => {})
  
    
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
  mix-blend-mode: difference;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px var(--body-horizontal-padding);
}

.header-logo-wrapper {
  cursor: pointer;
  will-change: transform;
  transform-origin: center;
  transition: all 0s ease;
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
  border-color: #fff;

  &:hover,
  &:focus-visible {
    .magnetic-text {
      color: #000;
    }
  }
}

.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #fff;
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
  color: #fff;
  transition: color 0.3s ease;
}

.button.white .magnetic-text {
  color: #fff;
}

@media (max-width: 768px) {
  .header {
    padding-top: 15px;
  }
}

@media (max-width: 480px) {
  .header {
    padding-top: 0px;
  }
}
</style>