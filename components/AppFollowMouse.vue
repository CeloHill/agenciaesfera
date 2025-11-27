<template>
	<div 
		ref='mouseRef' 
		class='mouse-cursor'
	/>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

    const { gsap } = useGsap()
    const mouseRef = ref(null)
    const route = useRoute()

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
        // Clean up any existing handlers first to avoid duplicates
        cleanupLinkHandlers()
        
        const links = document.querySelectorAll('a, button')
        
        if (links.length === 0) {
            // If no links found, try again after a short delay
            setTimeout(() => {
                setupCursorInteractions()
            }, 100)
            return
        }
        
        links.forEach((link) => {
            // Skip if already has handler (safety check)
            if (hoverHandlers.some(h => h.element === link)) {
                return
            }
            
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

    const cleanupLinkHandlers = () => {
        hoverHandlers.forEach(({ element, handler }) => {
            element.removeEventListener('mouseover', handler)
        })
        
        leaveHandlers.forEach(({ element, handler }) => {
            element.removeEventListener('mouseleave', handler)
        })
        
        hoverHandlers = []
        leaveHandlers = []
    }

    const cleanupEventListeners = () => {
        cleanupLinkHandlers()
        
        if (mouseMoveHandler) {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
        
        mouseMoveHandler = null
    }

    onMounted(() => {
        setupCursorInteractions()
        
        mouseMoveHandler = moveCircle
        window.addEventListener('mousemove', mouseMoveHandler)
        
        // Watch for route changes and re-setup cursor interactions
        watch(() => route.path, () => {
            // Wait for page transition to complete (1s) and DOM to be ready
            nextTick(() => {
                // Wait for transition to complete before re-setting up
                setTimeout(() => {
                    setupCursorInteractions()
                }, 1100) // Slightly longer than transition duration (1s)
            })
        })
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