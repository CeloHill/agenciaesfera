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
    
    <div v-else class="inner-section marquee" ref="marqueeRef">
      <div class="marquee-line left" ref="leftRowRef">
          <div 
            v-for="(image, index) in topRowImages" 
            :key="`top-${index}`"
          class="media"
          >
          <img
            v-if="image && !isVideo(image)"
            :src="image"
            :alt="`Marquee image ${index}`"
            class="cover"
          />
          <video
            v-else-if="image && isVideo(image)"
            autoplay
            playsinline
            muted
            loop
            :src="image"
            class="cover"
          >
            <source :src="image" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="marquee-line right" ref="rightRowRef">
          <div 
            v-for="(image, index) in bottomRowImages" 
            :key="`bottom-${index}`"
          class="media"
          >
          <img
            v-if="image && !isVideo(image)"
            :src="image"
            :alt="`Marquee image ${index}`"
            class="cover"
          />
          <video
            v-else-if="image && isVideo(image)"
            autoplay
            playsinline
            muted
            loop
            :src="image"
            class="cover"
          >
            <source :src="image" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const galleryRef = ref(null)
const imagesGridRef = ref(null)
const imageItemsRef = ref([])
const marqueeRef = ref(null)
const leftRowRef = ref(null)
const rightRowRef = ref(null)

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

const isVideo = (url) => {
  if (!url) return false
  return url.includes('.mp4') || url.includes('.webm') || url.includes('.mov')
}

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

onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
      nextTick(() => {
        if (!isGalleryMode.value) {
          animateGridImages()
        } else {
        setupMarquee()
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

const setupMarquee = () => {
  if (!marqueeRef.value || !leftRowRef.value || !rightRowRef.value) return
  
  const leftRow = leftRowRef.value
  const rightRow = rightRowRef.value
  
  gsap.fromTo(leftRow, {
    x: 0
  }, {
    x: '-15vw',
    scrollTrigger: {
      trigger: marqueeRef.value,
      start: '-10% 110%',
      end: '110% -10%',
      scrub: true
    }
  })
  
  gsap.fromTo(rightRow, {
    x: '-15vw'
  }, {
    x: '0',
    scrollTrigger: {
      trigger: marqueeRef.value,
      start: '-10% 110%',
      end: '110% -10%',
      scrub: true
    }
  })
}

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars && trigger.vars.trigger === galleryRef.value) {
      trigger.kill()
    }
    if (trigger.vars && trigger.vars.trigger === marqueeRef.value) {
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

.inner-section.marquee {
  position: relative;
}

.marquee-line {
  display: inline-flex;
}

.marquee-line:first-child {
  align-items: flex-end;
  margin-bottom: 4vw;
}

@media (min-width: 1024px) {
  .marquee-line:first-child {
    margin-bottom: 2vw;
  }
}

.marquee-line:first-child .media:nth-child(2) {
  width: 60vw;
  padding-bottom: 31.55vw;
}

@media (min-width: 1024px) {
  .marquee-line:first-child .media:nth-child(2) {
    width: 40vw;
    padding-bottom: 21vw;
  }
}

.marquee-line:first-child .media:nth-child(3) {
  width: 35vw;
  padding-bottom: 19.69vw;
}

@media (min-width: 1024px) {
  .marquee-line:first-child .media:nth-child(3) {
    width: 29vw;
    padding-bottom: 16.31vw;
  }
}

.marquee-line:first-child .media:last-child {
  display: none;
}

@media (min-width: 1024px) {
  .marquee-line:first-child .media:last-child {
    display: block;
  }
}

.marquee-line:last-child {
  align-items: flex-start;
}

.marquee-line:last-child .media:nth-child(2) {
  width: 35vw;
  padding-bottom: 19.69vw;
}

@media (min-width: 1024px) {
  .marquee-line:last-child .media:nth-child(2) {
    width: 29vw;
    padding-bottom: 16.31vw;
  }
}

.marquee-line:last-child .media:nth-child(3) {
  width: 60vw;
  padding-bottom: 31.55vw;
}

@media (min-width: 1024px) {
  .marquee-line:last-child .media:nth-child(3) {
    width: 40vw;
    padding-bottom: 21vw;
  }
}

.marquee-line:last-child .media:last-child {
  display: none;
}

@media (min-width: 1024px) {
  .marquee-line:last-child .media:last-child {
    display: block;
  }
}

.marquee-line .media {
  position: relative;
  overflow: hidden;
  display: block;
  height: 0;
  margin-right: 4vw;
  border-radius: 6px;
}

@media (min-width: 1024px) {
  .marquee-line .media {
    margin-right: 2vw;
  }
}

.marquee-line .media:first-child,
.marquee-line .media:last-child {
  width: 25vw;
  padding-bottom: 14.06vw;
}

@media (min-width: 1024px) {
  .marquee-line .media:first-child,
  .marquee-line .media:last-child {
    width: 20vw;
    padding-bottom: 11.25vw;
  }
}

.marquee-line .media:nth-child(3) {
  margin-right: 0;
}

@media (min-width: 1024px) {
  .marquee-line .media:nth-child(3) {
    margin-right: 2vw;
  }
}

.marquee-line .media:last-child {
  margin-right: 0;
}

.marquee-line .media img,
.marquee-line .media video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.marquee-line .media img.cover,
.marquee-line .media video.cover {
  object-fit: cover;
}

@media (max-width: 768px) {
  .portfolio-image {
    padding-top: 100%;
  }
}

@media (max-width: 576px) {
  .portfolio-image {
    padding-top: 120%;
  }
  
  .images-grid {
    gap: 15px;
  }
  
  .image-item {
    margin-bottom: 15px;
  }
}
</style>
