<template>
  <div class="app">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
//import { DEFAULT_LOCALE } from "~/lib/constants";
//import { useI18n } from "vue-i18n";

//const i18n = useI18n();

onMounted(() => {
  //i18n.locale.value = localStorage.getItem("lang") || DEFAULT_LOCALE;
  document.body.classList.add("theme");
  document.body.classList.add(
    localStorage.getItem("last-theme") ?? "theme--dark"
  );
});
</script>

<style lang="scss">
@import "./assets/styles/themes";
@import "./assets/styles/variables";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  transition: background-color 0.1s ease-in-out;
}

body {
  overflow: overlay;
  overflow-x: hidden;
}

.app {
  @include themed() {
    color: t("text");
    background: t("bg");
  }

  min-width: 100vw;
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: $main-gradient;
  border: none;
  border-radius: 0;
}

::-webkit-scrollbar-track {
  border: none;
  border-radius: 0;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
