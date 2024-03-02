<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="my-64 lg:my-0 lg:w-1/3 flex flex-col justify-center items-center"
  >
    <div
      class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 flex flex-col items-center"
    >
      <h2 class="text-creamwhitebq pb-3">A <i>mountain</i> of deliciousness</h2>
      <button
        class="border-solid font-bold border-2 border-b-2 p-5 rounded-full text-creamwhitebq"
      >
        Binqsu
      </button>
    </div>
    <div v-for="n in 3">
      <h1
        class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold text-creamwhitebq"
      >
        {{ TITLE }}
      </h1>
    </div>
  </section>
  <section class="mb-72 lg:mb-0 lg:w-2/5 flex flex-col">
    <div class="lg:-mt-32">
      <div
        class="flex justify-center rounded-b-full drop-shadow-2xl tertiary-bg"
      >
        <img
          class="h-full w-full drop-shadow-2xl"
          src="../../assets/images/header/cheesey-bingsu.png"
        />
      </div>
    </div>
  </section>
  <section
    class="text-creamwhitebq mx-24 lg:mx-0 lg:w-1/3 flex flex-col justify-center items-center"
  >
    <div class="lg:w-10/12">
      <h2
        class="text-2xl sm:text-4xl lg:text-xl xl:text-2xl xxl:text-4xl header-font font-bold"
      >
        "What is <i>Binqsu</i>?
      </h2>
      <p
        class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mt-5 lg:mt-1 xl:mt-3 tracking-wide"
      >
        <b>Bingsu </b>빙수 is a milk-based Korean shaved ice dessert.
        <b>Binqsu</b> however, is a variation with a Binq twist
      </p>
    </div>
    <div class="w-full lg:w-10/12 mt-32 lg:mt-4 xl:mt-10">
      <h2
        class="text-2xl sm:text-4xl lg:text-xl xl:text-2xl xxl:text-4xl header-font font-bold"
      >
        "Bingsu with a Binq twist?
      </h2>
      <p
        class="body-font text-xl sm:text-2xl lg:text-base xl:text-xl xxl:text-2xl my-5 lg:mt-1 xl:mt-2 tracking-wide"
      >
        Find out more!
      </p>
    </div>
    <div class="lg:w-10/12">
      <div
        class="p-4 lg:p-2 rounded-lg drop-shadow-2xl text-lg sm:text-xl lg:text-sm xl:text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-creamwhitebq flex flex-col sm:flex-row sm:justify-between mb-14 lg:mb-5 xl:mb-14 mt-2 w-full xl:w-3/4"
      >
        <p class="w-full xl:w-4/5 tracking-wide">
          Visit us and experience the Binq process firsthand where it is freshly
          made to perfection!
        </p>
        <img
          class="block lg:hidden xl:block w-full sm:w-1/12 xl:w-1/5 mt-5 sm:mt-0"
          src="../../assets/images/header/bingsu-in-store.png"
        />
      </div>
      <div class="flex w-full xl:w-3/4 justify-center items-center">
        <hr class="w-2/5" />
        <p class="px-2 body-font text-xl xxl:text-2xl tracking-wider">OR</p>
        <hr class="w-2/5" />
      </div>
      <div
        class="p-4 lg:p-2 rounded-lg drop-shadow-2xl text-xl lg:text-sm xl:text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-creamwhitebq flex flex-col sm:flex-row sm:justify-between mt-14 lg:mt-5 xl:mt-14 w-full xl:w-3/4"
      >
        <p class="w-full xl:w-4/5 tracking-wide">
          Watch this space and imagine what it could have been but beware as it
          tastes as good as it looks
        </p>
        <img
          class="block lg:hidden xl:block w-full sm:w-1/12 xl:w-1/5 mt-5 sm:mt-0"
          src="../../assets/images/header/bingsu.png"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
