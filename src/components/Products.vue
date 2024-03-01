<script setup lang="ts">
import { ref } from "vue";

enum Group {
  BingsuSet = "BINQSET",
  Bingsu = "BINQ",
  Topping = "TOPPING",
}

type Product = {
  name: string;
  image: string;
  toppings?: string[];
  groupType: Group;
};

const products = ref<Product[]>([
  {
    name: "Roasted Soybean Oolong",
    image: "roasted-soybean-oolong-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "White Peach",
    image: "white-peach-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Matcha",
    image: "matcha-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Hojicha",
    image: "hojicha-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Kumquat Jasmine",
    image: "kumquat-jasmine-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Dark Knight",
    image: "dark-knight-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Roasted Soybean Oolong",
    image: "roasted-soybean-oolong-removebg-preview",
    toppings: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Butter Crisp",
    ],
    groupType: Group.BingsuSet,
  },
  {
    name: "Matcha",
    image: "matcha-removebg-preview",
    toppings: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Red Bean",
      "Cream Cheese",
    ],
    groupType: Group.BingsuSet,
  },
  {
    name: "Hoji Cha Cha",
    image: "hojicha-cha-removebg-preview",
    toppings: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Red Bean",
      "Cream Cheese",
    ],
    groupType: Group.BingsuSet,
  },
  {
    name: "White Peach Oolong",
    image: "white-peach-oolong-removebg-preview",
    toppings: ["Brown Sugar Jelly", "Peach Popping Boba", "Taro Ball"],
    groupType: Group.BingsuSet,
  },
  {
    name: "The Dark Knight",
    image: "the-dark-knight-removebg-preview",
    toppings: ["White Sugar Jelly", "Milo Coated Mochi Cube", "Butter Crisp"],
    groupType: Group.BingsuSet,
  },
  {
    name: "Kumquat Jasmine",
    image: "kumquat-jasmine-removebg-preview",
    toppings: ["Passionfruit Popping Boba", "Nata De Coco", "Aiyu Jelly"],
    groupType: Group.BingsuSet,
  },
]);

function getImageUrl(name: string, groupType: Group) {
  let productInnerDir = "bingsu-set";

  if (groupType === Group.Bingsu) {
    productInnerDir = "bingsu";
  } else if (groupType === Group.Topping) {
    productInnerDir = "topping";
  }

  return new URL(
    `/src/assets/images/products/${productInnerDir}/${name}.png`,
    import.meta.url
  ).href;
}
</script>

<template>
  <section></section>
  <section>
    <div v-for="product in products">
      <img :src="getImageUrl(product.image, product.groupType)" />
      <h2>{{ product.name }}</h2>
      <div v-if="product.toppings !== undefined">
        <p v-for="topping in product.toppings">{{ topping }}</p>
      </div>
    </div>
  </section>
</template>
