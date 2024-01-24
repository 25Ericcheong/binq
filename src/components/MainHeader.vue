<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex max-h-screen pt-12 pb-10 bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-40% to-dullorangebq"
  >
    <div class="w-5/12">
      <div class="ml-20 text-6xl sm:text-3xl body-font pb-4">
        <h2 class="text-whitebq pb-1">A <i>mountain</i> of delicious</h2>
        <button
          class="ml-16 border-solid font-bold border-2 border-b-2 p-5 rounded-full text-whitebq"
        >
          Binq Su
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
    <div class="flex h-full relative">
      <div class="flex-col">
        <div class="flex h-4/5 justify-center">
          <div
            class="flex items-start secondary-bg p-3 rounded-full drop-shadow-2xl tertiary-bg"
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
      <div
        class="p-2 max-w-80 rounded-lg drop-shadow-2xl absolute top-10 -right-48 text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-30 text-whitebq"
      >
        <h2 class="header-font font-semibold mb-2">Best Seller</h2>
        <p class="body-font">Soybean Oolong from the bean</p>
      </div>
      <div
        class="text-xl mt-7 p-2 max-w-64 rounded-lg drop-shadow-2xl absolute bottom-32 -right-48 backdrop-blur-lg bg-darkorangebq bg-opacity-30 text-whitebq"
      >
        <h2 class="mb-2 header-font font-semibold">Sides</h2>
        <p class="mt-2 body-font">
          Sweet jelly, Kinako cream cheese mochi and buttery crisp
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
