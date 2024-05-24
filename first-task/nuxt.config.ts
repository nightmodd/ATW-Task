// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "ATW Task1", // Set your default title here
    },
  },
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: true },
});
