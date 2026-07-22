<script setup lang="ts">
import FeaturedItems from "@/components/featured-items.vue";
import Feedback from "@/components/feedback.vue";
import Footer from "@/components/footer.vue";
import LandingPageHeader from "@/components/header/wrapper-header.vue";
import OurMentions from "@/components/our-mentions.vue";
import { PATHS } from "@/router/router";
import "@/output.css";
import { RouterLink } from "vue-router";

const FEEDME_URL = "https://feedme.cc/6a02e38d71b30e001c39b38c";

const pageLinks = [
  {
    to: PATHS.BINGSU,
    label: "Bingsu",
    blurb: "13 flavours built around fragrant tea bases and local-rooted toppings.",
    emoji: "🍧",
  },
  {
    to: PATHS.MENU,
    label: "Full Menu",
    blurb: "Drinks, croffles, Dubai chewy cookies, and all the toppings.",
    emoji: "📋",
  },
  {
    to: PATHS.ABOUT,
    label: "About Us",
    blurb: "Who we are and the story behind Binq Dessert.",
    emoji: "✦",
  },
  {
    to: PATHS.CATERING,
    label: "Catering",
    blurb: "Bring Binq to your next event — birthdays, corporates, and more.",
    emoji: "🎉",
  },
  {
    to: PATHS.FIND_US,
    label: "Find Us",
    blurb: "6 outlets across Klang Valley. Find the one nearest to you.",
    emoji: "📍",
  },
];
</script>
<template>
  <div class="bg-creamwhitebq">
    <LandingPageHeader />

    <!-- What's New -->
    <FeaturedItems />

    <!-- Explore sections -->
    <section class="py-20 px-10 sm:px-14 md:px-20 text-darkorangebq">
      <h2 class="header-font font-extrabold text-5xl sm:text-6xl pb-3">Explore</h2>
      <p class="body-font text-xl opacity-60 pb-12">Everything Binq, all in one place.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <RouterLink
          v-for="page in pageLinks"
          :key="page.to"
          :to="page.to"
          class="group flex flex-col gap-3 border-2 border-darkorangebq rounded-2xl p-7 hover:bg-darkorangebq hover:text-creamwhitebq transition-colors duration-200"
        >
          <span class="text-3xl">{{ page.emoji }}</span>
          <h3 class="header-font font-bold text-2xl xl:text-3xl leading-tight">{{ page.label }}</h3>
          <p class="body-font text-sm xl:text-base opacity-70 flex-1">{{ page.blurb }}</p>
          <span class="body-font text-sm font-semibold group-hover:underline">Explore →</span>
        </RouterLink>
      </div>
    </section>

    <!-- Order CTA -->
    <section class="bg-darkorangebq py-20 px-10 sm:px-14 md:px-20 text-creamwhitebq text-center">
      <h2 class="header-font font-extrabold text-4xl sm:text-6xl pb-4">Ready to order?</h2>
      <p class="body-font text-lg xl:text-xl opacity-80 pb-8 max-w-lg mx-auto">
        Skip the queue — order ahead on FeedMe and pick up at your nearest outlet.
      </p>
      <a
        :href="FEEDME_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-creamwhitebq text-darkorangebq font-semibold px-10 py-3.5 rounded-full body-font text-base"
      >
        Order on FeedMe →
      </a>
    </section>

    <OurMentions />
    <Feedback />
    <Footer />
  </div>
</template>
<style scoped></style>
