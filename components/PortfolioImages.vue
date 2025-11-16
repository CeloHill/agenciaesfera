<template>
  <section 
    ref="galleryRef" 
    class="portfolio-images" 
    :class="{ 'gallery-mode': isGalleryMode }"
  >
    <div v-if="!isGalleryMode" class="container-fluid">
      <div class="row g-0 images-grid" ref="imagesGridRef">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          :class="getImageClass(index)"
          class="image-item"
          ref="imageItemsRef"
        >
          <div
            class="portfolio-image-link"
          >
            <div
              class="portfolio-image"
              :style="{ backgroundImage: `url(${image})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="gallery-scroll-container" ref="scrollContainerRef">
      <div class="gallery-scroll-wrapper" ref="scrollTrackRef">
        <div class="gallery-scroll-track top-row">
          <div 
            v-for="(image, index) in topRowImages" 
            :key="`top-${index}`"
            :class="['gallery-scroll-item', getTopRowClass(index)]"
          >
            <div
              class="gallery-scroll-link"
            >
              <div 
                class="gallery-scroll-image" 
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
          </div>
        </div>
        <div class="gallery-scroll-track bottom-row">
          <div 
            v-for="(image, index) in bottomRowImages" 
            :key="`bottom-${index}`"
            :class="['gallery-scroll-item', getBottomRowClass(index)]"
          >
            <div
              class="gallery-scroll-link"
            >
              <div 
                class="gallery-scroll-image" 
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()

const GALLERY_SCROLL_ANIMATION_DURATION = 1.5
const GALLERY_SCROLL_ANIMATION_EASE = 'power2.out'
const GALLERY_SCROLL_TRIGGER_START = 'top 70%'
const GALLERY_SCROLL_TRIGGER_END = 'bottom 30%'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const galleryRef = ref(null)
const imagesGridRef = ref(null)
const imageItemsRef = ref([])
const scrollContainerRef = ref(null)
const scrollTrackRef = ref(null)

const isGalleryMode = computed(() => props.images.length > 7)

const topRowImages = computed(() => {
  if (!isGalleryMode.value) return []
  const half = Math.ceil(props.images.length / 2)
  return props.images.slice(0, half)
})

const bottomRowImages = computed(() => {
  if (!isGalleryMode.value) return []
  const half = Math.ceil(props.images.length / 2)
  return props.images.slice(half)
})
const getImageClass = (index) => {
  const total = props.images.length
  
  if (total === 2) {
    return 'col-lg-6 col-md-12'
  }
  
  if (total <= 7) {
    const classes = [
      'col-lg-4 col-md-6',
      'col-lg-8 col-md-6',
      'col-lg-6 col-md-12',
      'col-lg-6 col-md-12',
      'col-lg-4 col-md-6',
      'col-lg-4 col-md-6',
      'col-lg-4 col-md-6'
    ]
    return classes[index] || 'col-lg-4 col-md-6'
  }
  
  return 'col-12'
}

const getTopRowClass = (index) => {
  const heights = ['tall', 'small', 'medium', 'tall', 'small', 'medium', 'small']
  return heights[index % heights.length]
}

const getBottomRowClass = (index) => {
  const heights = ['small', 'medium', 'tall', 'small', 'medium', 'tall', 'small']
  return heights[index % heights.length]
}

onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    nextTick(() => {
      if (!isGalleryMode.value) {
        animateGridImages()
      } else {
        setupGalleryScroll()
      }
    })
  }
})

const animateGridImages = () => {
  if (!imagesGridRef.value || !imageItemsRef.value.length) return
  
  const items = imageItemsRef.value.filter(item => item !== null)
  
  gsap.set(items, {
    scale: 0.8,
    opacity: 0,
    y: 100
  })
  
  ScrollTrigger.create({
    trigger: galleryRef.value,
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(items, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power2.out'
      })
    }
  })
}

const setupGalleryScroll = () => {
  if (!scrollContainerRef.value || !scrollTrackRef.value) return
  
  const wrapper = scrollTrackRef.value
  const container = scrollContainerRef.value
  const topRow = wrapper.querySelector('.gallery-scroll-track.top-row')
  const bottomRow = wrapper.querySelector('.gallery-scroll-track.bottom-row')
  
  if (!topRow || !bottomRow) return
  
  const containerWidth = container.offsetWidth
  const topRowWidth = topRow.scrollWidth
  const bottomRowWidth = bottomRow.scrollWidth

  const topRowStartX = 0
  const topRowEndX = containerWidth - topRowWidth

  const bottomRowStartX = containerWidth - bottomRowWidth
  const bottomRowEndX = 0
  
  gsap.set(topRow, {
    x: topRowStartX
  })
  
  gsap.set(bottomRow, {
    x: bottomRowStartX
  })
  
  gsap.timeline({
    scrollTrigger: {
      trigger: galleryRef.value,
      start: GALLERY_SCROLL_TRIGGER_START,
      end: GALLERY_SCROLL_TRIGGER_END,
      scrub: true
    }
  })
  .to(topRow, {
    x: topRowEndX,
    duration: GALLERY_SCROLL_ANIMATION_DURATION,
    ease: GALLERY_SCROLL_ANIMATION_EASE
  }, 0)
  .to(bottomRow, {
    x: bottomRowEndX,
    duration: GALLERY_SCROLL_ANIMATION_DURATION,
    ease: GALLERY_SCROLL_ANIMATION_EASE
  }, 0)
}

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars && trigger.vars.trigger === galleryRef.value) {
      trigger.kill()
    }
  })
})
</script>

<style scoped>
.portfolio-images {
  background-color: #FFF;
  padding: 30px 0;
}

.portfolio-images .container-fluid {
  padding: 0 var(--body-horizontal-padding);
}

.images-grid {
  gap: 30px;
}

.portfolio-image {
  width: 100%;
  padding-top: 70%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}

.portfolio-image-link {
  display: block;
  border-radius: 8px;
  overflow: hidden;
}

.portfolio-images.gallery-mode {
  padding: 60px 0;
  overflow: hidden;
}

.gallery-scroll-container {
  width: 100%;
  overflow: hidden;
  padding: 0 var(--body-horizontal-padding);
  user-select: none;
  -webkit-user-select: none;
}

.gallery-scroll-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  will-change: transform;
  width: max-content;
}

.gallery-scroll-track {
  display: flex;
  gap: 16px;
  width: max-content;
}

.gallery-scroll-track.top-row {
  align-items: flex-end;
}

.gallery-scroll-track.bottom-row {
  align-items: flex-start;
}

.gallery-scroll-item {
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
  width: 29vw;
}

.gallery-scroll-track.top-row .gallery-scroll-item:nth-child(odd) {
  width: 40vw;
}

.gallery-scroll-track.top-row .gallery-scroll-item:nth-child(even) {
  width: 35vw;
}

.gallery-scroll-track.bottom-row .gallery-scroll-item:nth-child(odd) {
  width: 20vw;
}

.gallery-scroll-track.bottom-row .gallery-scroll-item:nth-child(even) {
  width: 29vw;
}

.gallery-scroll-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.gallery-scroll-link {
  display: block;
  width: 100%;
  height: 100%;
}

.gallery-scroll-item.small .gallery-scroll-image {
  padding-top: 75%;
}

.gallery-scroll-item.medium .gallery-scroll-image {
  padding-top: 100%;
}

.gallery-scroll-item.tall .gallery-scroll-image {
  padding-top: 130%;
}

@media (max-width: 1024px) {
  .gallery-scroll-item {
    width: 60vw;
  }
}

@media (max-width: 768px) {
  .portfolio-image {
    padding-top: 100%;
  }
  
  .gallery-scroll-item {
    width: 70vw;
  }
}

@media (max-width: 576px) {
  .portfolio-image {
    padding-top: 120%;
  }
  
  .gallery-scroll-item {
    width: 80vw;
  }
  
  .images-grid {
    gap: 15px;
  }
  
  .image-item {
    margin-bottom: 15px;
  }
}
</style>

