<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex flex-col sm:flex-row sm:justify-between bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-40% to-dullorangebq overflow-x-hidden"
  >
    <div class="sm:w-1/3 sm:py-44 sm:px-48 flex flex-col justify-center">
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
    <div class="sm:w-1/2 flex flex-col sm:pr-48 sm:py-28">
      <div class="m-10">
        <div
          class="flex justify-center rounded-full drop-shadow-2xl tertiary-bg"
        >
          <img
            class="h-5/6 w-5/6"
            src="../assets/pictures/roasted-soybean-oolong-bingsu.png"
          />
        </div>
      </div>
      <div class="flex justify-evenly body-font mt-5 text-darkorangebq">
        <button class="flex-1 mr-3 p-3 tertiary-bg font-black rounded-lg">
          Soybean Oolong</button
        ><button class="flex-1 mr-3 tertiary-bg font-medium rounded-lg">
          Matcha</button
        ><button class="flex-1 tertiary-bg p-3 font-medium rounded-lg">
          Hoji Cha
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
