export const useGsap = () => {
  const { $gsap, $ScrollTrigger, $Flip } = useNuxtApp()
  
  return {
    gsap: $gsap,
    ScrollTrigger: $ScrollTrigger,
    Flip: $Flip
  }
}
