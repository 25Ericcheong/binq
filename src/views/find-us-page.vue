<script setup lang="ts">
import FindUs from "@/components/find-us.vue";
import Footer from "@/components/footer.vue";
import "@/output.css";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Find Us | Binq Dessert — 6 Outlets in Klang Valley";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Find Binq Dessert near you — 6 outlets across Klang Valley in Desa Sri Hartamas, SS15, SS2, Damansara Uptown, Taman Segar Cheras, and Sunway Square."
  );
});
</script>
<template>
  <div class="bg-creamwhitebq">
    <FindUs />
    <Footer />
  </div>
</template>
