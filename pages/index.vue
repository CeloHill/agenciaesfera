<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <section class="full-banner">
          <div class="full-banner-content">
            <div class="full-banner-content-left">
              <h1>
                <span class="line line-1">Na <span class="esfera">Esfera<span class="esfera_bt"><span class="esfera_bt_text">sobre nós</span> <span class="arrow-right"><img src="/icons/arrow1.png"></img></span></span></span></span>
                <span class="line line-2">trabalhamos</span>
                <span class="line line-3">com energia,</span>
                <span class="line line-4">paixão e respeito</span>
              </h1>
            </div>
            <div class="full-banner-content-right">
              <div class="video-image-container">
                <video class="video-bg" src="/videos/video-intro-esfera.mp4" autoplay loop muted playsinline></video>
              </div>
            </div>
          </div>
          <div class="full-banner-events container-fluid">
            <div class="full-banner-events-content row">
              <div class="col-sm-12 col-md-6 col-lg-3 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">Lorem ipsum</div>
                    <div class="award-text-title">Melhor Evento</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">Lorem ipsum</div>
                    <div class="award-text-title">Melhor Evento</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">Lorem ipsum</div>
                    <div class="award-text-title">Melhor Evento</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">Lorem ipsum</div>
                    <div class="award-text-title">Melhor Evento</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-numbers-text">
          <div class="row section-numbers-text-content">
            <div class="col-md-6 col-sm-12">
              <p class="color-change-text"><span class="highlight no-color-change">Seu evento, é a nossa missão</span> e a gente soma números com expertise e mostra resultados com orgulho.</p>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="badge-clients">
                <img src="/icons/badge-clients.png"></img>
              </div>
            </div>
          </div>
          <div class="row section-numbers-content">
            <div class="col-lg-3 col-sm-6">
              <div class="small-number ">1</div>
              <div class="big-number-container">
                <div class="big-number color-change-text">26</div>
                <div class="big-number-text">Anos de <br /> experiência</div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="small-number">2</div>
              <div class="big-number-container">
                <div class="big-number-plus color-change-text">+</div>
                <div class="big-number color-change-text">6.500</div>
                <div class="big-number-text">Projetos <br /> executados</div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="small-number">3</div>
              <div class="big-number-container">
                <div class="big-number-plus color-change-text">+</div>
                <div class="big-number color-change-text">350</div>
                <div class="big-number-text">Clientes <br /> satisfeitos</div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="small-number">4</div>
              <div class="big-number-container">
                <div class="big-number color-change-text">25</div>
                <div class="big-number-text">Prêmios <br /> no setor</div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-clients">
          <div class="clients-content row">
            <div class="clients-title col-md-6 col-sm-12">
              Na esfera o cliente <span class="highlight no-color-change">é nosso parceiro</span>
            </div>
            <div class="clients-description col-md-6 col-sm-12">
              <div class="align-right no-color-change">
                Trabalhamos ideias que ganham forma por que são <br />
                construídas junto de quem nos inspira.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="carousel-section">
                <ClientOnly>
                  <Carousel 
                    ref="carouselRef1"
                    v-bind="carouselConfig" 
                    class="clients-carousel"
                  >
                    <Slide v-for="(src, i) in clients" :key="i">
                      <div class="full-banner-clients-list-content-carousel-item">
                        <img :src="src" alt="" class="client-logo" />
                      </div>
                    </Slide>
                  </Carousel>
                  <template #fallback>
                    <div class="carousel-loading">
                      <div class="full-banner-clients-list-content-carousel-item" v-for="(src, i) in baseClients" :key="i">
                        <img :src="src" alt="" class="client-logo" />
                      </div>
                    </div>
                  </template>
                </ClientOnly>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="carousel-section">
                <ClientOnly>
                  <Carousel 
                    ref="carouselRef2"
                    v-bind="carouselConfig" 
                    class="clients-carousel"
                  >
                    <Slide v-for="(src, i) in clients" :key="i">
                      <div class="full-banner-clients-list-content-carousel-item">
                        <img :src="src" alt="" class="client-logo" />
                      </div>
                    </Slide>
                  </Carousel>
                  <template #fallback>
                    <div class="carousel-loading">
                      <div class="full-banner-clients-list-content-carousel-item" v-for="(src, i) in baseClients" :key="i">
                        <img :src="src" alt="" class="client-logo" />
                      </div>
                    </div>
                  </template>
                </ClientOnly>
              </div>
            </div>
          </div>
        </section>
        <section class="section-portfolio-gallery">
          <div class="row">
            <div class="col-12">
              <div class="portfolio-gallery-content">
                <div class="portfolio-gallery-content-item">
                  <div class="case-content-item-background">
                    <img src="/images/cases-background.jpg" alt="Blabs" />
                    <img src="/images/cases-background-2.jpg" alt="Blabs" />
                  </div>
                  <div class="case-content-container">
                    <div class="case-content-text">
                      <div class="animated-text-container">
                        <div class="case-content-text-title">
                          Blabs 1
                        </div>
                        <div class="case-content-text-number">
                          01
                        </div>
                      </div>
                      <div class="animated-text-container">
                        <div class="case-content-text-title">
                          Blabs 3
                        </div>
                        <div class="case-content-text-number">
                          03
                        </div>
                      </div>
                    </div>
                    <div class="case-content-image">
                      <div class="case-content-image-container">
                        <img src="/images/case-folder-1.png" alt="Blabs" />
                        <img src="/images/case-folder-2.png" alt="Blabs" />
                      </div>
                    </div>
                    <div class="case-content-text">
                      <div class="animated-text-container">
                        <div class="case-content-text-number">
                          02
                        </div>
                        <div class="case-content-text-title">
                          Blabs 2
                        </div>
                      </div>
                      <div class="animated-text-container">
                        <div class="case-content-text-number">
                          04
                        </div>
                        <div class="case-content-text-title">
                          Blabs 4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const { gsap, ScrollTrigger } = useGsap()

const baseClients = [
  '/images/clients/Corteva.png',
  '/images/clients/JohnDeere.png',
  '/images/clients/Multilog.png',
  '/images/clients/PortosParana.png'
]

// Criamos múltiplas cópias para loop suave
const clients = [...baseClients, ...baseClients, ...baseClients]

const carouselConfig = {
  itemsToShow: 4,
  wrapAround: false,
  snapAlign: 'start',
  transition: 300,
  breakpoints: {
    768: { itemsToShow: 6 },
    480: { itemsToShow: 4 },
    320: { itemsToShow: 3 }
  }
}

// Implementação manual de autoplay suave para ambos os carousels
const carouselRef1 = ref(null)
const carouselRef2 = ref(null)
let autoplayInterval1 = null
let autoplayInterval2 = null

onMounted(() => {
  if (process.client) {
    nextTick(() => {
      startAutoplay1()
      startAutoplay2()
      animateNumbers()
      animateTitleLines()
      animateVideoImage()
      animateAwards()
      setupEsferaHover()
      setupPortfolioGalleryReveal()
      
      // Refresh ScrollTrigger on resize for responsiveness
      window.addEventListener('resize', () => {
        ScrollTrigger.refresh()
      })
    })
  }
})

onUnmounted(() => {
  if (autoplayInterval1) {
    clearInterval(autoplayInterval1)
  }
  if (autoplayInterval2) {
    clearInterval(autoplayInterval2)
  }
  
  // Remove resize listener
  if (process.client) {
    window.removeEventListener('resize', () => {
      ScrollTrigger.refresh()
    })
  }
})

const startAutoplay1 = () => {
  autoplayInterval1 = setInterval(() => {
    if (carouselRef1.value) {
      const currentIndex = carouselRef1.value.currentSlide
      const maxIndex = clients.length - 4
      
      if (currentIndex >= maxIndex) {
        carouselRef1.value.slideTo(0)
      } else {
        carouselRef1.value.next()
      }
    }
  }, 3000)
}

const startAutoplay2 = () => {
  autoplayInterval2 = setInterval(() => {
    if (carouselRef2.value) {
      const currentIndex = carouselRef2.value.currentSlide
      const maxIndex = clients.length - 4
      
      if (currentIndex <= 0) {
        carouselRef2.value.slideTo(maxIndex)
      } else {
        carouselRef2.value.prev()
      }
    }
  }, 3000)
}

const stopAutoplay1 = () => {
  if (autoplayInterval1) {
    clearInterval(autoplayInterval1)
    autoplayInterval1 = null
  }
}

const stopAutoplay2 = () => {
  if (autoplayInterval2) {
    clearInterval(autoplayInterval2)
    autoplayInterval2 = null
  }
}

const animateNumbers = () => {
  const numberElements = document.querySelectorAll('.big-number')
  
  numberElements.forEach(element => {
    const finalValue = parseInt(element.textContent.replace(/[^\d]/g, ''))
    
    if (finalValue) {
      gsap.set(element, { textContent: 0 })
      
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(element, {
            textContent: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              const currentValue = Math.round(this.targets()[0].textContent)
              element.textContent = currentValue.toLocaleString('pt-BR')
            }
          })
        }
      })
    }
  })
}

const animateTitleLines = () => {
  const titleLines = document.querySelectorAll('.full-banner h1 .line')
  
  if (titleLines.length === 0) return
  
  // Define o estado inicial das linhas
  gsap.set(titleLines, {
    y: -25,
    opacity: 0
  })
  
  // Cria a animação sequencial
  const tl = gsap.timeline({
    delay: 0.5
  })
  
  titleLines.forEach((line, index) => {
    tl.to(line, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, index * 0.2)
  })
}

const animateVideoImage = () => {
  // is just not working. I need to fix it.
  const videoContainer = document.querySelector('.video-image-container')
  
  if (!videoContainer) return
  
  gsap.set(videoContainer, {
    x: 310,
    y: -290,
    opacity: 0,
    scale: 0.8
  })
  
  gsap.to(videoContainer, {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3
  })
}

const animateAwards = () => {
  const awardContainers = document.querySelectorAll('.award-container')
  const videoContainer = document.querySelector('.video-image-container')
  
  if (awardContainers.length === 0 || !videoContainer) return
  
  gsap.set(awardContainers, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%',
    opacity: 0,
    filter: 'blur(10px)',
    zIndex: 10
  })
  
  const tl = gsap.timeline({
    delay: 1.5
  })
  
  awardContainers.forEach((award, index) => {
    tl.to(award, {
      position: 'static',
      top: 'auto',
      left: 'auto',
      x: 0,
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: "power2.out"
    }, index * 0.2)
  })
}

const setupEsferaHover = () => {
  const esfera = document.querySelector('.full-banner h1 .esfera')
  const esferaBt = document.querySelector('.full-banner h1 .esfera_bt')

  if (!esfera || !esferaBt) return

  gsap.set(esferaBt, {
    clipPath: 'inset(0 100% 0 0)',
    autoAlpha: 0,
    x: -50,
    opacity: 0,
    filter: 'blur(10px)'
  })

  const tl = gsap.timeline({ paused: true })
  tl.to(esferaBt, { autoAlpha: 1, duration: 0.05 }, 0)
    .to(esferaBt, { clipPath: 'inset(0 0% 0 0)', x: 0, duration: 0.35, ease: 'power2.out', opacity: 1, filter: 'blur(0px)' }, 0)

  esfera.addEventListener('mouseenter', () => tl.play())
  esfera.addEventListener('mouseleave', () => tl.reverse())
}

const setupPortfolioGalleryReveal = () => {
  const gallerySection = document.querySelector('.section-portfolio-gallery')
  const galleryContent = document.querySelector('.portfolio-gallery-content')
  const portfolioItem = document.querySelector('.portfolio-gallery-content-item')
  
  // Elementos de background (duas imagens dentro de .case-content-item-background)
  const backgroundContainer = document.querySelector('.case-content-item-background')
  const gal1Background = backgroundContainer?.querySelector('img:nth-child(1)')
  const gal2Background = backgroundContainer?.querySelector('img:nth-child(2)')
  
  // Elementos de imagem central (duas imagens dentro de .case-content-image-container)
  const imageContainer = document.querySelector('.case-content-image-container')
  const gal1Image = imageContainer?.querySelector('img:nth-child(1)')
  const gal2Image = imageContainer?.querySelector('img:nth-child(2)')
  
  // Elementos de texto (todos os .animated-text-container da página)
  const textContainers = document.querySelectorAll('.case-content-text')
  const gal1TextContainers = []
  const gal2TextContainers = []
  
  // Separar textos gal1 e gal2 de todos os containers
  textContainers.forEach(container => {
    const firstText = container.querySelector('.animated-text-container:nth-child(1)')
    const secondText = container.querySelector('.animated-text-container:nth-child(2)')
    if (firstText) gal1TextContainers.push(firstText)
    if (secondText) gal2TextContainers.push(secondText)
  })
  
  if (!gallerySection || !galleryContent || !portfolioItem || !gal1Background || !gal2Background || !gal1Image || !gal2Image) return

  // Setup inicial: gal2 elementos ocultos com clip-path
  gsap.set(gal2Background, {
    clipPath: 'inset(100% 0 0 0)',
    zIndex: 2
  })
  
  gsap.set(gal1Background, {
    zIndex: 1
  })
  
  // Setup inicial imagens: sobreposição + clip-path
  gsap.set(gal2Image, {
    clipPath: 'inset(100% 0 0 0)',
    zIndex: 2,
    translate: 'none',
    rotate: 'none',
    scale: 'none'
  })
  
  gsap.set(gal1Image, {
    zIndex: 1,
    translate: 'none',
    rotate: 'none',
    scale: 'none'
  })
  
  // Setup inicial textos: sobreposição + clip-path
  gal2TextContainers.forEach(textContainer => {
    gsap.set(textContainer, {
      clipPath: 'inset(100% 0 0 0)',
      zIndex: 2,
      translate: 'none',
      rotate: 'none',
      scale: 'none'
    })
  })
  
  gal1TextContainers.forEach(textContainer => {
    gsap.set(textContainer, {
      zIndex: 1,
      translate: 'none',
      rotate: 'none',
      scale: 'none'
    })
  })

  ScrollTrigger.create({
    trigger: gallerySection,
    start: "top top",
    end: "bottom bottom",
    pin: galleryContent,
    pinSpacing: false,
    scrub: 4,
    invalidateOnRefresh: true,
    refreshPriority: -1,
    onUpdate: (self) => {
      const progress = self.progress
      
      if (progress <= 0.25) {
        // Fase 1: gal1 elementos visíveis, gal2 elementos ocultos
        gsap.set(gal2Background, { clipPath: 'inset(100% 0 0 0)' })
        gsap.set(gal2Image, { 
          clipPath: 'inset(100% 0 0 0)',
          transform: 'translate3d(0px, 0px, 0px)'
        })
        gsap.set(gal1Image, { 
          transform: 'translate3d(0px, 0px, 0px)'
        })
        
        // Textos: gal1 visíveis, gal2 ocultos
        gal2TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: 'inset(100% 0 0 0)',
            transform: 'translate3d(0px, 0px, 0px)'
          })
        })
        gal1TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            transform: 'translate3d(0px, 0px, 0px)'
          })
        })
        
      } else if (progress <= 0.75) {
        // Fase 2: Reveal simultâneo + movimento de todos os elementos
        const revealProgress = (progress - 0.25) / 0.5
        const clipValue = 100 - (revealProgress * 100)
        const moveDistance = revealProgress * 30 // 30px de movimento sutil para textos
        
        // Backgrounds
        gsap.set(gal2Background, { clipPath: `inset(${clipValue}% 0 0 0)` })
        
        // Imagens: reveal + movimento
        gsap.set(gal2Image, { 
          clipPath: `inset(${clipValue}% 0 0 0)`,
          transform: `translate3d(0px, ${40 - (revealProgress * 40)}px, 0px)`
        })
        gsap.set(gal1Image, { 
          transform: `translate3d(0px, -${revealProgress * 40}px, 0px)`
        })
        
        // Textos: reveal + movimento
        gal2TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: `inset(${clipValue}% 0 0 0)`,
            transform: `translate3d(0px, ${30 - moveDistance}px, 0px)`
          })
        })
        gal1TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            transform: `translate3d(0px, -${moveDistance}px, 0px)`
          })
        })
        
      } else {
        // Fase 3: gal2 elementos totalmente revelados
        gsap.set(gal2Background, { clipPath: 'inset(0% 0 0 0)' })
        gsap.set(gal2Image, { 
          clipPath: 'inset(0% 0 0 0)',
          transform: 'translate3d(0px, 0px, 0px)'
        })
        gsap.set(gal1Image, { 
          transform: 'translate3d(0px, -40px, 0px)'
        })
        
        // Textos: gal2 totalmente revelados
        gal2TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: 'inset(0% 0 0 0)',
            transform: 'translate3d(0px, 0px, 0px)'
          })
        })
        gal1TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            transform: 'translate3d(0px, -30px, 0px)'
          })
        })
      }
    }
  })
}

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.full-banner {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 160px;
  padding: 0 var(--body-horizontal-padding);
  height: 100vh;
  justify-content: center;

  h1 {
    font-size: clamp(28px, 3.4vw, 80px);
    font-weight: var(--font-weight-regular);
    line-height: 1.2;

    .line {
      display: block;
      overflow: visible;
      padding: 2px 0;
    }

    .esfera_bt {
      background-color: var(--color-yellow);
      color: var(--color-black);
      padding: 0.4em 1.3em;
      padding-right: 0.4em;
      border-radius: 50px;
      font-size: 0.5em;
      font-weight: var(--font-weight-regular);
      line-height: 1.1;
      margin-left: 20px;
      display: inline-flex;
      opacity: 0;
      transform: translateX(-50px);
      position: absolute;

      .esfera_bt_text {
        margin-right: 10px;
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
      }

      .arrow-right {
        width: 1.8em;
        height: 1.8em;
        background-color: rgba(255,255,255,0.3);
        border-radius: 50%;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 40%;
        }
      }
    }

    .esfera {
      font-weight: var(--font-weight-semibold);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0.05em;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--color-yellow);
      }
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: clamp(24px, 3.4vw, 80px);      
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: clamp(20px, 5vw, 35px);
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: clamp(18px, 6vw, 28px);
    }
  }
}

.full-banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.full-banner-content-left {
  width: 50%;
  padding-right: 20px;
}

.full-banner-content-right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video-image-container {
  border-radius: 400px;
  overflow: hidden;
  max-width: 1000px;
  position: relative;
  padding-top: 35%;
  max-height: 400px;
  transition: all 0.4s ease;
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.full-banner-events {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-self: center;
  min-height: 128px;
}

.full-banner-events-content {
  width: 100%;

  .col-align-center {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  &>div {
    margin-bottom: 50px;
  }
}

.award-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
}

.award-icon-left {
  width: 77px;
  margin-right: -30px;
}

.award-icon-right {
  width: 77px;
  margin-left: -30px;
}

.award-text {
  width: 100%;
  text-align: center;
  margin-top: -15px;

  .award-text-subtitle {
    font-size: 13px;
    text-transform: uppercase;
    color: var(--color-medium-gray);
    font-weight: var(--font-weight-regular);
    line-height: 1.1;
  }

  .award-text-title {
    font-size: 20px;
    font-weight: var(--font-weight-semibold);
    line-height: 1.1;
  }
}

.section-numbers-content {
  display: flex;
  width: 100%;
}

.section-numbers-text {
  width: 100%;
  gap: 230px;
  font-weight: var(--font-weight-regular);
  line-height: 1.1;
  padding: 0 var(--body-horizontal-padding);
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .section-numbers-text-content {
    align-items: center;
  }

  .badge-clients {
    width: 210px;
    
    img {
      width: 210px;
      height: 210px;
    }
  }

  p {
    font-size: 34px;
  }
}

.number-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.small-number {
  font-size: 13px;
  font-weight: var(--font-weight-regular);
  line-height: 1.1;
  color: var(--color-medium-gray);
  border-top: 1px solid var(--color-gray);
  padding-top: 10px;
  margin-bottom: 30px;
}

.big-number-container {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.big-number-plus {
  font-size: 30px;
  line-height: 1.1;
  display: flex;
  align-self: flex-start;
  margin-right: -10px;
  color: inherit;
}

.big-number {
  font-size: clamp(20px, 5vw, 90px);
  line-height: 1.1;
  color: inherit;
}

.big-number-text {
  font-size: 11px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: var(--color-medium-gray);
}

.section-clients {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--body-horizontal-padding);
  height: 80vh;
  gap: 100px;
  justify-content: center;
}

.clients-content {
    width: 100%;
    justify-content: center;
    align-items: center;
}

.clients-title {
  font-size: 34px;
}

.highlight {
  color: var(--color-yellow);
}

.clients-description {
  font-size: 20px;
  color: var(--color-gray);

  .align-right {
    text-align: right;
  }
}

.section-clients .carousel-section {
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel-section {
  max-width: 100%;
}

@media (max-width: 768px) {
  .section-clients .carousel-section {
    height: 250px;
    padding: 20px;
  }
}

@media (max-width: 576px) {
  .section-clients .carousel-section {
    height: 200px;
    padding: 15px;
  }
}

.full-banner-clients-list-content-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.client-logo {
  max-width: 180px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.carousel-loading {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .client-logo {
    max-width: 140px;
    max-height: 60px;
  }
}

@media (max-width: 576px) {
  .client-logo {
    max-width: 120px;
    max-height: 50px;
  }
}
</style>

<style>
.carousel__viewport::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 15%, rgba(29, 29, 27, 1) 100%);
  z-index: 1;
}

.carousel__viewport::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 200px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(29, 29, 27, 1) 85%);
}

@media (max-width: 768px) {
  .carousel__viewport::after,
  .carousel__viewport::before {
    width: 100px;
  }
}

@media (max-width: 576px) {
  .carousel__viewport::after,
  .carousel__viewport::before {
    width: 50px;
  }
}

.section-portfolio-gallery {
  margin-bottom: 100px;
  height: 300vh;

  .portfolio-gallery-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 var(--body-horizontal-padding);
    height: 100vh;
    min-height: 600px;
    gap: 100px;
    justify-content: center;
    position: relative;
  }

  @media (max-width: 768px) {
    height: 250vh;
    
    .portfolio-gallery-content {
      min-height: 500px;
      padding: 0 20px;
      gap: 50px;
    }
  }

  @media (max-width: 480px) {
    height: 200vh;
    
    .portfolio-gallery-content {
      min-height: 400px;
      padding: 0 15px;
      gap: 30px;
    }
  }

  .portfolio-gallery-content-item {
    width: 100%;
    height: 100%;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;

    .case-content-item-background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    
    .case-content-item-background img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    
    .case-content-item-background img:nth-child(1) {
      z-index: 1;
    }
    
    .case-content-item-background img:nth-child(2) {
      z-index: 2;
      clip-path: inset(100% 0 0 0);
    }

    .case-content-container {
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      background-color: rgb(29 29 27 / 50%);
      z-index: 1;
    }

    .case-content-image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .case-content-image-container {
        flex-direction: row;
        width: 20vw;
        height: 20vw;
        display: block;
        position: relative;
        overflow: hidden;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        max-height: 400px;
        border-radius: 1.3em;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          max-width: 400px;
          object-fit: cover;
        }
        
        img:nth-child(1) {
          z-index: 1;
        }
        
        img:nth-child(2) {
          z-index: 2;
          clip-path: inset(100% 0 0 0);
        }
      }
    }

    .case-content-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      padding: 0px 6vw;
      position: relative;
      overflow: hidden;
      min-height: 40px;
    }

    .animated-text-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0px 6vw;
    }
    
    .animated-text-container:nth-child(1) {
      z-index: 1;
    }
    
    .animated-text-container:nth-child(2) {
      z-index: 2;
      clip-path: inset(100% 0 0 0);
    }

    .case-content-text-title {
      font-size: 20px;
      font-weight: var(--font-weight-semibold);
      line-height: 1.1;
      color: var(--color-white);
    }

    .case-content-text-number {
      font-size: 20px;
      font-weight: var(--font-weight-regular);
      line-height: 1.1;
      color: var(--color-white);
    }
    
  }

  .portfolio-gallery-content-item:nth-child(2) {
    clip-path: inset(100% 0 0 0);
    z-index: 2;
  }
}

@media (max-width: 1200px) {
  .big-number {
    font-size: clamp(20px, 7vw, 90px) !important;
  }
  .clients-description br {
    display: none;
  }
}

@media (max-width: 992px) {
  .big-number-container {
    margin-bottom: 30px !important;
  }
}

@media (max-width: 768px) {
  .full-banner {
    margin-top: 100px;
    gap: 60px;
    height: initial !important;
    min-height: 100vh;
  }
  
  .full-banner-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .full-banner-content-left {
    width: 100%;
    padding-right: 0;
    text-align: center;
  }
  
  .full-banner-content-right, .full-banner-content-left {
    width: 100% !important;
  }

  .badge-clients {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }

  .section-numbers-text {
    gap: 100px !important;
    height: initial !important;
  }

  .big-number {
    font-size: clamp(20px, 7vw, 90px) !important;
  }

  .clients-title {
    text-align: center;
  }

  .clients-description .align-right{
    text-align: center !important;
  }
}

@media (max-width: 576px) { 
  .big-number {
    font-size: clamp(20px, 11vw, 90px) !important;
  }
}

@media (max-width: 480px) { 
  .big-number {
    font-size: clamp(20px, 5vw, 40px);
  }
}
</style>