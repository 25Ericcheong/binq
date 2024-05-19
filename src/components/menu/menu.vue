<script setup lang="ts">
import BingsuMenuModal from "@/components/menu/bingsu-menu-modal.vue";
import DrinksMenuModal from "@/components/menu/drinks-menu-modal.vue";
import { MenuItemType } from "@/components/menu/menu-item-type";
import { MENU } from "@/components/menu/menu-items";
import SummaryMenuModal from "@/components/menu/summary-menu-modal.vue";
import ToppingMenu from "@/components/menu/topping-menu.vue";
import "@/output.css";
import { useMenuStore } from "@/stores/useMenuStore";
import { getImageUrl } from "@/util/image";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";

interface MenuItemBase {
  price: number;
  name: string;
  imageName: string;
}

interface BingsuItem extends MenuItemBase {
  recommendedToppings: string[];
}

interface DrinkOrToppingItem extends MenuItemBase {
  description: string;
}

export interface Menu {
  [MenuItemType.Bingsu]: BingsuItem[];
  [MenuItemType.Drinks]: DrinkOrToppingItem[];
  [MenuItemType.Topping]: DrinkOrToppingItem[];
}

const store = useMenuStore();
const { getItemOrderByName, getNumberOfItemOrderByName } = storeToRefs(store);

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
      class="w-full xl:max-w-[1320px] body-font text-lg sm:text-xl xl:text-2xl text-darkorangebq"
    >
      <section
        class="sticky top-0 z-40 px-0 sm:px-5 py-7 bg-creamyellowbq rounded-full"
      >
        <div
          class="flex flex-col justify-center sm:flex-row sm:justify-between items-center"
        >
          <h2
            class="text-center self-center text-5xl xl:text-6xl header-font font-bold hidden sm:block"
          >
            {{ selectedType }}
          </h2>
          <div class="flex justify-evenly w-[300px]">
            <button
              v-for="type in MenuItemType"
              @click="() => handleTypeUpdate(type)"
              class="p-2 md:p-4 rounded-full"
              :class="
                type === selectedType
                  ? 'bg-darkorangebq text-creamwhitebq'
                  : ' text-darkorangebq border-solid border-2 border-darkorangebq'
              "
            >
              {{ type }}
            </button>
          </div>
        </div>
      </section>
      <section class="flex mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 w-full">
          <div
            v-for="item in specificMenuItems"
            class="border-solid border-2 rounded-md border-darkorangebq flex h-[300] sm:h-[250px] p-5 shadow-lg relative"
          >
            <div
              v-if="getItemOrderByName(item.name) !== undefined"
              class="absolute top-3 left-3 py-2 px-4 rounded-full bg-darkorangebq text-creamwhitebq"
            >
              {{ getNumberOfItemOrderByName(item.name) }}
            </div>
            <div class="w-1/3 flex pr-5">
              <picture
                v-if="selectedType === MenuItemType.Bingsu"
                class="w-[160px] h-full"
              >
                <source
                  :srcset="getImageUrl(item.imageName, 'menu', 'bingsus', true)"
                  type="image/webp"
                />
                <source
                  :srcset="getImageUrl(item.imageName, 'menu', 'bingsus')"
                  type="image/jpg"
                />
                <img
                  class="w-[160px] h-full rounded-2xl"
                  :src="getImageUrl(item.imageName, 'menu', 'bingsus')"
                  alt="Items available on Binq's menu. It includes drinks, bingsu  sets and a variety of toppings"
                />
              </picture>

              <picture v-else class="w-[160px] h-[160px]">
                <source
                  :srcset="
                    getImageUrl(
                      item.imageName,
                      'menu',
                      selectedType === MenuItemType.Drinks
                        ? 'drinks'
                        : 'toppings',
                      true
                    )
                  "
                  type="image/webp"
                />
                <source
                  :srcset="getImageUrl(item.imageName, 'menu', 'bingsus')"
                  type="image/jpg"
                />
                <img
                  class="w-[160px] h-[160px] rounded-2xl"
                  :src="getImageUrl(item.imageName, 'menu', 'bingsus')"
                  alt="Items available on Binq's menu. It includes drinks, bingsu  sets and a variety of toppings"
                />
              </picture>
            </div>
            <div class="w-2/3 flex flex-col">
              <div class="pb-2 flex justify-between">
                <p class="pb-2 font-semibold">{{ item.name }}</p>
                <p class="pb-2 font-semibold">RM{{ item.price.toFixed(2) }}</p>
              </div>
              <div class="h-[90px] sm:h-[100px] text-lg xl:text-xl">
                <p
                  v-if="selectedType === MenuItemType.Bingsu"
                  class="line-clamp-3"
                >
                  Go with
                  {{ (item as BingsuItem).recommendedToppings.join(" + ") }}
                </p>
                <p v-else class="line-clamp-3">
                  {{ (item as DrinkOrToppingItem).description }}
                </p>
              </div>
              <BingsuMenuModal
                v-if="selectedType === MenuItemType.Bingsu"
                :bingsu-image-name="item.imageName"
                :bingsu-name="item.name"
                :price="item.price"
                :recommended-toppings="(item as BingsuItem).recommendedToppings"
              />
              <DrinksMenuModal
                v-else-if="selectedType === MenuItemType.Drinks"
                :drinks-description="(item as DrinkOrToppingItem).description"
                :drinks-name="item.name"
                :drinks-image-name="item.imageName"
                :price="item.price"
              />
              <ToppingMenu
                v-else="selectedType === MenuItemType.Topping"
                :topping-name="item.name"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="sticky bottom-0 z-40 flex justify-between items-center">
        <p class="p-5 bg-creamyellowbq rounded-full">
          Total: RM{{ store.getOrderPriceTotal }}
        </p>
        <SummaryMenuModal />
      </section>
    </div>
  </section>
</template>
<style scoped></style>
