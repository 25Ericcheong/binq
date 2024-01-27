<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex flex-col sm:flex-row sm:justify-between sm:py-44 sm:px-48 bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-40% to-dullorangebq overflow-x-hidden"
  >
    <div class="sm:w-1/3">
      <div class="text-6xl sm:text-3xl body-font mb-10">
        <h2 class="text-whitebq pb-3">A <i>mountain</i> of delicious</h2>
        <button
          class="ml-16 border-solid font-bold border-2 border-b-2 p-5 rounded-full text-whitebq"
        >
          Binq Su
        </button>
      </div>
      <div v-for="n in 3">
        <h1
          class="md:text-9xl sm:text-6xl header-font font-extrabold text-whitebq"
        >
          {{ TITLE }}
        </h1>
      </div>
    </div>
    <div class="flex h-full justify-center sm:w-1/2 relative">
      <div class="flex-col">
        <div class="flex justify-center">
          <div
            class="flex items-start secondary-bg p-10 rounded-full drop-shadow-2xl tertiary-bg"
          >
            <img
              class="h-full w-full"
              src="../assets/pictures/roasted-soybean-oolong-bingsu.png"
            />
          </div>
          <div
            class="p-2 max-w-80 rounded-lg drop-shadow-2xl absolute top-0 left-60 text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-30 text-whitebq"
          >
            <h2 class="header-font font-semibold mb-2">Best Seller</h2>
            <p class="body-font">Soybean Oolong</p>
          </div>
          <div
            class="text-xl p-2 rounded-lg drop-shadow-2xl absolute bottom-20 right-44 max-w-40 backdrop-blur-lg bg-darkorangebq bg-opacity-30 text-whitebq"
          >
            <h2 class="mb-2 header-font font-semibold">Sides</h2>
            <p class="mt-2 body-font">
              Sweet jelly, Kinako cream cheese mochi and buttery crisp
            </p>
          </div>
        </div>
        <div class="flex justify-evenly body-font mt-5 text-darkorangebq">
          <button class="mr-3 p-3 tertiary-bg font-black rounded-lg">
            Soybean Oolong</button
          ><button class="flex-1 mr-3 tertiary-bg font-medium rounded-lg">
            Matcha</button
          ><button class="flex-1 tertiary-bg p-3 font-medium rounded-lg">
            Hoji Cha
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
