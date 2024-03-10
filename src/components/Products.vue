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

const bingsu = ref<Product>({
  name: "Roasted Soybean Oolong",
  imageName: "roasted-soybean-oolong-bingsu-removebg-preview",
  groupType: Group.Bingsu,
});

const bingsuSet = ref<Product>({
  name: "Roasted Soybean Oolong",
  imageName: "roasted-soybean-oolong-removebg-preview",
  toppings: ["Brown Sugar Jelly", "Soybean-Coated Mochi Cube", "Butter Crisp"],
  groupType: Group.BingsuSet,
});

const topping = ref<Product>({
  name: "Taro Ball",
  imageName: "taro-ball-removebg-preview",
  groupType: Group.Topping,
});

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
</script>

<template>
  <div class="my-72 bg-orangebq py-28">
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
    <section class="flex mx-28 w-11/12 justify-center overflow-x-hidden">
      <div class="bg-creamyellowbq w-[20rem] h-1/2 p-5 rounded-t-full">
        <img
          class="drop-shadow-2xl"
          :src="getImageUrl(topping.imageName, topping.groupType)"
        />
        <div class="flex justify-between mt-5">
          <h2>Toppings</h2>
          <h2>Over 10 Items</h2>
        </div>
      </div>
      <div class="bg-creamyellowbq mx-20">
        <img
          class="drop-shadow-2xl"
          :src="getImageUrl(bingsuSet.imageName, bingsuSet.groupType)"
        />
        <div class="flex justify-between">
          <h2>Bingsu Sets</h2>
          <h2>6 Items</h2>
        </div>
      </div>
      <div class="bg-creamyellowbq">
        <img
          class="drop-shadow-2xl"
          :src="getImageUrl(bingsu.imageName, bingsu.groupType)"
        />
        <div class="flex justify-between">
          <h2>Bingsus</h2>
          <h2>6 Items</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
