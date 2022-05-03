import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    databaseUrl: "",
  },
  buildModules: [/*"@intlify/nuxt3"*/],
  intlify: {
    localeDir: "assets/locales",
  },
  typescript: {
    strict: true
  },
});
