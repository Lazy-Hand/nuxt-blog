import { createDiscreteApi } from 'naive-ui'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const bar = ref()
  nuxtApp.hook('app:mounted', () => {
    if (!bar.value) {
      const { loadingBar } = createDiscreteApi(['loadingBar'])
      bar.value = loadingBar
    }
  })
  nuxtApp.hook('page:start', () => {
    bar.value?.start()
  })
  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      bar.value?.finish()
    }, 50)
  })
  nuxtApp.hook('app:error', () => {
    if (process.client) {
      setTimeout(() => {
        bar.value?.finish()
      }, 50)
    }
  })
})
