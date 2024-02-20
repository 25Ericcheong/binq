<script setup lang="ts">
import { ref } from "vue";

enum Group {
  Popular = "POPULAR",
  All = "ALL",
}

type Product = {
  name: string;
  image: string;
  sides: string[];
  group: Group;
};

const products = ref<Product[]>([
  {
    name: "Roasted Soybean Oolong",
    image: "roasted-soybean-oolong-removebg-preview",
    sides: ["Brown Sugar Jelly", "Soybean-Coated Mochi Cube", "Butter Crisp"],
    group: Group.Popular,
  },
  {
    name: "White Peach Oolong",
    image: "white-peach-oolong-removebg-preview",
    sides: ["Brown Sugar Jelly", "Peach Popping Boba", "Taro Ball"],
    group: Group.Popular,
  },
  {
    name: "The Dark Knight",
    image: "the-dark-knight-removebg-preview",
    sides: ["White Sugar Jelly", "Milo Coated Mochi Cube", "Butter Crisp"],
    group: Group.All,
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
    group: Group.All,
  },
  {
    name: "Kumquat Jasmine",
    image: "kumquat-jasmine-removebg-preview",
    sides: ["Passionfruit Popping Boba", "Nata De Coco", "Aiyu Jelly"],
    group: Group.All,
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
    group: Group.All,
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
      <div>
        <p v-for="side in product.sides">{{ side }}</p>
      </div>
    </div>
  </section>
</template>
