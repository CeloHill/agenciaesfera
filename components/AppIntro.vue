<template>
  <div class="intro-overlay" v-show="showIntro">
    <div class="banner-container" ref="containerRef">
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

const { gsap } = useGsap()

const emit = defineEmits(['intro-complete', 'video-flip-request'])

const showIntro = ref(false)
const containerRef = ref(null)
const screen1 = ref(null)

let mainTimeline = null
let textSliderTimeline = null
let sliderTimeout = null

const requestVideoFlip = () => {
  // Request parent to handle the flip
  emit('video-flip-request', true)
}

const hideIntro = () => {
  gsap.to(".intro-overlay", {
    duration: 0.5,
    opacity: 0,
    ease: "power2.out",
    onComplete: () => {
      // Reset AppHeader state and dispatch event to clear intro-specific styling
      window.dispatchEvent(new CustomEvent('introAnimationComplete'))
      showIntro.value = false
      emit('intro-complete')
    }
  })
}

const startSequentialAnimation = () => {
  mainTimeline = gsap.timeline()
  
  // Phase 1: Video container appears (1 second)
  mainTimeline
    .to(".video-intro-container", {
      duration: 1,
      height: "330px",
      opacity: 1,
      ease: "power2.out"
    })
    .addLabel("phase1Complete")
    
  // Phase 2: Background color change (1 second)
  mainTimeline
    .to(".screen-1", {
      duration: 1,
      backgroundColor: "#1d1d1b",
      ease: "power2.inOut",
      onUpdate: function() {
        const progress = this.progress()
        // Dispatch color transition event for AppHeader
        window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
          detail: { progress }
        }))
      }
    }, "phase1Complete")
    .addLabel("phase2Complete")
    
  // Phase 3: Elements displacement (1 second)
  mainTimeline
    .to(".video-intro-container", {
      duration: 1,
      x: 300,
      ease: "power2.inOut"
    }, "phase2Complete")
    .to(".video-intro-text", {
      duration: 1,
      x: -400,
      opacity: 1,
      ease: "power2.inOut"
    }, "phase2Complete")
    .to({}, { duration: 3 }, "phase2Complete")
    .addLabel("phase3Complete")
    
  // Phase 4: Video expansion and text movement (1 second)
  mainTimeline
    .to(".video-intro-container", {
      duration: 1,
      x: 0,
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
      ease: "power2.inOut"
    }, "phase3Complete")
    .to(".video-bg-intro", {
      duration: 1,
      opacity: 0.5,
      ease: "power2.inOut"
    }, "phase3Complete")
    .to(".video-intro-text", {
      duration: 1,
      x: () => 70 - (window.innerWidth * 0.5 + 125),
      y: () => window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 100,
      scale: 0.6,
      ease: "power2.inOut"
    }, "phase3Complete")
    .to(".navigation-button", {
      duration: 1,
      transform: "translate(-50%, 0)",
      ease: "power2.out"
    }, "phase3Complete")
    .to(".header", {
      duration: 1,
      transform: "translateY(0)",
      ease: "power2.out"
    }, "phase3Complete")
    .addLabel("phase4Complete")
    
  mainTimeline.call(() => {
    animateTextSlider().then(() => {
      setTimeout(() => {
        requestVideoFlip()
      }, 1000)
    })
  }, null, "phase4Complete+=0.5")
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
      .to({}, { duration: 6 }, "exit")
      .call(() => {
        resolve()
      })
  })
}

const startIntro = () => {
  showIntro.value = true
  
  nextTick(() => {
    // Dispatch event to disable ScrollTrigger during intro
    window.dispatchEvent(new CustomEvent('introAnimationStart'))
    
    // Ensure video container starts invisible
    gsap.set(".video-intro-container", {
      height: 0,
      opacity: 0
    })
    
    // Ensure navigation and header start hidden
    gsap.set(".navigation-button", {
      transform: "translate(-50%, 100vh)"
    })
    gsap.set(".header", {
      transform: "translateY(-100vh)"
    })
    
    // Start animation immediately since AppLoader already completed
    startSequentialAnimation()
  })
}

onMounted(() => {
  // Listen for AppLoader completion event
  if (process.client) {
    window.addEventListener('startAppIntro', () => {
      startIntro()
    })
  }
})

onUnmounted(() => {
  if (mainTimeline) {
    mainTimeline.kill()
  }
  if (textSliderTimeline) {
    textSliderTimeline.kill()
  }
  if (sliderTimeout) {
    clearTimeout(sliderTimeout)
  }
})

// Expose startIntro method for parent component
defineExpose({
  startIntro
})
</script>

<style scoped>
.intro-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #FFFFFF;
}

.banner-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1000;
}

.screen {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
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

/* Styles for AppNavigation in intro */
:deep(.navigation-overlay) {
  z-index: 10002;
}
:deep(.navigation-button) {
  z-index: 10003;
  transform: translateY(100vh); /* Starts hidden below screen */
  transition: none; /* Remove CSS transitions for GSAP control */
}
:deep(.header) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10001;
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
