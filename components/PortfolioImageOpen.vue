<template>
  <section class="expanding-grid-section" :class="{ 'dark-mode': darkMode }">
    <div class="inner-section expanding-grid" ref="expandingGridRef">
      <div class="elements">
        <div
          v-for="(item, index) in gridItems"
          :key="index"
          :ref="el => { if (el) positionRefs[index] = el }"
          :class="`position position-${String(index).padStart(2, '0')}`"
        >
          <div
            :class="index === 0 ? 'element main-element' : `element element-${String(index).padStart(2, '0')}`"
          >
            <img
              v-if="item && !isVideo(item)"
              :src="item"
              :alt="`Grid image ${index}`"
              class="cover"
            />
            <video
              v-else-if="item && isVideo(item)"
              autoplay
              playsinline
              muted
              loop
              :src="item"
              class="cover"
            >
              <source :src="item" type="video/mp4">
            </video>
          </div>
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
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})

const expandingGridRef = ref(null)
const positionRefs = ref([])
let scrollTriggers = []

const vh = (coef) => {
  if (typeof window === 'undefined') return 0
  return window.innerHeight * (coef / 100)
}

const isVideo = (url) => {
  if (!url) return false
  return url.includes('.mp4') || url.includes('.webm') || url.includes('.mov')
}

const gridItems = computed(() => {
  const items = [...props.images]
  while (items.length < 7) {
    items.push(null)
  }
  return items.slice(0, 7)
})

onMounted(() => {
  if (process.client && gsap && ScrollTrigger && props.images && props.images.length > 0) {
    nextTick(() => {
      const expandingGrid = expandingGridRef.value
      if (!expandingGrid) return

      const mainEl = expandingGrid.querySelector('.position-00 .main-element')
      const mainElChild = mainEl?.querySelector('img, video')
      const el00 = positionRefs.value[0]
      const el01 = positionRefs.value[1]
      const el02 = positionRefs.value[2]
      const el03 = positionRefs.value[3]
      const el04 = positionRefs.value[4]
      const el05 = positionRefs.value[5]
      const el06 = positionRefs.value[6]

      if (!el00) return

      const pinTrigger = ScrollTrigger.create({
        trigger: expandingGrid,
        pin: true,
        anticipatePin: 1,
        start: 'top top',
        end: '+=' + vh(200)
      })
      scrollTriggers.push(pinTrigger)

      gsap.to(el00, {
        scale: 4,
        scrollTrigger: {
          trigger: expandingGrid,
          start: 'top top',
          end: '+=' + vh(200),
          scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
        }
      })

      if (mainEl) {
        gsap.to(mainEl, {
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (mainElChild) {
        gsap.from(mainElChild, {
          scale: 1.5,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (el01) {
        gsap.to(el01, {
          scale: 5,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (el02) {
        gsap.to(el02, {
          scale: 6,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (el03) {
        gsap.to(el03, {
          scale: 8,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (el04) {
        gsap.to(el04, {
          scale: 5,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (el05) {
        gsap.to(el05, {
          scale: 6,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }

      if (el06) {
        gsap.to(el06, {
          scale: 9,
          scrollTrigger: {
            trigger: expandingGrid,
            start: 'top top',
            end: '+=' + vh(200),
            scrub: ScrollTrigger.isTouch !== 1 ? 3 : true
          }
        })
      }
    })
  }
})

onUnmounted(() => {
  scrollTriggers.forEach(trigger => {
    if (trigger && trigger.kill) {
      trigger.kill()
    }
  })
  scrollTriggers = []
  
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars && trigger.vars.trigger === expandingGridRef.value) {
      trigger.kill()
    }
  })
})
</script>

<style scoped>
.expanding-grid-section {
  background-color: #FFF;
  color: #000;
  padding: 0;
  margin: 0;
  position: relative;
}

.expanding-grid-section.dark-mode {
  background-color: #1D1D1B;
  color: #FFF;
}

.inner-section.expanding-grid {
  overflow: hidden;
  height: 100vh;
  position: relative;
  margin: 0;
}

.inner-section.expanding-grid .elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.inner-section.expanding-grid .elements .position {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.inner-section.expanding-grid .elements .position .element {
  position: absolute;
  overflow: hidden;
  border-radius: 6px;
}

.inner-section.expanding-grid .elements .position .element.main-element {
  top: 50%;
  left: 50%;
  width: 26.25vw;
  height: 25vh;
  transform: translate(-50%, -50%);
}

.inner-section.expanding-grid .elements .position .element.element-01 {
  top: 10vh;
  left: 36.80556vw;
  width: 35vw;
  height: 26.5vh;
}

@media (min-width: 1024px) {
  .inner-section.expanding-grid .elements .position .element.element-01 {
    top: 5vh;
    width: 31.25vw;
    height: 30vh;
  }
}

.inner-section.expanding-grid .elements .position .element.element-02 {
  top: 32.5vh;
  left: 3vw;
  width: 32vw;
  height: 30vh;
}

@media (min-width: 1024px) {
  .inner-section.expanding-grid .elements .position .element.element-02 {
    top: 22.5vh;
    left: 15.97222vw;
    width: 19.16667vw;
    height: 40vh;
  }
}

.inner-section.expanding-grid .elements .position .element.element-03 {
  top: 37.5vh;
  left: 64.93056vw;
  width: 26.25vw;
  height: 20vh;
}

@media (min-width: 1024px) {
  .inner-section.expanding-grid .elements .position .element.element-03 {
    top: 50%;
    transform: translateY(-50%);
    height: 25vh;
  }
}

.inner-section.expanding-grid .elements .position .element.element-04 {
  top: 63.25vh;
  left: 10.06944vw;
  width: 31.25vw;
  height: 15vh;
}

@media (min-width: 1024px) {
  .inner-section.expanding-grid .elements .position .element.element-04 {
    top: 65vh;
    height: 30vh;
  }
}

.inner-section.expanding-grid .elements .position .element.element-05 {
  top: 63.25vh;
  left: 43.05556vw;
  width: 20.13889vw;
  height: 25vh;
}

@media (min-width: 1024px) {
  .inner-section.expanding-grid .elements .position .element.element-05 {
    top: 65vh;
    height: 30vh;
  }
}

.inner-section.expanding-grid .elements .position .element.element-06 {
  top: 58.25vh;
  left: 64.93056vw;
  width: 19.16667vw;
  height: 20vw;
}

@media (min-width: 1024px) {
  .inner-section.expanding-grid .elements .position .element.element-06 {
    top: 65vh;
    height: 12.84722vw;
  }
}

.inner-section.expanding-grid .elements .position .element img,
.inner-section.expanding-grid .elements .position .element video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.inner-section.expanding-grid .elements .position .element img.cover,
.inner-section.expanding-grid .elements .position .element video.cover {
  object-fit: cover;
}
</style>
