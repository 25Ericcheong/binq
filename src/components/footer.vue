<script setup lang="ts">
const CURRENT_YEAR = new Date().getFullYear();
</script>

<template>
  <footer class="px-12 sm:px-14 md:px-20 bg-orangebq text-creamwhitebq pt-20 pb-12">
    <!-- Top row -->
    <div class="flex flex-col lg:flex-row justify-between gap-12 border-t-2 border-creamwhitebq border-opacity-30 pt-12">

      <!-- Brand block -->
      <div class="flex flex-col items-start gap-4 lg:w-1/4">
        <div class="flex items-center gap-3">
          <img src="../assets/logo/binq.jpg" alt="Binq logo" class="w-10 h-10 rounded-full object-cover" />
          <h1 class="header-font font-extrabold text-4xl">Binq</h1>
        </div>
        <p class="body-font text-base opacity-80 max-w-xs">
          Bingsu like no other. Take a peek at our creations.
        </p>
        <div class="body-font text-base flex flex-col gap-1">
          <a href="https://www.instagram.com/binqdessert/" target="_blank" class="hover:underline">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100095187967073" target="_blank" class="hover:underline">Facebook</a>
        </div>
      </div>

      <!-- Links grid -->
      <div class="flex flex-col sm:flex-row gap-10 lg:w-2/3">

        <!-- Contact -->
        <div class="flex flex-col gap-3 flex-1">
          <h2 class="header-font font-bold text-xl">Contact</h2>
          <div class="body-font text-base opacity-80 flex flex-col gap-1">
            <a href="mailto:binqdessert@gmail.com" class="hover:underline">binqdessert@gmail.com</a>
          </div>
        </div>

        <!-- Opening Hours -->
        <div class="flex flex-col gap-3 flex-1">
          <h2 class="header-font font-bold text-xl">Opening Hours</h2>
          <div class="body-font text-base opacity-80 flex flex-col gap-1">
            <p>Sun – Thu: 1:00 PM – 11:00 PM</p>
            <p>Fri – Sat: 1:00 PM – 11:30 PM</p>
          </div>
        </div>

        <!-- Branches -->
        <div class="flex flex-col gap-3 flex-1">
          <h2 class="header-font font-bold text-xl">Outlets</h2>
          <div class="body-font text-base opacity-80 flex flex-col gap-1">
            <a href="https://share.google/rTjNqgakWm7zmJuGe" target="_blank" rel="noreferrer" class="hover:underline">Desa Sri Hartamas</a>
            <a href="https://share.google/ePjDMj9NlJb2gqDq1" target="_blank" rel="noreferrer" class="hover:underline">SS15, Subang Jaya</a>
            <a href="https://share.google/QkxXFiHSPKRwaYhTu" target="_blank" rel="noreferrer" class="hover:underline">SS2, Petaling Jaya</a>
            <a href="https://share.google/ml9FNXW9d7f2KjGOQ" target="_blank" rel="noreferrer" class="hover:underline">Damansara Uptown</a>
            <a href="https://share.google/rOz3Vn5V7U1X9V51T" target="_blank" rel="noreferrer" class="hover:underline">Taman Segar, Cheras</a>
            <a href="https://share.google/OLsShuKEdEWos2JGd" target="_blank" rel="noreferrer" class="hover:underline">Sunway Square</a>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom copyright -->
    <div class="body-font text-xs opacity-60 pt-10 border-t border-creamwhitebq border-opacity-20 mt-10">
      © {{ CURRENT_YEAR }} BINQ DESSERT SDN. BHD. 202301021089 (1515011-M). Icons by
      <a href="https://icons8.com" target="_blank" class="underline">Icons8</a>.
    </div>
  </footer>
</template>
