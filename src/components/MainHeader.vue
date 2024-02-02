<script setup lang="ts">
const TITLE = "Binq";
</script>

<template>
  <section
    class="flex flex-col xxl:flex-row xxl:justify-between bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-25% to-dullorangebq overflow-x-hidden"
  >
    <section class="xxl:w-1/3 flex flex-col justify-center items-center">
      <div
        class="text-xl xxl:text-5xl body-font mb-10 flex flex-col items-center"
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
          class="xxl:text-10xl header-font font-extrabold text-whitebq xxl:-mb-20"
        >
          {{ TITLE }}
        </h1>
      </div>
    </section>
    <section class="xxl:w-2/5 flex flex-col">
      <div class="xxl:-mt-32">
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
      class="text-whitebq xxl:w-1/3 flex flex-col justify-center items-center"
    >
      <div class="xxl:w-10/12">
        <h2 class="text-3xl xxl:text-4xl header-font font-bold">
          "What is <i>Binqsu</i>?
        </h2>
        <p class="body-font text-xl xxl:text-2xl mt-3 tracking-wide">
          <b>Bingsu </b>빙수 is a milk-based Korean shaved ice dessert.
          <b>Binqsu</b> however, is a variation with a Binq twist
        </p>
      </div>
      <div class="xxl:w-10/12 mt-10">
        <h2 class="text-3xl xxl:text-4xl header-font font-bold">
          "Bingsu with a Binq twist?
        </h2>
        <p class="body-font text-xl xxl:text-2xl mt-3 tracking-wide">
          Find out more by
        </p>
      </div>
      <div class="xxl:w-10/12">
        <div
          class="p-2 rounded-lg drop-shadow-2xl text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-whitebq flex justify-between mb-14 w-3/4 mt-2"
        >
          <p class="w-4/5 tracking-wide">
            Visiting us and experience the Binq process firsthand where it is
            freshly made to perfection!
          </p>
          <img
            class="w-1/5"
            src="../assets/pictures/header-bingsu-in-store.png"
          />
        </div>
        <div class="flex w-3/4 justify-center items-center">
          <hr class="w-2/5" />
          <p class="px-2 body-font text-3xl xxl:text-2xl tracking-wider">OR</p>
          <hr class="w-2/5" />
        </div>
        <div
          class="p-2 rounded-lg drop-shadow-2xl text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-whitebq flex mt-16 w-3/4"
        >
          <p class="w-4/5 tracking-wide">
            Watching this space and imagine what it could have been but beware
            as it tastes as good as it looks
          </p>
          <img class="w-1/5" src="../assets/pictures/header-bingsu.png" />
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
