<script setup lang="ts">
import { getImageUrl } from "../util/Image";
</script>

<template>
  <div
    class="py-72 bg-gradient-to-tl from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq px-12 sm:px-14 md:px-20 text-creamwhitebq w-full"
  >
    <section class="flex flex-col">
      <h1
        class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
      >
        Discover Binq
      </h1>
      <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10">
        With an assortment of flavors available, the combination is limitless
      </h2>
    </section>
    <section class="flex pt-16 xl:pt-28 xxl:pt-40">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="flex flex-col mr-0 lg:mr-20 xl:mr-40 xxl:mr-64 h-full">
          <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10">
            For all to have the best experience, we take preparation and taste
            to the next level;
          </h2>
          <p class="body-font text-xl xxl:text-2xl mb-20 xxl:mb-48">
            At Binq, we not only put countless of hours into researching the
            best combination of flavors out there but we want to ensure each and
            every single order is made to perfection for all to enjoy.
          </p>
          <img
            class="w-full md:w-4/5 h-1/4 self-center"
            :src="
              getImageUrl('more-prep-bing-product-intro', 'products', 'intro')
            "
            alt="Shaving machine used to create our special bing su at Binq"
          />
          <img
            class="my-20 w-full md:w-4/5 h-1/4 xxl:my-40 self-center"
            :src="getImageUrl('topping-product-intro', 'products', 'intro')"
            alt="Our famous side dishes used to complement our perfect bingsu"
          />
          <img
            class="w-full md:w-4/5 h-1/4 self-center"
            :src="getImageUrl('binq-store-product-intro', 'products', 'intro')"
            alt="Store front of our main branch in Damansara that reads binq binq binq"
          />
        </div>
        <img
          :src="getImageUrl('bingsus-product-intro', 'products', 'intro')"
          class="h-1/3 rounded-full mb-32 lg:sticky lg:top-0"
          alt="Consists of a variety of bingsu desserts which we have readily available"
        />
      </div>
    </section>
    <section
      class="flex flex-col lg:flex-row mt-80 justify-between items-center"
    >
      <div class="flex flex-col w-full lg:w-2/5">
        <div class="py-10 rounded-lg flex-col">
          <h1
            class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
          >
            Don't forget
          </h1>
          <h2 class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font">
            We have 6 kinds of bingsus, over 10 toppings and 6 bingsu-topping
            pairings available.
          </h2>
        </div>
        <img
          class="w-full h-3/4 pt-12 self-center"
          :src="getImageUrl('watermelon-topping-product', 'products', 'detail')"
          alt="Watermelon topping side dish which we have available at the store"
        />
        <img
          class="w-full h-3/4 pt-16 self-center"
          :src="getImageUrl('topping-product', 'products', 'detail')"
          alt="Coated mochi topping side dish which we have available at the store"
        />
      </div>
      <img
        class="w-full h-3/4 lg:w-1/2 rounded-full pt-20 lg:pt-0"
        :src="getImageUrl('bingsu-set-product', 'products', 'detail')"
        alt="Our best selling bingsu set at binq. Has 4 toppings and our best selling bingsu; Soybean flavoured bingsu"
      />
    </section>
  </div>
</template>
