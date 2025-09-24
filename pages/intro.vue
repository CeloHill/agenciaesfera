<template>
  <div class="intro-page">
    <AppLoader 
      :logo-url="'/images/logos/logo-black.svg'"
      :logo-alt="'Esfera Logo'"
      :show-percent="false"
      :animation-type="'default'"
      @loading-complete="onLoadingComplete"
      @animation-complete="onAnimationComplete"
    />
    <AppNavigation />
    <AppHeader />
    <div class="banner-container" ref="containerRef" v-show="showBanner">
      <!-- Screen 1: Intro Experience -->
      <div class="screen screen-1" ref="screen1">
        <div class="intro-content">
          <div class="intro-text-slider">
            <div class="slide-1">
              <div class="slide-1-text-1">Eventos corporativos para </div>
              <div class="slide-1-text-2">impulsionar <span class="video-intro-text-highlight">seu sucesso</span></div>
            </div>
            <div class="slide-2">
              <div class="slide-2-text-1">Inovação é movimento </div>
              <div class="slide-2-text-2"><span>e por aqui a gente nunca para.</span></div>
            </div>
          </div>
          <div class="video-intro-container">
            <video class="video-bg-intro" src="/videos/video-intro-esfera.mp4" autoplay loop muted playsinline></video>
          </div>
          <div class="video-intro-text">
            Somos uma <br />
            <span class="video-intro-text-highlight">agência 360</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useGsap } from '~/composables/useGsap'
import { useRouter } from 'vue-router'

const { gsap, ScrollTrigger } = useGsap()
const router = useRouter()

const containerRef = ref(null)
const screen1 = ref(null)
const showBanner = ref(false)

let scrollTriggerInstance = null
let textSliderTimeline = null
let sliderTimeout = null

// AppLoader callbacks
const onLoadingComplete = () => {
  console.log('Loading complete - Counter reached 100')
  // Here we can prepare elements to appear
}

const onAnimationComplete = () => {
  console.log('Loader animation complete - Starting intro experience')
  // Show banner and start intro-specific animation
  showBanner.value = true
  
  // Start video container animation
  nextTick(() => {
    animateVideoContainer()
  })
}

const goToHome = () => {
  // Clear any GSAP state before navigating
  if (process.client) {
    gsap.set("body, html", { 
      backgroundColor: "",
      clearProps: "backgroundColor"
    })
    gsap.set("h1, h2, p, span", { 
      clearProps: "color"
    })
  }
  
  router.push('/').then(() => {
    // Force scroll to top after navigation
    if (process.client) {
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    }
  })
}

const animateVideoContainer = () => {
  return new Promise((resolve) => {
    // Animate video container appearance
    gsap.to(".video-intro-container", {
      duration: 1.2,
      height: "330px",
      opacity: 1,
      ease: "power2.out",
      onComplete: () => {
        // Small pause before releasing scroll
        setTimeout(() => {
          setupScrollAnimation()
          resolve()
        }, 500)
      }
    })
  })
}

const createTypingEffect = (text, targetElement) => {
  return new Promise((resolve) => {
    // Make element visible before starting typing
    gsap.set(targetElement, { opacity: 1 })
    
    const chars = text.split('')
    targetElement.textContent = ''
    
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < chars.length) {
        targetElement.textContent += chars[i]
        i++
      } else {
        clearInterval(typeInterval)
        resolve()
      }
    }, 100) // 100ms per letter
  })
}

const animateTextSlider = () => {
  return new Promise((resolve) => {
    if (textSliderTimeline) {
      textSliderTimeline.kill()
    }
    
    textSliderTimeline = gsap.timeline()
    
    // Reset initial state
    gsap.set(".slide-1", {
      x: -100,
      y: 0,
      scale: 1,
      opacity: 0
    })
    gsap.set(".slide-2", {
      x: 100,
      y: 0,
      scale: 1,
      opacity: 0
    })
    gsap.set(".slide-1-text-1, .slide-1-text-2", {
      y: 0,
      scale: 1,
      opacity: 1
    })
    gsap.set(".slide-1 .video-intro-text-highlight", {
      opacity: 0
    })
    
    // Phase 1: Slide-1 enters from left to center
    textSliderTimeline
      .to(".slide-1", {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.out"
      })
      .call(() => {
        // Phase 2: Typing effect on highlight
        const highlightElement = document.querySelector('.video-intro-text-highlight')
        if (highlightElement) {
          const originalText = highlightElement.textContent
          createTypingEffect(originalText, highlightElement)
        }
      })
      .addLabel("typing")
      // Phase 3: 5 second pause
      .to({}, { duration: 5 })
      .addLabel("pause")
      // Phase 4: Slide-1 exits (text-1 up, text-2 down)
      .to(".slide-1-text-1", {
        duration: 0.8,
        y: -50,
        scale: 0.8,
        opacity: 0,
        ease: "power2.in"
      }, "exit")
      .to(".slide-1-text-2", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.in"
      }, "exit")
      // Phase 5: Slide-2 enters from right to center
      .to(".slide-2", {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.out"
      }, "+=0.2")
      .call(() => {
        resolve()
      })
  })
}


const setupScrollAnimation = () => {
  let sliderStarted = false
  
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: ".intro-page",
    start: "top top",
    end: "bottom+=200vh bottom",
    scrub: 1,
    pin: ".banner-container",
    onUpdate: (self) => {
      const progress = self.progress
      
      // Interpolate between white and dark (same effect as home)
      const bgColor = gsap.utils.interpolate("#ffffff", "#1d1d1b", progress)
      
      // Apply background color
      gsap.set(".screen-1", {
        backgroundColor: bgColor
      })
      
      // Animation sequence based on progress
      if (progress <= 0.25) {
        // Phase 1: Only background color change (elements stay in place)
        gsap.set(".video-intro-container", {
          x: 0,
          scale: 1,
          width: "240px", // Reset to original dimension
          height: "330px", // Reset to original dimension
          top: "calc(50% - 165px)", // Reset to original position
          left: "calc(50% - 125px)" // Reset to original position
        })
        gsap.set(".video-bg-intro", {
          opacity: 1 // Reset opacity to 100%
        })
        gsap.set(".video-intro-text", {
          x: 0,
          scale: 1,
          opacity: 0
        })
        
        // Navigation-button and header remain hidden
        gsap.set(".navigation-button", {
          transform: "translateY(100vh)"
        })
        gsap.set(".header", {
          transform: "translateY(-100vh)"
        })
      } else if (progress <= 0.5) {
        // Fase 2: Cor terminou de mudar, agora desloca elementos
        const moveProgress = (progress - 0.25) / 0.25
        gsap.set(".video-intro-container", {
          x: moveProgress * 300, // move 300px para direita
          scale: 1,
          width: "240px", // Mantém dimensão original
          height: "330px", // Mantém dimensão original
          top: "calc(50% - 165px)", // Mantém posição original
          left: "calc(50% - 125px)" // Mantém posição original
        })
        gsap.set(".video-bg-intro", {
          opacity: 1 // Keep opacity at 100%
        })
        gsap.set(".video-intro-text", {
          x: -moveProgress * 400, // move 400px para esquerda
          scale: 1,
          opacity: moveProgress // opacidade aumenta conforme se move
        })
        
        // Navigation-button and header remain hidden
        gsap.set(".navigation-button", {
          transform: "translateY(100vh)"
        })
        gsap.set(".header", {
          transform: "translateY(-100vh)"
        })
      } else if (progress <= 0.6) {
        // Fase 3: Mantém posições por um instante
        gsap.set(".video-intro-container", {
          x: 300,
          scale: 1,
          width: "240px", // Mantém dimensão original
          height: "330px", // Mantém dimensão original
          top: "calc(50% - 165px)", // Mantém posição original
          left: "calc(50% - 125px)" // Mantém posição original
        })
        gsap.set(".video-bg-intro", {
          opacity: 1 // Keep opacity at 100%
        })
        gsap.set(".video-intro-text", {
          x: -400,
          scale: 1,
          opacity: 1
        })
        
        // Navigation-button and header remain hidden
        gsap.set(".navigation-button", {
          transform: "translateY(100vh)"
        })
        gsap.set(".header", {
          transform: "translateY(-100vh)"
        })
      } else if (progress <= 0.9) {
        // Fase 4: Expande vídeo para tela inteira e move texto para canto
        const expandProgress = (progress - 0.6) / 0.3
        
        // Expandir vídeo para tela inteira
        const videoFinalX = 300 - (expandProgress * 300) // volta para centro
        const finalWidth = 240 + (expandProgress * (window.innerWidth - 240)) // expande para 100vw
        const finalHeight = 330 + (expandProgress * (window.innerHeight - 330)) // expande para 100vh
        const finalTop = (window.innerHeight * 0.5 - 165) - (expandProgress * (window.innerHeight * 0.5 - 165)) // vai para top: 0
        const finalLeft = (window.innerWidth * 0.5 - 125) - (expandProgress * (window.innerWidth * 0.5 - 125)) // vai para left: 0
        
        gsap.set(".video-intro-container", {
          x: videoFinalX,
          width: finalWidth + "px",
          height: finalHeight + "px",
          top: finalTop + "px",
          left: finalLeft + "px"
        })
        
        // Reduzir opacidade do vídeo
        gsap.set(".video-bg-intro", {
          opacity: 1 - (expandProgress * 0.5) // Reduz opacidade para 50%
        })
        
        // Mover e reduzir texto para canto inferior esquerdo
        const textStartX = -400
        const textStartY = 0
        const textFinalX = 70 - (window.innerWidth * 0.5 + 125) // left: 70px da tela
        const textFinalY = window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 100 // 100px acima da posição atual
        
        const textX = textStartX + (expandProgress * (textFinalX - textStartX))
        const textY = textStartY + (expandProgress * textFinalY)
        const textScale = 1 - (expandProgress * 0.4) // reduz para 60%
        
        gsap.set(".video-intro-text", {
          x: textX,
          y: textY,
          scale: textScale,
          opacity: 1
        })
        
        // Animar navigation-button subindo e header descendo rapidamente
        const buttonY = 100 - (expandProgress * 100) // De 100vh para 0
        const headerY = 100 - (expandProgress * 100) // De 100vh para 0 (mesma velocidade que o button)
        gsap.set(".navigation-button", {
          transform: `translateY(${buttonY}vh)`
        })
        gsap.set(".header", {
          transform: `translateY(-${headerY}vh)` // Negativo para descer de cima
        })
      } else {
        // Fase 5: Estado final - vídeo ocupa tela inteira
        gsap.set(".video-intro-container", {
          x: 0,
          width: "100vw",
          height: "100vh",
          top: "0px",
          left: "0px"
        })
        gsap.set(".video-bg-intro", {
          opacity: 0.5 // Opacidade final em 50%
        })
        gsap.set(".video-intro-text", {
          x: 70 - (window.innerWidth * 0.5 + 125), // left: 70px da tela
          y: window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 100, // 100px acima da posição atual
          scale: 0.6,
          opacity: 1
        })
        
        // Navigation-button e header nas posições finais
        gsap.set(".navigation-button", {
          transform: "translateY(0)" // Posição original
        })
        gsap.set(".header", {
          transform: "translateY(0)" // Posição original
        })
        
        // Iniciar slider de texto após header descer completamente
        if (!sliderStarted) {
          sliderStarted = true
          sliderTimeout = setTimeout(() => {
            animateTextSlider()
          }, 500) // Pequena pausa após header terminar
        }
      }
      
      // Reset do slider se o usuário voltar para fases anteriores
      if (progress < 0.9 && sliderStarted) {
        sliderStarted = false
        
        // Limpar timeout pendente
        if (sliderTimeout) {
          clearTimeout(sliderTimeout)
          sliderTimeout = null
        }
        
        // Limpar timeline ativa
        if (textSliderTimeline) {
          textSliderTimeline.kill()
        }
        
        // Resetar estado dos slides
        gsap.set(".slide-1, .slide-2", {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 0
        })
        gsap.set(".slide-1", {
          x: -100
        })
        gsap.set(".slide-2", {
          x: 100
        })
        
        // Resetar highlight para invisível
        gsap.set(".slide-1 .video-intro-text-highlight", {
          opacity: 0
        })
      }
      
      // Auto redirect quando chegar no final
      if (progress >= 0.95) {
        setTimeout(() => {
          goToHome()
        }, 1000)
      }
    }
  })
}

onMounted(() => {
  // AppLoader will control the initial sequence
  // We just prepare elements in initial state
  if (process.client) {
    nextTick(() => {
      // Ensure video container starts invisible
      gsap.set(".video-intro-container", {
        height: 0,
        opacity: 0
      })
    })
  }
})

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
  if (textSliderTimeline) {
    textSliderTimeline.kill()
  }
  if (sliderTimeout) {
    clearTimeout(sliderTimeout)
  }
  
  // Clear any global GSAP properties that might affect other pages
  if (process.client) {
    // Reset any globally applied background
    gsap.set("body, html", { 
      backgroundColor: "",
      clearProps: "backgroundColor"
    })
    // Reset global text colors
    gsap.set("h1, h2, p, span", { 
      clearProps: "color"
    })
    // Force ScrollTrigger refresh to clear interferences
    if (ScrollTrigger) {
      ScrollTrigger.refresh()
    }
  }
})

// Configure without layout
definePageMeta({
  layout: false
})
</script>

<style scoped>

.intro-page {
  position: relative;
  width: 100vw;
  height: 300vh;
  overflow-x: hidden;
}

.banner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 1000;
}


.screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.screen-1 {
  background: #FFFFFF;
}


.intro-content {
  position: relative;
  width: 100%;
  height: 100%;
}


.video-intro-container {
  position: absolute;
  top: calc(50% - 165px);
  left: calc(50% - 125px);
  width: 240px;
  height: 0;
  opacity: 0;
  border-radius: 6px;
  overflow: hidden;
  background-color: #000;

  .video-bg-intro {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-playback {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }  

}

.video-intro-text {
  position: absolute;
  top: calc(50% - 105px);
  left: calc(50% + 125px);
  font-size: 3.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  color: #FFF;
  opacity: 0;
  z-index: 10;
}

.video-intro-text-highlight {
  color: var(--color-yellow);
}

.intro-text-slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #FFF;
  text-align: center;
  width: 100%;
  max-width: 800px;
}

.slide-1, .slide-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
}

.slide-1 {
  transform: translateX(-100px);
}

.slide-2 {
  transform: translateX(100px);
}

.slide-1-text-1 {
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 0.5rem;
}

.slide-1-text-2 {
  font-size: 3.5rem;
  font-weight: 600;
}

.slide-1 .video-intro-text-highlight {
  opacity: 0;
}

.slide-2-text-1 {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.slide-2-text-2 {
  font-size: 1.5rem;
  font-weight: 200;
  position: relative;

  span {
    position: relative;
  }

  span::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    bottom: -10px;
    background-color: var(--color-yellow);

  }
}

.video-intro-text-highlight {
  color: var(--color-yellow);
}

/* Styles for AppNavigation in intro */
:deep(.navigation-overlay) {
  z-index: 1002;
}
:deep(.navigation-button) {
  z-index: 10001;
  transform: translateY(100vh); /* Starts hidden below screen */
  transition: none; /* Remove CSS transitions for GSAP control */
}
:deep(.header) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  transform: translateY(-100vh); /* Starts hidden above screen */
  transition: none; /* Remove CSS transitions for GSAP control */
}

@media (max-width: 768px) {
  .intro-text-slider {
    max-width: 90%;
  }
  
  .slide-1-text-1,
  .slide-2-text-2 {
    font-size: 1.2rem;
  }
  
  .slide-1-text-2,
  .slide-2-text-1 {
    font-size: 2.5rem;
  }
}
</style>
