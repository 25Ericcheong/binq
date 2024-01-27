<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex flex-col sm:flex-row sm:justify-between bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-40% to-dullorangebq overflow-x-hidden"
  >
    <section
      class="sm:w-1/3 sm:py-44 sm:pr-40 sm:pl-32 flex flex-col justify-center"
    >
      <div class="text-6xl sm:text-3xl body-font mb-10">
        <h2 class="text-whitebq pb-3">A <i>mountain</i> of delicious</h2>
        <button
          class="ml-16 border-solid font-bold border-2 border-b-2 p-5 rounded-full text-whitebq"
        >
          Binqsu
        </button>
      </div>
      <div v-for="n in 3">
        <h1
          class="md:text-9xl sm:text-6xl header-font font-extrabold text-whitebq"
        >
          {{ TITLE }}
        </h1>
      </div>
    </section>
    <section class="sm:w-2/5 flex flex-col sm:py-28">
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
    </section>
    <section
      class="sm:py-44 sm:pr-32 sm:pl-40 text-whitebq sm:w-1/3 flex flex-col justify-center"
    >
      <div>
        <h2 class="text-6xl sm:text-3xl header-font font-bold">
          "What is <i>Binqsu</i>?
        </h2>
        <p class="body-font text-3xl sm:text-2xl mt-3">
          <b>Bingsu </b>빙수 is a milk-based Korean shaved ice dessert.
          <b>Binqsu</b> however, is a variation with a Binq twist
        </p>
      </div>
      <div class="mt-10">
        <h2 class="text-6xl sm:text-3xl header-font font-bold">
          "Bingsu with a Binq twist?
        </h2>
        <p class="body-font text-3xl sm:text-2xl mt-3">Find out more by</p>
      </div>
      <div>
        <div
          class="p-2 rounded-lg drop-shadow-2xl text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-whitebq flex justify-between mb-14 w-3/4 mt-2"
        >
          <p class="w-4/5">
            Visiting us and experience the Binq process firsthand where it is
            freshly made to perfection!
          </p>
          <img class="w-1/5" src="../assets/pictures/bingsu-in-store.png" />
        </div>
        <div class="flex w-3/4 justify-center items-center">
          <hr class="w-2/5" />
          <p class="px-2 body-font text-3xl sm:text-2xl">OR</p>
          <hr class="w-2/5" />
        </div>
        <div
          class="p-2 rounded-lg drop-shadow-2xl text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-whitebq flex mt-16 w-3/4"
        >
          <p class="w-4/5">
            Watching this space and imagine what it could have been but beware
            as it tastes as good as it looks
          </p>
          <img class="w-1/5" src="../assets/pictures/bingsu-in-store.png" />
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
