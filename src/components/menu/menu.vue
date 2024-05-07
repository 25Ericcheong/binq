<script setup lang="ts">
import "../../output.css";

enum MenuItemType {
  Bingsu = "Bingsu",
  Drink = "Drink",
  Topping = "Topping",
}

interface MenuItemBase {
  price: number;
  name: string;
}

interface Bingsu extends MenuItemBase {
  recommendedToppings: string[];
}

interface Menu {
  [MenuItemType.Bingsu]: Bingsu;
  [MenuItemType.Drink]: MenuItemBase;
  [MenuItemType.Topping]: MenuItemBase;
}

const MENU: Menu = {};
</script>
<template>
  <section
    class="bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-25% to-dullorangebq"
  >
    <h1
      class="p-5 text-7xl xl:text-8xl header-font font-extrabold text-creamwhitebq"
    >
      Binq Menu
    </h1>
  </section>
</template>
<style scoped></style>
