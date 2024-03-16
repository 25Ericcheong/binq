<script setup lang="ts">
import { getImageUrl } from "@/util/Image.js";
</script>

<template>
  <div class="bg-creamyellowbq flex h-full">
    <img class="w-1/2" :src="getImageUrl('bingsu-about-us', 'about-us')" />
    <div>
      <h1>The start of Binq</h1>
      <p>
        What started of as a habit that happened on a weekly basis turned into
        an obsession to create something that we can call our own which finally
        manifested to providing the best ever Binq-experience for everyone to be
        a part of.
      </p>
      <h2>Nowhere else in the world can you experience what we can provide</h2>
    </div>
  </div>
</template>
