<template>
  <section 
    ref="sectionRef" 
    class="portfolio-cards"
    :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }"
  >
    <div class="portfolio-cards-container" ref="containerRef">
      <div class="portfolio-cards-track" ref="trackRef">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="portfolio-card"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="card-content">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-description">{{ card.description }}</p>
            <div v-if="card.links && card.links.length" class="card-links">
              <a
                v-for="(link, linkIndex) in card.links"
                :key="linkIndex"
                :href="link.url"
                class="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-cards-scrollbar-wrapper">
      <div class="portfolio-cards-scrollbar-track">
        <div 
          ref="scrollbarThumbRef" 
          class="portfolio-cards-scrollbar-thumb"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(card => card.image && card.title && card.description)
    }
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})

const sectionRef = ref(null)
const containerRef = ref(null)
const trackRef = ref(null)
const scrollbarThumbRef = ref(null)
let resizeHandler = null
let dragHandlers = null
let currentX = 0
let scrollbarUpdateHandler = null

onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    nextTick(() => {
      setupScroll()
      equalizeCardHeights()
    })
  }
})

const equalizeCardHeights = () => {
  if (!trackRef.value) return
  
  const cards = trackRef.value.querySelectorAll('.portfolio-card')
  if (cards.length === 0) return
  
  const equalize = () => {
    let maxHeight = 0
    
    cards.forEach(card => {
      card.style.height = 'auto'
      const height = card.offsetHeight
      if (height > maxHeight) {
        maxHeight = height
      }
    })
    
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`
    })
  }
  
  setTimeout(() => {
    equalize()
  }, 300)
  
  resizeHandler = () => {
    equalize()
  }
  
  window.addEventListener('resize', resizeHandler)
}

const updateScrollbar = () => {
  if (!containerRef.value || !trackRef.value || !scrollbarThumbRef.value) return
  
  const container = containerRef.value
  const track = trackRef.value
  const thumb = scrollbarThumbRef.value
  
  const containerWidth = container.offsetWidth
  const trackWidth = track.scrollWidth
  const scrollableWidth = trackWidth - containerWidth
  
  if (scrollableWidth <= 0) {
    thumb.style.width = '100%'
    thumb.style.left = '0%'
    return
  }
  
  const scrollProgress = Math.abs(currentX) / scrollableWidth
  const thumbWidth = (containerWidth / trackWidth) * 100
  const thumbPosition = scrollProgress * (100 - thumbWidth)
  
  gsap.to(thumb, {
    width: `${thumbWidth}%`,
    left: `${thumbPosition}%`,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const setupScroll = () => {
  if (!containerRef.value || !trackRef.value) return
  
  const track = trackRef.value
  const container = containerRef.value
  
  gsap.set(track, {
    x: '50%'
  })
  
  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(track, {
        x: '0%',
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => {
          currentX = 0
          updateScrollbar()
        }
      })
    }
  })
  
  let isDragging = false
  let startX = 0
  let scrollLeft = 0
  let dragStartX = 0
  let velocity = 0
  let lastX = 0
  let lastTime = 0
  let inertiaAnimation = null
  
  const updateScrollbarPosition = () => {
    updateScrollbar()
  }
  
  const handleMouseDown = (e) => {
    const link = e.target.closest('a.card-link')
    if (link && e.target === link) {
      return
    }
    
    if (inertiaAnimation) {
      inertiaAnimation.kill()
      inertiaAnimation = null
    }
    
    isDragging = true
    dragStartX = e.pageX
    startX = e.pageX - container.getBoundingClientRect().left
    scrollLeft = currentX
    lastX = e.pageX
    lastTime = Date.now()
    container.style.cursor = 'grabbing'
    e.preventDefault()
  }
  
  const handleMouseUp = (e) => {
    if (isDragging) {
      if (e && dragStartX) {
        const moved = Math.abs(dragStartX - e.pageX) > 5
        if (moved) {
          const link = e.target?.closest('a.card-link')
          if (link) {
            e.preventDefault()
            e.stopPropagation()
          }
        }
      }
      
      const maxScroll = -(track.scrollWidth - container.offsetWidth)
      
      if (Math.abs(velocity) > 0.5) {
        const targetX = currentX + (velocity * 50)
        const finalX = Math.max(maxScroll, Math.min(0, targetX))
        
        inertiaAnimation = gsap.to(track, {
          x: finalX,
          duration: Math.min(Math.abs(velocity) * 0.5, 1),
          ease: 'power2.out',
          onUpdate: () => {
            const transform = gsap.getProperty(track, 'x')
            currentX = typeof transform === 'string' ? parseFloat(transform) : transform
            updateScrollbar()
          },
          onComplete: () => {
            currentX = finalX
            updateScrollbar()
            velocity = 0
          }
        })
      } else {
        gsap.to(track, {
          x: currentX,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            updateScrollbar()
          }
        })
      }
    }
    
    isDragging = false
    container.style.cursor = 'grab'
    dragStartX = 0
    velocity = 0
  }
  
  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    
    const now = Date.now()
    const deltaTime = now - lastTime
    const deltaX = e.pageX - lastX
    
    if (deltaTime > 0) {
      velocity = deltaX / deltaTime
    }
    
    lastX = e.pageX
    lastTime = now
    
    const x = e.pageX - container.getBoundingClientRect().left
    const walk = (x - startX) * 2
    currentX = scrollLeft + walk
    
    const maxScroll = -(track.scrollWidth - container.offsetWidth)
    currentX = Math.max(maxScroll, Math.min(0, currentX))
    
    gsap.to(track, {
      x: currentX,
      duration: 0.1,
      ease: 'power1.out'
    })
    
    updateScrollbar()
  }
  
  const handleTouchStart = (e) => {
    const link = e.target.closest('a.card-link')
    if (link && e.target === link) {
      return
    }
    
    if (inertiaAnimation) {
      inertiaAnimation.kill()
      inertiaAnimation = null
    }
    
    isDragging = true
    startX = e.touches[0].pageX - container.getBoundingClientRect().left
    scrollLeft = currentX
    lastX = e.touches[0].pageX
    lastTime = Date.now()
  }
  
  const handleTouchMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    
    const now = Date.now()
    const deltaTime = now - lastTime
    const deltaX = e.touches[0].pageX - lastX
    
    if (deltaTime > 0) {
      velocity = deltaX / deltaTime
    }
    
    lastX = e.touches[0].pageX
    lastTime = now
    
    const x = e.touches[0].pageX - container.getBoundingClientRect().left
    const walk = (x - startX) * 2
    currentX = scrollLeft + walk
    
    const maxScroll = -(track.scrollWidth - container.offsetWidth)
    currentX = Math.max(maxScroll, Math.min(0, currentX))
    
    gsap.to(track, {
      x: currentX,
      duration: 0.1,
      ease: 'power1.out'
    })
    
    updateScrollbar()
  }
  
  const handleTouchEnd = () => {
    if (isDragging) {
      const maxScroll = -(track.scrollWidth - container.offsetWidth)
      
      if (Math.abs(velocity) > 0.5) {
        const targetX = currentX + (velocity * 50)
        const finalX = Math.max(maxScroll, Math.min(0, targetX))
        
        inertiaAnimation = gsap.to(track, {
          x: finalX,
          duration: Math.min(Math.abs(velocity) * 0.5, 1),
          ease: 'power2.out',
          onUpdate: () => {
            const transform = gsap.getProperty(track, 'x')
            currentX = typeof transform === 'string' ? parseFloat(transform) : transform
            updateScrollbar()
          },
          onComplete: () => {
            currentX = finalX
            updateScrollbar()
            velocity = 0
          }
        })
      } else {
        gsap.to(track, {
          x: currentX,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            updateScrollbar()
          }
        })
      }
    }
    
    isDragging = false
    velocity = 0
  }
  
  container.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('mouseleave', handleMouseUp)
  document.addEventListener('mousemove', handleMouseMove)
  
  container.addEventListener('touchstart', handleTouchStart, { passive: false })
  container.addEventListener('touchmove', handleTouchMove, { passive: false })
  container.addEventListener('touchend', handleTouchEnd)
  
  scrollbarUpdateHandler = updateScrollbarPosition
  
  window.addEventListener('resize', () => {
    updateScrollbar()
  })
  
  dragHandlers = {
    container,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  }
  
  nextTick(() => {
    updateScrollbar()
  })
}

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars && trigger.vars.trigger === sectionRef.value) {
      trigger.kill()
    }
  })
  
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
  
  if (scrollbarUpdateHandler) {
    window.removeEventListener('resize', scrollbarUpdateHandler)
    scrollbarUpdateHandler = null
  }
  
  if (dragHandlers) {
    const { container, handleMouseDown, handleMouseUp, handleMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd } = dragHandlers
    
    container.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mouseleave', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
    
    container.removeEventListener('touchstart', handleTouchStart)
    container.removeEventListener('touchmove', handleTouchMove)
    container.removeEventListener('touchend', handleTouchEnd)
    
    dragHandlers = null
  }
})
</script>

<style scoped>
.portfolio-cards {
  background-color: #FFF;
  padding: 100px 0 120px;
  position: relative;
}

.portfolio-cards.dark-mode {
  background-color: #1D1D1B;
}

.portfolio-cards.light-mode {
  background-color: #FFF;
}

.portfolio-cards-container {
  width: 100%;
  overflow: hidden;
  cursor: grab;
  padding: 0 var(--body-horizontal-padding);
  user-select: none;
  -webkit-user-select: none;
}

.portfolio-cards-container:active {
  cursor: grabbing;
}

.portfolio-cards-track {
  display: flex;
  gap: 30px;
  will-change: transform;
  width: max-content;
}

.portfolio-card {
  flex-shrink: 0;
  width: 400px;
  background-color: #1D1D1B;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.portfolio-cards.dark-mode .portfolio-card {
  background-color: #2A2A28;
}

.portfolio-cards.light-mode .portfolio-card {
  background-color: #1D1D1B;
}

.card-image {
  width: 100%;
  padding-top: 60%;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

.card-content {
  padding: 40px 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #FFF;
  margin: 0 0 20px 0;
  line-height: 1.3;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
}

.portfolio-cards.dark-mode .card-title {
  color: #FFF;
}

.portfolio-cards.light-mode .card-title {
  color: #FFF;
}

.card-description {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 20px 0;
  flex: 1;
}

.portfolio-cards.dark-mode .card-description {
  color: rgba(255, 255, 255, 0.8);
}

.portfolio-cards.light-mode .card-description {
  color: rgba(255, 255, 255, 0.8);
}

.card-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

.card-link {
  font-size: 14px;
  color: var(--color-yellow);
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: var(--font-weight-medium);
}

.card-link:hover {
  color: #FFF;
}

.portfolio-cards.dark-mode .card-link:hover {
  color: #FFF;
}

.portfolio-cards.light-mode .card-link:hover {
  color: #FFF;
}

.portfolio-cards-scrollbar-wrapper {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  padding: 0 var(--body-horizontal-padding);
  z-index: 1;
}

.portfolio-cards-scrollbar-track {
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 2px;
}

.portfolio-cards.dark-mode .portfolio-cards-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.1);
}

.portfolio-cards.light-mode .portfolio-cards-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}

.portfolio-cards-scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--color-yellow);
  border-radius: 2px;
  will-change: width, left;
  transition: opacity 0.3s ease;
}

@media (max-width: 1024px) {
  .portfolio-card {
    width: 350px;
  }
}

@media (max-width: 768px) {
  .portfolio-cards {
    padding: 60px 0 100px;
  }
  
  .portfolio-card {
    width: 300px;
  }
  
  .card-content {
    padding: 30px 20px;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .card-description {
    font-size: 14px;
  }
  
  .portfolio-cards-scrollbar-wrapper {
    bottom: 30px;
  }
}

@media (max-width: 576px) {
  .portfolio-card {
    width: 280px;
  }
}
</style>

