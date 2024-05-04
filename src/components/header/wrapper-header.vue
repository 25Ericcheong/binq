<script setup lang="ts">
import MainHeader from "./main-header.vue";
</script>

<template>
  <header
    class="pb-20 lg:pb-0 flex flex-col lg:flex-row lg:justify-between bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-25% to-dullorangebq overflow-x-hidden relative"
  >
    <MainHeader />
    <div
      class="flex justify-center h-[4rem] w-[5rem] bg-creamwhitebq absolute top-0 right-0 m-5 rounded-full"
    >
      <img class="p-5 h-fit w-fit" src="../../assets/logo/binq.png" />
    </div>
  </header>
</template>
