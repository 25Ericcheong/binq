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
    {
      price: 30.0,
      name: "The Dark Knight",
      imagePath: "../../assets/images/menu/bingsus/the-dark-knight.jpg",
      recommendedToppings: [
        "White sugar jelly",
        "Soybean mochi",
        "Butter crisp",
      ],
    },
    {
      price: 26.5,
      name: "Roasted Soybean Oolong",
      imagePath: "../../assets/images/menu/bingsus/roasted-soybean-oolong.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Butter crisp",
        "Cream cheese",
      ],
    },
    {
      price: 30.0,
      name: "Matcha",
      imagePath: "../../assets/images/menu/bingsus/matcha.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Red Bean",
        "Cream cheese",
      ],
    },
    {
      price: 32.0,
      name: "Mango",
      imagePath: "../../assets/images/menu/bingsus/mango.jpg",
      recommendedToppings: [
        "Passionfruit popping boba",
        "Nata de coco",
        "Mango",
      ],
    },
    {
      price: 28.5,
      name: "Kamquat Jasmine",
      imagePath: "../../assets/images/menu/bingsus/kumquat-jasmine.jpg",
      recommendedToppings: [
        "Nata de coco",
        "Passionfruit popping boba",
        "Aiyu jelly",
      ],
    },
    {
      price: 32.0,
      name: "Hoji Cha Cha",
      imagePath: "../../assets/images/menu/bingsus/hoji-cha-cha.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Cream cheese",
      ],
    },
  ],
  Drink: [
    {
      price: 15.0,
      name: "Watermelon Cheezo",
      imagePath: "../../assets/images/menu/bingsus/watermelon-cheezo.jpg",
    },
    {
      price: 15.0,
      name: "Signature Binq Tea",
      imagePath: "../../assets/images/menu/bingsus/signature-binq-tea.jpg",
    },
    {
      price: 15.0,
      name: "Lychee Cheezo",
      imagePath: "../../assets/images/menu/bingsus/lychee-cheezo.jpg",
    },
    {
      price: 15.0,
      name: "Grape Cheezo",
      imagePath: "../../assets/images/menu/bingsus/grape-cheezo.jpg",
    },
    {
      price: 13.0,
      name: "Roasted Da Hong Pao Milk Tea",
      imagePath:
        "../../assets/images/menu/bingsus/roasted-da-hong-pao-milk-tea.jpg",
    },
  ],
  Topping: [
    {
      price: 15.0,
      name: "Signature Binq Tea",
      imagePath: "../../assets/images/menu/bingsus/signature-binq-tea.jpg",
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
