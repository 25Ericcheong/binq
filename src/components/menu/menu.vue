<script setup lang="ts">
import { MenuItemType } from "@/components/menu/menu-item-type";
import { MENU } from "@/components/menu/menu-items";
import "@/output.css";
import { getImageUrl } from "@/util/image";
import { ref, watch } from "vue";

const FEEDME_URL = "https://feedme.cc/6a02e38d71b30e001c39b38c";

interface MenuItemBase {
  price: number;
  priceSmall?: number;
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
  [MenuItemType.DubaiCookie]: DrinkOrToppingItem[];
  [MenuItemType.Croffle]: DrinkOrToppingItem[];
}

const IMAGE_FOLDER: Record<string, string> = {
  [MenuItemType.Bingsu]: "bingsus",
  [MenuItemType.Drinks]: "drinks",
  [MenuItemType.Topping]: "toppings",
  [MenuItemType.DubaiCookie]: "cookies",
  [MenuItemType.Croffle]: "croffles",
};

const selectedType = ref<MenuItemType>(MenuItemType.Bingsu);
const specificMenuItems = ref<MenuItemBase[] | BingsuItem[]>(
  MENU[selectedType.value]
);

// Items whose photo hasn't been shot yet fall back to a branded placeholder
const failedImages = ref<Set<string>>(new Set());
function markImageFailed(imageName: string) {
  failedImages.value = new Set(failedImages.value).add(imageName);
}

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
      <section class="sticky top-0 z-40 px-0 sm:px-5 py-7 bg-creamyellowbq">
        <div class="flex flex-col items-center gap-4">
          <h2
            class="text-center self-center text-5xl xl:text-6xl header-font font-bold hidden sm:block"
          >
            {{ selectedType }}
          </h2>
          <div class="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto">
            <button
              v-for="type in MenuItemType"
              :key="type"
              @click="() => handleTypeUpdate(type)"
              class="p-2 md:px-4 md:py-2 rounded-full whitespace-nowrap text-sm md:text-base xl:text-lg"
              :class="
                type === selectedType
                  ? 'bg-darkorangebq text-creamwhitebq'
                  : ' text-darkorangebq border-solid border-2 border-darkorangebq'
              "
            >
              {{ type }}
            </button>
          </div>
          <a
            :href="FEEDME_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-darkorangebq text-creamwhitebq font-semibold px-6 py-2.5 rounded-full text-sm md:text-base"
          >
            Order online via FeedMe →
          </a>
        </div>
      </section>
      <section class="flex flex-col mb-10">
        <div class="grid w-full grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 sm:max-w-[1100px] sm:mx-auto">
          <div
            v-for="item in specificMenuItems"
            class="border-solid border-2 rounded-md border-darkorangebq flex flex-col overflow-hidden bg-creamyellowbq shadow-lg"
          >
            <!-- Photo — square frame matching the 1200×1200 assets, so the full photo shows centered -->
            <div class="p-3 pb-0 flex-shrink-0">
              <div
                v-if="failedImages.has(item.imageName)"
                class="w-full aspect-square rounded-xl flex items-center justify-center bg-creamwhitebq"
              >
                <img
                  class="w-16 h-16 object-contain opacity-30"
                  src="../../assets/logo/binq.jpg"
                  :alt="item.name + ' — photo coming soon'"
                />
              </div>
              <picture v-else class="block w-full aspect-square rounded-xl overflow-hidden">
                <source :srcset="getImageUrl(item.imageName, 'menu', IMAGE_FOLDER[selectedType], true)" type="image/webp" />
                <source :srcset="getImageUrl(item.imageName, 'menu', IMAGE_FOLDER[selectedType])" type="image/jpg" />
                <img
                  class="w-full h-full object-center"
                  :class="selectedType === MenuItemType.Topping ? 'object-contain' : 'object-cover'"
                  :style="selectedType === MenuItemType.Topping ? 'mix-blend-mode:multiply' : ''"
                  :src="getImageUrl(item.imageName, 'menu', IMAGE_FOLDER[selectedType])"
                  :alt="item.name"
                  @error="markImageFailed(item.imageName)"
                />
              </picture>
            </div>

            <!-- Text -->
            <div class="px-3 pt-2 pb-3 flex flex-col gap-1">
              <p class="font-semibold text-sm leading-tight">{{ item.name }}</p>
              <p v-if="selectedType !== MenuItemType.Topping" class="text-xs opacity-60 line-clamp-2 leading-snug">
                <template v-if="selectedType === MenuItemType.Bingsu">{{ (item as BingsuItem).recommendedToppings.join(", ") }}</template>
                <template v-else>{{ (item as DrinkOrToppingItem).description }}</template>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
