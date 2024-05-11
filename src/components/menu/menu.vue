<script setup lang="ts">
import { getImageUrlForMenu } from "@/util/Image";
import { computed, reactive, ref, watch } from "vue";
import ToppingMenuCart from "../menu/topping-menu-cart.vue";
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

interface BingsuItem extends MenuItemBase {
  recommendedToppings: string[];
}

interface DrinkOrToppingItem extends MenuItemBase {
  description: string;
}

interface Menu {
  [MenuItemType.Bingsu]: BingsuItem[];
  [MenuItemType.Drink]: DrinkOrToppingItem[];
  [MenuItemType.Topping]: DrinkOrToppingItem[];
}

interface CartItemBase {
  index: number;
  price: number;
  name: string;
  quantity: number;
  instructions?: string;
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
      description:
        "A refreshing blend of watermelon and cheese, perfect for a cool and creamy treat",
    },
    {
      price: 15.0,
      name: "Signature Binq Tea",
      imagePath: "/src/assets/images/menu/drinks/signature-binq-tea.jpg",
      description: "Our staple signature drink at Binq",
    },
    {
      price: 15.0,
      name: "Lychee Cheezo",
      imagePath: "/src/assets/images/menu/drinks/lychee-cheezo.jpg",
      description:
        "Exotic sweetness of lychee combined with the creamy richness of cheese",
    },
    {
      price: 15.0,
      name: "Grape Cheezo",
      imagePath: "/src/assets/images/menu/drinks/grape-cheezo.jpg",
      description:
        "Refreshing taste of grapes that cuts through the cheesey goodness",
    },
    {
      price: 13.0,
      name: "Roasted Da Hong Pao Milk Tea",
      imagePath:
        "/src/assets/images/menu/drinks/roasted-da-hong-pao-milk-tea.jpg",
      description: "A comforting drink that will warm your soul with every sip",
    },
  ],
  Topping: [
    {
      price: 2.0,
      name: "White Crystal Jelly",
      imagePath: "/src/assets/images/menu/toppings/white-crystal-jelly.jpg",
      description: "Add a burst of sweetness to your bingsu with this topping",
    },
    {
      price: 2.0,
      name: "Cream Cheese",
      imagePath: "/src/assets/images/menu/toppings/cream-cheese.jpg",
      description: "Adds richness and flavor to every bite - just pour it over",
    },
    {
      price: 2.0,
      name: "Nata De Coco",
      imagePath: "/src/assets/images/menu/toppings/nata-de-coco.jpg",
      description:
        "With its' chewy texture and refreshing taste, it is perfect for adding a tropical twist to your bingsu",
    },
    {
      price: 2.0,
      name: "Peach Popping Boba",
      imagePath: "/src/assets/images/menu/toppings/peach-popping-boba.jpg",
      description: "Bursting with juicy peach flavor with every pop",
    },
    {
      price: 2.0,
      name: "Passionfruit Popping Boba",
      imagePath:
        "/src/assets/images/menu/toppings/passionfruit-popping-boba.jpg",
      description: "Delivering a burst of tangy passionfruit goodness",
    },
    {
      price: 2.0,
      name: "Lychee Popping Boba",
      imagePath: "/src/assets/images/menu/toppings/lychee-popping-boba.jpg",
      description: "Popping sweet lychee - it can't get better than this",
    },
    {
      price: 2.0,
      name: "Waterchestnut Popping Boba",
      imagePath:
        "/src/assets/images/menu/toppings/waterchestnut-popping-boba.jpg",
      description:
        "Savor the unique texture and subtle sweetness of our Waterchestnut Popping Boba",
    },
    {
      price: 2.0,
      name: "Taroballs",
      imagePath: "/src/assets/images/menu/toppings/taroballs.jpg",
      description:
        "Featuring chewy taro balls that add a comforting and nostalgic touch to your bingsu",
    },
    {
      price: 2.0,
      name: "Mini Taroballs",
      imagePath: "/src/assets/images/menu/toppings/mini-taroballs.jpg",
      description:
        "Delight in bite-sized bliss with our Mini Taroballs, perfect for adding a quick chew with bingsu",
    },
    {
      price: 2.0,
      name: "Soybean Mochi Cube",
      imagePath: "/src/assets/images/menu/toppings/soybean-mochi-cube.jpg",
      description:
        "The difference in chewy profile cannot be compared when it is coated with soybean",
    },
    {
      price: 2.0,
      name: "Brown Sugar Crystal Jelly",
      imagePath:
        "/src/assets/images/menu/toppings/brown-sugar-crystal-jelly.jpg",
      description:
        "Indulge in the rich caramel flavor and jelly-like texture of our Brown Sugar Crystal Jelly topping",
    },
    {
      price: 2.0,
      name: "Aiyu Jelly",
      imagePath: "/src/assets/images/menu/toppings/aiyu-jelly.jpg",
      description:
        "Translucent jelly with a delicate flavor that complements your bingsu perfectly",
    },
    {
      price: 2.0,
      name: "Red Bean",
      imagePath: "/src/assets/images/menu/toppings/red-bean.jpg",
      description:
        "A classic and comforting taste; perfect for it to be eaten with any of our bingsu",
    },
    {
      price: 2.0,
      name: "Butter Crisp",
      imagePath: "/src/assets/images/menu/toppings/butter-crisp.jpg",
      description: "Add a crunchy and buttery twist to your bingsu",
    },
    {
      price: 2.0,
      name: "Lotus Biscoff",
      imagePath: "/src/assets/images/menu/toppings/lotus-biscoff.jpg",
      description: "A crunch, plus a caramalized touch to your bingsu",
    },
    {
      price: 2.0,
      name: "Toasted Coconut",
      imagePath: "/src/assets/images/menu/toppings/toasted-coconut.jpg",
      description:
        "Featuring crispy toasted coconut flakes that transport you to paradise with every bite",
    },
    {
      price: 2.0,
      name: "Cream Cheese with Soybean Powder",
      imagePath: "/src/assets/images/menu/toppings/cream-cheese.jpg",
      description:
        "Cheese and soybean powder - creating multiple indulgent layers to your bingsu",
    },
    {
      price: 2.0,
      name: "Mango",
      imagePath: "/src/assets/images/menu/toppings/mango.jpg",
      description:
        "Delight in the sweetness of ripe mango with our Mango topping",
    },
    {
      price: 2.0,
      name: "Grapefruit",
      imagePath: "/src/assets/images/menu/toppings/grapefruit.jpg",
      description:
        "Experience a burst of citrusy freshness with our Grapefruit topping, adding a tangy and refreshing twist to your bingsu",
    },
    {
      price: 2.0,
      name: "Passionfruit Popping Boba",
      imagePath:
        "/src/assets/images/menu/toppings/passionfruit-popping-boba.jpg",
      description:
        "Add a zing to your bingsu with our Passionfruit Popping Boba",
    },
  ],
};

const selectedType = ref<MenuItemType>(MenuItemType.Bingsu);
const specificMenuItems = ref<MenuItemBase[] | BingsuItem[]>(
  MENU[selectedType.value]
);
const cart = reactive<CartItemBase[]>([]);

const condImgHeight = computed(() => ({
  "h-[160px]": selectedType.value === MenuItemType.Bingsu,
  "h-[150px]": selectedType.value !== MenuItemType.Bingsu,
}));

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
      class="w-full xl:max-w-[1320px] body-font text-xl sm:text-2xl xl:text-xl text-darkorangebq"
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
      <section class="flex my-10">
        <div class="shrink-0 grid grid-cols-2 gap-10 w-full">
          <div
            v-for="item in specificMenuItems"
            class="border-solid border-2 rounded-md border-darkorangebq flex h-[250px] p-5 shadow-lg"
          >
            <div class="w-1/3 flex justify-center pr-5">
              <img
                class="rounded-2xl w-[160px]"
                :class="condImgHeight"
                :src="getImageUrlForMenu(item.imagePath)"
              />
            </div>
            <div class="w-2/3 flex flex-col">
              <div class="pb-2 flex justify-between">
                <p class="pb-2 font-semibold">{{ item.name }}</p>
                <p class="pb-2 font-semibold">RM{{ item.price.toFixed(2) }}</p>
              </div>
              <div class="h-[100px]">
                <p
                  v-if="selectedType === MenuItemType.Bingsu"
                  class="line-clamp-3"
                >
                  Pick your own sides or follow our advice:
                  {{ (item as BingsuItem).recommendedToppings.join(" + ") }}
                </p>
                <p v-else class="line-clamp-3">
                  {{ (item as DrinkOrToppingItem).description }}
                </p>
              </div>
              <div v-if="selectedType === MenuItemType.Bingsu"></div>
              <div v-else-if="selectedType === MenuItemType.Drink"></div>
              <ToppingMenuCart v-else="selectedType === MenuItemType.Topping" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
