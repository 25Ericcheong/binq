<script setup lang="ts">
import { getImageUrl } from "@/util/image";

const TITLE = "Binq";

function openNewTab(url: string) {
  window.open(url, "_blank", "");
}
</script>

<template>
  <section
    class="py-20 lg:py-0 lg:w-1/3 flex flex-col justify-center items-center text-center"
  >
    <p
      class="body-font text-creamwhitebq text-lg sm:text-xl xl:text-2xl tracking-wide opacity-90 mb-4"
    >
      Your local fully flavoured bingsu cafe
    </p>
    <h1
      class="text-7xl xl:text-8xl xxl:text-9xl header-font font-extrabold text-creamwhitebq mb-10"
    >
      {{ TITLE }}
    </h1>
    <div class="flex gap-8 xl:gap-12 body-font text-creamwhitebq">
      <div class="flex flex-col items-center">
        <span class="text-3xl xl:text-4xl font-bold">6</span>
        <span class="text-sm xl:text-base opacity-80">Outlets</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-3xl xl:text-4xl font-bold">4.9★</span>
        <span class="text-sm xl:text-base opacity-80">Rated</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-3xl xl:text-4xl font-bold">13</span>
        <span class="text-sm xl:text-base opacity-80">Flavours</span>
      </div>
    </div>
    <button
      v-on:click="openNewTab('https://feedme.cc/6a02e38d71b30e001c39b38c')"
      class="mt-10 body-font font-bold text-lg xl:text-xl text-orangebq bg-creamwhitebq rounded-full px-10 py-3 drop-shadow-2xl cursor-pointer hover:opacity-90 transition-opacity"
    >
      Order Now
    </button>
  </section>
  <section class="mb-20 lg:mb-0 lg:w-2/5 flex flex-col mt-0 lg:-mt-32">
    <div
      class="flex justify-center rounded-b-full drop-shadow-2xl bg-creamyellowbq"
    >
      <picture class="w-full h-full">
        <source
          :srcset="getImageUrl('cheesey-bingsu', 'header', undefined, true)"
          type="image/webp"
        />
        <img
          class="h-full w-full drop-shadow-2xl"
          :src="getImageUrl('cheesey-bingsu', 'header')"
          alt="Binq homemade cheese oozing over bing su located at the centre of header for attention"
        />
      </picture>
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
        v-on:click="openNewTab('https://www.instagram.com/binqdessert/')"
        class="p-4 lg:p-2 rounded-lg drop-shadow-2xl text-lg sm:text-xl lg:text-sm xl:text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-creamwhitebq flex flex-col sm:flex-row sm:justify-between mb-14 lg:mb-5 xl:mb-14 mt-2 w-full xl:w-3/4 border-solid border-2 border-creamwhitebq cursor-pointer"
      >
        <p class="w-full xl:w-4/5 tracking-wide">
          Visit us and experience the Binq process firsthand where it is freshly
          made to perfection!
        </p>
        <picture
          class="block lg:hidden xl:block h-full w-full sm:w-1/12 xl:w-1/5 mt-5 sm:mt-0"
        >
          <source
            :srcset="getImageUrl('bingsu-in-store', 'header', undefined, true)"
            type="image/webp"
          />
          <img
            :src="getImageUrl('bingsu-in-store', 'header')"
            alt="Signage of Binq's store front that reads 'binq binq binq'"
          />
        </picture>
      </div>
      <div class="flex w-full xl:w-3/4 justify-center items-center">
        <hr class="w-2/5" />
        <p class="px-2 body-font text-xl xxl:text-2xl tracking-wider">OR</p>
        <hr class="w-2/5" />
      </div>
      <div
        v-on:click="
          openNewTab('https://www.facebook.com/profile.php?id=100095187967073')
        "
        class="p-4 lg:p-2 rounded-lg drop-shadow-2xl text-xl lg:text-sm xl:text-xl backdrop-blur-lg bg-darkorangebq bg-opacity-55 text-creamwhitebq flex flex-col sm:flex-row sm:justify-between mt-14 lg:mt-5 xl:mt-14 w-full xl:w-3/4 border-solid border-2 border-creamwhitebq cursor-pointer"
      >
        <p class="w-full xl:w-4/5 tracking-wide">
          Watch this space and imagine what it could have been but beware as it
          tastes as good as it looks
        </p>
        <picture
          class="lg:hidden xl:block w-full h-full sm:w-1/12 xl:w-1/5 mt-5 sm:mt-0"
        >
          <source
            :srcset="getImageUrl('bingsu', 'header', undefined, true)"
            type="image/webp"
          />
          <img
            :src="getImageUrl('bingsu', 'header')"
            alt="An innovate bingsu created at home at Binq'"
          />
        </picture>
      </div>
    </div>
  </section>
</template>
