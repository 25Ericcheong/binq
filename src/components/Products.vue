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

const FIRST_PRODUCT_INDEX = 0;
const LAST_PRODUCT_INDEX = 5;
const showProductIndex = ref<number>(0);

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
  productIndex: number,
  products: Product[]
): string {
  const product: Product = products[productIndex];
  return getImageUrl(product.imageName, product.groupType);
}
</script>

<template>
  <div class="my-72 bg-orangebq rounded-lg py-28">
    <section class="flex mx-12">
      <div class="text-creamwhitebq pr-24">
        <h1
          class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Discover Binq
        </h1>
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 text-creamwhitebq"
        >
          With an assortment of flavors available, the combination is limitless
        </h2>
      </div>
    </section>
    <section class="flex items-center">
      <div
        class="flex flex-row-reverse bg-creamyellowbq py-20 rounded-r-full drop-shadow-2xl overflow-x-scroll w-1/2 mt-20"
      >
        <img
          v-for="bingsuSet in bingsuSets"
          class="drop-shadow-2xl pr-20 w-full"
          :src="getImageUrl(bingsuSet.imageName, bingsuSet.groupType)"
        />
      </div>
      <div
        class="w-1/4 text-creamwhitebq flex items-center justify-center text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font"
      >
        <h2>Our favorite sets or customize your own</h2>
      </div>
      <div class="flex flex-col w-1/3 h-full items-center justify-center">
        <div class="flex flex-col pb-5 items-center h-full w-3/5">
          <div class="w-full h-1/2 flex flex-row bg-creamyellowbq items-center">
            <img
              class="drop-shadow-2xl h-1/2 w-1/2"
              :src="getImageProductPath(showProductIndex, toppings)"
            />
            <img
              class="drop-shadow-2xl"
              :src="getImageProductPath(showProductIndex, bingsus)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.disable-button {
  opacity: 0.33;
}
</style>
