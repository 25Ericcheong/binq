<script setup lang="ts">
import { getImageUrl } from "@/util/image";

const FORM_URL =
  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=mKk5ErG2vkyh2G9Rl4Fy7-ROwO4FDyxImDecwMXjG4hUMVM2S1BVNlpVOUtMUjVYSDc5TjRJUlBEMy4u";

const SIZES = [
  { label: "Regular", detail: "Min. 140 bowls" },
  { label: "Small", detail: "Min. 200 bowls" },
  { label: "Petite", detail: "Min. 280 bowls" },
];

const FLAVOURS = [
  "Roasted Soybean Oolong",
  "White Peach Oolong",
  "Kumquat Jasmine",
  "Thai Milk Tea",
  "Mango",
  "Tiramisu",
  "Soybean",
];

const TOPPINGS = [
  "Brown Sugar Jelly",
  "White Sugar Jelly",
  "Peach Popping Boba",
  "Passionfruit Popping Boba",
  "Lychee Popping Boba",
  "Water Chestnut Popping Boba",
  "Soybean Mochi",
  "Nata De Coco",
  "Aiyu Jelly",
  "Red Bean",
  "Butter Crisp",
  "Lotus Biscoff",
  "Cream Cheese",
  "Taroball",
];

const GALLERY = [
  { imageName: "catering-1", alt: "The Binq team at a catered Chinese New Year event" },
  { imageName: "catering-2", alt: "Guests posing in festive attire at a Binq-catered celebration" },
  { imageName: "catering-3", alt: "The Binq Korean shaved ice cart set up at an event venue" },
  { imageName: "catering-4", alt: "The Binq catering cart serving guests at a corporate event" },
];
</script>

<template>
  <div class="bg-orangebq py-32 px-12 sm:px-14 md:px-20 text-creamwhitebq">
    <div class="flex flex-col lg:flex-row lg:justify-between mb-20">
      <div class="w-full lg:w-[45%] flex flex-col">
        <h1
          class="header-font font-extrabold text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl pb-4"
        >
          We Do Catering Too!
        </h1>
        <p class="body-font text-xl xl:text-2xl tracking-wide pb-6">
          Live bingsu station for weddings, corporate events, and
          celebrations — starting from <span class="font-bold">RM2,500</span>.
        </p>
        <a
          :href="FORM_URL"
          target="_blank"
          rel="noreferrer"
          class="inline-block self-start bg-creamwhitebq text-darkorangebq font-semibold body-font px-8 py-4 rounded-full hover:bg-creamyellowbq transition-colors duration-200"
        >
          Enquire About Catering →
        </a>

        <div class="grid grid-cols-2 gap-4 mt-12 flex-1">
          <picture v-for="photo in GALLERY.slice(2)" :key="photo.imageName" class="block h-full min-h-[140px]">
            <img
              :src="getImageUrl(photo.imageName, 'catering')"
              :alt="photo.alt"
              class="w-full h-full object-cover rounded-2xl"
            />
          </picture>
        </div>
      </div>

      <div class="w-full lg:w-[48%] mt-16 lg:mt-0">
        <div class="grid grid-cols-1 gap-4 h-full">
          <picture v-for="photo in GALLERY.slice(0, 2)" :key="photo.imageName" class="block">
            <img
              :src="getImageUrl(photo.imageName, 'catering')"
              :alt="photo.alt"
              class="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 body-font">
      <div class="bg-darkorangebq rounded-2xl p-8">
        <p class="font-semibold text-2xl xl:text-3xl pb-4 header-font">
          Step 1 — Choose Your Size
        </p>
        <div v-for="size in SIZES" :key="size.label" class="pb-3">
          <p class="font-semibold">{{ size.label }}</p>
          <p class="text-sm opacity-80">{{ size.detail }}</p>
        </div>
      </div>

      <div class="bg-darkorangebq rounded-2xl p-8">
        <p class="font-semibold text-2xl xl:text-3xl pb-4 header-font">
          Step 2 — Choose 1 Flavour
        </p>
        <p class="leading-relaxed">{{ FLAVOURS.join(" · ") }}</p>
      </div>

      <div class="bg-darkorangebq rounded-2xl p-8">
        <p class="font-semibold text-2xl xl:text-3xl pb-4 header-font">
          Step 3 — Choose 3 Toppings
        </p>
        <p class="leading-relaxed">{{ TOPPINGS.join(" · ") }}</p>
      </div>
    </div>

    <p class="body-font text-lg xl:text-xl tracking-wide pt-12 text-center opacity-90">
      Perfect for corporate events, weddings, and celebrations. Reach out for
      add-on flavours or extended serving hours.
    </p>
  </div>
</template>
