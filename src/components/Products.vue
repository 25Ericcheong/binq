<script setup lang="ts">
import { ref } from "vue";

enum Group {
  Popular = "POPULAR",
  All = "ALL",
}

type Product = {
  name: string;
  imagePath: string;
  sides: string[];
  group: Group;
};

const products = ref<Product[]>([
  {
    name: "Roasted Soybean Oolong",
    imagePath:
      "../assets/images/products/bingsu-set/roasted-soybean-oolong-removebg-preview.png",
    sides: ["Brown Sugar Jelly", "Soybean-Coated Mochi Cube", "Butter Crisp"],
    group: Group.Popular,
  },
  {
    name: "White Peach Oolong",
    imagePath:
      "../assets/images/products/bingsu-set/white-peach-oolong-removebg-preview.png",
    sides: ["Brown Sugar Jelly", "Peach Popping Boba", "Taro Ball"],
    group: Group.Popular,
  },
  {
    name: "The Dark Knight",
    imagePath:
      "../assets/images/products/bingsu-set/the-dark-knight-removebg-preview.png",
    sides: ["White Sugar Jelly", "Milo Coated Mochi Cube", "Butter Crisp"],
    group: Group.All,
  },
  {
    name: "Matcha",
    imagePath:
      "../assets/images/products/bingsu-set/matcha-removebg-preview.png",
    sides: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Red Bean",
      "Cream Cheese",
    ],
    group: Group.All,
  },
  {
    name: "Kumquat Jasmine",
    imagePath:
      "../assets/images/products/bingsu-set/kumquat-jasmine-removebg-preview.png",
    sides: ["Passionfruit Popping Boba", "Nata De Coco", "Aiyu Jelly"],
    group: Group.All,
  },
  {
    name: "Hoji Cha Cha",
    imagePath:
      "../assets/images/products/bingsu-set/hojicha-cha-removebg-preview.png",
    sides: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Red Bean",
      "Cream Cheese",
    ],
    group: Group.All,
  },
]);
</script>

<template>
  <section></section>
  <section>
    <div v-for="product in products">
      <img :src="product.imagePath" />
      <h2>{{ product.name }}</h2>
      <div>
        <p v-for="side in product.sides">{{ side }}</p>
      </div>
    </div>
  </section>
</template>
