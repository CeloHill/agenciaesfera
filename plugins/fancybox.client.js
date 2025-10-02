import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

export default defineNuxtPlugin(() => {
  if (process.client) {
    Fancybox.bind("[data-fancybox]", {})
  }
})


