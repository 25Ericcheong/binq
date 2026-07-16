<script setup lang="ts">
import Footer from "@/components/footer.vue";
import HeroSlideshow from "@/components/hero-slideshow.vue";
import NewOfferings from "@/components/new-offerings.vue";
import { MENU } from "@/components/menu/menu-items";
import "@/output.css";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { PATHS } from "@/router/router";

onMounted(() => {
  document.title = "Bingsu in KL | Binq Dessert — 13 Flavours";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Discover Binq Dessert's 13 bingsu flavours — fragrant tea bases, local-rooted toppings. Available at 6 outlets across Klang Valley. Order online via FeedMe."
  );
});

const bingsuItems = MENU.Bingsu;
const FEEDME_URL = "https://feedme.cc/6a02e38d71b30e001c39b38c";

// Two independently-cycling slideshow tiles, side by side — wide full-scene
// shots only (no macro/close-up crops), so nothing feels zoomed in.
const SLIDESHOW_LEFT = [
  { imageName: "action-hoji-cream-pour", alt: "Cream being poured over a Hoji Cha Cha bingsu" },
  { imageName: "trio-group-shot", alt: "Three bingsu bowls — Hoji Cha Cha, Mango Sago, and Matcha — side by side" },
  { imageName: "full-thai-milk-tea", alt: "Thai Milk Tea bingsu with toppings on a tray" },
];
const SLIDESHOW_RIGHT = [
  { imageName: "action-matcha-cream-pour", alt: "Cream being poured over a Matcha bingsu" },
  { imageName: "full-roasted-soybean", alt: "Roasted Soybean Oolong bingsu with toppings on a tray" },
  { imageName: "full-kumquat-jasmine", alt: "Kumquat Jasmine bingsu with toppings on a tray" },
];
</script>
<template>
  <div class="bg-creamwhitebq">
    <!-- Hero -->
    <section class="bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-25% to-dullorangebq px-10 py-20 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-6">
      <div class="lg:w-2/5">
        <h1 class="header-font font-extrabold text-6xl xl:text-8xl text-creamwhitebq pb-4">
          Bingsu, the<br />Malaysian way.
        </h1>
        <p class="body-font text-xl xl:text-2xl text-creamwhitebq opacity-90 max-w-xl pb-8">
          13 flavours built around fragrant tea bases and local-rooted toppings — fully flavoured in every layer, made for Malaysian taste buds.
        </p>
        <a
          :href="FEEDME_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-creamwhitebq text-darkorangebq font-semibold px-8 py-3 rounded-full body-font"
        >
          Order on FeedMe →
        </a>
      </div>
      <div class="lg:w-3/5 grid grid-cols-2 gap-4 xl:gap-6">
        <HeroSlideshow :slides="SLIDESHOW_LEFT" :start-index="0" :interval-ms="4000" />
        <HeroSlideshow :slides="SLIDESHOW_RIGHT" :start-index="1" :interval-ms="4600" class="mt-8" />
      </div>
    </section>

    <!-- Instagram feed -->
    <NewOfferings />

    <!-- Bingsu menu teaser (no photos here — full photo grid lives on /menu, this just entices the click-through) -->
    <section class="px-10 py-20 text-darkorangebq text-center">
      <h2 class="header-font font-bold text-4xl xl:text-5xl pb-2">Our Bingsu Menu</h2>
      <p class="body-font text-lg xl:text-xl opacity-60 pb-8 max-w-2xl mx-auto">
        13 flavours, all available at every outlet.
      </p>
      <div class="flex flex-wrap justify-center gap-3 pb-12 max-w-3xl mx-auto">
        <span
          v-for="item in bingsuItems"
          :key="item.name"
          class="body-font text-sm xl:text-base border-2 border-darkorangebq rounded-full px-5 py-2 opacity-80"
        >
          {{ item.name }}
        </span>
      </div>
      <div>
        <RouterLink
          :to="PATHS.MENU"
          class="inline-block border-2 border-darkorangebq text-darkorangebq font-semibold px-8 py-3 rounded-full body-font mr-4"
        >
          View Full Menu
        </RouterLink>
        <a
          :href="FEEDME_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-darkorangebq text-creamwhitebq font-semibold px-8 py-3 rounded-full body-font"
        >
          Order on FeedMe →
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>
