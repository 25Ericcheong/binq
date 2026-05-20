<template>
  <div class="bg-creamwhitebq py-32 px-12 sm:px-14 md:px-20 text-darkorangebq">
    <div class="mb-16">
      <h1 class="header-font font-extrabold text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl pb-4">
        Find Us
      </h1>
      <p class="body-font text-xl xl:text-2xl tracking-wide">
        5 outlets across Klang Valley — find the one nearest to you
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      <a
        v-for="outlet in OUTLETS"
        :key="outlet.name"
        :href="outlet.mapsUrl"
        target="_blank"
        rel="noreferrer"
        class="group flex flex-col justify-between border-2 border-darkorangebq rounded-2xl p-6 hover:bg-orangebq hover:text-creamwhitebq hover:border-orangebq transition-colors duration-200"
      >
        <div>
          <p class="body-font text-sm xl:text-base font-semibold uppercase tracking-widest pb-2 opacity-60">
            {{ outlet.area }}
          </p>
          <h2 class="header-font font-bold text-2xl xl:text-3xl pb-4 leading-tight">
            {{ outlet.name }}
          </h2>
        </div>
        <div class="body-font text-sm xl:text-base tracking-wide">
          <p>Sun – Thu: 1:00 PM – 11:00 PM</p>
          <p class="pt-1">Fri – Sat: 1:00 PM – 11:30 PM</p>
          <p class="pt-4 font-semibold flex items-center gap-1 group-hover:underline">
            Open in Maps →
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const OUTLETS = [
  {
    name: "Desa Sri Hartamas",
    area: "Kuala Lumpur",
    mapsUrl: "https://share.google/rTjNqgakWm7zmJuGe",
  },
  {
    name: "SS15",
    area: "Subang Jaya",
    mapsUrl: "https://share.google/ePjDMj9NlJb2gqDq1",
  },
  {
    name: "SS2",
    area: "Petaling Jaya",
    mapsUrl: "https://share.google/QkxXFiHSPKRwaYhTu",
  },
  {
    name: "Damansara Uptown",
    area: "Petaling Jaya",
    mapsUrl: "https://share.google/ml9FNXW9d7f2KjGOQ",
  },
  {
    name: "Taman Segar",
    area: "Cheras",
    mapsUrl: "https://share.google/rOz3Vn5V7U1X9V51T",
  },
];
</script>
