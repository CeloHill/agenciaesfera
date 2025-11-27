<template>
  <div>
    <AppIntro 
      @intro-complete="onIntroComplete"
      @video-flip-request="onVideoFlipRequest"
      :full-intro="shouldShowIntro"
    />
    <div class="container-fluid locked-container">

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
              <div class="col-sm-12 col-md-6 col-lg-4 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">20ª Mostra de Comunicação do Agro ABMRA</div>
                    <div class="award-text-title">Ouro em Programa e Campanha de Incentivo</div>
                    <div class="award-text-case">Case: Expo Latin America 2021 john deere</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">Prêmio Live 2021</div>
                    <div class="award-text-title">Ouro em Agência Regional de Brand Experience</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 col-align-center">
                <div class="award-container">
                  <div class="award-icon-left">
                    <img src="/icons/awards-left.png"></img>
                  </div>  
                  <div class="award-text">
                    <div class="award-text-subtitle">Premio Caio 2024</div>
                    <div class="award-text-title">Ouro em evento promocional</div>
                    <div class="award-text-case">Case: M&T Expo 24 John Deere & Wirtgen Group</div>
                  </div>
                  <div class="award-icon-right">
                    <img src="/icons/awards-right.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="full-banner-events-text">
            <span class="text">Grandes conquistas rendem uma coleção de memórias únicas.</span>
          </div>
        </section>
        </div>
      </div>
    </div>
    <div class="container-fluid section-numbers-text-container">
      <div class="row">
        <div class="col-12">
          <div class="section-board-container">
            <section class="section-board">
              <div class="section-board-content">
                <img src="/images/tag-na-esfera.svg" alt="Na Esfera" />
              </div>
              <div class="section-board-content-second">
                <img src="/images/tag-acontece.svg" alt="Acontece" />
              </div>
            </section>
          </div>
          <section class="section-numbers-text">
              <div class="row section-numbers-text-content">
              <div class="col-xl-7 col-lg-10 col-md-12">
                <div class="color-change-text typing-animation-text"><div class="no-color-change animated-text-1">Seu evento, nossa missão</div><div class="highlight animated-text-2"> A gente soma números com expertise e mostra resultados com orgulho.</div></div>
              </div>
            </div>
            <div class="row section-numbers-content">
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div class="small-number ">1</div>
                <div class="big-number-container">
                  <div class="big-number color-change-text">26</div>
                  <div class="big-number-text">Anos de <br /> experiência</div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div class="small-number">2</div>
                <div class="big-number-container">
                  <div class="big-number-plus color-change-text">+</div>
                  <div class="big-number color-change-text">6.500</div>
                  <div class="big-number-text">Projetos <br /> executados</div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div class="small-number">3</div>
                <div class="big-number-container">
                  <div class="big-number-plus color-change-text">+</div>
                  <div class="big-number color-change-text">350</div>
                  <div class="big-number-text">Clientes <br /> satisfeitos</div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div class="small-number">4</div>
                <div class="big-number-container">
                  <div class="big-number color-change-text">25</div>
                  <div class="big-number-text">Prêmios <br /> no setor</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        <section class="section-clients">
          <div class="clients-content row">
            <div class="clients-title highlight no-color-change col-md-12 col-lg-6">
              Clientes
            </div>
            <div class="clients-description col-md-12 col-lg-6">
              <div class="align-right no-color-change">
                Trabalhamos ideias que ganham forma por que são <br />
                construídas junto de quem nos inspira.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="new-carousel-section">
                <div class="marquee" ref="marqueeRef">
                  <div class="marquee-track" ref="marqueeTrack">
                    <div class="marquee-item" v-for="(src, i) in baseClients" :key="'m-a-'+i">
                      <img :src="src" alt="" class="client-logo" draggable="false" />
                    </div>
                    <div class="marquee-item" v-for="(src, i) in baseClients" :key="'m-b-'+i">
                      <img :src="src" alt="" class="client-logo" draggable="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="new-carousel-section">
                <div class="marquee" ref="marqueeRef">
                  <div class="marquee-track" ref="marqueeTrack">
                    <div class="marquee-item" v-for="(src, i) in baseClients2" :key="'m-a-'+i">
                      <img :src="src" alt="" class="client-logo" draggable="false" />
                    </div>
                    <div class="marquee-item" v-for="(src, i) in baseClients2" :key="'m-b-'+i">
                      <img :src="src" alt="" class="client-logo" draggable="false" />
                    </div>
                  </div>
                </div>
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
            :offset-x="0"
            :offset-y="0"
            :use-viewport-position="true"
            enter-ease="back.out(1.5)"
          >
            <NuxtLink to="/projetos">
            <div class="row">
              <div class="col-12">
                <div class="portfolio-gallery-content">
                  <div class="portfolio-gallery-content-item">
                  <div class="case-content-item-background">
                    <img src="/images/cases-background-01.jpg" alt="Agrinho 2024" />
                    <img src="/images/cases-background-02.jpg" alt="John Deere Space" />
                    <img src="/images/cases-background-03.jpg" alt="Convenção Bosch Service 2025" />
                  </div>
                  <div class="case-content-container">
                    <div class="case-content-text">
                      <div class="animated-text-container animated-text-container--left">
                        <div class="case-content-text-title">
                          Agrinho 2024
                        </div>
                      </div>
                      <div class="animated-text-container animated-text-container--left">
                        <div class="case-content-text-title">
                          John Deere Space
                        </div>
                      </div>
                      <div class="animated-text-container animated-text-container--left">
                        <div class="case-content-text-title">
                          Convenção Bosch Service 2025
                        </div>
                      </div>
                    </div>
                    <div class="case-content-image">
                      <div class="case-content-image-container">
                        <img src="/images/case-folder-01.jpg" alt="Agrinho 2024" />
                        <img src="/images/case-folder-02.jpg" alt="John Deere Space" />
                        <img src="/images/case-folder-03.jpg" alt="Convenção Bosch Service 2025" />
                      </div>
                    </div>
                    <div class="case-content-text">
                      <div class="animated-text-container">
                        <div class="case-content-text-title">
                          Do Campo à Cidade
                        </div>
                      </div>
                      <div class="animated-text-container">
                        <div class="case-content-text-title">
                          Inovação em grande escala
                        </div>
                      </div>
                      <div class="animated-text-container">
                        <div class="case-content-text-title">
                          Juntos crescemos mais
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
import { useFirstVisit } from '~/composables/useFirstVisit'
import { useAnimateNumbers } from '~/composables/useAnimateNumbers'

// Page meta configuration
definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'fade-slide',
    mode: 'out-in'
  }
})

const { gsap, ScrollTrigger } = useGsap()
const {  checkDirectNavigation, resetFirstVisit, forceLoader } = useFirstVisit()
const { animateNumbers } = useAnimateNumbers()

const shouldShowIntro = ref(import.meta.client ? checkDirectNavigation() : false)
const showIntroAnimation = ref(false)

// Check if we should show intro based on AppLoader logic
const checkIfShouldShowIntro = () => {
  if (import.meta.client) {
    const shouldShowLoader = checkDirectNavigation()
    shouldShowIntro.value = shouldShowLoader
  }
}

// For testing - you can call this in browser console
if (import.meta.client) {
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
    showIntroAnimation.value = shouldShowIntro.value
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
  '/images/clients/PortosParana.png',
  '/images/clients/agrishow.png',
  '/images/clients/JD_WG.png',
  '/images/clients/CortevaBio.png',
  '/images/clients/electrolux.png',
]
const baseClients2 = [
  '/images/clients/credaluga.png',
  '/images/clients/Mosaic.png',
  '/images/clients/nutrien.png',
  '/images/clients/TetraPak.png',
  '/images/clients/Vitol.png',
  '/images/clients/FAEP.png',
  '/images/clients/Huawei.png',
  '/images/clients/Volvo.png',
]

 

let flipScrollTrigger = null

const onVideoFlipRequest = (introElement) => {
  if (!introElement) return
  
  nextTick(() => {
    const targetContainer = document.querySelector('.flip-receive-container')
    if (!targetContainer) return
    
    const introOverlay = document.querySelector('.intro-overlay')
    if (!introOverlay) return
    
    const pageContent = document.querySelector('.locked-container')
    if (!pageContent) return
    
    const introTextSlider = introOverlay.querySelector('.intro-text-slider')
    
    const slide1Elements = introOverlay.querySelectorAll('.slide-1')
    const slide2Elements = introOverlay.querySelectorAll('.slide-2')
    const videoIntroText = introOverlay.querySelector('.video-intro-text')
    const videoBgIntro = introOverlay.querySelector('.video-bg-intro')
    const scroll = introOverlay.querySelector('.scroll')
    const scroller = scroll.querySelector('.scroll-inner > div')
    const screen = introOverlay.querySelector('.screen')
    const videoIntroContainer = introOverlay.querySelector('.video-intro-container')
    const initialVideo = document.querySelector('.video-bg.initial-video')
    
    const elementsToFade = [...slide1Elements, ...slide2Elements]
    if (videoIntroText) {
      elementsToFade.push(videoIntroText)
    }

    const scrollAnimation = gsap.timeline({
      repeat: -1,
      repeatDelay: 1
    })

    scrollAnimation.to(scroller, {
      duration: 1,
      height: '100%',
      ease: "power2.out"
    }, 0)
    .to(scroller, {
      duration: 1,
      yPercent: 100,
      ease: "power2.out"
    }, '+=.5')
    
    const isMobile = window.innerWidth <= 576
    
    const initialRect = introOverlay.getBoundingClientRect()
    targetContainer.appendChild(introOverlay)
    const targetRect = introOverlay.getBoundingClientRect()
    
    const xDiff = initialRect.left - targetRect.left
    const yDiff = initialRect.top - targetRect.top

    const windowHeight = window.innerHeight
    
    gsap.set(introOverlay, {
      x: xDiff,
      y: yDiff,
      width: initialRect.width,
      height: initialRect.height
    })
    
    const flipTimeline = gsap.timeline({ paused: true })
    
    flipTimeline
      .to(scroll, {
        duration: .5,
        opacity: 0,
        ease: "none"
      }, 0)
      .to(videoIntroText, {
        duration: .5,
        opacity: 0,
        ease: "none"
      }, 0)
      .to(introTextSlider, {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out"
      }, 0)
      .to(videoBgIntro, {
        duration: 1,
        opacity: 1,
        ease: "none"
      }, 0)
      .to(introOverlay, {
        duration: 0.7,
        x: 0,
        y: 0,
        width: targetRect.width,
        height: targetRect.height,
        ease: "none",
        onUpdate: function() {
          const progress = this.progress()
          const borderRadius = isMobile ? progress * 20 : progress * 400
          if (introOverlay) gsap.set(introOverlay, { borderRadius: `${borderRadius}px` })
          if (screen) gsap.set(screen, { borderRadius: `${borderRadius}px` })
          if (videoIntroContainer) gsap.set(videoIntroContainer, { borderRadius: `${borderRadius}px` })
        }
      }, 0.3)
    
    flipScrollTrigger = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: `+=${windowHeight * 1}px top`,
      pin: pageContent,
      pinSpacing: true,
      scrub: 2,
      //markers: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Map scroll progress 0-0.8 to timeline progress 0-1
        // This makes the animation complete at 80% of the scroll
        const scrollProgress = self.progress
        const timelineProgress = Math.min(scrollProgress / 0.8, 1)
        flipTimeline.progress(timelineProgress)
        
        // Animation completes at 80% scroll (near the end of the pin)
        if (self.progress >= 0.8 && !flipScrollTrigger._completed) {
          flipScrollTrigger._completed = true
          
          if (initialVideo) {
            initialVideo.style.display = 'none'
          }
          
          // Start home animations only after flip animation completes
          if (!flipScrollTrigger._homeAnimationsStarted) {
            flipScrollTrigger._homeAnimationsStarted = true
            startHomeAnimations()
          }
          
          window.dispatchEvent(new CustomEvent('introAnimationComplete'))
        }
        
        if (self.progress < 0.1) {
          window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
            detail: { progress: 1 }
          }))
        } else {
          window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
            detail: { progress: 0 }
          }))
        }
      },
      onLeaveBack: () => {
        const introTextSlider = introOverlay.querySelector('.intro-text-slider')
        if (introTextSlider) {
          gsap.to(introTextSlider, { 
            opacity: 1, 
            duration: 0.3,
            ease: "power2.out"
          })
          window.dispatchEvent(new CustomEvent('resetIntroTextSlider'))
        }
        
        window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
          detail: { progress: 1 }
        }))
      }
    })
    
    // Add resize handler for flip animation
    const handleFlipResize = () => {
      if (flipScrollTrigger) {
        const newWindowHeight = window.innerHeight
        flipScrollTrigger.vars.end = `+=${newWindowHeight * 1}px top`
        flipScrollTrigger.refresh()
      }
    }
    
    window.addEventListener('resize', handleFlipResize)
    
    // Store resize handler for cleanup
    flipScrollTrigger._resizeHandler = handleFlipResize
  })
}

const onIntroComplete = () => {
  showIntroAnimation.value = false
  startHomeAnimations()
}

const INITIAL_SCALE = 2.5
const FINAL_SCALE = 1
const INITIAL_X_OFFSET = '100%'
const MIDDLE_X_OFFSET = '50%'
const PAUSE_DURATION = 0.2
const MOVE_DURATION = 1.2
const SCALE_DURATION = 0.8

const animateNumbersSection = () => {
  const numbersContent = document.querySelector('.section-numbers-content')
  const numbersSection = document.querySelector('.section-numbers-text')
  
  if (!numbersContent || !numbersSection) return
  
  gsap.set(numbersContent, {
    x: INITIAL_X_OFFSET,
    scale: INITIAL_SCALE,
    opacity: 0
  })
  
  ScrollTrigger.create({
    trigger: numbersSection,
    start: 'top 70%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline()
      
      tl.to(numbersContent, {
        x: MIDDLE_X_OFFSET,
        scale: INITIAL_SCALE,
        opacity: 1,
        duration: MOVE_DURATION,
        ease: 'power3.out'
      })
      .to(numbersContent, {
        duration: PAUSE_DURATION
      })
      .to(numbersContent, {
        x: 0,
        scale: FINAL_SCALE,
        duration: SCALE_DURATION,
        ease: 'power3.out'
      })
    }
  })
}

const startHomeAnimations = () => {
  if (import.meta.client) {
    nextTick(() => {
      if (typeof document !== 'undefined') {
        initClientsMarquee()
        if (gsap) {
          animateTitleLines()
          animateVideoImage()
          animateAwards()
          animateMissionTyping()
          setupPortfolioGalleryReveal()
          animateNumbers()
          animateNumbersSection()
          setupColorTransitions()
          animateBoardLoop()
          
          // Refresh ScrollTrigger on resize for responsiveness (but not gallery)
          const handleMainResize = () => {
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
          }
          
          window.addEventListener('resize', handleMainResize)
          
          // Store main resize handler for cleanup
          window._mainResizeHandler = handleMainResize
        }
      }
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
    } else {
      // Call adjust board scale even if intro is showing
      /*nextTick(() => {
        adjustBoardScale()
      })*/
    }
    // If AppLoader is running, it will trigger the intro animation
  }, 100)
})

let showedLoader = false

onUnmounted(() => {
  if (import.meta.client) {
    if (marqueeResizeHandler && typeof window !== 'undefined') {
      window.removeEventListener('resize', marqueeResizeHandler)
    }
    if (marqueeTl && marqueeTl.kill) {
      marqueeTl.kill()
      marqueeTl = null
    }
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    if (tickerAdded && gsap && gsap.ticker) {
      gsap.ticker.remove(tickerStep)
      tickerAdded = false
    }
    marqueeInstances = []
  }
  
  if (import.meta.client) {
    if (flipScrollTrigger) {
      // Remove flip resize handler
      if (flipScrollTrigger._resizeHandler) {
        window.removeEventListener('resize', flipScrollTrigger._resizeHandler)
      }
      flipScrollTrigger.kill()
    }
    
    const layout = document.querySelector('.layout')
    if (layout && layout._scrollColorTrigger) {
      if (layout._scrollColorTrigger._resizeHandler) {
        window.removeEventListener('resize', layout._scrollColorTrigger._resizeHandler)
      }
      layout._scrollColorTrigger.kill()
    }
    if (layout && layout._scrollHandler) {
      window.removeEventListener('scroll', layout._scrollHandler)
    }
    
    // Remove main resize handler
    if (window._mainResizeHandler) {
      window.removeEventListener('resize', window._mainResizeHandler)
    }
    
    // Remove board resize handler
    if (window._boardResizeHandler) {
      window.removeEventListener('resize', window._boardResizeHandler)
    }
    
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

const marqueeRef = ref(null)
const marqueeTrack = ref(null)
let marqueeTl = null
let marqueeResizeHandler = null
let tickerAdded = false
let rafId = null
let lastTime = 0
const marqueeSpeed = 40
let marqueeInstances = []

const initClientsMarquee = () => {
  if (!import.meta.client) return
  if (typeof window === 'undefined') return
  
  const containers = document.querySelectorAll('.new-carousel-section .marquee')
  if (!containers || containers.length === 0) return
  
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  
  if (tickerAdded && gsap && gsap.ticker) {
    gsap.ticker.remove(tickerStep)
    tickerAdded = false
  }
  
  marqueeInstances = []

  const startAnimation = () => {
    if (marqueeInstances.length === 0) return
    
    lastTime = performance.now()
    
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    
    if (tickerAdded && gsap && gsap.ticker) {
      try {
        gsap.ticker.remove(tickerStep)
      } catch (e) {}
      tickerAdded = false
    }
    
    if (gsap && gsap.ticker && typeof gsap.ticker.add === 'function') {
      try {
        if (!tickerAdded) {
          gsap.ticker.add(tickerStep)
          tickerAdded = true
        }
      } catch (e) {
        if (rafId === null) {
          rafLoop()
        }
      }
    } else {
      if (rafId === null) {
        rafLoop()
      }
    }
  }

  const setupMarquee = (container, index) => {
    const track = container.querySelector('.marquee-track')
    if (!track) return false
    const items = Array.from(track.children)
    if (!items || items.length === 0) return false

    const baseCount = Math.floor(items.length / 2) || items.length

    const imgs = Array.from(track.querySelectorAll('img'))
    const allLoaded = imgs.length === 0 || imgs.every(img => img.complete && img.naturalWidth > 0)
    if (!allLoaded) {
      let pending = imgs.length
      const onDone = () => {
        pending -= 1
        if (pending <= 0) {
          setupMarquee(container, index)
          startAnimation()
        }
      }
      imgs.forEach(img => {
        if (img.complete && img.naturalWidth > 0) return
        img.addEventListener('load', onDone, { once: true })
        img.addEventListener('error', onDone, { once: true })
      })
      return false
    }

    let seqWidth = 0
    for (let i = 0; i < baseCount; i++) {
      const rect = items[i].getBoundingClientRect()
      if (rect.width > 0) {
        seqWidth += rect.width
      }
    }

    if (seqWidth === 0) return false

    const containerWidth = container.getBoundingClientRect().width

    if (!track.dataset.marqueeInit) {
      const baseNodes = items.slice(0, baseCount)
      baseNodes.forEach(node => track.appendChild(node.cloneNode(true)))
      track.dataset.marqueeInit = 'true'
    }

    let contentWidth = track.getBoundingClientRect().width
    const baseNodesForClone = Array.from(track.children).slice(0, baseCount)
    while (contentWidth < containerWidth + seqWidth) {
      baseNodesForClone.forEach(node => track.appendChild(node.cloneNode(true)))
      contentWidth += seqWidth
    }
    
    if (contentWidth === 0 || seqWidth === 0) return false

    if (gsap && typeof gsap !== 'undefined') {
      gsap.set(track, { x: 0, willChange: 'transform', transform: 'translate3d(0,0,0)' })
    } else {
      track.style.transform = 'translate3d(0,0,0)'
      track.style.willChange = 'transform'
    }
    
    const dir = index === 0 ? 1 : -1
    marqueeInstances.push({ track, wrapWidth: seqWidth, pos: 0, dir })
    return true
  }

  const setup = () => {
    if (!import.meta.client) return
    if (typeof window === 'undefined') return
    
    let setupCount = 0
    const maxRetries = 5
    
    const attemptSetup = () => {
      setupCount++
      
      containers.forEach((container, index) => {
        setupMarquee(container, index)
      })

      if (marqueeInstances.length === 0 && setupCount < maxRetries) {
        setTimeout(() => {
          attemptSetup()
        }, 100)
        return
      }

      if (marqueeInstances.length > 0) {
        startAnimation()
      }
    }
    
    attemptSetup()
  }

  if (typeof requestAnimationFrame === 'undefined') {
    setTimeout(setup, 0)
  } else {
    requestAnimationFrame(() => {
      requestAnimationFrame(setup)
    })
  }
  
  if (marqueeResizeHandler) {
    window.removeEventListener('resize', marqueeResizeHandler)
  }
  marqueeResizeHandler = () => {
    initClientsMarquee()
  }
  if (import.meta.client && typeof window !== 'undefined') {
    window.addEventListener('resize', marqueeResizeHandler)
  }
}

const rafLoop = () => {
  if (!import.meta.client) {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    return
  }
  
  if (!marqueeInstances || marqueeInstances.length === 0) {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    return
  }
  
  const currentTime = performance.now()
  let deltaTime = currentTime - lastTime
  
  if (deltaTime > 1000 || lastTime === 0) {
    deltaTime = 1000 / 60
  }
  
  lastTime = currentTime
  
  const deltaRatio = deltaTime / (1000 / 60)
  
  marqueeInstances.forEach((inst) => {
    if (!inst || !inst.track) return
    
    try {
      inst.pos += (marqueeSpeed * inst.dir) * (deltaRatio / 60)
      const w = inst.wrapWidth
      if (!w || w <= 0) return
      
      const wrapped = ((inst.pos % w) + w) % w
      const x = -wrapped
      
      if (gsap && typeof gsap !== 'undefined') {
        gsap.set(inst.track, { x })
      } else {
        inst.track.style.transform = `translate3d(${x}px, 0, 0)`
      }
    } catch (e) {
      return
    }
  })
  
  rafId = requestAnimationFrame(rafLoop)
}

const tickerStep = () => {
  if (!import.meta.client) return
  if (!marqueeInstances || marqueeInstances.length === 0) return
  
  if (gsap && gsap.ticker) {
    const dr = gsap.ticker.deltaRatio()
    if (dr === 0 || isNaN(dr) || !isFinite(dr)) {
      if (rafId === null) {
        lastTime = performance.now()
        rafLoop()
      }
      return
    }
    
    marqueeInstances.forEach((inst) => {
      if (!inst || !inst.track) return
      inst.pos += (marqueeSpeed * inst.dir) * (dr / 60)
      const w = inst.wrapWidth
      if (!w) return
      const wrapped = ((inst.pos % w) + w) % w
      const x = -wrapped
      gsap.set(inst.track, { x })
    })
  } else {
    if (rafId === null) {
      lastTime = performance.now()
      rafLoop()
    }
  }
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
  
  const colorTimeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: "none"
    }
  })
  
  const textElements = [
    "h1:not(.no-color-change):not(.intro-overlay h1)", 
    "h2:not(.no-color-change):not(.intro-overlay h2)", 
    ".full-banner-content p:not(.no-color-change):not(.intro-overlay p)",
    ".full-banner-content span:not(.no-color-change):not(.intro-overlay span)",
    ".color-change-text:not(.no-color-change):not(.intro-overlay .color-change-text)",
    ".big-number.color-change-text",
    ".big-number-plus.color-change-text",
    ".clients-title:not(.no-color-change)"
  ].join(", ")
  
  colorTimeline
    .to(textElements, {
      color: "#ffffff",
      duration: 1
    }, 0)
  
  const introWasShown = showIntroAnimation.value || shouldShowIntro.value
  
  const windowHeight = window.innerHeight
  const flipEndPosition = windowHeight * 1
  
  const scrollColorTrigger = ScrollTrigger.create({
    trigger: "body",
    start: introWasShown ? `${flipEndPosition}px top` : `${flipEndPosition}px top`,
    end: introWasShown ? `${flipEndPosition * 2}px top` : `${flipEndPosition * 1.5}px top`,
    scrub: 0.5,
    animation: colorTimeline,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
        detail: { progress: self.progress }
      }))
    }
  })
  
  const handleColorResize = () => {
    if (scrollColorTrigger) {
      const newWindowHeight = window.innerHeight
      const newFlipEndPosition = newWindowHeight * 1
      scrollColorTrigger.vars.start = introWasShown ? `${newFlipEndPosition}px top` : `${newFlipEndPosition}px top`
      scrollColorTrigger.vars.end = introWasShown ? `${newFlipEndPosition * 2}px top` : `${newFlipEndPosition * 1.5}px top`
      scrollColorTrigger.refresh()
    }
  }
  
  window.addEventListener('resize', handleColorResize)
  
  scrollColorTrigger._resizeHandler = handleColorResize
  
  const forceInitialState = () => {
    const h1h2 = document.querySelectorAll("h1:not(.no-color-change):not(.intro-overlay h1), h2:not(.no-color-change):not(.intro-overlay h2)")
    if (h1h2.length > 0) {
      gsap.set(h1h2, { color: "#000000" })
    }
    
    const bannerContent = document.querySelectorAll(".full-banner-content p:not(.no-color-change):not(.intro-overlay p), .full-banner-content span:not(.no-color-change):not(.intro-overlay span)")
    if (bannerContent.length > 0) {
      gsap.set(bannerContent, { color: "#000000" })
    }
    
    const colorChangeText = document.querySelectorAll(".color-change-text:not(.no-color-change):not(.intro-overlay .color-change-text)")
    if (colorChangeText.length > 0) {
      gsap.set(colorChangeText, { color: "#000000" })
    }
    
    const bigNumbers = document.querySelectorAll(".big-number.color-change-text, .big-number-plus.color-change-text")
    if (bigNumbers.length > 0) {
      gsap.set(bigNumbers, { color: "#000000" })
    }
    
    const clientsTitle = document.querySelectorAll(".clients-title:not(.no-color-change)")
    if (clientsTitle.length > 0) {
      gsap.set(clientsTitle, { color: "#000000" })
    }
    
    if (!introWasShown) {
      window.dispatchEvent(new CustomEvent('colorTransitionUpdate', {
        detail: { progress: 0 }
      }))
    }
  }
  
  if (window.scrollY === 0) {
    forceInitialState()
  }
  
  const handleScroll = () => {
    if (introWasShown) {
      if (window.scrollY <= 10) {
        forceInitialState()
      }
    } else {
      if (window.scrollY === 0) {
        forceInitialState()
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  layout._scrollHandler = handleScroll
  layout._scrollColorTrigger = scrollColorTrigger
}

const adjustBoardScale = () => {
  const board = document.querySelector('.section-board')
  const boardContent = document.querySelector('.section-board-content')
  
  if (!board || !boardContent) return
  
  const adjustScale = () => {
    requestAnimationFrame(() => {
      const containerWidth = board.offsetWidth
      const padding = 40
      const targetWidth = containerWidth - padding
      
      boardContent.style.transform = 'scale(1)'
      
      const contentWidth = boardContent.scrollWidth || boardContent.offsetWidth
      
      if (contentWidth > 0 && targetWidth > 0) {
        const scale = Math.min(targetWidth / contentWidth, 1)
        boardContent.style.transform = `scale(${scale})`
      }
    })
  }
  
  setTimeout(() => {
    adjustScale()
  }, 200)
  
  let resizeTimeout
  const resizeHandler = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      adjustScale()
    }, 100)
  }
  
  window.addEventListener('resize', resizeHandler)
  
  if (window._boardResizeHandler) {
    window.removeEventListener('resize', window._boardResizeHandler)
  }
  window._boardResizeHandler = resizeHandler
}

const animateBoardLoop = () => {
  const boardFirst = document.querySelector('.section-board-content')
  const boardSecond = document.querySelector('.section-board-content-second')
  
  if (!boardSecond || !boardFirst) return
  
  gsap.set(boardFirst, {
    y: '100%',
    rotateZ: -6,
    transformOrigin: 'bottom right'
  })

  const boardTimeline = gsap.to(boardFirst, {
    y: '0%',
    rotateZ: 0,
    transformOrigin: 'bottom right',
    ease: "power2.inOut",
    paused: true
  })

  ScrollTrigger.create({
    trigger: boardSecond,
    start: 'top 70%',
    end: 'bottom 70%',
    scrub: 2,
    //markers: true,
    onUpdate: (self) => {
      // Only animate if flip animation has completed (>= 80% progress)
      if (flipScrollTrigger && flipScrollTrigger.progress < 0.8) {
        // Flip animation hasn't completed yet, keep board at initial state
        boardTimeline.progress(0)
        return
      }
      
      // Flip animation has completed, proceed with board animation
      boardTimeline.progress(self.progress)
    }
  })
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
  
  const gallerySection = '.section-portfolio-gallery'
  const galleryContent = document.querySelector('.portfolio-gallery-content')
  const portfolioItem = document.querySelector('.portfolio-gallery-content-item')
  
  const backgroundContainer = document.querySelector('.case-content-item-background')
  const gal1Background = backgroundContainer?.querySelector('img:nth-child(1)')
  const gal2Background = backgroundContainer?.querySelector('img:nth-child(2)')
  const gal3Background = backgroundContainer?.querySelector('img:nth-child(3)')
  
  const imageContainer = document.querySelector('.case-content-image-container')
  const gal1Image = imageContainer?.querySelector('img:nth-child(1)')
  const gal2Image = imageContainer?.querySelector('img:nth-child(2)')
  const gal3Image = imageContainer?.querySelector('img:nth-child(3)')
  
  const textContainers = document.querySelectorAll('.case-content-text')
  const gal1TextContainers = []
  const gal2TextContainers = []
  const gal3TextContainers = []
  
  textContainers.forEach(container => {
    const firstText = container.querySelector('.animated-text-container:nth-child(1)')
    const secondText = container.querySelector('.animated-text-container:nth-child(2)')
    const thirdText = container.querySelector('.animated-text-container:nth-child(3)')
    if (firstText) gal1TextContainers.push(firstText)
    if (secondText) gal2TextContainers.push(secondText)
    if (thirdText) gal3TextContainers.push(thirdText)
  })
  
  if (!gallerySection || !galleryContent || !portfolioItem || !gal1Background || !gal2Background || !gal3Background || !gal1Image || !gal2Image || !gal3Image) return

  gsap.set(gal3Background, {
    clipPath: 'inset(100% 0 0 0)',
    zIndex: 3
  })
  
  gsap.set(gal2Background, {
    clipPath: 'inset(100% 0 0 0)',
    zIndex: 2
  })
  
  gsap.set(gal1Background, {
    zIndex: 1
  })
  
  gsap.set(gal3Image, {
    clipPath: 'inset(100% 0 0 0)',
    zIndex: 3,
    translate: 'none',
    rotate: 'none',
    scale: 'none'
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
  
  gal3TextContainers.forEach(textContainer => {
    gsap.set(textContainer, {
      clipPath: 'inset(100% 0 0 0)',
      zIndex: 3,
      translate: 'none',
      rotate: 'none',
      scale: 'none'
    })
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
    trigger: galleryContent,
    start: "top top",
    end: "bottom+=200% bottom",
    pin: true,
    pinSpacing: true,
    anticipatePin: true,
    scrub: 1,
    // markers: true,
    invalidateOnRefresh: true,
    // onEnter: () => {
    // },
    // onLeave: () => {
    // },
    // onEnterBack: () => {
    // },
    // onLeaveBack: () => {
    // },
    onUpdate: (self) => {
      const progress = self.progress
      
      // Phase 1: gal1 -> gal2 (0 to 0.4)
      if (progress <= 0.4) {
        const revealProgress = progress / 0.4
        const clipValue = 100 - (revealProgress * 100)
        const moveDistance = revealProgress * 30
        
        gsap.set(gal2Background, { clipPath: `inset(${clipValue}% 0 0 0)` })
        gsap.set(gal3Background, { clipPath: 'inset(100% 0 0 0)' })
        
        gsap.set(gal2Image, { 
          clipPath: `inset(${clipValue}% 0 0 0)`,
          transform: `translate3d(0px, ${40 - (revealProgress * 40)}px, 0px)`
        })
        gsap.set(gal1Image, { 
          transform: `translate3d(0px, -${revealProgress * 40}px, 0px)`
        })
        gsap.set(gal3Image, { 
          clipPath: 'inset(100% 0 0 0)',
          transform: 'translate3d(0px, 40px, 0px)'
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
        gal3TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: 'inset(100% 0 0 0)',
            transform: 'translate3d(0px, 30px, 0px)'
          })
        })
      }
      // Phase 2: gal2 -> gal3 (0.4 to 0.8)
      else if (progress <= 0.8) {
        const revealProgress = (progress - 0.4) / 0.4
        const clipValue = 100 - (revealProgress * 100)
        const moveDistance = revealProgress * 30
        
        gsap.set(gal2Background, { clipPath: 'inset(0% 0 0 0)' })
        gsap.set(gal3Background, { clipPath: `inset(${clipValue}% 0 0 0)` })
        
        gsap.set(gal2Image, { 
          clipPath: 'inset(0% 0 0 0)',
          transform: `translate3d(0px, -${revealProgress * 40}px, 0px)`
        })
        gsap.set(gal1Image, { 
          transform: 'translate3d(0px, -40px, 0px)'
        })
        gsap.set(gal3Image, { 
          clipPath: `inset(${clipValue}% 0 0 0)`,
          transform: `translate3d(0px, ${40 - (revealProgress * 40)}px, 0px)`
        })
        
        gal2TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: 'inset(0% 0 0 0)',
            transform: `translate3d(0px, -${moveDistance}px, 0px)`
          })
        })
        gal1TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            transform: 'translate3d(0px, -30px, 0px)'
          })
        })
        gal3TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: `inset(${clipValue}% 0 0 0)`,
            transform: `translate3d(0px, ${30 - moveDistance}px, 0px)`
          })
        })
      }
      // Phase 3: gal3 fully visible (0.8 to 1.0)
      else {
        gsap.set(gal2Background, { clipPath: 'inset(0% 0 0 0)' })
        gsap.set(gal3Background, { clipPath: 'inset(0% 0 0 0)' })
        
        gsap.set(gal3Image, { 
          clipPath: 'inset(0% 0 0 0)',
          transform: 'translate3d(0px, 0px, 0px)'
        })
        gsap.set(gal2Image, { 
          clipPath: 'inset(0% 0 0 0)',
          transform: 'translate3d(0px, -40px, 0px)'
        })
        gsap.set(gal1Image, { 
          transform: 'translate3d(0px, -40px, 0px)'
        })
        
        gal3TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: 'inset(0% 0 0 0)',
            transform: 'translate3d(0px, 0px, 0px)'
          })
        })
        gal2TextContainers.forEach(textContainer => {
          gsap.set(textContainer, { 
            clipPath: 'inset(0% 0 0 0)',
            transform: 'translate3d(0px, -30px, 0px)'
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
  
  // Cleanup function to restore element
  st.kill = (() => {
    const originalKill = st.kill
    return function() {
      if (originalParent && galleryContent.parentNode === document.body) {
        originalParent.appendChild(galleryContent)
      }
      return originalKill.call(this)
    }
  })()
}

</script>

<style scoped>
.section-board {
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 15px;
  position: relative;

  .section-board-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    display: flex;

    img {
      width: 100%;
      height: auto;
    }
  }

  .section-board-content-second {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    will-change: transform;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.new-carousel-section {
  width: 100%;
  overflow: hidden;
}

.new-carousel-section .marquee {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.new-carousel-section .marquee-track {
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}

.new-carousel-section .marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
}

.new-carousel-section .client-logo {
  max-width: 180px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
  filter: brightness(0);
}

@media (max-width: 768px) {
  .new-carousel-section .marquee {
    height: 80px;
  }
  .new-carousel-section .marquee-item {
    padding: 0 24px;
  }
  .new-carousel-section .client-logo {
    max-width: 140px;
    max-height: 60px;
  }
}

@media (max-width: 576px) {
  .new-carousel-section .marquee {
    height: 60px;
  }
  .new-carousel-section .marquee-item {
    padding: 0 18px;
  }
  .new-carousel-section .client-logo {
    max-width: 120px;
    max-height: 50px;
  }
}
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
  height: 100lvh;
  justify-content: center;
  margin-top: 100px;

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
  position: relative;
  z-index: 1;
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
.full-banner-events-text {
  text-align: center;
}
.full-banner-events-text .text {
  font-size: 34px;
  font-weight: var(--font-weight-regular);
  font-family: Antonio;
  text-transform: uppercase;
  line-height: 1.1;
  text-align: center;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    background-color: var(--color-yellow);
    border-radius: 50%;
    left: -30px;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    background-color: var(--color-yellow);
    border-radius: 50%;
    right: -30px;
  }
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
    padding: 0;
  }
}

.award-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  filter: blur(10px);
  margin: auto 32px;
}

.award-icon-left,
.award-icon-right {
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
}

.award-icon-left {
  margin-right: -10px;
}

.award-icon-right {
  margin-left: -10px;
}

.award-text {
  width: 100%;
  text-align: center;
  margin-top: -15px;
  padding: 0 15px;

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
    text-transform: uppercase;
  }

  .award-text-case {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: var(--font-weight-regular);
    line-height: 1.1;
    margin-top: 9px;
  }
}

.section-numbers-content {
  display: flex;
  width: 100%;
  overflow: visible;
}

.section-numbers-text-content {
  min-height: 170px;
  align-items: flex-start;


  .animated-text-1 {
    font-size: 4.5vw;
    line-height: 1.1;
    text-transform: uppercase;
    font-family: Antonio;
  }

  .animated-text-2 {
    font-size: 25px;
    line-height: 1.5;
    color: var(--color-yellow);
    margin-top: 20px;
    float: left;
    max-width: 90%;
  }
}

.section-numbers-text {
  width: 100%;
  gap: 130px;
  font-weight: var(--font-weight-regular);
  line-height: 1.1;
  padding: 0 var(--body-horizontal-padding);
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
  padding-left: 10vw;
  padding-right: 10vw;

  .badge-clients {
    width: 170px;
  }

  p {
    font-size: 34px;
    min-height: 115px;
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
  gap: 100px;
  justify-content: center;
  margin-bottom: 80px;
}

.clients-content {
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
}

.clients-title {
  font-family: Antonio;
  text-transform: uppercase;
  font-size: 10vw;
  font-weight: 500;
}

.highlight {
  color: var(--color-yellow);
}

.clients-description {
  font-size: 20px;
  color: var(--color-gray);

  .align-right {
    text-align: right;
    margin-top: -50px;
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

/* Gradiente de borda para o novo marquee (mesmo comportamento do carousel atual) */
.new-carousel-section .marquee::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 1) 100%);
  z-index: 1;
  pointer-events: none;
}

.new-carousel-section .marquee::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 85%);
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .new-carousel-section .marquee::after,
  .new-carousel-section .marquee::before {
    width: 100px;
  }
}

@media (max-width: 576px) {
  .new-carousel-section .marquee::after,
  .new-carousel-section .marquee::before {
    width: 50px;
  }
}

.section-portfolio-gallery {
  position: relative;

  .col-12 {
    padding: 0;
  }

  .portfolio-gallery-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 var(--body-horizontal-padding);
    height: 100lvh;
    min-height: 600px;
    gap: 100px;
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    
    .portfolio-gallery-content {
      min-height: 500px;
      padding: 0 20px;
      gap: 50px;
    }
  }

  @media (max-width: 480px) {
    height: intial;
    
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
      background-color: rgb(29 29 27 / 65%);
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
        border-radius: .25em;

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

    .animated-text-container--left {
      justify-content: flex-end;
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

.col-video-full-width {
  padding: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
}

.video-full-width-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  z-index: 3;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  font-size: 40px;
  font-family: 'Antonio';
  text-transform: uppercase;
  text-align: center;

  .text-1 {
    font-size: 8vh;
    font-weight: 200;
  }
  
  .text-2 {
    font-size: 15vh;
    font-weight: 500;
    color: var(--color-yellow);
    margin-top: -3vh;
  }
}

.video-full-width-container {
  width: 100%;
  height: 80vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.section-numbers-text-container {
  margin-top: 60px;
  background-color: #1D1D1B;
  color: #FFFFFF;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .big-number {
    font-size: clamp(20px, 7vw, 90px) !important;
  }
  .clients-description br {
    display: none;
  }
  .big-number-container {
    margin-bottom: 30px !important;
  }

  .section-board-container {
    margin-bottom: 80px !important;
  }
  .animated-text-1 {
    font-size: 6.5vw !important;
  }
}

@media (max-width: 992px) {
  .clients-description {
    .align-right {
      margin-top: 0 !important;
      text-align: left !important;
    }
  }
}

@media (max-width: 768px) {
  .video-full-width-overlay .text-1 {
    font-size: 10vw;
  }
  .video-full-width-overlay .text-2 {
    font-size: 15vw;
    margin-top: -1vh;
  }

  .full-banner {
    margin-top: 100px;
    gap: 60px;
    height: initial !important;
    min-height: 100lvh;
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
  .case-content-container .case-content-text .animated-text-container {
    flex-direction: row-reverse !important;
    justify-content: center;
  }

  .section-numbers-content {
    width: initial !important;
  }

  .section-numbers-text p {
    min-height: 310px !important;
  }

  .section-numbers-text {
    padding-bottom: 60px !important;
  }

  .full-banner-events-text {
    margin-top: -60px !important;
  }

  .clients-title {
    font-size: 60px !important;
  }
  .animated-text-1 {
    font-size: 11vw !important;
  }
}

@media (max-width: 576px) { 
  .big-number {
    font-size: clamp(20px, 11vw, 90px) !important;
  }

  .full-banner-events-text .text {
    &::before {
      left: -10px !important;
    }

    &::after {
      right: -10px !important;
    }
  }
}

@media (max-width: 480px) { 
  .big-number {
    font-size: clamp(20px, 5vw, 40px);
  }
}
</style>