<script setup lang="ts">
const CURRENT_YEAR = new Date().getFullYear();
</script>

<template>
  <footer
    class="px-12 sm:px-14 md:px-20 text-creamwhitebq flex flex-col lg:flex-row justify-between bg-orangebq pt-40 pb-20"
  >
    <section class="w-[30%] border-solid border-t-2 pt-10">
      <div>
        <h1
          class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold text-creamwhitebq pb-10"
        >
          Binq
        </h1>
      </div>
      <div
        class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-3 tracking-wide"
      >
        <p>Bingsus like no other. Take a peak at our creations</p>
        <a
          class="block pt-2"
          href="https://www.instagram.com/binqdessert/"
          target="_blank"
          >Instagram</a
        >
        <a
          class="block pt-2"
          href="https://www.facebook.com/profile.php?id=100095187967073"
          target="_blank"
          >Facebook</a
        >
      </div>
      <div
        class="body-font text-lg sm:text-xl lg:text-xs xl:text-l xxl:text-xl"
      >
        &#169; {{ CURRENT_YEAR }} BINQ DESSERT SDN. BHD. 202301021089
        (1515011-M)
      </div>
    </section>
    <section
      class="w-[60%] flex flex-col lg:flex-row justify-between border-solid border-t-2 pt-10"
    >
      <div class="w-[25%]">
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font pb-2"
        >
          Contact Info
        </h2>
        <div
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-3 tracking-wide"
        >
          <p>Binqdessert@gmail.com</p>
          <p class="pt-2">0358885453</p>
          <p class="pt-2">0169007070</p>
        </div>
      </div>
      <div class="w-[25%]">
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font pb-2"
        >
          Opening Hours
        </h2>
        <div
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-3 tracking-wide"
        >
          <p>Sun - Thu: 1:00 PM to 11:00 PM</p>
          <p class="pt-2">Fri - Sat: 1:00 PM to 11:30 PM</p>
        </div>
      </div>
      <div class="w-[25 %]">
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font pb-2"
        >
          Branch Locations
        </h2>
        <div
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-3 tracking-wide flex flex-col"
        >
          <a href="https://maps.app.goo.gl/psBb4HSo5bvRc6nP6" target="_blank">
            Desa Sri Hartamas
          </a>
          <a
            class="pt-2"
            href="https://maps.app.goo.gl/UXRnQEntwuw11ad78"
            target="_blank"
          >
            SS15, Subang Jaya
          </a>
        </div>
      </div>
      <div class="w-[10%] flex justify-end">
        <div
          class="w-1/2 h-1/5 rounded-full bg-creamwhitebq flex justify-center items-center"
        >
          <img class="w-1/2 h-1/2" src="../assets/logo/binq.png" />
        </div>
      </div>
    </section>
  </footer>
</template>
