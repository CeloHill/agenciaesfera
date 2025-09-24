import { magneticDirective } from '~/directives/magnetic.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('magnetic', magneticDirective)
  console.log('Magnetic directive registered')
})
