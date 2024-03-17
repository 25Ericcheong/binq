<script setup lang="ts">
import { getImageUrl } from "@/util/Image.js";
</script>

<template>
  <div
    class="bg-creamyellowbq w-full h-full py-32 lg:py-72 px-12 sm:px-14 md:px-20"
  >
    <section class="text-darkorangebq flex">
      <div class="w-1/3">
        <h1
          class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Binq buzzing
        </h1>
        <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10">
          With an average of
          <h2 class="underline inline">4.7 / 5.0 stars over 100 reviews</h2>
          , we'd like to showcase some of them here.
        </h2>
      </div>
      <img
        class="w-2/3 pl-20"
        :src="getImageUrl('bingsu-our-mentions', 'our-mentions')"
      />
    </section>
    <section class="flex items-end w-2/3">
      <div class="flex flex-col">
        <div
          class="flex flex-row justify-between text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          <h1>5 stars</h1>
          <h1>"</h1>
        </div>
        <p
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide"
        >
          11/10 Can confidently recommend this to anyone, especially to all the
          bingsu lovers out there. They've got several choices of flavour which
          none are too sweet so it's also a perfect place for the older audience
          as well. Service wise, super friendly staff especially the young
          couple which are actually the owners of the place! Very attentive and
          are also super helpful to give suggestions if you're not sure what to
          try. Bingsu wise: Hoji Cha 10/10 - As a hojicha lover this hit the
          spot perfectly, with the alternative oatmilk option it was super rich
          in flavour but also balanced so it wasn't too much. Roasted Soybean
          10/10 - Slightly a bit on the sweeter side but balanced out perfectly
          with the cream cheese. Matcha 9/10 - Full of matcha flavour on every
          taste, would definitely satisfy the matcha lovers. Generally a great
          spot to visit with friends and family for dessert after a meal. Have
          heard nothing but complements when bringing people to try for the
          first time (and like me becoming regulars after)
        </p>
        <p>J K - 12/03/2024</p>
      </div>
    </section>
  </div>
</template>
