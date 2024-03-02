<script setup lang="ts">
import LandingPageHeader from "./components/header/LandingPageHeader.vue";
import Products from "./components/Products.vue";
import TopBar from "./components/TopBar.vue";
import "./output.css";
</script>

<template>
  <div class="bg-creamwhitebq">
    <div>
      <TopBar />
      <LandingPageHeader />
    </div>
    <div><Products /></div>
  </div>
</template>

<style scoped></style>
