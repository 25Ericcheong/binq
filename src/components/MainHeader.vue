<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex flex-col lg:flex-row lg:justify-between bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-25% to-dullorangebq overflow-x-hidden"
  >
    <section class="lg:w-1/3 flex flex-col justify-center items-center">
      <div
        class="text-xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 flex flex-col items-center"
      >
        <h2 class="text-whitebq pb-3">A <i>mountain</i> of deliciousness</h2>
        <button
          class="border-solid font-bold border-2 border-b-2 p-5 rounded-full text-whitebq"
        >
          Binqsu
        </button>
      </div>
      <div v-for="n in 3">
        <h1
          class="text-6xl xl:text-8xl xxl:text-10xl header-font font-extrabold text-whitebq"
        >
          {{ TITLE }}
        </h1>
      </div>
    </section>
    <section class="lg:w-2/5 flex flex-col">
      <div class="lg:-mt-32">
        <div
          class="flex justify-center rounded-b-full drop-shadow-2xl tertiary-bg"
        >
          <img
            class="h-full w-full drop-shadow-2xl"
            src="../assets/pictures/header-cheese-bingsu.png"
          />
        </div>
      </div>
    </section>
    <section
      class="text-whitebq lg:w-1/3 flex flex-col justify-center items-center"
    >
      <div class="lg:w-10/12">
        <h2 class="lg:text-xl xl:text-2xl xxl:text-4xl header-font font-bold">
          "What is <i>Binqsu</i>?
        </h2>
        <p
          class="body-font lg:text-sm xl:text-xl xxl:text-2xl mt-1 xl:mt-3 tracking-wide"
        >
          <b>Bingsu </b>빙수 is a milk-based Korean shaved ice dessert.
          <b>Binqsu</b> however, is a variation with a Binq twist
        </p>
      </div>
      <div class="lg:w-10/12 mt-4 xl:mt-10">
        <h2 class="lg:text-xl xl:text-2xl xxl:text-4xl header-font font-bold">
          "Bingsu with a Binq twist?
        </h2>
        <p
          class="body-font lg:text-base xl:text-xl xxl:text-2xl mt-1 xl:mt-2 tracking-wide"
        >
          Find out more by
        </p>
      </div>
      <div class="lg:w-10/12">
        <div
          class="p-2 rounded-lg drop-shadow-2xl lg:text-sm xl:text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-whitebq flex justify-between mb-5 xl:mb-14 mt-2 w-full xl:w-3/4"
        >
          <p class="w-full xl:w-4/5 tracking-wide">
            Visiting us and experience the Binq process firsthand where it is
            freshly made to perfection!
          </p>
          <img
            class="block lg:hidden xl:block xl:w-1/5"
            src="../assets/pictures/header-bingsu-in-store.png"
          />
        </div>
        <div class="flex w-full xl:w-3/4 justify-center items-center">
          <hr class="w-2/5" />
          <p class="px-2 body-font text-xl xxl:text-2xl tracking-wider">OR</p>
          <hr class="w-2/5" />
        </div>
        <div
          class="p-2 rounded-lg drop-shadow-2xl lg:text-sm xl:text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-whitebq flex mt-5 xl:mt-14 w-full xl:w-3/4"
        >
          <p class="w-full xl:w-4/5 tracking-wide">
            Watching this space and imagine what it could have been but beware
            as it tastes as good as it looks
          </p>
          <img
            class="block lg:hidden xl:block xl:w-1/5"
            src="../assets/pictures/header-bingsu.png"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
