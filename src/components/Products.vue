<script setup lang="ts">
import { ref } from "vue";

enum Group {
  BinqSet = "BINQSET",
  Binq = "BINQ",
  Topping = "TOPPING",
}

type Product = {
  name: string;
  image: string;
  sides?: string[];
  group: Group;
};

const products = ref<Product[]>([
  {
    name: "Roasted Soybean Oolong",
    image: "roasted-soybean-oolong-removebg-preview",
    sides: ["Brown Sugar Jelly", "Soybean-Coated Mochi Cube", "Butter Crisp"],
    group: Group.BinqSet,
  },
  {
    name: "White Peach Oolong",
    image: "white-peach-oolong-removebg-preview",
    sides: ["Brown Sugar Jelly", "Peach Popping Boba", "Taro Ball"],
    group: Group.BinqSet,
  },
  {
    name: "The Dark Knight",
    image: "the-dark-knight-removebg-preview",
    sides: ["White Sugar Jelly", "Milo Coated Mochi Cube", "Butter Crisp"],
    group: Group.BinqSet,
  },
  {
    name: "Matcha",
    image: "matcha-removebg-preview",
    sides: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Red Bean",
      "Cream Cheese",
    ],
    group: Group.BinqSet,
  },
  {
    name: "Kumquat Jasmine",
    image: "kumquat-jasmine-removebg-preview",
    sides: ["Passionfruit Popping Boba", "Nata De Coco", "Aiyu Jelly"],
    group: Group.BinqSet,
  },
  {
    name: "Hoji Cha Cha",
    image: "hojicha-cha-removebg-preview",
    sides: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Red Bean",
      "Cream Cheese",
    ],
    group: Group.BinqSet,
  },
]);

function getImageUrl(name: string) {
  return new URL(
    `/src/assets/images/products/bingsu-set/${name}.png`,
    import.meta.url
  ).href;
}
</script>

<template>
  <section></section>
  <section>
    <div v-for="product in products">
      <img :src="getImageUrl(product.image)" />
      <h2>{{ product.name }}</h2>
      <div v-if="product.sides !== undefined">
        <p v-for="side in product.sides">{{ side }}</p>
      </div>
    </div>
  </section>
</template>
