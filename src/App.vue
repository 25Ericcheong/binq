<script setup lang="ts">
import LandingPageHeader from "./components/header/LandingPageHeader.vue";
import Products from "./components/Products.vue";
import TopBar from "./components/TopBar.vue";
import "./output.css";
</script>

<template>
  <div>
    <TopBar />
    <LandingPageHeader />
  </div>
  <div><Products /></div>
</template>

<style scoped></style>
