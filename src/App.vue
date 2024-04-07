<script setup lang="ts">
import AboutUs from "./components/about-us.vue";
import LandingPageHeader from "./components/header/wrapper-header.vue";
import OurMentions from "./components/our-mentions.vue";
import Products from "./components/products.vue";
import "./output.css";
</script>

<template>
  <div class="bg-creamwhitebq">
    <LandingPageHeader />
    <AboutUs />
    <Products />
    <OurMentions />
  </div>
</template>

<style scoped></style>
