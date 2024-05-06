<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { PATHS } from "../router";

const route = useRoute();
const relativePath = ref(route.path);

watch(
  () => route.path,
  (newId, _) => {
    relativePath.value = newId;
  }
);
</script>
<template>
  <section class="flex justify-between w-full">
    <div
      class="flex justify-center h-[60px] w-[60px] bg-creamwhitebq m-5 rounded-full fixed top-0"
    >
      <RouterLink v-if="relativePath == PATHS.HOME" to="/menu"
        ><img
          class="p-5 h-full w-full"
          src="../assets/icons/menu.jpg"
          alt="Binq logo that signifies a bingsu dessert"
      /></RouterLink>
    </div>
    <div
      class="flex justify-center h-[60px] w-[64px] bg-creamwhitebq m-5 rounded-full absolute top-0 right-0"
    >
      <RouterLink to="/"
        ><img
          class="p-5 h-full w-full"
          src="../assets/logo/binq.jpg"
          alt="Binq logo that signifies a bingsu dessert"
      /></RouterLink>
    </div>
  </section>
</template>
<style scoped></style>
