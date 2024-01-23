<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section class="flex max-h-screen primary-bg py-12">
    <div class="w-5/12">
      <div class="ml-20 text-6xl sm:text-3xl body-font pb-4">
        <p>A selection of unique refreshing</p>
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
    <div class="mr-10 flex flex-col h-full">
      <div class="flex h-3/4 justify-center">
        <div
          class="items-start secondary-bg p-3 rounded-full border-solid border-2 border-b-greenbq"
        >
          <img
            class="h-full"
            src="../assets/pictures/roasted-soybean-oolong-bingsu.png"
          />
        </div>
      </div>
      <div class="flex body-font mt-4">
        <button
          class="border-solid border-2 text-whitebq border-b-greenbq p-3 rounded-full quarternary-bg"
        >
          Soybean Oolong</button
        ><button
          class="flex-1 border-solid border-2 text-whitebq border-b-greenbq p-3 rounded-full quarternary-bg"
        >
          Matcha</button
        ><button
          class="flex-1 border-solid border-2 text-whitebq border-b-greenbq p-3 rounded-full quarternary-bg"
        >
          Hoji Cha
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
