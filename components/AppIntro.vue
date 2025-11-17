<template>
  <div class="intro-overlay" v-show="showIntro">
    <div class="banner-container" ref="containerRef">
      <!-- Screen 1: Intro Experience -->
      <div class="screen screen-1" ref="screen1">
        <div class="intro-content">
          <div class="intro-text-slider">
            <div class="slide-1">
              <div class="slide-1-text-1">Eventos corporativos para </div>
              <div class="slide-1-text-2"><span class="animated-text-1">impulsionar </span><span class="video-intro-text-highlight animated-text-2">seu sucesso</span></div>
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

          <div class="scroll">
            <div class="scroll-inner">
              <div></div>
            </div>
            <p>Scroll</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useGsap } from '~/composables/useGsap'
import { useScrollLock } from '~/composables/useScrollLock'

const { gsap } = useGsap()
const { lockScroll, unlockScroll } = useScrollLock()

const props = defineProps({
  fullIntro: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['intro-complete', 'video-flip-request'])

const showIntro = ref(false)
const containerRef = ref(null)
const screen1 = ref(null)

let mainTimeline = null
let textSliderTimeline = null
let sliderTimeout = null

const requestVideoFlip = () => {
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
  const isMobile = window.innerWidth <= 768
  
  if (props.fullIntro === false) {
    unlockScroll()
    animateTextSlider()
    if (process.client) {
      window.dispatchEvent(new CustomEvent('videoExpandStart'))
      emit('video-flip-request', true)
    }
    return
  }
  
  mainTimeline = gsap.timeline()
  
  if (isMobile) {
    // Phase 1: Video container appears from center (1 second)
    mainTimeline
    .to(".video-intro-container", {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power2.out"
    })
    .to(".video-intro-text", {
        duration: 1,
        // x: 70 - (window.innerWidth * 0.5 + 100),
        left: "50%",
        transform: "translateX(-50%)",
        // y: () => window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 200,
        ease: "power2.inOut"
      }, "phase1Complete")
    .addLabel("phase1Complete")
  } else {
    mainTimeline
    .to(".video-intro-container", {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power2.out"
    })
  }

  // Phase 2 was deleted
  // Phase 2 was responsible for the background color transition
        
  // Phase 3: Elements displacement (1 second)
  if (isMobile) {
    mainTimeline
      .to(".video-intro-container", {
        duration: 1,
        // x: 0,
        top: "36%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        ease: "power2.inOut"
      }, "phase2Complete")
      .to(".video-intro-text", {
        duration: 1,
        // x: 70 - (window.innerWidth * 0.5 + 100),
        left: "50%",
        transform: "translateX(-50%)",
        y: () => window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 200, // 200px acima da posição final
        opacity: 1,
        ease: "power2.inOut"
      }, "phase2Complete")
      .to({}, { duration: 3 }, "phase2Complete")
      .addLabel("phase3Complete")
  } else {
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
  }
    
  // Phase 4: Video expansion and text movement (1 second)

  if (isMobile) {
    mainTimeline
    .call(() => {
      // Dispatch event when video starts expanding (header and navigation should appear)
      if (process.client) {
        window.dispatchEvent(new CustomEvent('videoExpandStart'))
      }
    }, null, "phase3Complete")
    .to(".video-intro-container", {
      duration: 1,
      width: "100vw",
      height: "100lvh",
      borderRadius: "0px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      ease: "power2.inOut"
    }, "phase3Complete")
    .to(".video-bg-intro", {
      duration: 1,
      opacity: 0.5,
      ease: "power2.inOut"
    }, "phase3Complete")
    .to(".video-intro-text", {
      duration: 1,
      // x: () => {
      //   const centerX = window.innerWidth * 0.5
      //   const elementWidth = 250
      //   return centerX - elementWidth * 0.5
      // },
      y: () => isMobile ? window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 150 : window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 100,
      left: "50%",
      transform: "translateX(-50%)",
      color: "#FFFFFF",
      scale: 0.6,
      ease: "power2.inOut"
    }, "phase3Complete")
    .addLabel("phase4Complete")
  } else {
    mainTimeline
    .call(() => {
      // Dispatch event when video starts expanding (header and navigation should appear)
      if (process.client) {
        window.dispatchEvent(new CustomEvent('videoExpandStart'))
      }
    }, null, "phase3Complete")
    .to(".video-intro-container", {
      duration: 1,
      x: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0px",
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
      x: () => 0 - (window.innerWidth * 0.5 + 125),
      y: () => window.innerHeight - 70 - (window.innerHeight * 0.5 - 105) - 100,
      color: "#FFFFFF",
      scale: 0.6,
      ease: "power2.inOut"
    }, "phase3Complete")
    .addLabel("phase4Complete")
  }
  mainTimeline.call(() => {
    unlockScroll()
    animateTextSlider()
    if (process.client) {
      emit('video-flip-request', true)
    }
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
  if (textSliderTimeline) {
    textSliderTimeline.kill()
  }
  
  textSliderTimeline = gsap.timeline({ repeat: -1 })
  
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
  
  const t1 = document.querySelector('.slide-1-text-2 .animated-text-1')
  const t2 = document.querySelector('.slide-1-text-2 .animated-text-2')
  if (t1) t1.style.opacity = '0'
  if (t2) t2.style.opacity = '0'
  
  textSliderTimeline
    .to(".slide-1", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.out"
    })
    .call(() => {
      const part1 = document.querySelector('.slide-1-text-2 .animated-text-1')
      const part2 = document.querySelector('.slide-1-text-2 .animated-text-2')
      if (part1 && part2) {
        const text1 = part1.textContent
        const text2 = part2.textContent
        part1.textContent = ''
        part2.textContent = ''
        const tlTyping = gsap.timeline()
        tlTyping.call(() => { gsap.set(part1, { opacity: 1 }) })
          .to(part1, { text: text1, duration: Math.max(0.6, text1.length * 0.03), ease: 'none' })
          .call(() => { gsap.set(part2, { opacity: 1 }) })
          .to(part2, { text: text2, duration: Math.max(0.6, text2.length * 0.03), ease: 'none' })
      }
    })
    .to({}, { duration: 5 })
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
    .to(".slide-2", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.out"
    }, "+=0.2")
    .to({}, { duration: 5 })
    .to(".slide-2", {
      duration: 0.8,
      x: 100,
      opacity: 0,
      ease: "power2.in"
    })
    .set(".slide-1", {
      x: -100,
      opacity: 0
    })
    .set(".slide-1-text-1, .slide-1-text-2", {
      y: 0,
      scale: 1,
      opacity: 1
    })
    .call(() => {
      const t1 = document.querySelector('.slide-1-text-2 .animated-text-1')
      const t2 = document.querySelector('.slide-1-text-2 .animated-text-2')
      if (t1) t1.style.opacity = '0'
      if (t2) t2.style.opacity = '0'
    })
}

const startIntro = () => {
  showIntro.value = true
  
  nextTick(() => {
    // Ensure scroll remains locked during intro
    lockScroll()
    
    // Dispatch event to disable ScrollTrigger during intro
    window.dispatchEvent(new CustomEvent('introAnimationStart'))
    
    // Ensure video container starts invisible and scaled down from center
    gsap.set(".video-intro-container", {
      height: "330px",
      opacity: 0,
      scale: 0
    })
    
    // Ensure header starts hidden
    gsap.set(".header", {
      transform: "translateY(-100lvh)"
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
    
    window.addEventListener('pageVisibleImmediately', () => {
      if (props.fullIntro === false) {
        showIntro.value = true
        nextTick(() => {
          startSequentialAnimation()
        })
      }
    })
    
    window.addEventListener('resetIntroTextSlider', () => {
      if (textSliderTimeline) {
        textSliderTimeline.pause(0)
        textSliderTimeline.kill()
      }
      // restore initial visible state and restart
      gsap.set([".slide-1", ".slide-2"], { clearProps: "all" })
      animateTextSlider()
    })
    
    if (props.fullIntro === false) {
      showIntro.value = true
      nextTick(() => {
        startSequentialAnimation()
      })
    }
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
  max-height: 100lvh;
  z-index: 9999;
  background: #FFFFFF;
  overflow: hidden;
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
  height: 330px;
  opacity: 0;
  border-radius: 6px;
  overflow: hidden;
  background-color: #000;
  transform-origin: center center;

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
  line-height: 1.3;
  font-weight: normal;
  margin-bottom: 1rem;
  opacity: 0;
  z-index: 10;
}

.video-intro-text-highlight {
  color: var(--color-yellow) !important;
}

.scroll {
  position: absolute;
  bottom: 20px;
  right: var(--body-horizontal-padding);
  z-index: 10;
  color: #fff;
  font-size: .875em;
  letter-spacing: .5px;
  text-transform: lowercase;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1em;

  .scroll-inner {
    position: relative;
    overflow: hidden;
    display: block;
    width: 2px;
    height: 50px;
    border-radius: 2px;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: #fff;
    }
    
  }
}

.intro-text-slider {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #FFF;
  text-align: center;
  width: 100%;
  max-width: 900px;
}

.slide-1, .slide-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  text-transform: uppercase;
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
  color: #FFF;
  font-family: 'Antonio';
}

.slide-1-text-2 {
  font-size: 5.5rem;
  font-weight: 600;
  font-family: 'Antonio';
}

.slide-1 .video-intro-text-highlight {
  opacity: 0;
}

.slide-2-text-1 {
  font-size: 5.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Antonio';
}

.slide-2-text-2 {
  font-size: 1.5rem;
  font-weight: 200;
  position: relative;
  color: #FFF;
  font-family: 'Antonio';

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
  transform: translateY(100lvh); /* Starts hidden below screen */
  transition: none; /* Remove CSS transitions for GSAP control */
}
:deep(.header) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  transform: translateY(-100lvh); /* Starts hidden above screen */
  transition: none; /* Remove CSS transitions for GSAP control */
}

@media (max-width: 768px) {
  .intro-text-slider {
    max-width: 90%;
    top: 36%;
  }
  
  .slide-1-text-1,
  .slide-2-text-2 {
    font-size: 1.2rem;
  }
  
  .slide-1-text-2,
  .slide-2-text-1 {
    font-size: 2.5rem;
  }

  .video-intro-text {
    font-size: 2.5rem;
    white-space: nowrap;
    /* top: calc(50% - 105px);
    left: calc(50% + 5px); */
  }
}
</style>
