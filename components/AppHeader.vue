<template>
  <header class="header">
    <div class="header-content">
      <NuxtLink to="/" class="header-logo">
        <img 
          ref="logoRef" 
          src="/images/logos/icon-black.svg" 
          alt="Agência Esfera" 
          class="logo-image"
        >
      </NuxtLink>
      <button ref="buttonRef" class="button">
        <span class="header-button-text">let's talk</span>
      </button>
    </div>
  </header>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()
const headerRef = ref(null)
const logoRef = ref(null)
const buttonRef = ref(null)

// Variáveis para o efeito magnético
let isMouseOver = false
let magneticTween = null

const handleMouseMove = (e) => {
  if (!buttonRef.value || !isMouseOver) return
  
  const buttonRect = buttonRef.value.getBoundingClientRect()
  const buttonCenterX = buttonRect.left + buttonRect.width / 2
  const buttonCenterY = buttonRect.top + buttonRect.height / 2
  
  const mouseX = e.clientX
  const mouseY = e.clientY
  
  const deltaX = mouseX - buttonCenterX
  const deltaY = mouseY - buttonCenterY
  
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  const maxDistance = 150 // Distância máxima para o efeito magnético (aumentada)
  
  if (distance < maxDistance) {
    const strength = (maxDistance - distance) / maxDistance
    const moveX = deltaX * strength * 0.6 // Intensidade do movimento (dobrada)
    const moveY = deltaY * strength * 0.6
    
    // Cancelar animação anterior se existir
    if (magneticTween) {
      magneticTween.kill()
    }
    
    // Aplicar movimento magnético (mais rápido)
    magneticTween = gsap.to(buttonRef.value, {
      x: moveX,
      y: moveY,
      duration: 0.2,
      ease: "power2.out"
    })
  }
}

const handleMouseEnter = () => {
  isMouseOver = true
  
  // Animação de movimento do texto
  if (buttonRef.value) {
    const textElement = buttonRef.value.querySelector('.header-button-text')
    if (textElement) {
      console.log('Iniciando animação de movimento do texto')
      
      // Texto move para cima e desaparece
      gsap.to(textElement, {
        y: -30, // Move para cima
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => {
          console.log('Texto desapareceu no topo')
          
          // Texto aparece por baixo
          gsap.set(textElement, { 
            y: 30, // Posiciona por baixo
            opacity: 0 
          })
          
          // Texto move para o centro
          gsap.to(textElement, {
            y: 0,
            opacity: 1,
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
              console.log('Texto apareceu por baixo')
            }
          })
        }
      })
    } else {
      console.log('Elemento de texto não encontrado')
    }
  } else {
    console.log('Botão não encontrado')
  }
}

const handleMouseLeave = () => {
  isMouseOver = false
  
  // Cancelar animação magnética
  if (magneticTween) {
    magneticTween.kill()
  }
  
  // Animação inversa do texto
  if (buttonRef.value) {
    const textElement = buttonRef.value.querySelector('.header-button-text')
    if (textElement) {
      console.log('Iniciando animação inversa do texto')
      
      // Texto move para baixo e desaparece
      gsap.to(textElement, {
        y: 30, // Move para baixo
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => {
          console.log('Texto desapareceu por baixo')
          
          // Texto aparece por cima
          gsap.set(textElement, { 
            y: -30, // Posiciona por cima
            opacity: 0 
          })
          
          // Texto move para o centro
          gsap.to(textElement, {
            y: 0,
            opacity: 1,
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
              console.log('Texto apareceu por cima')
            }
          })
        }
      })
    }
  }
  
  // Animação elástica de retorno (mais rápida)
  gsap.to(buttonRef.value, {
    x: 0,
    y: 0,
    duration: 0.5, // Mais rápida
    ease: "elastic.out(1, 0.5)" // Mais elástica
  })
}

onMounted(() => {
  if (process.client && gsap && ScrollTrigger) {
    
    // Adicionar event listeners
    if (buttonRef.value) {
      buttonRef.value.addEventListener('mouseenter', handleMouseEnter)
      buttonRef.value.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('mousemove', handleMouseMove)
    }
    
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "500px top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        
        // Logo: filtro para inverter cores (preto → branco)
        const logoInvert = gsap.utils.interpolate(0, 1, progress)
        
        gsap.set(logoRef.value, {
          filter: `invert(${logoInvert})`
        })
        
        // Alternar classe do botão
        if (buttonRef.value) {
          if (progress > 0.5) {
            buttonRef.value.classList.add('white')
          } else {
            buttonRef.value.classList.remove('white')
          }
        }
      }
    })
  }
})

onUnmounted(() => {
  if (process.client && ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === document.body) {
        trigger.kill()
      }
    })
    
    // Limpar event listeners do efeito magnético
    if (buttonRef.value) {
      buttonRef.value.removeEventListener('mouseenter', handleMouseEnter)
      buttonRef.value.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }
})
</script>

<style scoped>
.header {
  /* background-color: rgba(255, 255, 255, 0.5); */
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 10;
  /* backdrop-filter: blur(7px); */
  transition: background-color 0.1s ease;
  padding-top: 50px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px var(--body-horizontal-padding);
}

.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 50px;
  height: 100%;
  transition: filter 0.1s ease;
}

.button {
  transition: all 0s ease;
  cursor: pointer;
  will-change: transform;
  transform-origin: center;
  overflow: hidden;
  position: relative;
  background: transparent;
}

.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--color-yellow);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: -1;
}

.button:hover::before {
  width: 300px;
  height: 300px;
}

.header-button-text {
  display: inline-block;
  will-change: transform, opacity;
  position: relative;
  z-index: 1;
  color: inherit;
}

@media (max-width: 768px) {
  .header {
    padding-top: 15px;
  }
}
</style>