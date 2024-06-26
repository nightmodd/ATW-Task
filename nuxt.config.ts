// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "ATW Task1", // Set your default title here
    },
  },

  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxtjs/google-fonts", "@nuxt/eslint"],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    download: true,
    display: "swap",
  },
  eslint: {
    checker: true, // <---
  },
});
