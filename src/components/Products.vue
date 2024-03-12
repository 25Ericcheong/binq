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

const oolongBingsu = ref<Product>({
  name: "Roasted Soybean Oolong",
  imageName: "roasted-soybean-oolong-bingsu-removebg-preview",
  groupType: Group.Bingsu,
});

const matchaBingsu = ref<Product>({
  name: "Matcha",
  imageName: "matcha-bingsu-removebg-preview",
  groupType: Group.Bingsu,
});

const bingsuSet = ref<Product>({
  name: "Roasted Soybean Oolong",
  imageName: "roasted-soybean-oolong-removebg-preview",
  toppings: ["Brown Sugar Jelly", "Soybean-Coated Mochi Cube", "Butter Crisp"],
  groupType: Group.BingsuSet,
});

const taroTopping = ref<Product>({
  name: "Taro Ball",
  imageName: "taro-ball-removebg-preview",
  groupType: Group.Topping,
});

const lycheeTopping = ref<Product>({
  name: "Lychee",
  imageName: "lychee-removebg-preview",
  groupType: Group.Topping,
});

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
  <div
    class="my-72 bg-gradient-to-tl from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq py-40"
  >
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
    <section class="flex pt-40 h-screen">
      <div class="bg-creamyellowbq w-2/5 h-4/5 py-5 rounded-lg relative">
        <img
          class="drop-shadow-2xl h-full -ml-32"
          :src="getImageUrl(bingsuSet.imageName, bingsuSet.groupType)"
        />
        <div
          class="text-6xl xl:text-7xl xxl:text-9xl header-font font-extrabold p-3 text-darkorangebq absolute right-0 top-0 text-right"
        >
          <h1>Our</h1>
          <h1>Bestseller</h1>
        </div>
      </div>
      <div class="pl-20 grow flex flex-col h-full">
        <div
          class="text-6xl xl:text-7xl xxl:text-9xl header-font font-extrabold p-3 text-creamwhitebq"
        >
          <h1>Our</h1>
          <h1>Collection</h1>
        </div>
        <div class="flex h-4/5">
          <div>
            <h1>Favorite sets</h1>
            <p>6+</p>
            <p>These are our own handpick favorites - perfect for everyone</p>
          </div>
          <div class="flex items-end mt-20 ml-20 bg-creamyellowbq rounded-lg">
            <img
              class="drop-shadow-2xl w-full"
              :src="getImageUrl(oolongBingsu.imageName, oolongBingsu.groupType)"
            /><img
              class="drop-shadow-2xl w-1/3"
              :src="getImageUrl(taroTopping.imageName, taroTopping.groupType)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
