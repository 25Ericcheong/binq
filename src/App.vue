<script setup lang="ts">
import AboutUs from "./components/about-us.vue";
import Feedback from "./components/feedback.vue";
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
    <Feedback />
  </div>
</template>

<style scoped></style>
