export const useCounter = defineStore('count', () => {
  const count = ref(0)
  return { count }
})
