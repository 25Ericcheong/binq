<script setup lang="ts">
import { getImageUrl } from "@/util/image";

const VALUE_PROPS = [
  {
    title: "Made Fresh, Always",
    detail: "Every bowl shaved and prepared on the spot",
    icon: "clock",
  },
  {
    title: "13 Unique Flavours",
    detail: "From classic oolong to dark chocolate pistachio kunafa",
    icon: "bowl",
  },
  {
    title: "Locally Rooted Taste",
    detail: "Tea bases and toppings crafted for Malaysian palates",
    icon: "heart",
  },
  {
    title: "5 Outlets & Growing",
    detail: "Find us across the Klang Valley",
    icon: "pin",
  },
];
</script>

<template>
  <div
    class="py-20 lg:py-28 bg-gradient-to-tl from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq px-12 sm:px-14 md:px-20 text-creamwhitebq w-full"
  >
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-16">
      <div class="w-full lg:w-1/2">
        <h1
          class="text-4xl sm:text-6xl xl:text-7xl header-font font-extrabold pb-6"
        >
          Discover Binq
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div v-for="prop in VALUE_PROPS" :key="prop.title">
            <svg
              v-if="prop.icon === 'clock'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mb-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-else-if="prop.icon === 'bowl'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mb-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5M4.5 9a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0M5 13l1 6.5a1 1 0 001 .5h10a1 1 0 001-.5L19 13"
              />
            </svg>
            <svg
              v-else-if="prop.icon === 'heart'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mb-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mb-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p class="header-font font-bold text-xl xl:text-2xl pb-1">
              {{ prop.title }}
            </p>
            <p class="body-font text-sm xl:text-base opacity-80">
              {{ prop.detail }}
            </p>
          </div>
        </div>
      </div>

      <picture class="w-full lg:w-[40%]">
        <source
          :srcset="getImageUrl('bingsus-product-intro', 'products', 'intro', true)"
          type="image/webp"
        />
        <source
          :srcset="getImageUrl('bingsus-product-intro', 'products', 'intro')"
          type="image/jpg"
        />
        <img
          class="rounded-full w-full"
          :src="getImageUrl('bingsus-product-intro', 'products', 'intro')"
          alt="A variety of Binq's bingsu desserts"
        />
      </picture>
    </div>
  </div>
</template>
