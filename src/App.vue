<script setup lang="ts">
import AboutUs from "./components/AboutUs.vue";
import LandingPageHeader from "./components/header/LandingPageHeader.vue";
import OurMentions from "./components/OurMentions.vue";
import Products from "./components/Products.vue";
import TopBar from "./components/TopBar.vue";
import "./output.css";
</script>

<template>
  <div class="bg-creamwhitebq">
    <TopBar />
    <LandingPageHeader />
    <AboutUs />
    <Products />
    <OurMentions />
  </div>
</template>

<style scoped></style>
