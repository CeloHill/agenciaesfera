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
    
    // Configuração do ScrollTrigger para mudança de cores
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "500px top",
      scrub: 1, // Animação suave seguindo o scroll
      onUpdate: (self) => {
        const progress = self.progress
        
        // Interpolar entre branco e escuro
        const bgColor = gsap.utils.interpolate("#ffffff", "#1d1d1b", progress)
        const textColor = gsap.utils.interpolate("#000000", "#ffffff", progress)
        
        // Aplicar cores ao layout
        gsap.set(layoutRef.value, {
          backgroundColor: bgColor
        })
        
        // Aplicar cor do texto aos elementos principais (respeitando .no-color-change)
        gsap.set("h1:not(.no-color-change), h2:not(.no-color-change)", {
          color: textColor
        })
        
        // Aplicar aos textos principais da primeira seção (área branca)
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
      }
    })
  }
})

onUnmounted(() => {
  if (process.client && ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>

<style scoped>
.layout {
  background-color: var(--color-white);
  transition: background-color 0.1s ease;
}
</style>
