<script setup lang="ts">
import { ref } from "vue";

enum Group {
  BingsuSet = "BINQSET",
  Bingsu = "BINQ",
  Topping = "TOPPING",
}

type Product = {
  name: string;
  imageName: string;
  toppings?: string[];
  groupType: Group;
};

const toShowIndex = ref<number>(0);

const bingsus = ref<Product[]>([
  {
    name: "Roasted Soybean Oolong",
    imageName: "roasted-soybean-oolong-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "White Peach",
    imageName: "white-peach-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Matcha",
    imageName: "matcha-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Hojicha",
    imageName: "hojicha-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Kumquat Jasmine",
    imageName: "kumquat-jasmine-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
  {
    name: "Dark Knight",
    imageName: "dark-knight-bingsu-removebg-preview",
    groupType: Group.Bingsu,
  },
]);

const bingsuSets = ref<Product[]>([
  {
    name: "Roasted Soybean Oolong",
    imageName: "roasted-soybean-oolong-removebg-preview",
    toppings: [
      "Brown Sugar Jelly",
      "Soybean-Coated Mochi Cube",
      "Butter Crisp",
    ],
    groupType: Group.BingsuSet,
  },
  {
    name: "Matcha",
    imageName: "matcha-removebg-preview",
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
    imageName: "hojicha-cha-removebg-preview",
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
    imageName: "white-peach-oolong-removebg-preview",
    toppings: ["Brown Sugar Jelly", "Peach Popping Boba", "Taro Ball"],
    groupType: Group.BingsuSet,
  },
  {
    name: "The Dark Knight",
    imageName: "the-dark-knight-removebg-preview",
    toppings: ["White Sugar Jelly", "Milo Coated Mochi Cube", "Butter Crisp"],
    groupType: Group.BingsuSet,
  },
  {
    name: "Kumquat Jasmine",
    imageName: "kumquat-jasmine-removebg-preview",
    toppings: ["Passionfruit Popping Boba", "Nata De Coco", "Aiyu Jelly"],
    groupType: Group.BingsuSet,
  },
]);

const toppings = ref<Product[]>([
  {
    name: "Taro Ball",
    imageName: "taro-ball-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Soybean Coated Mochi Cube",
    imageName: "soybean-coated-mochi-cube-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Lychee",
    imageName: "lychee-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Mango",
    imageName: "mango-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Peach Popping Boba",
    imageName: "peach-popping-boba-removebg-preview",
    groupType: Group.Topping,
  },
  {
    name: "Red Bean",
    imageName: "red-bean-removebg-preview",
    groupType: Group.Topping,
  },
]);

function getImageUrl(pathSubset: string, groupType: Group) {
  let productInnerDir = "bingsu-set";

  if (groupType === Group.Bingsu) {
    productInnerDir = "bingsu";
  } else if (groupType === Group.Topping) {
    productInnerDir = "topping";
  }

  return new URL(
    `/src/assets/images/products/${productInnerDir}/${pathSubset}.png`,
    import.meta.url
  ).href;
}

function getImageProductPath(
  indexItemToShow: number,
  products: Product[]
): string {
  const product: Product = products[indexItemToShow];
  return getImageUrl(product.imageName, product.groupType);
}
</script>

<template>
  <div
    class="my-72 bg-gradient-to-tl from-darkorangebq from-30% via-orangebq via-40% to-dullorangebq rounded-lg"
  >
    <section class="flex rounded-tl-lg mx-20">
      <div class="text-creamwhitebq mt-11 pl-16 pr-24 py-28 rounded-r-full">
        <h1
          class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Discover Binq
        </h1>
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 text-creamwhitebq"
        >
          With an assortment of flavors available, the combination is endless
        </h2>
      </div>
    </section>
    <section class="flex">
      <div class="w-1/5 flex flex-col">
        <h2>Heavenly bingsu</h2>
        <img :src="getImageProductPath(toShowIndex, bingsus)" />
      </div>
      <div></div>
      <div></div>
    </section>
    <!-- <section class="flex items-center">
      <div v-for="product in products">
        <img :src="getImageUrl(product.image, product.groupType)" />
        <h2>{{ product.name }}</h2>
        <div v-if="product.toppings !== undefined">
          <p v-for="topping in product.toppings">{{ topping }}</p>
        </div>
      </div>
    </section> -->
  </div>
</template>
