<script setup lang="ts">
import { PATHS } from "@/router/router";
import { ref } from "vue";

const FEEDME_URL = "https://feedme.cc/6a02e38d71b30e001c39b38c";
const mobileOpen = ref(false);

const navLinks = [
  { label: "Bingsu",    to: PATHS.BINGSU },
  { label: "Menu",      to: PATHS.MENU },
  { label: "About Us",  to: PATHS.ABOUT },
  { label: "Catering",  to: PATHS.CATERING },
  { label: "Find Us",   to: PATHS.FIND_US },
];
</script>
<template>
  <header class="w-full bg-creamwhitebq border-b border-darkorangebq border-opacity-10 sticky top-0 z-50">
    <div class="max-w-[1320px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink :to="PATHS.HOME" class="flex-shrink-0">
        <img
          src="../assets/logo/binq.jpg"
          alt="Binq Dessert"
          class="h-9 w-9 rounded-full object-cover"
        />
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6 body-font text-darkorangebq">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm xl:text-base hover:opacity-60 transition-opacity"
          active-class="font-semibold"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- Order button (desktop) -->
      <a
        :href="FEEDME_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:inline-block bg-darkorangebq text-creamwhitebq body-font text-sm font-semibold px-5 py-2 rounded-full"
      >
        Order Now →
      </a>

      <!-- Hamburger (mobile) -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span class="block w-6 h-0.5 bg-darkorangebq transition-all" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''" />
        <span class="block w-6 h-0.5 bg-darkorangebq transition-all" :class="mobileOpen ? 'opacity-0' : ''" />
        <span class="block w-6 h-0.5 bg-darkorangebq transition-all" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden bg-creamwhitebq border-t border-darkorangebq border-opacity-10 px-5 pb-6 body-font text-darkorangebq">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="block py-3 text-base border-b border-darkorangebq border-opacity-10"
        active-class="font-semibold"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </RouterLink>
      <a
        :href="FEEDME_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 block text-center bg-darkorangebq text-creamwhitebq font-semibold px-5 py-2.5 rounded-full text-sm"
      >
        Order Now →
      </a>
    </div>
  </header>
</template>
<style scoped></style>
