<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section class="flex justify-between">
    <div class="w-1/2">
      <div class="ml-10" v-for="n in 3">
        <h1 class="md:text-9xl sm:text-6xl header-font">{{ TITLE }}</h1>
      </div>
      <div class="ml-10 mt-4 body-font">
        <p>
          A selection of flavorful homemade Binq ice - Crave More, It's So Nice!
        </p>
      </div>
    </div>
    <div class="w-1/3 mr-10">
      <img src="../assets/pictures/roasted-soybean-oolong-bingsu.png" />
    </div>
  </section>
</template>

<style scoped></style>
