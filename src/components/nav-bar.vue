<script setup lang="ts"></script>
<template>
  <section class="flex justify-between w-full">
    <div
      class="flex justify-center h-[64px] w-[64px] bg-creamwhitebq m-5 rounded-full fixed top-0"
    >
      <RouterLink to="/menu"
        ><img
          class="p-5 h-full w-full"
          src="../assets/icons/menu.jpg"
          alt="Binq logo that signifies a bingsu dessert"
      /></RouterLink>
    </div>
    <div
      class="flex justify-center h-[64px] w-[80px] bg-creamwhitebq m-5 rounded-full absolute top-0 right-0"
    >
      <img
        class="p-5 h-full w-full"
        src="../assets/logo/binq.jpg"
        alt="Binq logo that signifies a bingsu dessert"
      />
    </div>
  </section>
</template>
<style scoped></style>
