<template>
  <div
    ref="containerRef"
    class="magnetic-cursor-container"
    :class="{ 'viewport-mode': useViewportPosition }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <!-- Content slot -->
    <slot />
    
    <!-- Magnetic cursor -->
    <div
      ref="cursorRef"
      class="magnetic-cursor"
      :class="cursorClasses"
      :style="cursorStyles"
    >
      <span class="cursor-text">{{ currentText }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useGsap } from '~/composables/useGsap'

const props = defineProps({
  // Text configuration
  text: {
    type: String,
    default: 'Scroll'
  },
  hoverText: {
    type: String,
    default: null // If null, uses main text
  },
  
  // Size configuration
  size: {
    type: Number,
    default: 200 // Size in pixels
  },
  
  // Colors
  backgroundColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.9)'
  },
  textColor: {
    type: String,
    default: '#000000'
  },
  borderColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)'
  },
  
  // Blur effect
  backdropBlur: {
    type: String,
    default: '10px'
  },
  
  // Animation timing
  followSpeed: {
    type: Number,
    default: 0.15 // GSAP ease speed
  },
  enterDuration: {
    type: Number,
    default: 0.4 // Enter animation duration
  },
  exitDuration: {
    type: Number,
    default: 0.3 // Exit animation duration
  },
  
  // Animation easing
  enterEase: {
    type: String,
    default: 'back.out(1.7)'
  },
  exitEase: {
    type: String,
    default: 'power2.in'
  },
  
  // Offset from mouse
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  
  // Axis control
  disableX: {
    type: Boolean,
    default: false
  },
  disableY: {
    type: Boolean,
    default: false
  },
  
  // Position calculation mode
  useViewportPosition: {
    type: Boolean,
    default: false
  },
  
  // Show/hide configuration
  showOnHover: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const { gsap } = useGsap()

// Refs
const containerRef = ref(null)
const cursorRef = ref(null)

// State
const isVisible = ref(false)
const isAnimating = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

// Computed properties
const currentText = computed(() => {
  return props.hoverText || props.text
})

const cursorClasses = computed(() => ({
  'visible': isVisible.value,
  'animating': isAnimating.value,
  'disabled': props.disabled
}))

const cursorStyles = computed(() => ({
  '--size': `${props.size}px`,
  '--bg-color': props.backgroundColor,
  '--text-color': props.textColor,
  '--border-color': props.borderColor,
  '--backdrop-blur': props.backdropBlur
}))

// Mouse tracking
let followTween = null

const updateCursorPosition = (x, y) => {
  if (!cursorRef.value || props.disabled) return
  
  let finalX = x + props.offsetX
  let finalY = y + props.offsetY
  
  // Apply axis control
  if (props.disableX) {
    finalX = mouseX.value + props.offsetX
  }
  if (props.disableY) {
    finalY = mouseY.value + props.offsetY
  }
  
  // Kill existing follow animation
  if (followTween) {
    followTween.kill()
  }
  
  // Create animation object
  const animationProps = {
    duration: props.followSpeed,
    ease: 'power2.out'
  }
  
  // Only animate enabled axes
  if (!props.disableX) {
    animationProps.x = finalX
  }
  if (!props.disableY) {
    animationProps.y = finalY
  }
  
  // Smooth follow animation
  followTween = gsap.to(cursorRef.value, animationProps)
}

// Event handlers
const handleMouseEnter = (event) => {
  if (props.disabled || !props.showOnHover) return
  
  showCursor(event)
}

const handleMouseLeave = () => {
  if (props.disabled) return
  
  hideCursor()
}

const handleMouseMove = (event) => {
  if (props.disabled || !isVisible.value) return
  
  let newMouseX, newMouseY
  
  if (props.useViewportPosition) {
    // Use position relative to viewport
    newMouseX = event.clientX
    newMouseY = event.clientY
  } else {
    // Use position relative to container
    const rect = containerRef.value.getBoundingClientRect()
    newMouseX = event.clientX - rect.left
    newMouseY = event.clientY - rect.top
  }
  
  mouseX.value = newMouseX
  mouseY.value = newMouseY
  
  updateCursorPosition(newMouseX, newMouseY)
}

// Show/hide functions
const showCursor = (event) => {
  if (isVisible.value || isAnimating.value) return
  
  isAnimating.value = true
  isVisible.value = true
  
  // Get initial position
  let initialX, initialY
  
  if (props.useViewportPosition) {
    initialX = event.clientX
    initialY = event.clientY
  } else {
    const rect = containerRef.value.getBoundingClientRect()
    initialX = event.clientX - rect.left
    initialY = event.clientY - rect.top
  }
  
  // Set initial position and state
  gsap.set(cursorRef.value, {
    x: initialX + props.offsetX,
    y: initialY + props.offsetY,
    scale: 0,
    opacity: 0
  })
  
  // Enter animation
  gsap.to(cursorRef.value, {
    scale: 1,
    opacity: 1,
    duration: props.enterDuration,
    ease: props.enterEase,
    onComplete: () => {
      isAnimating.value = false
    }
  })
}

const hideCursor = () => {
  if (!isVisible.value || isAnimating.value) return
  
  isAnimating.value = true
  
  // Exit animation
  gsap.to(cursorRef.value, {
    scale: 0,
    opacity: 0,
    duration: props.exitDuration,
    ease: props.exitEase,
    onComplete: () => {
      isVisible.value = false
      isAnimating.value = false
    }
  })
}

// Public methods (exposed to parent)
const show = (x = mouseX.value, y = mouseY.value) => {
  if (!props.disabled) {
    const fakeEvent = { clientX: x, clientY: y }
    showCursor(fakeEvent)
  }
}

const hide = () => {
  if (!props.disabled) {
    hideCursor()
  }
}

const updateText = (newText) => {
  currentText.value = newText
}

// Cleanup
onUnmounted(() => {
  if (followTween) {
    followTween.kill()
  }
  
  // Kill any remaining animations
  if (cursorRef.value) {
    gsap.killTweensOf(cursorRef.value)
  }
})

// Expose public methods
defineExpose({
  show,
  hide,
  updateText,
  isVisible: computed(() => isVisible.value)
})
</script>

<style scoped>
.magnetic-cursor-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.magnetic-cursor-container.viewport-mode {
  position: static;
}

.magnetic-cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size);
  height: var(--size);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 9999;
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  transform-origin: center center;
  opacity: 0;
  scale: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  margin-left: calc(var(--size) / -2);
  margin-top: calc(var(--size) / -2);
}

.viewport-mode .magnetic-cursor {
  position: fixed;
}

.magnetic-cursor.disabled {
  display: none;
}

.cursor-text {
  color: var(--text-color);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  user-select: none;
  text-align: center;
  line-height: 1;
  transition: color 0.2s ease;
}

@media (max-width: 768px) {
  .magnetic-cursor {
    display: none;
  }
}

</style>
