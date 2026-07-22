<script setup lang="ts">
import AboutUs from "@/components/about-us.vue";
import Footer from "@/components/footer.vue";
import "@/output.css";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "About Us | Binq Dessert — Our Story";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Learn the story behind Binq Dessert — founded by Lovy Chong & Rainey Yong, crafting fragrant tea-based bingsu with local-rooted toppings across Klang Valley."
  );
});
</script>
<template>
  <div class="bg-creamwhitebq">
    <AboutUs />
    <Footer />
  </div>
</template>
