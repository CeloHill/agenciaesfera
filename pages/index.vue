<template>
  <div>
    <AppIntro 
      v-show="showIntroAnimation" 
      @intro-complete="onIntroComplete"
      @video-flip-request="onVideoFlipRequest"
    />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        <section class="full-banner">
          <div class="full-banner-content">
            <div class="full-banner-content-left">
              <h1>
                <span class="line line-1"><span class="line-inner">Na <span class="esfera">Esfera<span class="esfera_bt"><span class="esfera_bt_text">sobre nós</span> <span class="arrow-right"><img src="/icons/arrow1.png"></img></span></span></span></span></span>
                <span class="line line-2"><span class="line-inner">trabalhamos</span></span>
                <span class="line line-3"><span class="line-inner">com energia,</span></span>
                <span class="line line-4"><span class="line-inner">paixão e respeito</span></span>
              </h1>
            </div>
            <div class="full-banner-content-right">
              <div class="video-image-container flip-receive-container">
                <video class="video-bg initial-video" src="/videos/video-intro-esfera.mp4" autoplay loop muted playsinline></video>
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
              <p class="color-change-text typing-animation-text"><span class="highlight no-color-change animated-text-1">Seu evento, é a nossa missão</span><span class="animated-text-2"> e a gente soma números com expertise e mostra resultados com orgulho.</span></p>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="badge-clients">
                <div class="animated-circle">
                  <img src="/images/logos/icon-white.svg" class="animated-circle-icon"></img>
                  <div class="animated-circle-text">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <path id="circle" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                      </defs>
                      <text font-size="16" fill="white" font-weight="400">
                        <textPath href="#circle">
                          nossos números • nossos números • nossos números • nossos números • nossos números •
                        </textPath>
                        <animateTransform 
                          attributeName="transform" 
                          attributeType="XML" 
                          type="rotate" 
                          from="0 100 100" 
                          to="360 100 100" 
                          dur="20s" 
                          repeatCount="indefinite"/>
                      </text>
                    </svg>
                  </div>
                </div>
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
          <AppMagneticCursor
            text="Ver Mais"
            :size="130"
            background-color="rgba(0, 0, 0, 0.1)"
            text-color="#FFFFFF"
            backdrop-blur="12px"
            :follow-speed="0.12"
            :enter-duration="0.4"
            :offset-x="50"
            :offset-y="50"
            :use-viewport-position="true"
            enter-ease="back.out(1.5)"
          >
            <NuxtLink to="/projetos">
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
            </NuxtLink>
          </AppMagneticCursor>
        </section>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useFirstVisit } from '~/composables/useFirstVisit'
import { useAnimateNumbers } from '~/composables/useAnimateNumbers'
import { useScrollLock } from '~/composables/useScrollLock'

// Page meta configuration
definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'fade-slide',
    mode: 'out-in'
  }
})

const { gsap, ScrollTrigger, Flip } = useGsap()
const {  checkDirectNavigation, resetFirstVisit, forceLoader } = useFirstVisit()
const { animateNumbers } = useAnimateNumbers()
const { unlockScroll } = useScrollLock()

const showIntroAnimation = ref(false)
const shouldShowIntro = ref(false)

// Check if we should show intro based on AppLoader logic
const checkIfShouldShowIntro = () => {
  if (process.client) {
    const shouldShowLoader = checkDirectNavigation()
    shouldShowIntro.value = shouldShowLoader
  }
}

// For testing - you can call this in browser console
if (process.client) {
  window.resetHomeVisit = () => {
    resetFirstVisit('home')
  }
  
  window.forceLoaderNext = () => {
    forceLoader()
  }
  
  window.showLoaderNow = () => {
    window.dispatchEvent(new CustomEvent('requestAppLoader'))
  }
  
  // Debug function to reset gallery
  window.resetGallery = () => {
    ScrollTrigger.getAll().forEach(t => t.kill())
    
    gsap.set("*", { clearProps: "all" })
    
    ScrollTrigger.refresh(true)
    
    setupPortfolioGalleryReveal()
  }
  
  window.triggerFlipAnimation = () => {
    onVideoFlipRequest(true)
  }
  
  window.startPageAnimations = () => {
    startHomeAnimations()
  }
  
  window.addEventListener('appLoaderAnimationComplete', () => {
    showedLoader = true
    if (shouldShowIntro.value) {
      setTimeout(() => {
        showIntroAnimation.value = true
      }, 100)
    } else {
      startHomeAnimations()
    }
  })
  
  window.addEventListener('startAppIntro', () => {
    if (shouldShowIntro.value) {
      showIntroAnimation.value = true
    }
  })
  
  window.addEventListener('pageVisibleImmediately', () => {
    if (!shouldShowIntro.value) {
      startHomeAnimations()
    }
  })
}

const baseClients = [
  '/images/clients/Corteva.png',
  '/images/clients/JohnDeere.png',
  '/images/clients/Multilog.png',
  '/images/clients/PortosParana.png'
]

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

const carouselRef1 = ref(null)
const carouselRef2 = ref(null)
let autoplayInterval1 = null
let autoplayInterval2 = null



const onVideoFlipRequest = (introElement) => {
  if (!introElement) return
  
  nextTick(() => {
    const targetContainer = document.querySelector('.flip-receive-container')
    if (!targetContainer) return
    
    // Get the entire intro overlay element
    const introOverlay = document.querySelector('.intro-overlay')
    if (!introOverlay) return
    
    // Fade out slide-2 text and video-intro-text before Flip
    const slide2Elements = introOverlay.querySelectorAll('.slide-2')
    const videoIntroText = introOverlay.querySelector('.video-intro-text')
    const videoBgIntro = introOverlay.querySelector('.video-bg-intro')
    
    if (slide2Elements.length > 0 || videoIntroText || videoBgIntro) {
      const elementsToFade = [...slide2Elements]
      if (videoIntroText) {
        elementsToFade.push(videoIntroText)
      }
      
      // Create timeline for simultaneous animations
      const tl = gsap.timeline({
        onComplete: () => {
          // Start Flip animation after animations complete
          startFlipAnimation()
        }
      })
      
      // Fade out texts
      if (elementsToFade.length > 0) {
        tl.to(elementsToFade, {
          duration: 0.5,
          opacity: 0,
          ease: "power2.out"
        }, 0)
      }
      
      // Fade in video-bg-intro
      if (videoBgIntro) {
        tl.to(videoBgIntro, {
          duration: 0.5,
          opacity: 1,
          ease: "power2.out"
        }, 0)
      }
    } else {
      // Start Flip immediately if no elements found
      startFlipAnimation()
    }
    
    function startFlipAnimation() {
      // Create Flip state of the intro overlay
      const state = Flip.getState(introOverlay)
      
      // Move intro overlay to target container
      targetContainer.appendChild(introOverlay)
      
      // Apply Flip animation with border-radius transition
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        scale: false,
        onUpdate: function() {
          const progress = this.progress()
          const isMobile = window.innerWidth <= 576
          const borderRadius = isMobile ? progress * 20 : progress * 400 // 0 to 20px on mobile, 0 to 400px on desktop
          
          // Apply border-radius to elements during Flip
          gsap.set(introOverlay, { borderRadius: `${borderRadius}px` })
          gsap.set(introOverlay.querySelector('.screen'), { borderRadius: `${borderRadius}px` })
          gsap.set(introOverlay.querySelector('.video-intro-container'), { borderRadius: `${borderRadius}px` })
        },
        onComplete: () => {
          // Hide the initial video
          const initialVideo = document.querySelector('.video-bg.initial-video')
          if (initialVideo) {
            initialVideo.style.display = 'none'
          }
          
          // Move intro-overlay back to its original position and make it visible
          if (introOverlay) {
            introOverlay.style.display = 'block'
            introOverlay.style.opacity = '1'
            introOverlay.style.position = 'absolute'
            introOverlay.style.top = '0'
            introOverlay.style.left = '0'
            introOverlay.style.width = '100%'
            introOverlay.style.height = '100%'
            introOverlay.style.zIndex = '9999'
          }
          
          // Scroll is already unlocked by AppIntro when video flip is requested
          
          // Reset AppHeader state and dispatch event to clear intro-specific styling
          window.dispatchEvent(new CustomEvent('introAnimationComplete'))
          // Start page animations without hiding intro
          setTimeout(() => {
            startHomeAnimations()
          }, 100)
        }
      })
    }
  })
}

const onIntroComplete = () => {
  showIntroAnimation.value = false
  startHomeAnimations()
}

const startHomeAnimations = () => {
  if (process.client) {
    nextTick(() => {
      startAutoplay1()
      startAutoplay2()
      animateTitleLines()
      animateVideoImage()
      animateAwards()
      animateMissionTyping()
      setupPortfolioGalleryReveal()
      animateNumbers()
      setupColorTransitions()
      
      // Refresh ScrollTrigger on resize for responsiveness (but not gallery)
      window.addEventListener('resize', () => {
        // Only refresh non-gallery ScrollTriggers
        const allTriggers = ScrollTrigger.getAll()
        allTriggers.forEach(trigger => {
          if (!trigger.vars || !trigger.vars.trigger) {
            trigger.refresh()
            return
          }
          
          // Check if trigger element is the gallery section
          const triggerElement = typeof trigger.vars.trigger === 'string' 
            ? document.querySelector(trigger.vars.trigger) 
            : trigger.vars.trigger
            
          if (!triggerElement || !triggerElement.classList || !triggerElement.classList.contains('section-portfolio-gallery')) {
            trigger.refresh()
          }
        })
      })
    })
  }
}

onMounted(() => {
  // Check if we should show intro based on AppLoader logic
  checkIfShouldShowIntro()
  
  setTimeout(() => {
    if (!showedLoader && !shouldShowIntro.value) {
      // No AppLoader and no intro needed, start home animations directly
      startHomeAnimations()
    }
    // If AppLoader is running, it will trigger the intro animation
  }, 100)
})

let showedLoader = false

onUnmounted(() => {
  if (autoplayInterval1) {
    clearInterval(autoplayInterval1)
  }
  if (autoplayInterval2) {
    clearInterval(autoplayInterval2)
  }
  
  if (process.client) {
    // Clean up color transition ScrollTrigger
    const layout = document.querySelector('.layout')
    if (layout && layout._scrollColorTrigger) {
      layout._scrollColorTrigger.kill()
    }
    if (layout && layout._scrollHandler) {
      window.removeEventListener('scroll', layout._scrollHandler)
    }
    
    // Remove resize listener
    window.removeEventListener('resize', () => {
      ScrollTrigger.refresh()
    })
    
    // Kill gallery-specific ScrollTriggers
    const galleryTriggers = ScrollTrigger.getAll().filter(trigger => {
      if (!trigger.vars || !trigger.vars.trigger) return false
      
      const triggerElement = typeof trigger.vars.trigger === 'string' 
        ? document.querySelector(trigger.vars.trigger) 
        : trigger.vars.trigger
        
      return triggerElement && triggerElement.classList && triggerElement.classList.contains('section-portfolio-gallery')
    })
    
    galleryTriggers.forEach(trigger => trigger.kill())
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

const animateTitleLines = () => {
  const lineInners = document.querySelectorAll('.full-banner h1 .line .line-inner')
  
  if (lineInners.length === 0) return
  
  gsap.set(lineInners, {
    y: 75,
  })
  
  const tl = gsap.timeline({
    delay: 0.5
  })
  
  lineInners.forEach((lineInner, index) => {
    tl.to(lineInner, {
      y: 0,
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
  
  if (awardContainers.length === 0) return
  
  gsap.set(awardContainers, {
    opacity: 0,
    filter: 'blur(10px)'
  })
  
  const tl = gsap.timeline({
    delay: 1.5
  })
  
  awardContainers.forEach((award, index) => {
    tl.to(award, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: "power2.out"
    }, index * 0.2)
  })
}

const animateMissionTyping = () => {
  const paragraph = document.querySelector('.typing-animation-text')
  if (!paragraph || paragraph._typingInit) return
  paragraph._typingInit = true
  const part1 = paragraph.querySelector('.animated-text-1')
  const part2 = paragraph.querySelector('.animated-text-2')
  if (!part1 || !part2) return
  const tl = gsap.timeline({ paused: true })
  const text1 = part1.textContent
  const text2 = part2.textContent
  part1.textContent = ''
  part2.textContent = ''
  paragraph.style.opacity = '1'
  tl.to(part1, {
    text: text1,
    duration: Math.max(0.8, text1.length * 0.03),
    ease: 'none'
  })
  tl.to(part2, {
    text: text2,
    duration: Math.max(0.8, text2.length * 0.03),
    ease: 'none'
  }, ">")
  ScrollTrigger.create({
    trigger: paragraph,
    start: 'top 80%',
    once: true,
    onEnter: () => tl.play()
  })
}

const setupColorTransitions = () => {
  const layout = document.querySelector('.layout')
  if (!layout) return
  
  // Create timeline for color transitions
  const colorTimeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: "none"
    }
  })
  
  // Define all elements once
  const textElements = [
    "h1:not(.no-color-change)",
    "h2:not(.no-color-change)", 
    ".full-banner-content p:not(.no-color-change)",
    ".full-banner-content span:not(.no-color-change)",
    ".award-text-title",
    ".color-change-text:not(.no-color-change)",
    ".big-number.color-change-text",
    ".big-number-plus.color-change-text",
    ".clients-title:not(.no-color-change)"
  ].join(", ")
  
  // Create the color animation timeline
  colorTimeline
    .to(layout, {
      backgroundColor: "#1d1d1b",
      duration: 1
    }, 0)
    .to(textElements, {
      color: "#ffffff",
      duration: 1
    }, 0)
  
  // ScrollTrigger configuration for color changes
  const scrollColorTrigger = ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "500px top",
    scrub: 0.5,
    animation: colorTimeline,
    onUpdate: (self) => {
      // Dispatch event for AppHeader
      window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
        detail: { progress: self.progress }
      }))
    }
  })
  
  // Force initial state
  const forceInitialState = () => {
    gsap.set(layout, {
      backgroundColor: "#ffffff"
    })
    gsap.set("h1:not(.no-color-change), h2:not(.no-color-change)", {
      color: "#000000"
    })
    gsap.set(".full-banner-content p:not(.no-color-change), .full-banner-content span:not(.no-color-change)", {
      color: "#000000"
    })
    gsap.set(".award-text-title", {
      color: "#000000"
    })
    gsap.set(".color-change-text:not(.no-color-change)", {
      color: "#000000"
    })
    gsap.set(".big-number.color-change-text, .big-number-plus.color-change-text", {
      color: "#000000"
    })
    gsap.set(".clients-title:not(.no-color-change)", {
      color: "#000000"
    })
    
    window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
      detail: { progress: 0 }
    }))
  }
  
  // Apply initial state
  if (window.scrollY === 0) {
    forceInitialState()
  }
  
  // Handle scroll to reset state
  const handleScroll = () => {
    if (window.scrollY === 0) {
      forceInitialState()
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Store reference for cleanup
  layout._scrollHandler = handleScroll
  layout._scrollColorTrigger = scrollColorTrigger
}

const setupPortfolioGalleryReveal = () => {
  // Kill any existing gallery ScrollTriggers first
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars && trigger.vars.trigger) {
      const triggerEl = typeof trigger.vars.trigger === 'string' 
        ? document.querySelector(trigger.vars.trigger) 
        : trigger.vars.trigger
      if (triggerEl && triggerEl.classList && triggerEl.classList.contains('section-portfolio-gallery')) {
        trigger.kill()
      }
    }
  })
  
  // Force refresh
  ScrollTrigger.refresh(true)
  
  const gallerySection = document.querySelector('.section-portfolio-gallery')
  const galleryContent = document.querySelector('.portfolio-gallery-content')
  const portfolioItem = document.querySelector('.portfolio-gallery-content-item')
  
  const backgroundContainer = document.querySelector('.case-content-item-background')
  const gal1Background = backgroundContainer?.querySelector('img:nth-child(1)')
  const gal2Background = backgroundContainer?.querySelector('img:nth-child(2)')
  
  const imageContainer = document.querySelector('.case-content-image-container')
  const gal1Image = imageContainer?.querySelector('img:nth-child(1)')
  const gal2Image = imageContainer?.querySelector('img:nth-child(2)')
  
  const textContainers = document.querySelectorAll('.case-content-text')
  const gal1TextContainers = []
  const gal2TextContainers = []
  
  textContainers.forEach(container => {
    const firstText = container.querySelector('.animated-text-container:nth-child(1)')
    const secondText = container.querySelector('.animated-text-container:nth-child(2)')
    if (firstText) gal1TextContainers.push(firstText)
    if (secondText) gal2TextContainers.push(secondText)
  })
  
  if (!gallerySection || !galleryContent || !portfolioItem || !gal1Background || !gal2Background || !gal1Image || !gal2Image) return

  gsap.set(gal2Background, {
    clipPath: 'inset(100% 0 0 0)',
    zIndex: 2
  })
  
  gsap.set(gal1Background, {
    zIndex: 1
  })
  
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

  // Create ScrollTrigger with minimal configuration
  const st = ScrollTrigger.create({
    trigger: gallerySection,
    start: "top top",
    end: "bottom bottom",
    pin: galleryContent,
    pinSpacing: false,
    scrub: 1,
    onEnter: () => {
    },
    onLeave: () => {
    },
    onEnterBack: () => {
    },
    onLeaveBack: () => {
    },
    onUpdate: (self) => {
      const progress = self.progress
      
      // gsap.set(galleryContent, { clearProps: "transform" })
      
      if (progress <= 0.8) {
        const revealProgress = progress / 0.8
        const clipValue = 100 - (revealProgress * 100)
        const moveDistance = revealProgress * 30
        
        gsap.set(gal2Background, { clipPath: `inset(${clipValue}% 0 0 0)` })
        
        gsap.set(gal2Image, { 
          clipPath: `inset(${clipValue}% 0 0 0)`,
          transform: `translate3d(0px, ${40 - (revealProgress * 40)}px, 0px)`
        })
        gsap.set(gal1Image, { 
          transform: `translate3d(0px, -${revealProgress * 40}px, 0px)`
        })
        
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
        gsap.set(gal2Background, { clipPath: 'inset(0% 0 0 0)' })
        gsap.set(gal2Image, { 
          clipPath: 'inset(0% 0 0 0)',
          transform: 'translate3d(0px, 0px, 0px)'
        })
        gsap.set(gal1Image, { 
          transform: 'translate3d(0px, -40px, 0px)'
        })
        
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

</script>

<style scoped>
.typing-animation-text {
  opacity: 0;
}

.animated-circle {
  width: 100%;
  padding-top: 100%;
  background-color: #313131;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  .animated-circle-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }

  .animated-circle-icon {
    position: absolute;
    left: 50%;
    width: 25%;
    height: 26%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
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
      overflow: hidden;
      padding: 2px 0;

      .line-inner {
        transform: translate(0px, 70px);
        display: block;
      }
    }

    .esfera_bt {
      background-color: var(--color-yellow);
      color: var(--color-black);
      padding: 0.4em 1.3em;
      padding-right: 0.4em;
      border-radius: 50px;
      font-size: 0.35em;
      font-weight: var(--font-weight-regular);
      line-height: 1.1;
      margin-left: 20px;
      display: inline-flex;
      opacity: 0;
      transform: translate(-50px, 10px);
      position: absolute;
      filter: blur(10px);
      transition: all 0.3s ease;
      cursor: pointer;

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
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        bottom: 0.05em;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--color-yellow);
      }

      &:hover {
        .esfera_bt {
          opacity: 1;
          transform: translate(0px, 10px);
          filter: blur(0px);
        }
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
  /* overflow: hidden; */
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
  border-radius: 400px;
}

.full-banner-events {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-self: center;
  min-height: 170px;
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
  opacity: 0;
  filter: blur(10px);
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
    margin-top: 5px;
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
    width: 170px;
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
    height: 40px;
    padding: 15px;
  }
  .full-banner-content {
    flex-direction: column-reverse;
  }
  
  .video-image-container {
    padding-top: 100%;
    max-height: none;
    border-radius: 20px !important;
  }

  .video-bg {
    border-radius: 20px !important;
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
  height: 300vh;
  position: relative;

  .col-12 {
    padding: 0;
  }

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
    top: 0;
    left: 0;
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
    border-radius: 0px;
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
      border-radius: 0px;
    }
    
    .case-content-item-background img:nth-child(1) {
      z-index: 1;
    }
    
    .case-content-item-background img:nth-child(2) {
      z-index: 2;
      clip-path: inset(100% 0 0 0);
    }

    .case-content-container {
      border-radius: 0px;
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

  .clients-description .align-right{
    text-align: left !important;
  }

  .full-banner-events {
    justify-content: center !important;
  }

  .animated-circle {
    width: 50% !important;
    padding-top: 50% !important;
  }

  .badge-clients {
    margin-top: 60px !important;
  }

  .clients-content {
    margin-top: 60px !important;
  }

  .case-content-container {
    flex-direction: column-reverse !important;
  }
  .case-content-image {
    height: 40% !important;
  }

  .case-content-image-container {
    width: 60vw !important;
    height: 60vw !important;
  }
  .case-content-container .case-content-text:last-of-type .animated-text-container {
    flex-direction: row-reverse !important;
  }

  .section-numbers-content {
    width: initial !important;
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