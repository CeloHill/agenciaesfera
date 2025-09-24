<template>
  <div class="navigation-overlay" :class="{ 'is-open': isMenuOpen }">
    <div class="navigation-container">
      <!-- Conteúdo principal do menu -->
      <div class="nav-content">
        <div class="nav-left">
          <NuxtLink to="/sobre" class="nav-section" @click="closeMenu">
            <h2 class="nav-title no-color-change">Conheça a Esfera</h2>
            <span class="nav-subtitle">sobre</span>
          </NuxtLink>
          <NuxtLink to="/projetos" class="nav-section" @click="closeMenu">
            <h2 class="nav-title no-color-change">Paixão por fazer</h2>
            <span class="nav-subtitle">portfólio</span>
          </NuxtLink>
          <NuxtLink to="/contatos" class="nav-section" @click="closeMenu">
            <h2 class="nav-title no-color-change">Let's talk</h2>
            <span class="nav-subtitle">contato</span>
          </NuxtLink>
        </div>
        <div class="nav-right">
          <div class="nav-video-placeholder">
            <div class="video-image-container">
              <video class="video-bg" src="/videos/video-intro-esfera.mp4" autoplay loop muted playsinline></video>
            </div>
            <span class="video-text">
              <div>
                <img src="/icons/play.png" alt="assistir ao vídeo" class="video-image"></img>
              </div>
              assista<br>
              nosso reels
            </span>
          </div>
        </div>
      </div>
      
      <!-- Endereço na parte inferior -->
      <div class="nav-footer">
        <div class="nav-address">
          <span class="address-label">endereço</span>
          <p class="address-text">Av. Rep. Argentina, 1228</p>
          <p class="address-text">Água Verde, Curitiba - PR, 80610-260</p>
        </div>
        
        <div class="nav-social">
          <a href="#" class="social-link">
            <span class="social-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.15625 18H0.523438V6.32031H4.15625V18ZM2.32031 4.75781C1.1875 4.75781 0.25 3.78125 0.25 2.60938C0.25 1.00781 1.96875 -0.0078125 3.375 0.8125C4.03906 1.16406 4.42969 1.86719 4.42969 2.60938C4.42969 3.78125 3.49219 4.75781 2.32031 4.75781ZM17.7109 18H14.1172V12.3359C14.1172 10.9688 14.0781 9.25 12.2031 9.25C10.3281 9.25 10.0547 10.6953 10.0547 12.2188V18H6.42188V6.32031H9.89844V7.92188H9.9375C10.4453 7.02344 11.6172 6.04688 13.375 6.04688C17.0469 6.04688 17.75 8.46875 17.75 11.5938V18H17.7109Z" fill="currentColor"/>
              </svg>
            </span>
          </a>
          <a href="#" class="social-link">
            <span class="social-icon">
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5.00781C11.4609 5.00781 13.4922 7.03906 13.4922 9.5C13.4922 12 11.4609 13.9922 9 13.9922C6.5 13.9922 4.50781 12 4.50781 9.5C4.50781 7.03906 6.5 5.00781 9 5.00781ZM9 12.4297C10.6016 12.4297 11.8906 11.1406 11.8906 9.5C11.8906 7.89844 10.6016 6.60938 9 6.60938C7.35938 6.60938 6.07031 7.89844 6.07031 9.5C6.07031 11.1406 7.39844 12.4297 9 12.4297ZM14.7031 4.85156C14.7031 4.26562 14.2344 3.79688 13.6484 3.79688C13.0625 3.79688 12.5938 4.26562 12.5938 4.85156C12.5938 5.4375 13.0625 5.90625 13.6484 5.90625C14.2344 5.90625 14.7031 5.4375 14.7031 4.85156ZM17.6719 5.90625C17.75 7.35156 17.75 11.6875 17.6719 13.1328C17.5938 14.5391 17.2812 15.75 16.2656 16.8047C15.25 17.8203 14 18.1328 12.5938 18.2109C11.1484 18.2891 6.8125 18.2891 5.36719 18.2109C3.96094 18.1328 2.75 17.8203 1.69531 16.8047C0.679688 15.75 0.367188 14.5391 0.289062 13.1328C0.210938 11.6875 0.210938 7.35156 0.289062 5.90625C0.367188 4.5 0.679688 3.25 1.69531 2.23438C2.75 1.21875 3.96094 0.90625 5.36719 0.828125C6.8125 0.75 11.1484 0.75 12.5938 0.828125C14 0.90625 15.25 1.21875 16.2656 2.23438C17.2812 3.25 17.5938 4.5 17.6719 5.90625ZM15.7969 14.6562C16.2656 13.5234 16.1484 10.7891 16.1484 9.5C16.1484 8.25 16.2656 5.51562 15.7969 4.34375C15.4844 3.60156 14.8984 2.97656 14.1562 2.70312C12.9844 2.23438 10.25 2.35156 9 2.35156C7.71094 2.35156 4.97656 2.23438 3.84375 2.70312C3.0625 3.01562 2.47656 3.60156 2.16406 4.34375C1.69531 5.51562 1.8125 8.25 1.8125 9.5C1.8125 10.7891 1.69531 13.5234 2.16406 14.6562C2.47656 15.4375 3.0625 16.0234 3.84375 16.3359C4.97656 16.8047 7.71094 16.6875 9 16.6875C10.25 16.6875 12.9844 16.8047 14.1562 16.3359C14.8984 16.0234 15.5234 15.4375 15.7969 14.6562Z" fill="currentColor"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="navigation-button">
    <button ref="buttonMenuRef" class="button-menu" @click="toggleMenu">
      <span class="navigation-button-text">menu</span>
      <span class="navigation-button-icon" :class="{ 'is-open': isMenuOpen }">
        <span class="navigation-button-icon-line"></span>
        <span class="navigation-button-icon-line"></span>
        <span class="navigation-button-icon-line"></span>
      </span>
    </button>
  </div>
</template>

<script setup>
const { gsap } = useGsap()
const isMenuOpen = ref(false)
const buttonMenuRef = ref(null)

const animateTextTransition = (newText) => {
  if (!buttonMenuRef.value) return
  
  const textElement = buttonMenuRef.value.querySelector('.navigation-button-text')
  if (!textElement) return
  
  // Primeira fase: texto atual sobe e desaparece
  gsap.to(textElement, {
    y: -30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      // Segunda fase: altera o texto e posiciona por baixo
      textElement.textContent = newText
      gsap.set(textElement, { 
        y: 30,
        opacity: 0 
      })
      
      // Terceira fase: novo texto sobe para o centro
      gsap.to(textElement, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
    }
  })
}

const toggleMenu = () => {
  const newState = !isMenuOpen.value
  
  if (newState) {
    // Abrindo menu: "menu" → "fechar"
    animateTextTransition('fechar')
  } else {
    // Fechando menu: "fechar" → "menu"
    animateTextTransition('menu')
  }
  
  isMenuOpen.value = newState
}

const closeMenu = () => {
  if (isMenuOpen.value) {
    animateTextTransition('menu')
    isMenuOpen.value = false
  }
}
</script>

<style scoped>
.navigation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;
}

.navigation-overlay.is-open {
  pointer-events: all;
}

.navigation-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 54px;
  height: 54px;
  background-color: var(--color-white);
  border-radius: 50%;
  transform: translateX(-50%);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.navigation-overlay.is-open .navigation-container {
  width: 200%;
  height: 200%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 25%);
  opacity: 1;
}

.navigation-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.navigation-button .button-menu {
  background-color: rgba(215, 215, 215, 0.7);
  backdrop-filter: blur(3px);
  color: var(--color-black);
  border: none;
  border-radius: 50px;
  padding: 8px 30px;
  padding-right: 8px;
  cursor: pointer;
  font-size: var(--font-size-text);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;
  position: relative;
  min-width: 170px;
}

.navigation-button-text {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--color-black);
  display: inline-block;
  will-change: transform, opacity;
  position: relative;
  z-index: 1;
}

.navigation-button-icon {
  font-size: var(--font-size-text);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  background-color: var(--color-black);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
}

.navigation-button-icon-line {
  width: 75%;
  height: 2px;
  background-color: var(--color-medium-gray);
  position: relative;
  transition: all 0.6s ease;
}

.navigation-button-icon-line:nth-child(1) {
  transform: translateY(-200%) rotate(0deg);
  transition-delay: 0.1s;
}

.navigation-button-icon-line:nth-child(2) {
  transform: translateY(0%) rotate(0deg);
  transition-delay: 0.2s;
}

.navigation-button-icon-line:nth-child(3) {
  transform: translateY(200%) rotate(0deg);
  transition-delay: 0.2s;
  opacity: 1;
}

.navigation-button-icon.is-open .navigation-button-icon-line:nth-child(1) {
  transform: translateY(100%) rotate(45deg);
}

.navigation-button-icon.is-open .navigation-button-icon-line:nth-child(2) {
  transform: translateY(0%) rotate(135deg);
}

.navigation-button-icon.is-open .navigation-button-icon-line:nth-child(3) {
  transform: translateY(600%);
  opacity: 0;
}

.nav-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  opacity: 0;
  transition: all 0.4s ease 0.8s;
}

.navigation-overlay.is-open .nav-content {
  opacity: 1;
}

.nav-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.nav-section {
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  text-decoration: none;
  display: flex;
}

.navigation-overlay.is-open .nav-section:nth-child(1) {
  transition-delay: 1.0s;
}

.navigation-overlay.is-open .nav-section:nth-child(2) {
  transition-delay: 1.1s;
}

.navigation-overlay.is-open .nav-section:nth-child(3) {
  transition-delay: 1.2s;
}

.navigation-overlay.is-open .nav-section {
  opacity: 1;
  transform: translateY(0);
}

.nav-title {
  font-family: var(--font-family);
  font-size: clamp(20px, 3vw, 44px);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  margin: 0;
  line-height: 1.1;
  transition: all 0.3s ease;
}

.nav-subtitle {
  font-family: var(--font-family);
  font-size: 20px;
  font-weight: var(--font-weight-regular);
  margin-left: 20px;
  color: #78787899;
  display: flex;
  align-items: center;
}

.nav-section:hover .nav-title {
  color: var(--color-gray);
  transform: translateX(15px);
}


.nav-address {
  margin-bottom: 0;
}

.address-label {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--color-medium-gray);
  text-transform: lowercase;
  display: block;
  margin-bottom: 8px;
}

.address-text {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--color-black);
  margin: 0;
  line-height: 1.4;
}

.nav-social {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-medium-gray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--color-medium-gray);

  svg {
    color: var(--color-white);
  }
}

.social-icon {
  color: inherit;
  line-height: initial;
  font-size: initial;
  font-weight: initial;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-medium-gray);
  }
}

.social-link:hover .social-icon-image  {
  filter: brightness(0) invert(1);
}

.nav-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.nav-video-placeholder {
  width: 100%;
  background-color: #1D1D1B;
  border-radius: 40px;
  display: flex;
  justify-content: flex-start;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease 1.4s;
  align-items: flex-end;
  position: relative;
  padding-top: 40%;

  .video-image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
    opacity: 0.5;
    z-index: 1;
    
    .video-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.navigation-overlay.is-open .nav-video-placeholder {
  opacity: 1;
  transform: translateY(0);
}

.video-text {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  line-height: 1.4;
  margin-bottom: 25px;
  margin-left: 35px;
  z-index: 2;
  position: relative;
}

.nav-footer {
  position: absolute;
  bottom: 54vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.4s ease 1.3s;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 70px;
}

.navigation-overlay.is-open .nav-footer {
  opacity: 1;
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
  }

  .nav-left {
    align-items: center;
    width: 100%;
  }

  .nav-right {
    gap: 50px;
    width: 80vw;
  }
}

</style>
