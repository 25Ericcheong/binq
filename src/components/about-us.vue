<script setup lang="ts">
import { getImageUrl } from "@/util/image";
</script>

<template>
  <div
    class="bg-creamyellowbq flex flex-col items-center lg:flex-row lg:items-center gap-10 lg:gap-16 py-16 lg:py-20 px-12 sm:px-14 md:px-20"
  >
    <picture class="w-full max-w-[280px] lg:max-w-none lg:w-[30%]">
      <source
        :srcset="getImageUrl('bingsu-about-us', 'about-us', undefined, true)"
        type="image/webp"
      />
      <img
        class="w-full rounded-2xl"
        :src="getImageUrl('bingsu-about-us', 'about-us')"
        alt="Owner carrying a tray containing a typical bingsu set at Binq"
      />
    </picture>
    <div class="w-full lg:w-[60%] text-darkorangebq text-center lg:text-left">
      <h1 class="text-4xl sm:text-5xl xl:text-6xl header-font font-bold pb-4">
        Binq's Story
      </h1>
      <p class="body-font text-lg sm:text-xl xl:text-2xl tracking-wide leading-relaxed">
        Two bingsu lovers, Lovy and Rainey, were frustrated by overly sweet,
        generic bingsu in the market — so they built something better. Binq
        was born with one mission: bingsu that's less <i>"jelak"</i>, more
        flavourful, and rooted in local taste. Fragrant tea bases paired with
        unique toppings — an elevated bingsu experience you won't find
        anywhere else.
      </p>
    </div>
  </div>
</template>
