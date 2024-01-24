<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section class="flex max-h-screen primary-bg pt-12 pb-10">
    <div class="w-5/12">
      <div class="ml-20 text-6xl sm:text-3xl body-font pb-4">
        <h2 class="text-whitebq pb-1">A selection of unique refreshing</h2>
        <button
          class="border-solid font-bold border-2 border-b-2 p-3 rounded-full bg-whitebq"
        >
          Binq Su!
        </button>
      </div>
      <div class="ml-20" v-for="n in 3">
        <h1
          class="md:text-9xl sm:text-6xl header-font font-extrabold text-whitebq"
        >
          {{ TITLE }}
        </h1>
      </div>
    </div>
    <div class="flex h-full">
      <div class="flex-col">
        <div class="flex h-4/5 justify-center">
          <div
            class="flex items-start secondary-bg p-3 rounded-full border-b-2 drop-shadow-2xl tertiary-bg"
          >
            <img
              class="h-full"
              src="../assets/pictures/roasted-soybean-oolong-bingsu.png"
            />
          </div>
        </div>
        <div class="flex justify-evenly body-font mt-5">
          <button class="mr-3 p-3 rounded-lg tertiary-bg font-bold underline">
            Soybean Oolong</button
          ><button class="flex-1 mr-3 rounded-lg tertiary-bg">Matcha</button
          ><button class="flex-1 tertiary-bg p-3 rounded-lg">Hoji Cha</button>
        </div>
      </div>
      <article class="flex ml-3 mt-5">
        <div
          class="secondary-bg p-2 border-solid border-2 border-b-2 flex flex-col h-fit w-11/12 rounded-lg drop-shadow-2xl"
        >
          <div>
            <h2 class="text-5xl body-font underline mb-3">Best Seller</h2>
            <p class="body-font text-2xl">Soybean Oolong from the bean</p>
          </div>
          <div class="body-font text-4xl mt-7">
            <h3 class="text-5xl body-font underline mb-3">Side Dishes</h3>
            <p class="mt-2 text-2xl">Cream infused with Kinako</p>
            <p class="mt-2 text-2xl">Natural sugar jelly</p>
            <p class="mt-2 text-2xl">Handmade Kinako mochi</p>
            <p class="mt-2 text-2xl">Flakey crunchy butter crisp</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
