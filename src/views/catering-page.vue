<script setup lang="ts">
import Catering from "@/components/catering.vue";
import Footer from "@/components/footer.vue";
import "@/output.css";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Catering | Binq Dessert — Events & Packages";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Book Binq Dessert for your next event. Bingsu catering packages for all occasions across Klang Valley — enquire now."
  );
});
</script>
<template>
  <div class="bg-creamwhitebq">
    <Catering />
    <Footer />
  </div>
</template>
