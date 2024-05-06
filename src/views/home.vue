<script setup lang="ts">
import AboutUs from "../components/about-us.vue";
import Feedback from "../components/feedback.vue";
import Footer from "../components/footer.vue";
import LandingPageHeader from "../components/header/wrapper-header.vue";
import OurMentions from "../components/our-mentions.vue";
import Product from "../components/product.vue";

import "../output.css";
</script>
<template>
  <div class="bg-creamwhitebq">
    <LandingPageHeader />
    <AboutUs />
    <Product />
    <OurMentions />
    <Feedback />
    <Footer />
  </div>
</template>
<style scoped></style>
