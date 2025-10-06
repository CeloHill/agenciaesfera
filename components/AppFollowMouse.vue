<template>
	<div 
		ref='mouseRef' 
		class='mouse-cursor'
	/>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const { gsap } = useGsap()
    const mouseRef = ref(null)

    let hoverHandlers = []
    let leaveHandlers = []
    let mouseMoveHandler = null

    const moveCircle = (e) => {
        if (!mouseRef.value) return
        
        gsap.to(mouseRef.value, {
            duration: 1.5,
            x: e.clientX,
            y: e.clientY,
            ease: 'elastic.out'
        })
    }

    const setupCursorInteractions = () => {
        const links = document.querySelectorAll('a, button')
        
        links.forEach((link) => {
            const hoverHandler = () => {
                if (!mouseRef.value) return
                gsap.to(mouseRef.value, {
                    width: '5rem',
                    height: '5rem',
                    marginTop: '-2.5rem',
                    marginLeft: '-2.5rem'
                })
            }
            
            const leaveHandler = () => {
                if (!mouseRef.value) return
                gsap.to(mouseRef.value, {
                    width: '1.5rem',
                    height: '1.5rem',
                    marginTop: '-.75rem',
                    marginLeft: '-.75rem'
                })
            }
            
            link.addEventListener('mouseover', hoverHandler)
            link.addEventListener('mouseleave', leaveHandler)
            
            hoverHandlers.push({ element: link, handler: hoverHandler })
            leaveHandlers.push({ element: link, handler: leaveHandler })
        })
    }

    const cleanupEventListeners = () => {
        hoverHandlers.forEach(({ element, handler }) => {
            element.removeEventListener('mouseover', handler)
        })
        
        leaveHandlers.forEach(({ element, handler }) => {
            element.removeEventListener('mouseleave', handler)
        })
        
        if (mouseMoveHandler) {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
        
        hoverHandlers = []
        leaveHandlers = []
        mouseMoveHandler = null
    }

    onMounted(() => {
        setupCursorInteractions()
        
        mouseMoveHandler = moveCircle
        window.addEventListener('mousemove', mouseMoveHandler)
        
        // If using Nuxt's page transitions or dynamic content,
        // you might want to re-setup on route changes
        // useRouter().afterEach(() => {
        // 	cleanupEventListeners()
        // 	setupCursorInteractions()
        // })
    })

    onBeforeUnmount(() => {
        cleanupEventListeners()
    })
</script>

<style scoped>
    .mouse-cursor {
        --size: 1.5rem;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999999999;
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        margin-top: calc(-1 * var(--size) / 2);
        margin-left: calc(-1 * var(--size) / 2);
        border: 1px solid var(--color-white);
        mix-blend-mode: difference;
        background-color: transparent;

        @media (min-width: 768px) {
            display: flex;
        }
    }
</style>