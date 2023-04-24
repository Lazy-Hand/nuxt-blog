import { defineNuxtPlugin } from "#app";
import { createDiscreteApi } from "naive-ui";
export default defineNuxtPlugin((nuxtApp) => {
  const bar = ref()
  nuxtApp.hook("app:mounted", () => {
    if(!bar.value) {
      const {loadingBar} = createDiscreteApi(["loadingBar"])
      bar.value = loadingBar
    }
    console.log("app:mounted");
  });
  nuxtApp.hook("page:start", () => {
    bar.value?.start()
    console.log("page:start");
  });
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      bar.value?.finish()
    },50)
    console.log("page:finish");
  });
  nuxtApp.hook("app:error", () => {
    console.log("app:error");
    if(process.client){
      setTimeout(() => {
        bar.value?.finish()
      },50)
    }
  });
});
