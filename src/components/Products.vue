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
      <div class="border-2 border-creamwhitebq pl-20 grow">
        <div
          class="text-6xl xl:text-7xl xxl:text-9xl header-font font-extrabold p-3 text-creamwhitebq"
        >
          <h1>Our</h1>
          <h1>Collection</h1>
        </div>
        <div></div>
      </div>
    </section>
    <section
      class="flex mx-28 w-11/12 justify-center overflow-x-hidden items-center pt-24"
    >
      <div
        class="bg-creamyellowbq w-[20rem] h-1/2 p-5 rounded-t-full flex-col items-center mr-10"
      >
        <img
          class="drop-shadow-2xl"
          :src="getImageUrl(lycheeTopping.imageName, lycheeTopping.groupType)"
        />
        <div
          class="flex justify-center body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mt-5 bg-orangebq text-creamwhitebq p-3 rounded-lg"
        >
          <h2>Homemade lychee</h2>
        </div>
      </div>
      <div
        class="bg-creamyellowbq w-[20rem] h-1/2 p-5 rounded-t-full flex-col items-center"
      >
        <img
          class="drop-shadow-2xl"
          :src="getImageUrl(taroTopping.imageName, taroTopping.groupType)"
        />
        <div
          class="flex justify-between body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mt-5 bg-orangebq text-creamwhitebq p-3 rounded-lg"
        >
          <h2>Toppings</h2>
          <h2>10+ Items</h2>
        </div>
      </div>
      <div
        class="bg-creamyellowbq w-[45rem] h-full p-5 rounded-t-full mx-20 flex flex-col items-center"
      >
        <img
          class="drop-shadow-2xl"
          :src="getImageUrl(bingsuSet.imageName, bingsuSet.groupType)"
        />
        <div
          class="flex justify-between body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mt-5 bg-orangebq text-creamwhitebq p-3 rounded-lg w-full"
        >
          <h2>Bingsu Sets</h2>
          <h2>6 Items</h2>
        </div>
      </div>
      <div
        class="bg-creamyellowbq w-[25rem] p-5 rounded-t-full flex flex-col items-center"
      >
        <img
          class="drop-shadow-2xl h-[24rem]"
          :src="getImageUrl(oolongBingsu.imageName, oolongBingsu.groupType)"
        />
        <div
          class="flex justify-between body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mt-5 bg-orangebq text-creamwhitebq p-3 rounded-lg w-full"
        >
          <h2>Bingsus</h2>
          <h2>6 Items</h2>
        </div>
      </div>
      <div
        class="bg-creamyellowbq w-[25rem] p-5 rounded-t-full flex flex-col items-center ml-10"
      >
        <img
          class="drop-shadow-2xl h-[24rem]"
          :src="getImageUrl(matchaBingsu.imageName, matchaBingsu.groupType)"
        />
        <div
          class="flex justify-center body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mt-5 bg-orangebq text-creamwhitebq p-3 rounded-lg w-full"
        >
          <h2>Leafy matcha bingsu</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
