<script setup lang="ts">
import { getImageUrl } from "@/util/image";
import { onMounted, onUnmounted, ref } from "vue";

interface Slide {
  imageName: string;
  alt: string;
}

const props = defineProps<{
  slides: Slide[];
  startIndex?: number;
  intervalMs?: number;
}>();

const activeIndex = ref(props.startIndex ?? 0);
let timer: ReturnType<typeof setInterval> | undefined;

function goTo(index: number) {
  activeIndex.value = index;
}

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length;
  }, props.intervalMs ?? 4000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="relative w-full aspect-[4/5] rounded-3xl overflow-hidden drop-shadow-2xl">
    <picture
      v-for="(slide, index) in slides"
      :key="slide.imageName"
      class="absolute inset-0 transition-opacity duration-700 ease-in-out"
      :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
    >
      <source :srcset="getImageUrl(slide.imageName, 'hero-slideshow', undefined, true)" type="image/webp" />
      <img
        :src="getImageUrl(slide.imageName, 'hero-slideshow')"
        :alt="slide.alt"
        class="w-full h-full object-cover"
      />
    </picture>

    <!-- Dot indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="'dot-' + slide.imageName"
        v-on:click="goTo(index)"
        class="h-2 rounded-full transition-all duration-300"
        :class="index === activeIndex ? 'w-6 bg-creamwhitebq' : 'w-2 bg-creamwhitebq bg-opacity-50'"
        :aria-label="'Show slide ' + (index + 1)"
      />
    </div>
  </div>
</template>
