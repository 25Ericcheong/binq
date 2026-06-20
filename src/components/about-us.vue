<script setup lang="ts">
import { getImageUrl } from "@/util/image";
</script>

<template>
  <div
    class="bg-creamyellowbq flex flex-col justify-between lg:flex-row h-full py-32 lg:py-72 px-12 sm:px-14 md:px-20"
  >
    <picture class="w-full h-full lg:w-1/2">
      <source
        :srcset="getImageUrl('bingsu-about-us', 'about-us', undefined, true)"
        type="image/webp"
      />
      <img
        class="w-full h-full"
        :src="getImageUrl('bingsu-about-us', 'about-us')"
        alt="Owner carrying a tray containing a typical bingsu set at Binq"
      />
    </picture>
    <div
      class="w-full lg:w-[40%] flex flex-col justify-center items-center pt-10 lg:pt-0 pl-0 lg:pl-32 text-darkorangebq"
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
        It started during MCO. A couple with a weekly bingsu habit and one
        question: why doesn't Malaysia have a bingsu that actually tastes like
        us? The more they searched, the more they realised there was so much
        more to be offered. So they built it themselves — a machine ordered off
        Taobao, months of kitchen testing, and a group of friends who didn't
        mind being taste-testers for every new flavour. Binq was born from that
        conviction. Bingsu, the Malaysian way.
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
