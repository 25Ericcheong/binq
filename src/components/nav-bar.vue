<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { PATHS } from "../router/router";

const route = useRoute();
const relativePath = ref(route.path);

watch(
  () => route.path,
  (newId, _) => {
    relativePath.value = newId;
  }
);

const condLogoPosition = computed(() => ({
  absolute: relativePath.value == PATHS.HOME,
  fixed: relativePath.value == PATHS.MENU,
}));
</script>
<template>
  <section class="flex justify-between w-full">
    <div
      v-if="relativePath == PATHS.HOME"
      class="flex justify-center h-[60px] w-[60px] bg-creamwhitebq m-5 rounded-full fixed top-0"
    >
      <RouterLink :to="PATHS.MENU"
        ><img
          class="p-5 h-full w-full"
          src="../assets/icons/menu.jpg"
          alt="Menu logo that showcases binq's options"
      /></RouterLink>
    </div>
    <div
      class="flex justify-center h-[60px] w-[64px] bg-creamwhitebq m-5 rounded-full top-0 right-0"
      :class="condLogoPosition"
    >
      <RouterLink :to="PATHS.HOME"
        ><img
          class="p-5 h-full w-full"
          src="../assets/logo/binq.jpg"
          alt="Binq logo that signifies a bingsu dessert"
      /></RouterLink>
    </div>
  </section>
</template>
<style scoped></style>
