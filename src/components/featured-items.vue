<script setup lang="ts">
// Photo slots — replace the placeholder divs with <img> tags once Rainey shares the photos.
// Each card expects: photo, item name, short description.
</script>
<template>
  <section class="bg-creamwhitebq py-20 px-10 sm:px-14 md:px-20 text-darkorangebq">
    <div class="mb-12">
      <h2 class="header-font font-extrabold text-5xl sm:text-7xl pb-3">
        What's New
      </h2>
      <p class="body-font text-xl xl:text-2xl opacity-60">
        Our latest seasonal items — fresh from the kitchen.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div
        v-for="i in 3"
        :key="i"
        class="bg-creamyellowbq rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-2 border-2 border-dashed border-darkorangebq border-opacity-20"
      >
        <p class="header-font text-3xl opacity-20">✦</p>
        <p class="body-font text-sm opacity-30">Photo coming soon</p>
      </div>
    </div>
  </section>
</template>
