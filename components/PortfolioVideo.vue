<template>
  <section ref="sectionRef" class="portfolio-video">
    <div ref="videoContentRef" class="portfolio-video-content">
      <video :src="videoSrc" autoplay loop muted playsinline></video>
    </div>
  </section>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()

const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})

const sectionRef = ref(null)
const videoContentRef = ref(null)
let scrollTriggerInstance = null

onMounted(() => {
  if (!process.client || !gsap || !ScrollTrigger) return

  nextTick(() => {
    const sectionEl = sectionRef.value
    const contentEl = videoContentRef.value

    if (!sectionEl || !contentEl) return

    gsap.set(contentEl, {
      xPercent: -30,
      opacity: 0
    })

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(contentEl, {
          xPercent: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out'
        })
      }
    })
  })
})

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }
})
</script>

<style scoped>
.portfolio-video {
  position: relative;
  padding-top: 40%;
  width: 100%;
  overflow: hidden;
  background-color: #FFF;
}

.portfolio-video-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.portfolio-video-content video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .portfolio-video {
    padding-top: 60%;
  }
}

@media (max-width: 576px) {
  .portfolio-video {
    padding-top: 100%;
  }
}
</style>

