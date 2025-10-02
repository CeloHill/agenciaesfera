import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(Flip)
    gsap.registerPlugin(TextPlugin)
  }
  
  return {
    provide: {
      gsap,
      ScrollTrigger,
      Flip
    }
  }
})
