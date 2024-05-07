<script setup lang="ts">
import "../../assets/images/menu/bingsus";
import "../../assets/images/menu/drinks";
import "../../assets/images/menu/toppings";
import "../../output.css";

enum MenuItemType {
  Bingsu = "Bingsu",
  Drink = "Drink",
  Topping = "Topping",
}

interface MenuItemBase {
  price: number;
  name: string;
  imagePath: string;
}

interface Bingsu extends MenuItemBase {
  recommendedToppings: string[];
}

interface Menu {
  [MenuItemType.Bingsu]: Bingsu[];
  [MenuItemType.Drink]: MenuItemBase[];
  [MenuItemType.Topping]: MenuItemBase[];
}

const MENU: Menu = {
  Bingsu: [
    {
      price: 28.5,
      name: "White Peach Oolong",
      imagePath: "../../assets/images/menu/bingsus/white-peach-oolong.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Peach popping boba",
        "Taroball",
      ],
    },
  ],
  Drink: [
    {
      price: 28.5,
      name: "White Peach Oolong",
      imagePath: "../../assets/images/menu/bingsus/white-peach-oolong.jpg",
    },
  ],
  Topping: [
    {
      price: 28.5,
      name: "White Peach Oolong",
      imagePath: "../../assets/images/menu/bingsus/white-peach-oolong.jpg",
    },
  ],
};
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
