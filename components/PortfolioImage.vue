<template>
  <section
    ref="sectionRef"
    class="portfolio-image-section"
    :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }"
  >
    <div class="container-fluid">
      <div v-if="image" class="row g-0 portfolio-image-container">
        <div
          ref="imageRef"
          class="portfolio-image-element"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </div>
    </div>
  </section>
  <section
    v-if="image"
    ref="cleanAreaRef"
    class="clean-area"
    :class="{ 'dark-mode': !darkMode, 'light-mode': darkMode }"
  ></section>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})

const sectionRef = ref(null)
const imageRef = ref(null)
const cleanAreaRef = ref(null)
let imageTrigger = null

const getPaddingPercent = (element) => {
  const styles = window.getComputedStyle(element)
  const paddingTopPx = parseFloat(styles.paddingTop)
  const width = element.offsetWidth || element.getBoundingClientRect().width || 1
  return (paddingTopPx / width) * 100
}

onMounted(() => {
  if (process.client && gsap && ScrollTrigger && props.image) {
    nextTick(() => {
      const imageElement = imageRef.value
      const sectionElement = sectionRef.value
      const cleanAreaElement = cleanAreaRef.value

      if (!imageElement || !sectionElement || !cleanAreaElement) {
        return
      }

      const initialImagePercent = getPaddingPercent(imageElement)
      const initialCleanPercent = getPaddingPercent(cleanAreaElement)

      const targetImagePercent = 60
      const diffPercent = targetImagePercent - initialImagePercent
      const targetCleanPercent = Math.max(initialCleanPercent, initialCleanPercent + diffPercent - 10)

      imageTrigger = ScrollTrigger.create({
        trigger: imageElement,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(imageElement, {
            paddingTop: `${targetImagePercent}%`,
            duration: 1.5,
            ease: 'power2.out'
          })

          gsap.to(cleanAreaElement, {
            paddingTop: `${targetCleanPercent}%`,
            duration: 1.5,
            ease: 'power2.out'
          })

          if (props.darkMode) {
            gsap.to(sectionElement, {
              duration: 1.5,
              ease: 'power2.out'
            })
          }
        }
      })
    })
  }
})

onUnmounted(() => {
  if (imageTrigger) {
    imageTrigger.kill()
    imageTrigger = null
  }
})
</script>

<style scoped>
.clean-area {
  padding-top: 20%;
  width: 100%;
  background-color: #FFF;
  transition: padding-top 1.5s ease;
}

.clean-area.dark-mode {
  background-color: #1D1D1B;
}

.clean-area.light-mode {
  background-color: #FFF;
}

.portfolio-image-section {
  background-color: #FFF;
  padding: 0px 0;
  padding-bottom: 120px;
}

.portfolio-image-section.dark-mode {
  background-color: #1D1D1B;
}

.portfolio-image-section.light-mode {
  background-color: #FFF;
}

.portfolio-image-section .container-fluid {
  padding: 0 var(--body-horizontal-padding);
}

.portfolio-image-container {
  position: relative;
}

.portfolio-image-element {
  width: 100%;
  padding-top: 14%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-top: 60px;
  transition: padding-top 1.5s ease;
  position: absolute;
}

@media (max-width: 768px) {
  .portfolio-image-section {
    padding: 60px 0;
    padding-bottom: 80px;
  }
  
  .portfolio-image-element {
    padding-top: 50%;
  }
}

@media (max-width: 576px) {
  .portfolio-image-element {
    padding-top: 80%;
  }
}
</style>

