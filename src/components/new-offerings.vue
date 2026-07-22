<template>
  <div class="bg-creamyellowbq py-32 px-12 sm:px-14 md:px-20 text-darkorangebq">
    <div class="text-center mb-12">
      <h1 class="header-font font-bold text-5xl xl:text-6xl xxl:text-8xl mb-6">
        What's New at Binq
      </h1>
      <p class="body-font text-xl xl:text-2xl tracking-wide">
        New flavours, new locations, and new treats — follow along on Instagram to stay up to date
      </p>
    </div>
    <!--
      Behold's widget only takes a feed-id — all layout (columns, tile size,
      post count per breakpoint) is configured on the Behold dashboard, which
      we don't have login access to. BUT its responsive breakpoints key off
      the widget's OWN container width, not the viewport — so on a wide
      desktop screen with no width cap, it fills the whole page and renders
      huge, overlapping tiles. Capping the wrapper width here forces Behold's
      own responsive layout to pick a compact size that fits all posts on
      screen. Without this cap it looks fine on normal laptop screens but
      breaks on wide/ultrawide monitors.
    -->
    <div class="max-w-4xl mx-auto">
      <behold-widget feed-id="i4JCIdZM3CZgHNacmLAL" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
