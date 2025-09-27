<template>
  <div ref="layoutRef" class="layout d-flex flex-column min-vh-100">
    <AppLoader 
      v-if="showLoader"
      :logo-url="'/images/logos/logo-black.svg'"
      :logo-alt="'Esfera Logo'"
      :show-percent="false"
      :animation-type="'default'"
      @loading-complete="onLoadingComplete"
      @animation-complete="onAnimationComplete"
    />
    <div :class="{ 'page-hidden': isPageHidden }">
      <AppNavigation />
      <AppHeader />
      <main class="main-content flex-grow-1 w-100">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()
const layoutRef = ref(null)
const showLoader = ref(false)
const isPageHidden = ref(true)

// AppLoader callbacks
const onLoadingComplete = () => {
  console.log('Loading complete')
}

const onAnimationComplete = () => {
  showLoader.value = false
  isPageHidden.value = false
  
  // No scroll locking needed
  
  // Notify page that loader is complete
  window.dispatchEvent(new CustomEvent('appLoaderAnimationComplete'))
}

// Listen for pages requesting AppLoader
if (process.client) {
  window.addEventListener('requestAppLoader', () => {
    showLoader.value = true
    isPageHidden.value = true
    
    // No scroll locking needed
  })
}

onMounted(async () => {
  if (process.client) {
    // Import the useFirstVisit composable to check navigation
    const { useFirstVisit } = await import('~/composables/useFirstVisit')
    const { checkDirectNavigation } = useFirstVisit()
    
    // Check if we should show AppLoader on direct navigation
    const shouldShowLoader = checkDirectNavigation()
    
    if (shouldShowLoader) {
      showLoader.value = true
      isPageHidden.value = true
      
      // No scroll locking needed
    } else {
      isPageHidden.value = false
      
      // No scroll management needed
      
      // Dispatch immediate visibility event for components to animate
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('pageVisibleImmediately'))
      }, 100)
    }
    
    if (gsap && ScrollTrigger) {
      // Ensure layout always starts with white background
      gsap.set(layoutRef.value, {
        backgroundColor: "#ffffff"
      })
      
      // Ensure page always starts at top
      window.scrollTo(0, 0)
    
      nextTick(() => {
        // ScrollTrigger configuration for color changes
        const scrollColorTrigger = ScrollTrigger.create({
          trigger: "body",
          start: "top top",
          end: "500px top",
          scrub: 1, // Smooth animation following scroll
          onUpdate: (self) => {
            const progress = self.progress
            
            const bgColor = gsap.utils.interpolate("#ffffff", "#1d1d1b", progress)
            const textColor = gsap.utils.interpolate("#000000", "#ffffff", progress)
            
            gsap.set(layoutRef.value, {
              backgroundColor: bgColor
            })
            
            gsap.set("h1:not(.no-color-change), h2:not(.no-color-change)", {
              color: textColor
            })
            
            gsap.set(".full-banner-content p:not(.no-color-change), .full-banner-content span:not(.no-color-change)", {
              color: textColor
            })
            
            gsap.set(".award-text-title", {
              color: textColor
            })
            
            gsap.set(".color-change-text:not(.no-color-change)", {
              color: textColor
            })
            
            gsap.set(".big-number.color-change-text, .big-number-plus.color-change-text", {
              color: textColor
            })
            
            gsap.set(".clients-title:not(.no-color-change)", {
              color: textColor
            })
            
            window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
              detail: { progress }
            }))
          }
      })
      
      ScrollTrigger.refresh()
      
      const forceInitialState = () => {
        gsap.set(layoutRef.value, {
          backgroundColor: "#ffffff"
        })
        gsap.set("h1:not(.no-color-change), h2:not(.no-color-change)", {
          color: "#000000"
        })
        gsap.set(".full-banner-content p:not(.no-color-change), .full-banner-content span:not(.no-color-change)", {
          color: "#000000"
        })
        gsap.set(".award-text-title", {
          color: "#000000"
        })
        gsap.set(".color-change-text:not(.no-color-change)", {
          color: "#000000"
        })
        gsap.set(".big-number.color-change-text, .big-number-plus.color-change-text", {
          color: "#000000"
        })
        gsap.set(".clients-title:not(.no-color-change)", {
          color: "#000000"
        })
        
        window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
          detail: { progress: 0 }
        }))
      }
      
      if (window.scrollY === 0) {
        forceInitialState()
      }
      
      const handleScroll = () => {
        if (window.scrollY === 0) {
          forceInitialState()
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      layoutRef.value._scrollHandler = handleScroll
      
      })
    }
  }
})

onUnmounted(() => {
  if (process.client) {
    if (layoutRef.value?._scrollHandler) {
      window.removeEventListener('scroll', layoutRef.value._scrollHandler)
    }
    
    if (ScrollTrigger) {
      // Kill only the color transition ScrollTrigger, not all triggers
      const allTriggers = ScrollTrigger.getAll()
      allTriggers.forEach(trigger => {
        // Only kill triggers that are not from pages (like the gallery)
        if (!trigger.vars || !trigger.vars.trigger || !trigger.vars.trigger.classList.contains('section-portfolio-gallery')) {
          trigger.kill()
        }
      })
    }
    
    if (layoutRef.value) {
      gsap.set(layoutRef.value, {
        clearProps: "backgroundColor"
      })
    }
  }
})
</script>

<style scoped>
.layout {
  background-color: var(--color-white);
  transition: background-color 0.1s ease;
}

.page-hidden {
  opacity: 0;
  visibility: hidden;
}
</style>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Layout transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s ease-in-out;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(4px);
}

/* Custom fade-slide transition for index page */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
}
</style>
