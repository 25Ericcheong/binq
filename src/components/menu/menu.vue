<script setup lang="ts">
import { getImageUrlForMenu } from "@/util/Image";
import { ref, watch } from "vue";
import "/src/output.css";

enum MenuItemType {
  Bingsu = "Bingsu",
  Drink = "Drink",
  Topping = "Topping",
}

interface MenuItemBase {
  price: number;
  name: string;
  imagePath: string;
}

interface Bingsu extends MenuItemBase {
  recommendedToppings: string[];
}

interface Menu {
  [MenuItemType.Bingsu]: Bingsu[];
  [MenuItemType.Drink]: MenuItemBase[];
  [MenuItemType.Topping]: MenuItemBase[];
}

const MENU: Menu = {
  Bingsu: [
    {
      price: 28.5,
      name: "White Peach Oolong",
      imagePath: "/src/assets/images/menu/bingsus/white-peach-oolong.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Peach popping boba",
        "Taroball",
      ],
    },
    {
      price: 30.0,
      name: "The Dark Knight",
      imagePath: "/src/assets/images/menu/bingsus/the-dark-knight.jpg",
      recommendedToppings: [
        "White sugar jelly",
        "Soybean mochi",
        "Butter crisp",
      ],
    },
    {
      price: 26.5,
      name: "Roasted Soybean Oolong",
      imagePath: "/src/assets/images/menu/bingsus/roasted-soybean-oolong.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Butter crisp",
        "Cream cheese",
      ],
    },
    {
      price: 30.0,
      name: "Matcha",
      imagePath: "/src/assets/images/menu/bingsus/matcha.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Red Bean",
        "Cream cheese",
      ],
    },
    {
      price: 32.0,
      name: "Mango",
      imagePath: "/src/assets/images/menu/bingsus/mango.jpg",
      recommendedToppings: [
        "Passionfruit popping boba",
        "Nata de coco",
        "Mango",
      ],
    },
    {
      price: 28.5,
      name: "Kamquat Jasmine",
      imagePath: "/src/assets/images/menu/bingsus/kumquat-jasmine.jpg",
      recommendedToppings: [
        "Nata de coco",
        "Passionfruit popping boba",
        "Aiyu jelly",
      ],
    },
    {
      price: 32.0,
      name: "Hoji Cha Cha",
      imagePath: "/src/assets/images/menu/bingsus/hoji-cha-cha.jpg",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Cream cheese",
      ],
    },
  ],
  Drink: [
    {
      price: 15.0,
      name: "Watermelon Cheezo",
      imagePath: "/src/assets/images/menu/drinks/watermelon-cheezo.jpg",
    },
    {
      price: 15.0,
      name: "Signature Binq Tea",
      imagePath: "/src/assets/images/menu/drinks/signature-binq-tea.jpg",
    },
    {
      price: 15.0,
      name: "Lychee Cheezo",
      imagePath: "/src/assets/images/menu/drinks/lychee-cheezo.jpg",
    },
    {
      price: 15.0,
      name: "Grape Cheezo",
      imagePath: "/src/assets/images/menu/drinks/grape-cheezo.jpg",
    },
    {
      price: 13.0,
      name: "Roasted Da Hong Pao Milk Tea",
      imagePath:
        "/src/assets/images/menu/drinks/roasted-da-hong-pao-milk-tea.jpg",
    },
  ],
  Topping: [
    {
      price: 2.0,
      name: "White Crystal Jelly",
      imagePath: "/src/assets/images/menu/toppings/white-crystal-jelly.jpg",
    },
    {
      price: 2.0,
      name: "Cream Cheese",
      imagePath: "/src/assets/images/menu/toppings/cream-cheese.jpg",
    },
    {
      price: 2.0,
      name: "Nata De Coco",
      imagePath: "/src/assets/images/menu/toppings/nata-de-coco.jpg",
    },
    {
      price: 2.0,
      name: "Peach Popping Boba",
      imagePath: "/src/assets/images/menu/toppings/peach-popping-boba.jpg",
    },
    {
      price: 2.0,
      name: "Passionfruit Popping Boba",
      imagePath:
        "/src/assets/images/menu/toppings/passionfruit-popping-boba.jpg",
    },
    {
      price: 2.0,
      name: "Lychee Popping Boba",
      imagePath: "/src/assets/images/menu/toppings/lychee-popping-boba.jpg",
    },
    {
      price: 2.0,
      name: "Waterchestnut Popping Boba",
      imagePath:
        "/src/assets/images/menu/toppings/waterchestnut-popping-boba.jpg",
    },
    {
      price: 2.0,
      name: "Taroballs",
      imagePath: "/src/assets/images/menu/toppings/taroballs.jpg",
    },
    {
      price: 2.0,
      name: "Mini Taroballs",
      imagePath: "/src/assets/images/menu/toppings/mini-taroballs.jpg",
    },
    {
      price: 2.0,
      name: "Soybean Mochi Cube",
      imagePath: "/src/assets/images/menu/toppings/soybean-mochi-cube.jpg",
    },
    {
      price: 2.0,
      name: "Brown Sugar Crystal Jelly",
      imagePath:
        "/src/assets/images/menu/toppings/brown-sugar-crystal-jelly.jpg",
    },
    {
      price: 2.0,
      name: "Aiyu Jelly",
      imagePath: "/src/assets/images/menu/toppings/aiyu-jelly.jpg",
    },
    {
      price: 2.0,
      name: "Red Bean",
      imagePath: "/src/assets/images/menu/toppings/red-bean.jpg",
    },
    {
      price: 2.0,
      name: "Butter Crisp",
      imagePath: "/src/assets/images/menu/toppings/butter-crisp.jpg",
    },
    {
      price: 2.0,
      name: "Lotus Biscoff",
      imagePath: "/src/assets/images/menu/toppings/lotus-biscoff.jpg",
    },
    {
      price: 2.0,
      name: "Toasted Coconut",
      imagePath: "/src/assets/images/menu/toppings/toasted-coconut.jpg",
    },
    {
      price: 2.0,
      name: "Cream Cheese with Soybean Powder",
      imagePath: "/src/assets/images/menu/toppings/cream-cheese.jpg",
    },
    {
      price: 2.0,
      name: "Mango",
      imagePath: "/src/assets/images/menu/toppings/mango.jpg",
    },
    {
      price: 2.0,
      name: "Grapefruit",
      imagePath: "/src/assets/images/menu/toppings/grapefruit.jpg",
    },
    {
      price: 2.0,
      name: "Passionfruit Popping Boba",
      imagePath:
        "/src/assets/images/menu/toppings/passionfruit-popping-boba.jpg",
    },
    {
      price: 2.0,
      name: "Soybean Mochi Cube",
      imagePath: "/src/assets/images/menu/toppings/soybean-mochi-cube.jpg",
    },
  ],
};

const selectedType = ref<MenuItemType>(MenuItemType.Bingsu);
const specificMenuItems = ref<MenuItemBase[]>(MENU[selectedType.value]);

function handleTypeUpdate(newType: MenuItemType) {
  selectedType.value = newType;
}

watch(
  () => selectedType.value,
  (newType, _) => {
    specificMenuItems.value = MENU[newType];
  }
);
</script>
<template>
  <section
    class="bg-gradient-to-tr from-darkorangebq from-15% via-orangebq via-25% to-dullorangebq"
  >
    <h1
      class="p-10 text-7xl xl:text-8xl header-font font-extrabold text-creamwhitebq"
    >
      Menu
    </h1>
  </section>
  <section class="px-5 py-24 bg-creamyellowbq flex justify-center">
    <div
      class="w-full xl:max-w-[1320px] body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl text-darkorangebq border-solid border-2 border-darkorangebq"
    >
      <section>
        <h2
          class="text-center text-7xl xl:text-8xl header-font pb-10 font-bold"
        >
          {{ selectedType }}
        </h2>
        <div class="flex justify-center">
          <button
            v-for="type in MenuItemType"
            @click="() => handleTypeUpdate(type)"
            class="p-3 md:p-5 mr-5 md:mr-10 rounded-full"
            :class="
              type === selectedType
                ? 'bg-darkorangebq text-creamwhitebq'
                : ' text-darkorangebq border-solid border-2 border-darkorangebq'
            "
          >
            {{ type }}
          </button>
        </div>
      </section>
      <section class="grid grid-cols-3 gap-4">
        <div
          v-for="item in specificMenuItems"
          class="grid grid-cols-subgrid gap-4 col-span-3"
        >
          <div class="col-span-2">
            {{ item.name }}
          </div>
          <div>
            <img
              class="h-full w-1/2 rounded-2xl"
              :src="getImageUrlForMenu(item.imagePath)"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
