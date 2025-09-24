<template>
  <div ref="layoutRef" class="layout d-flex flex-column min-vh-100">
    <AppNavigation />
    <AppHeader />
    <main class="main-content flex-grow-1 w-100">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()
const layoutRef = ref(null)

onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    
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
})

onUnmounted(() => {
  if (process.client) {
    if (layoutRef.value?._scrollHandler) {
      window.removeEventListener('scroll', layoutRef.value._scrollHandler)
    }
    
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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
