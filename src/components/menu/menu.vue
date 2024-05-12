<script setup lang="ts">
import { useMenuStore } from "@/stores/useMenuStore";
import { getImageUrlForMenu } from "@/util/Image";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import ToppingMenuCart from "../menu/topping-menu-cart.vue";
import { MenuItemType } from "./menu-item-type";
import { MENU } from "./menu-items";
import "/src/output.css";

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

export interface Menu {
  [MenuItemType.Bingsu]: BingsuItem[];
  [MenuItemType.Drink]: DrinkOrToppingItem[];
  [MenuItemType.Topping]: DrinkOrToppingItem[];
}

const store = useMenuStore();
const { getItemOrderByName } = storeToRefs(store);

const selectedType = ref<MenuItemType>(MenuItemType.Bingsu);
const specificMenuItems = ref<MenuItemBase[] | BingsuItem[]>(
  MENU[selectedType.value]
);

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
      class="w-full xl:max-w-[1320px] body-font text-xl xl:text-2xl text-darkorangebq"
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
            class="border-solid border-2 rounded-md border-darkorangebq flex h-[250px] p-5 shadow-lg relative"
          >
            <div
              v-if="getItemOrderByName(item.name) !== undefined"
              class="absolute top-3 left-3 py-2 px-4 rounded-full bg-darkorangebq text-creamwhitebq"
            >
              {{ getItemOrderByName(item.name)?.quantity }}
            </div>
            <div class="w-1/3 flex pr-5">
              <img
                v-if="selectedType === MenuItemType.Bingsu"
                class="rounded-2xl w-[160px] h-full"
                :class="condImgHeight"
                :src="getImageUrlForMenu(item.imagePath)"
                alt="Items available on Binq's menu. It includes drinks, bingsu  sets and a variety of toppings"
              />
              <img
                v-else
                class="rounded-2xl w-[160px] h-[160px]"
                :class="condImgHeight"
                :src="getImageUrlForMenu(item.imagePath)"
                alt="Items available on Binq's menu. It includes drinks, bingsu  sets and a variety of toppings"
              />
            </div>
            <div class="w-2/3 flex flex-col">
              <div class="pb-2 flex justify-between">
                <p class="pb-2 font-semibold">{{ item.name }}</p>
                <p class="pb-2 font-semibold">RM{{ item.price.toFixed(2) }}</p>
              </div>
              <div class="h-[100px] text-lg xl:text-xl">
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
              <ToppingMenuCart
                v-else="selectedType === MenuItemType.Topping"
                :topping-name="item.name"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
