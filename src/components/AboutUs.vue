<script setup lang="ts">
import { getImageUrl } from "@/util/Image.js";
</script>

<template>
  <div class="bg-creamyellowbq flex h-full py-72 px-12 sm:px-14 md:px-20">
    <img class="w-1/2" :src="getImageUrl('bingsu-about-us', 'about-us')" />
    <div
      class="flex flex-col justify-center items-center pl-32 text-darkorangebq"
    >
      <h1 class="text-6xl xl:text-7xl xxl:text-9xl header-font font-bold">
        Binq
      </h1>
      <h1 class="text-7xl xl:text-8xl xxl:text-10xl header-font font-bold">
        Beginning
      </h1>
      <p
        class="text-center body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-10 lg:my-2 xl:my-6 tracking-wide"
      >
        What started of as a habit that happened on a weekly basis turned into
        an obsession to create something that we can call our own. After
        countless of hours, days and perhaps even months; Binq was born. From
        then on it manifested to providing the one and only Binq-experience for
        everyone to be a part of. This, is our beginning.
      </p>
      <h2
        class="text-2xl sm:text-4xl lg:text-xl xl:text-2xl xxl:text-4xl header-font font-semibold"
      >
        Still keen?
        <i class="underline">Have a look</i>
      </h2>
    </div>
  </div>
</template>
