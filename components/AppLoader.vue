<template>
  <div class="app-loader" v-if="isVisible" :style="loaderStyles">
    <div class="loader-content">
      <!-- Logo (optional) -->
      <div v-if="logoUrl" class="logo-container" :style="logoContainerStyles">
        <img :src="logoUrl" :alt="logoAlt" :style="logoStyles" />
      </div>
      
      <!-- Title (optional) -->
      <h1 v-if="title" class="loader-title" :style="titleStyles">{{ title }}</h1>
      
      <!-- Subtitle (optional) -->
      <p v-if="subtitle" class="loader-subtitle" :style="subtitleStyles">{{ subtitle }}</p>
      
      <!-- Counter -->
      <div class="counter" :style="counterStyles">
        <span ref="counterText">{{ currentValue }}</span><span v-if="showPercent">%</span>
      </div>
      
      <!-- Loading bar (optional) -->
      <div v-if="showProgressBar" class="progress-bar" :style="progressBarStyles">
        <div class="progress-fill" :style="progressFillStyles"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineEmits, defineProps } from 'vue'
import { useGsap } from '~/composables/useGsap'

const { gsap } = useGsap()

const props = defineProps({
  // Behavior
  autoStart: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3
  },
  hideDelay: {
    type: Number,
    default: 1500
  },
  
  // Counter
  showPercent: {
    type: Boolean,
    default: false
  },
  startValue: {
    type: Number,
    default: 0
  },
  endValue: {
    type: Number,
    default: 100
  },
  
  // Logo
  logoUrl: {
    type: String,
    default: ''
  },
  logoAlt: {
    type: String,
    default: 'Logo'
  },
  logoWidth: {
    type: String,
    default: '220px'
  },
  logoHeight: {
    type: String,
    default: '120px'
  },
  
  // Text content
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  
  // Appearance
  backgroundColor: {
    type: String,
    default: '#FFFFFF'
  },
  textColor: {
    type: String,
    default: '#000000'
  },
  fontSize: {
    type: String,
    default: '2rem'
  },
  
  // Progress Bar
  showProgressBar: {
    type: Boolean,
    default: false
  },
  progressBarColor: {
    type: String,
    default: '#007bff'
  },
  progressBarHeight: {
    type: String,
    default: '4px'
  },
  
  // Custom animations
  animationType: {
    type: String,
    default: 'default', // 'default', 'fade', 'slide'
    validator: (value) => ['default', 'fade', 'slide'].includes(value)
  }
})

// Emits
const emit = defineEmits(['loading-complete', 'animation-complete'])

// Refs
const counterText = ref(null)
const isVisible = ref(true)
const currentValue = ref(props.startValue)
const currentProgress = ref(0)

// Variables
let counterAnimation = null

// Computed Styles
const loaderStyles = computed(() => ({
  backgroundColor: props.backgroundColor
}))

const logoContainerStyles = computed(() => ({
  marginBottom: '2rem'
}))

const logoStyles = computed(() => ({
  width: props.logoWidth,
  height: props.logoHeight
}))

const titleStyles = computed(() => ({
  color: props.textColor,
  fontSize: `calc(${props.fontSize} + 0.5rem)`,
  fontWeight: '600',
  margin: '0 0 1rem 0'
}))

const subtitleStyles = computed(() => ({
  color: props.textColor,
  fontSize: `calc(${props.fontSize} - 0.5rem)`,
  fontWeight: '400',
  margin: '0 0 2rem 0',
  opacity: '0.8'
}))

const counterStyles = computed(() => ({
  fontSize: props.fontSize,
  fontWeight: 'normal',
  marginBottom: '1rem',
  color: props.textColor
}))

const progressBarStyles = computed(() => ({
  width: '200px',
  height: props.progressBarHeight,
  backgroundColor: 'rgba(0,0,0,0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
  margin: '1rem auto 0'
}))

const progressFillStyles = computed(() => ({
  width: `${currentProgress.value}%`,
  height: '100%',
  backgroundColor: props.progressBarColor,
  transition: 'width 0.1s ease'
}))

const animateCounter = () => {
  return new Promise((resolve) => {
    const counter = { value: props.startValue }
    
    counterAnimation = gsap.to(counter, {
      duration: props.duration,
      value: props.endValue,
      ease: "power2.out",
      onUpdate: () => {
        const value = Math.round(counter.value)
        currentValue.value = value
        
        // Update progress bar if enabled
        if (props.showProgressBar) {
          currentProgress.value = ((value - props.startValue) / (props.endValue - props.startValue)) * 100
        }
      },
      onComplete: () => {
        // Emit event when counter reaches final value
        emit('loading-complete', {
          finalValue: props.endValue,
          startValue: props.startValue
        })
        
        // Wait delay before continuing animation
        setTimeout(() => {
          animateLoaderExit().then(resolve)
        }, props.hideDelay)
      }
    })
  })
}

const animateLoaderExit = () => {
  return new Promise((resolve) => {
    const timeline = gsap.timeline()
    
    switch (props.animationType) {
      case 'fade':
        // Simple fade out
        timeline.to(".loader-content", {
          duration: 1,
          opacity: 0,
          ease: "power2.out"
        })
        break
        
      case 'slide':
        // Slide down
        timeline.to(".loader-content", {
          duration: 1,
          y: "100vh",
          opacity: 0,
          ease: "power2.in"
        })
        break
        
      default:
        // Original animation (default)
        timeline
          .to(".counter", {
            duration: 1,
            y: "50vh",
            opacity: 0,
            ease: "power2.out"
          }, 0)
        
        // Animate progress bar if it exists
        if (props.showProgressBar) {
          timeline.to(".progress-bar", {
            duration: 0.8,
            opacity: 0,
            ease: "power2.out"
          }, 0.2)
        }
          
        // Animate logo if exists
        if (props.logoUrl) {
          timeline.to(".logo-container img", {
            duration: 1.2,
            y: "-150px",
            scale: 0.3,
            opacity: 0,
            ease: "power2.out"
          }, 0.3)
        }
        
        // Animate texts if exist
        if (props.title || props.subtitle) {
          timeline.to(".loader-title, .loader-subtitle", {
            duration: 0.8,
            y: "-50px",
            opacity: 0,
            ease: "power2.out"
          }, 0.5)
        }
        break
    }
    
    timeline.call(() => {
      // Emit event when animation complete
      emit('animation-complete', {
        animationType: props.animationType
      })
      
      // Hide loader after animation
      setTimeout(() => {
        isVisible.value = false
        resolve()
      }, 500)
    })
  })
}

const startLoading = () => {
  if (process.client) {
    animateCounter()
  }
}

// Expose method for external control
defineExpose({
  startLoading
})

onMounted(() => {
  if (props.autoStart && process.client) {
    // Small delay to ensure everything is mounted
    setTimeout(() => {
      startLoading()
    }, 100)
  }
})

onUnmounted(() => {
  if (counterAnimation) {
    counterAnimation.kill()
  }
})
</script>

<style scoped>
.app-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
  max-width: 90%;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.loader-title {
  margin: 0;
  line-height: 1.2;
}

.loader-subtitle {
  margin: 0;
  line-height: 1.4;
}

.counter {
  font-weight: normal;
  margin-bottom: 0;
  line-height: 1;
}

.progress-bar {
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  transition: width 0.1s ease;
  border-radius: inherit;
}

/* Automatic responsiveness */
@media (max-width: 768px) {
  .loader-content {
    max-width: 95%;
  }
  
  .loader-title {
    font-size: calc(var(--title-font-size, 2.5rem) * 0.8) !important;
  }
  
  .loader-subtitle {
    font-size: calc(var(--subtitle-font-size, 1.5rem) * 0.9) !important;
  }
  
  .counter {
    font-size: calc(var(--counter-font-size, 2rem) * 0.8) !important;
  }
  
  .logo-container img {
    width: calc(var(--logo-width, 220px) * 0.8) !important;
    height: calc(var(--logo-height, 120px) * 0.8) !important;
  }
  
  .progress-bar {
    width: 150px !important;
  }
}

@media (max-width: 480px) {
  .loader-title {
    font-size: calc(var(--title-font-size, 2.5rem) * 0.6) !important;
  }
  
  .loader-subtitle {
    font-size: calc(var(--subtitle-font-size, 1.5rem) * 0.7) !important;
  }
  
  .counter {
    font-size: calc(var(--counter-font-size, 2rem) * 0.6) !important;
  }
  
  .logo-container img {
    width: calc(var(--logo-width, 220px) * 0.6) !important;
    height: calc(var(--logo-height, 120px) * 0.6) !important;
  }
  
  .progress-bar {
    width: 120px !important;
  }
}
</style>
