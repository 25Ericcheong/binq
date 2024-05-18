<script setup lang="ts">
import { getImageUrl } from "@/util/image";
</script>

<template>
  <div
    class="bg-creamyellowbq flex flex-col lg:flex-row h-full py-32 lg:py-72 px-12 sm:px-14 md:px-20"
  >
    <img
      class="w-full h-full lg:w-1/2"
      :src="getImageUrl('bingsu-about-us', 'about-us')"
      alt="Owner carrying a tray containing a typical bingsu set at Binq"
    />
    <div
      class="flex flex-col justify-center items-center pt-10 lg:pt-0 pl-0 lg:pl-32 text-darkorangebq"
    >
      <h1 class="text-6xl xl:text-7xl xxl:text-9xl header-font font-bold">
        Binq
      </h1>
      <h1 class="text-7xl xl:text-8xl xxl:text-10xl header-font font-bold">
        Beginning
      </h1>
      <p
        class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-10 lg:my-2 xl:my-6 tracking-wide"
      >
        What started of as a habit that happened on a weekly basis turned into
        an obsession to create something that we can call our own. After
        countless of hours, days and perhaps even months; Binq was born. From
        then on, it manifested to providing the one and only Binq-experience for
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
