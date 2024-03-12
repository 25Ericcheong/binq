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
      <div
        class="bg-creamyellowbq w-2/5 py-5 rounded-lg relative flex items-end"
      >
        <img
          class="drop-shadow-2xl h-5/6 -ml-32"
          :src="getImageUrl(bingsuSet.imageName, bingsuSet.groupType)"
        />
        <div
          class="text-6xl xl:text-7xl xxl:text-9xl header-font font-extrabold p-3 text-darkorangebq absolute right-20 top-0 text-right"
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
        <div class="flex h-4/5 text-creamwhitebq">
          <div class="mt-24 flex flex-col w-2/5">
            <div class="mt-20">
              <p
                class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font body-font"
              >
                6
              </p>
              <h2
                class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font body-font"
              >
                CRAFTED SETS
              </h2>
            </div>
            <div class="mt-20">
              <p
                class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font body-font"
              >
                6
              </p>
              <h2
                class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font body-font"
              >
                UNIQUE BINGSUS
              </h2>
            </div>
            <div class="mt-20">
              <p
                class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font body-font"
              >
                15
              </p>
              <h2
                class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font body-font"
              >
                TOPPINGS
              </h2>
            </div>
          </div>
          <div
            class="flex flex-grow items-end justify-items-end mt-20 ml-40 pl-20 bg-creamyellowbq rounded-lg relative overflow-hidden"
          >
            <img
              class="drop-shadow-2xl h-4/5"
              :src="getImageUrl(oolongBingsu.imageName, oolongBingsu.groupType)"
            /><img
              class="drop-shadow-2xl h-1/3 absolute bottom-0 -right-16"
              :src="getImageUrl(taroTopping.imageName, taroTopping.groupType)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
