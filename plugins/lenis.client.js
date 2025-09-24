import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Garantir que a página sempre inicie no topo
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Desabilitar scroll restoration do browser
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,        // Duração da animação de scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
      direction: 'vertical', // Direção vertical
      gestureDirection: 'vertical', // Gestos verticais
      smooth: true,         // Ativar scroll suave
      smoothTouch: false,   // Desativar em touch devices por performance
      touchMultiplier: 2,   // Multiplicador para touch
      infinite: false,      // Não infinito
      autoResize: true,     // Auto resize
      syncTouch: false,     // Não sincronizar touch
    })
    
    // Forçar scroll para o topo após inicialização
    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true })
    }, 100)

    // Adicionar listener para garantir topo quando a página estiver pronta
    window.addEventListener('load', () => {
      lenis.scrollTo(0, { immediate: true })
    })
    
    // Garantir topo em mudanças de rota
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0)
    })

    // Função para atualizar o Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Integração com GSAP ScrollTrigger
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    if ($gsap && $ScrollTrigger) {
      lenis.on('scroll', $ScrollTrigger.update)
      
      $gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      
      $gsap.ticker.lagSmoothing(0)
    }

    // Disponibilizar globalmente
    return {
      provide: {
        lenis
      }
    }
  }
})
