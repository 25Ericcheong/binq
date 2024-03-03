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
  {
    name: "Taro Ball",
    image: "taro-ball-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Soybean Coated Mochi Cube",
    image: "soybean-coated-mochi-cube-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Lychee",
    image: "lychee-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Mango",
    image: "mango-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Peach Popping Boba",
    image: "peach-popping-boba-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Red Bean",
    image: "red-bean-removebg-preview",
    groupType: Group.Topping,
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
  <div
    class="mx-10 my-72 bg-gradient-to-tl from-darkorangebq from-30% via-orangebq via-40% to-dullorangebq rounded-lg"
  >
    <section class="flex rounded-tl-lg">
      <div
        class="text-creamwhitebq border-creamwhitebq border-2 ml-11 mt-11 pl-16 pr-24 py-28 rounded-r-full"
      >
        <h1
          class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Discover Binq
        </h1>
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 text-creamwhitebq"
        >
          With an assortment flavors available, the combination is endless
        </h2>
      </div>
    </section>
    <section class="flex items-center">
      <div v-for="product in products">
        <img :src="getImageUrl(product.image, product.groupType)" />
        <h2>{{ product.name }}</h2>
        <div v-if="product.toppings !== undefined">
          <p v-for="topping in product.toppings">{{ topping }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
