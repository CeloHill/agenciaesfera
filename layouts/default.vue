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
      <AppFollowMouse />
      <main class="main-content flex-grow-1 w-100">
        <slot />
      </main>
      <AppFooterSecond />
    </div>
  </div>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()
const { lockScroll, unlockScroll } = useScrollLock()
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
  
  // Unlock scroll when AppLoader completes
  unlockScroll()
  
  // AppLoader itself will dispatch appropriate events based on page type
  // No need to dispatch appLoaderAnimationComplete here
}

// Listen for pages requesting AppLoader
if (process.client) {
  window.addEventListener('requestAppLoader', () => {
    showLoader.value = true
    isPageHidden.value = true
    
    // Lock scroll when AppLoader is requested
    lockScroll()
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
      
      // Lock scroll when AppLoader starts
      lockScroll()
    } else {
      isPageHidden.value = false
      
      // Ensure scroll is unlocked for direct navigation
      unlockScroll()
      
      // Dispatch immediate visibility event for components to animate
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('pageVisibleImmediately'))
      }, 100)
    }
    
    if (gsap && ScrollTrigger) {
      window.scrollTo(0, 0)
    }
  }
})

onUnmounted(() => {
  if (process.client) {
  }
})
</script>

<style scoped>
main {
  min-height: 100vh;
}

.layout {
  background-color: var(--color-white);
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
