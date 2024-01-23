<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex justify-between max-w-full max-h-screen primary-bg p-8 z-0"
  >
    <div class="w-1/2">
      <div class="ml-20 text-6xl sm:text-3xl body-font">
        <p>A selection of flavorful homemade Binq Su!</p>
      </div>
      <div class="ml-20" v-for="n in 3">
        <h1 class="md:text-9xl sm:text-6xl header-font">{{ TITLE }}</h1>
      </div>
    </div>
    <div class="mr-10">
      <div class="items-center secondary-bg p-14 rounded-full">
        <img
          class="items-center"
          src="../assets/pictures/roasted-soybean-oolong-bingsu.png"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
