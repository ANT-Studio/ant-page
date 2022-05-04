<template>
  <div class="home">
    <SectionsHero />
    <SectionsTeamPreview />
    <SectionsProjects :projects="projects" />
    <SectionsContact />
    <SectionsFooter />
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useFetch("/api/project");
</script>

<style lang="scss" scoped></style>
