<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section class="flex max-w-full max-h-screen primary-bg py-8">
    <div class="w-5/12">
      <div class="ml-20 text-6xl sm:text-3xl body-font pb-4">
        <p>A selection of unique homemade</p>
        <button
          class="border-solid border-2 text-whitebq border-b-greenbq p-3 rounded-full quarternary-bg"
        >
          Binq Su!
        </button>
      </div>
      <div class="ml-20" v-for="n in 3">
        <h1 class="md:text-9xl sm:text-6xl header-font">{{ TITLE }}</h1>
      </div>
    </div>
    <div class="mr-10">
      <div
        class="items-start secondary-bg p-14 rounded-full border-solid border-2 border-b-greenbq"
      >
        <img
          class=""
          src="../assets/pictures/roasted-soybean-oolong-bingsu.png"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
