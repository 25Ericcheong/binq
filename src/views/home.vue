<script setup lang="ts">
import AboutUs from "@/components/about-us.vue";
import Catering from "@/components/catering.vue";
import Feedback from "@/components/feedback.vue";
import FindUs from "@/components/find-us.vue";
import Footer from "@/components/footer.vue";
import LandingPageHeader from "@/components/header/wrapper-header.vue";
import NewOfferings from "@/components/new-offerings.vue";
import OurMentions from "@/components/our-mentions.vue";
import Product from "@/components/product.vue";

import "@/output.css";
</script>
<template>
  <div class="bg-creamwhitebq">
    <LandingPageHeader />
    <AboutUs />
    <NewOfferings />
    <Product />
    <Catering />
    <OurMentions />
    <Feedback />
    <FindUs />
    <Footer />
  </div>
</template>
<style scoped></style>
