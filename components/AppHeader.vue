<template>
  <header 
    ref="headerRef" 
    class="header" 
    :class="{ 'scrolled': isScrolled, 'expanded': isExpanded, 'has-dark-bg': hasDarkBg }"
    @mouseenter="handleHeaderHover(true)"
    @mouseleave="handleHeaderHover(false)"
  >
    <div 
      ref="hamburgerRef" 
      class="hamburger-icon" 
      :class="{ 'visible': isScrolled && !isExpanded, 'mobile': isMobile, 'clickable': isMobile }"
      @click="handleHamburgerClick"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </div>
    
    <div ref="headerContentRef" class="header-content">
      <div ref="logoContainerRef" class="header-logo-wrapper">
        <NuxtLink to="/" class="header-logo">
          <img 
            ref="logoRef" 
            src="/images/logos/logo-yellow.png" 
            alt="Agência Esfera" 
            class="logo-image"
          >
        </NuxtLink>
      </div>
      <div ref="menuRef" class="header-menu">
        <NuxtLink to="/sobre" class="header-menu-item">
          <span class="header-menu-item-text">Sobre</span>
        </NuxtLink>
        <NuxtLink to="/sobre#services-list" class="header-menu-item">
          <span class="header-menu-item-text">Serviços</span>
        </NuxtLink>
        <NuxtLink to="/projetos" class="header-menu-item">
          <span class="header-menu-item-text">Portfólio</span>
        </NuxtLink>
        <NuxtLink to="/contatos" class="header-menu-item">
          <span class="header-menu-item-text">Contato</span>
        </NuxtLink>
      </div>
      <div ref="socialRef" class="social-media">
        <a href="https://www.linkedin.com/company/agencia-esfera" class="social-media-item" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.15625 18H0.523438V6.32031H4.15625V18ZM2.32031 4.75781C1.1875 4.75781 0.25 3.78125 0.25 2.60938C0.25 1.00781 1.96875 -0.0078125 3.375 0.8125C4.03906 1.16406 4.42969 1.86719 4.42969 2.60938C4.42969 3.78125 3.49219 4.75781 2.32031 4.75781ZM17.7109 18H14.1172V12.3359C14.1172 10.9688 14.0781 9.25 12.2031 9.25C10.3281 9.25 10.0547 10.6953 10.0547 12.2188V18H6.42188V6.32031H9.89844V7.92188H9.9375C10.4453 7.02344 11.6172 6.04688 13.375 6.04688C17.0469 6.04688 17.75 8.46875 17.75 11.5938V18H17.7109Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/AgenciaEsfera/" class="social-media-item" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22V12.75H17l.5-3.75h-4V6.6c0-1.085.301-1.824 1.86-1.824h1.34V1.427C16.7 1.384 15.488 1.29 14.09 1.29c-2.96 0-4.99 1.807-4.99 5.129V9H6v3.75h3.1V22h4.4Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/agencia_esfera/" class="social-media-item" aria-label="Instagram">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5.00781C11.4609 5.00781 13.4922 7.03906 13.4922 9.5C13.4922 12 11.4609 13.9922 9 13.9922C6.5 13.9922 4.50781 12 4.50781 9.5C4.50781 7.03906 6.5 5.00781 9 5.00781ZM9 12.4297C10.6016 12.4297 11.8906 11.1406 11.8906 9.5C11.8906 7.89844 10.6016 6.60938 9 6.60938C7.35938 6.60938 6.07031 7.89844 6.07031 9.5C6.07031 11.1406 7.39844 12.4297 9 12.4297ZM14.7031 4.85156C14.7031 4.26562 14.2344 3.79688 13.6484 3.79688C13.0625 3.79688 12.5938 4.26562 12.5938 4.85156C12.5938 5.4375 13.0625 5.90625 13.6484 5.90625C14.2344 5.90625 14.7031 5.4375 14.7031 4.85156ZM17.6719 5.90625C17.75 7.35156 17.75 11.6875 17.6719 13.1328C17.5938 14.5391 17.2812 15.75 16.2656 16.8047C15.25 17.8203 14 18.1328 12.5938 18.2109C11.1484 18.2891 6.8125 18.2891 5.36719 18.2109C3.96094 18.1328 2.75 17.8203 1.69531 16.8047C0.679688 15.75 0.367188 14.5391 0.289062 13.1328C0.210938 11.6875 0.210938 7.35156 0.289062 5.90625C0.367188 4.5 0.679688 3.25 1.69531 2.23438C2.75 1.21875 3.96094 0.90625 5.36719 0.828125C6.8125 0.75 11.1484 0.75 12.5938 0.828125C14 0.90625 15.25 1.21875 16.2656 2.23438C17.2812 3.25 17.5938 4.5 17.6719 5.90625ZM15.7969 14.6562C16.2656 13.5234 16.1484 10.7891 16.1484 9.5C16.1484 8.25 16.2656 5.51562 15.7969 4.34375C15.4844 3.60156 14.8984 2.97656 14.1562 2.70312C12.9844 2.23438 10.25 2.35156 9 2.35156C7.71094 2.35156 4.97656 2.23438 3.84375 2.70312C3.0625 3.01562 2.47656 3.60156 2.16406 4.34375C1.69531 5.51562 1.8125 8.25 1.8125 9.5C1.8125 10.7891 1.69531 13.5234 2.16406 14.6562C2.47656 15.4375 3.0625 16.0234 3.84375 16.3359C4.97656 16.8047 7.71094 16.6875 9 16.6875C10.25 16.6875 12.9844 16.8047 14.1562 16.3359C14.8984 16.0234 15.5234 15.4375 15.7969 14.6562Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useMagneticEffect } from '~/composables/useMagneticEffect'

const SCROLL_THRESHOLD = 550

const { gsap, ScrollTrigger } = useGsap()
const headerRef = ref(null)
const logoRef = ref(null)
const headerContentRef = ref(null)
const menuRef = ref(null)
const socialRef = ref(null)
const hamburgerRef = ref(null)
const isScrolled = ref(false)
const isExpanded = ref(false)
const isMobile = ref(false)
const hasDarkBg = ref(false)
const navigationStore = useState('navigationOpen', () => false)

const { 
  elementRef: buttonRef, 
  initMagneticEffect: initButtonMagnetic
} = useMagneticEffect({
  maxDistance: 150,
  intensity: 0.6,
  textAnimation: true
})

const { 
  elementRef: logoContainerRef, 
  initMagneticEffect: initLogoMagnetic
} = useMagneticEffect({
  maxDistance: 100,
  intensity: 0.4,
  textAnimation: false
})

let hideTimeline = null
let showTimeline = null

const hideHeaderContent = () => {
  if (!logoContainerRef.value || !menuRef.value || !socialRef.value || !headerRef.value) return
  
  if (showTimeline) showTimeline.kill()
  if (hideTimeline) hideTimeline.kill()
  
  const menuItems = menuRef.value.querySelectorAll('.header-menu-item')
  const socialItems = socialRef.value.querySelectorAll('.social-media-item')
  
  gsap.killTweensOf([logoContainerRef.value, menuItems, socialItems, hamburgerRef.value, headerRef.value])
  
  hideTimeline = gsap.timeline()
  
  hideTimeline
    .to(socialItems, {
      y: -80,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    })
    .to(menuItems, {
      y: -80,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    }, "-=0.2")
  
  if (!isMobile.value) {
    hideTimeline.to(logoContainerRef.value, {
      y: -80,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, "-=0.2")
  }
  
  hideTimeline
    .to(hamburgerRef.value, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.1")
    .to(headerRef.value, {
      height: '50px',
      duration: 0.4,
      ease: "power2.inOut"
    }, "-=0.1")
}

const showHeaderContent = () => {
  if (!logoContainerRef.value || !menuRef.value || !socialRef.value || !headerRef.value) return
  
  if (showTimeline) showTimeline.kill()
  if (hideTimeline) hideTimeline.kill()
  
  const menuItems = menuRef.value.querySelectorAll('.header-menu-item')
  const socialItems = socialRef.value.querySelectorAll('.social-media-item')
  
  gsap.killTweensOf([logoContainerRef.value, menuItems, socialItems, hamburgerRef.value, headerRef.value])
  
  showTimeline = gsap.timeline()
  
  showTimeline
    .to(headerRef.value, {
      height: '92px',
      duration: 0.4,
      ease: "power2.inOut"
    })
    .to(hamburgerRef.value, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in"
    }, "-=0.2")
  
  if (!isMobile.value) {
    showTimeline.to(logoContainerRef.value, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.1")
  }
  
  showTimeline
    .to(menuItems, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.3")
    .to(socialItems, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.3")
}

const resetHeaderContent = () => {
  if (!logoContainerRef.value || !menuRef.value || !socialRef.value || !headerRef.value) return
  
  if (showTimeline) showTimeline.kill()
  if (hideTimeline) hideTimeline.kill()
  
  const menuItems = menuRef.value.querySelectorAll('.header-menu-item')
  const socialItems = socialRef.value.querySelectorAll('.social-media-item')
  
  gsap.killTweensOf([logoContainerRef.value, menuItems, socialItems, hamburgerRef.value, headerRef.value])
  
  gsap.set(logoContainerRef.value, {
    y: 0,
    opacity: 1
  })
  
  gsap.set([menuItems, socialItems], {
    y: 0,
    opacity: 1
  })
  
  gsap.set(hamburgerRef.value, {
    opacity: 0
  })
  
  gsap.set(headerRef.value, {
    height: 'auto'
  })
}

const checkMobile = () => {
  if (process.client) {
    isMobile.value = window.innerWidth <= 576
  }
}

const handleHamburgerClick = (event) => {
  event.stopPropagation()
  navigationStore.value = !navigationStore.value
  window.dispatchEvent(new CustomEvent('toggleNavigation'))
}

const handleHeaderHover = (isHovering) => {
  if (!isScrolled.value || isMobile.value) return
  
  isExpanded.value = isHovering
  
  if (isHovering) {
    showHeaderContent()
  } else {
    hideHeaderContent()
  }
}

const handleScroll = () => {
  const scrollY = window.scrollY
  
  if (scrollY > SCROLL_THRESHOLD && !isScrolled.value) {
    isScrolled.value = true
    nextTick(() => {
      if (!isMobile.value) {
        hideHeaderContent()
      }
    })
  } else if (scrollY <= SCROLL_THRESHOLD && isScrolled.value) {
    isScrolled.value = false
    isExpanded.value = false
    if (!isMobile.value) {
      resetHeaderContent()
    }
  }
}

const route = useRoute()
watch(() => route.path, (newPath) => {
  if (newPath === '/' || newPath === '/sobre' || newPath === '/projetos' || newPath === '/projeto' || newPath === '/projeto2') {
    hasDarkBg.value = true
  } else if (newPath === '/contatos') {
    hasDarkBg.value = false
  }
}, { immediate: true })


onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    
    nextTick(() => {
      checkMobile()
      
      const route = useRoute()
      if (route.path === '/' || route.path === '/projetos' || route.path === '/projeto' || route.path === '/projeto2' || route.path === '/sobre') {
        hasDarkBg.value = true
      } else if (route.path === '/contatos') {
        hasDarkBg.value = false
      }
      
      window.scrollTo(0, 0)
      
      initButtonMagnetic()
      initLogoMagnetic()
      
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', checkMobile)
      
      gsap.set(headerRef.value, {
        y: -100,
        opacity: 0
      })
      
      window.addEventListener('startAppIntro', () => {
        hasDarkBg.value = true
      })
      
      window.addEventListener('videoExpandStart', () => {
        hasDarkBg.value = true
      })
      
      window.addEventListener('introAnimationComplete', () => {
        const currentRoute = useRoute()
        if (currentRoute.path !== '/' && currentRoute.path !== '/sobre' && currentRoute.path !== '/projetos' && currentRoute.path !== '/projeto' && currentRoute.path !== '/projeto2') {
        hasDarkBg.value = false
        }
      })
      
      window.addEventListener('colorTransitionUpdate', (event) => {
        const currentRoute = useRoute()
        if (event.detail && event.detail.progress > 0.8) {
          hasDarkBg.value = true
        } else {
          if (currentRoute.path !== '/' && currentRoute.path !== '/sobre' && currentRoute.path !== '/projetos' && currentRoute.path !== '/projeto' && currentRoute.path !== '/projeto2') {
          hasDarkBg.value = false
          }
        }
      })
      
      window.addEventListener('pageBackgroundDark', () => {
        hasDarkBg.value = true
      })
      
      window.addEventListener('pageBackgroundLight', () => {
        const currentRoute = useRoute()
        if (currentRoute.path === '/contatos') {
          hasDarkBg.value = false
        } else if (currentRoute.path !== '/' && currentRoute.path !== '/projetos' && currentRoute.path !== '/projeto' && currentRoute.path !== '/projeto2' && currentRoute.path !== '/sobre') {
        hasDarkBg.value = false
        }
      })
      
      window.addEventListener('appLoaderAnimationComplete', () => {
        gsap.to(headerRef.value, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.3
        })
      })
      
      window.addEventListener('pageVisibleImmediately', () => {
        const currentRoute = useRoute()
        if (currentRoute.path === '/contatos') {
          hasDarkBg.value = false
        } else if (currentRoute.path !== '/' && currentRoute.path !== '/projetos' && currentRoute.path !== '/projeto' && currentRoute.path !== '/projeto2' && currentRoute.path !== '/sobre') {
          hasDarkBg.value = false
        }
        gsap.to(headerRef.value, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.1
        })
      })
      
      window.addEventListener('videoExpandStart', () => {
        gsap.to(headerRef.value, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        })
      })
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', checkMobile)
    window.removeEventListener('colorTransitionUpdate', () => {})
    window.removeEventListener('appLoaderAnimationComplete', () => {})
    window.removeEventListener('pageVisibleImmediately', () => {})
    window.removeEventListener('introAnimationComplete', () => {})
    window.removeEventListener('videoExpandStart', () => {})
    window.removeEventListener('startAppIntro', () => {})
    window.removeEventListener('pageBackgroundDark', () => {})
    window.removeEventListener('pageBackgroundLight', () => {})
  
    if (showTimeline) showTimeline.kill()
    if (hideTimeline) hideTimeline.kill()
    
    if (headerRef.value) {
      gsap.set(headerRef.value, {
        clearProps: "y,opacity"
      })
    }
  }
})

</script>

<style scoped>
.hamburger-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.hamburger-icon.visible {
  opacity: 1;
  pointer-events: auto;
}

.hamburger-icon.mobile {
  left: auto;
  right: var(--body-horizontal-padding);
  transform: translateY(-50%);
}

.hamburger-icon.clickable {
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.2s ease;
}

.hamburger-icon.clickable:hover {
  transform: translateY(-50%) scale(1.1);
}

.hamburger-icon.mobile.clickable:hover {
  transform: translateY(-50%) scale(1.1);
}

.hamburger-line {
  width: 25px;
  height: 2px;
  background-color: var(--color-black);
  border-radius: 2px;
}

.header-menu {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 12px;
}

.header-menu-item {
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: #000;
    transition: width 0.3s ease;
  }
}

.header-menu-item:hover {
  color: var(--color-yellow);

  &::after {
    width: 100%;
    background-color: var(--color-yellow);
  }
}

.social-media {
  display: flex;
  gap: 15px;
  padding-top: 12px;
}

.social-media-item {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-media-item:hover {
  background-color: var(--color-yellow);
  color: var(--color-white);
  border-color: var(--color-yellow);
}

.header {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 10001;
  padding-top: 40px;
  transform: translateY(-100vh);
  transition: padding-top 0.3s ease, background-color 0.3s ease, height 0.1s ease;
}

.logo-image {
  filter: brightness(0);
}

.header.has-dark-bg .logo-image {
  filter: brightness(1);
}

.header.has-dark-bg .hamburger-line {
  background-color: #fff;
}

.header.has-dark-bg .header-menu-item {
  color: #fff;

  &::after {
    background-color: #fff;
  }
}

.header.has-dark-bg .social-media-item {
  border-color: #fff;
  color: #fff;
}

.header.has-dark-bg .social-media-item:hover {
  border-color: var(--color-yellow);
}

.header.has-dark-bg .social-media-item:hover svg{
  color: #000;
}

.header.scrolled {
  padding-top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  height: 50px;
  overflow: hidden;

  .header-menu-item {
    color: var(--color-black);

    &::after {
      background-color: #000;
    }
  }

  .header-menu-item:hover {
    color: var(--color-yellow);

    &::after {
      background-color: var(--color-yellow);
    }
  }

  .social-media-item {
    border-color: var(--color-black);
    color: var(--color-black);
  }

  .social-media-item:hover {
    border-color: var(--color-yellow);
    background-color: var(--color-yellow);
    color: var(--color-white);
  }

  .logo-image {
    filter: brightness(0);
  }

  .hamburger-line {
    background-color: var(--color-black);
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px var(--body-horizontal-padding);
}

.header-logo-wrapper {
  cursor: pointer;
  will-change: transform;
  transform-origin: center;
  transition: all 0s ease;
}

.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 150px;
  height: 100%;
  transition: filter 0.1s ease, width 0.1s ease;
}

.button {
  transition: all 0s ease;
  cursor: pointer;
  will-change: transform;
  transform-origin: center;
  overflow: hidden;
  position: relative;
  background: transparent;
  border-color: #fff;

  &:hover,
  &:focus-visible {
    .magnetic-text {
      color: #000;
    }
  }
}

.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: -1;
}

.button:hover::before {
  width: 300px;
  height: 300px;
}

.magnetic-text {
  display: inline-block;
  will-change: transform, opacity;
  position: relative;
  z-index: 1;
  color: #fff;
  transition: color 0.3s ease;
}

.button.white .magnetic-text {
  color: #fff;
}

@media (max-width: 992px) {
  .header-content {
    padding-left: 20px;
    padding-right: 20px;
  }

  .logo-image {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .header {
    padding-top: 15px;
  }
  
  .logo-image {
    width: 100px;
  }

  .header-menu-item {
    font-size: 16px;
  }

  .social-media-item {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 576px) {  
  .header-menu,
  .social-media {
    display: none !important;
  }

  .header.scrolled {
    height: 65px;

    .hamburger-icon.mobile {
      top: 50%;
    }
  }
  
  .logo-image {
    width: 120px;
    filter: brightness(1);
  }
  
  .header.has-dark-bg .logo-image {
    filter: brightness(1);
  }
  
  .hamburger-icon.mobile {
    opacity: 1 !important;
    pointer-events: auto !important;
    right: 20px;
    top: 62%;
    z-index: 100;
  }
  
  .hamburger-line {
    background-color: #000;
  }
  
  .header.has-dark-bg .hamburger-line {
    background-color: #fff;
  }
  
  .header.scrolled .header-content {
    padding: 0;
  }
  
  .header.scrolled .header-logo-wrapper {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%) !important;
    z-index: 11;
    transition: all 0.3s ease;
  }

  .header.scrolled .header-logo-wrapper:hover {
    transform: translateY(-50%) scale(1);
  }
  
  .header.scrolled .logo-image {
    width: 80px;
    filter: brightness(0);
  }
  
  .header.scrolled .hamburger-line {
    background-color: var(--color-black);
  }
  
  .header.scrolled {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .header {
    padding-top: 0px;
  }
}
</style>