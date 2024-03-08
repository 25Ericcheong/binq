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
  indexItemToShow: number,
  products: Product[]
): string {
  const product: Product = products[indexItemToShow];
  return getImageUrl(product.imageName, product.groupType);
}
</script>

<template>
  <div class="my-72 bg-orangebq rounded-lg py-28">
    <section class="flex rounded-tl-lg mx-12">
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
    <section class="flex justify-between pt-10">
      <div
        class="flex flex-col w-1/2 mr-10 tertiary-bg py-40 pr-10 rounded-r-full drop-shadow-2xl overflow-hidden border-solid border-creamwhitebq border-2"
      >
        <h2
          class="text-5xl xl:text-6xl xxl:text-8xl header-font font-extrabold mb-14 pl-12 py-3 text-creamwhitebq bg-orangebq"
        >
          {{ bingsuSets[showProductIndex].name }}
        </h2>
        <img
          class="drop-shadow-2xl w-full -m-10"
          :src="getImageProductPath(showProductIndex, bingsuSets)"
        />
      </div>
      <div
        class="text-creamwhitebq flex flex-col items-center justify-center text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font"
      >
        <button
          :class="{ 'disable-button': showProductIndex === LAST_PRODUCT_INDEX }"
          :disabled="showProductIndex === LAST_PRODUCT_INDEX"
          @click="showProductIndex++"
          class="p-5 mb-5 rounded-full border-solid border-creamwhitebq border-2"
        >
          Next
        </button>
        <p>{{ showProductIndex + 1 }} / {{ bingsus.length }}</p>
        <button
          :class="{
            'disable-button': showProductIndex === FIRST_PRODUCT_INDEX,
          }"
          :disabled="showProductIndex === FIRST_PRODUCT_INDEX"
          @click="showProductIndex--"
          class="p-5 mt-5 rounded-full border-solid border-creamwhitebq border-2"
        >
          Back
        </button>
      </div>
      <div class="w- flex flex-col w-1/3 mr-12 self-center">
        <div class="flex flex-col pb-5 justify-center">
          <h2
            class="text-creamwhitebq text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 text-center"
          >
            Fresh and light as heaven
          </h2>

          <div class="flex justify-center">
            <img
              class="drop-shadow-2xl w-2/3 border-solid border-creamwhitebq border-2 rounded-t-full p-10"
              :src="getImageProductPath(showProductIndex, toppings)"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <img
            class="drop-shadow-2xl border-solid border-creamwhitebq border-2 rounded-b-full p-20"
            :src="getImageProductPath(showProductIndex, bingsus)"
          />
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
