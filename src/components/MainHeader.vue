<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section class="flex justify-between">
    <div class="w-1/3">
      <div class="ml-6 md:text-9xl sm:text-6xl header-font" v-for="n in 3">
        <h1>{{ TITLE }}</h1>
      </div>
    </div>
    <div class="w-1/3">
      <img src="../assets/pictures/roasted-soybean-oolong-bingsu.png" />
    </div>
  </section>
</template>

<style scoped></style>
