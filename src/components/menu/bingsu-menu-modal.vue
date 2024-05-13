<script setup lang="ts">
import type { CartItemBingsu } from "@/stores/useMenuStore";
import { ref, watch } from "vue";
import { MenuItemType } from "./menu-item-type";
import { MENU } from "./menu-items";

const props = defineProps({
  bingsuName: { type: String, required: true },
  bingsuImagePath: { type: String, required: true },
  price: { type: Number, required: true },
  recommendedToppings: { type: Array<String>, required: true },
});

const dialog = ref<HTMLDialogElement>();
const cartItemBingsu = ref<CartItemBingsu>({
  price: props.price,
  name: props.bingsuName,
  quantity: 1,
  type: MenuItemType.Bingsu,
  toppings: [],
  instructions: undefined,
  isNormalMilk: undefined,
  hasCreamCheese: undefined,
  hasKonjacJelly: undefined,
  mangoToppings: undefined,
});
const AVAILABLE_TOPPINGS = MENU.Topping.map((t) => t.name);
const NUM_REQUIRED_TOPPINGS = 3;

watch(
  () => cartItemBingsu.value.toppings,
  (val, _) => {
    console.log(val);
  }
);

const DECREASE_OPACITY_CLASS = "opacity-50";

function openBingsuMenuModal() {
  dialog.value?.showModal();
}
</script>
<template class="body-font text-xl xl:text-2xl">
  <section class="w-full h-[50px] flex justify-end">
    <button
      class="bg-darkorangebq text-creamwhitebq p-3 rounded-full items-center"
      @click="openBingsuMenuModal"
    >
      Add item
    </button>
  </section>
  <dialog
    ref="dialog"
    class="backdrop:bg-blackbq backdrop:opacity-50 h-full w-[390px] bg-creamyellowbq"
  >
    <img
      :src="props.bingsuImagePath"
      alt="Image of bingsu that Binq has specially created"
      class="h-[40%] w-full mb-8"
    />
    <section class="mx-3 text-darkorangebq">
      <div
        class="flex flex-col pb-10 border-b-4 border-darkorangebq border-solid"
      >
        <div class="flex justify-between">
          <p class="pb-2 font-semibold">{{ props.bingsuName }}</p>
          <p class="pb-2 font-semibold">RM{{ props.price.toFixed(2) }}</p>
        </div>
        <p>
          Customise your experience with your favorite sides or go with our
          recommendations with
          {{ props.recommendedToppings.join(" & ") }}
        </p>
      </div>
      <div
        v-if="props.bingsuName === 'White Peach Oolong'"
        class="py-10 border-b-4 border-darkorangebq border-solid"
      >
        <p class="pb-5 font-semibold">Konjac Jelly</p>
        <div class="flex items-center pb-4">
          <input
            type="radio"
            v-bind:value="true"
            v-model="cartItemBingsu.hasKonjacJelly"
            class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
          />
          <label>Include</label>
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            v-bind:value="false"
            v-model="cartItemBingsu.hasKonjacJelly"
            class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
          />
          <label>Exclude</label>
        </div>
      </div>
      <div class="py-10 border-b-4 border-darkorangebq border-solid">
        <div class="pb-4 flex justify-between">
          <p class="font-semibold">Select Toppings</p>
          <p>Select 3</p>
        </div>
        <div
          v-for="toppingName in AVAILABLE_TOPPINGS"
          class="flex items-center pb-4"
        >
          <input
            type="checkbox"
            :value="toppingName"
            v-model="cartItemBingsu.toppings"
            class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            :disabled="
              cartItemBingsu.toppings.length === NUM_REQUIRED_TOPPINGS &&
              !cartItemBingsu.toppings.includes(toppingName)
            "
            :class="{
              DECREASE_OPACITY_CLASS:
                cartItemBingsu.toppings.length === NUM_REQUIRED_TOPPINGS &&
                !cartItemBingsu.toppings.includes(toppingName),
            }"
          />
          <label>{{ toppingName }}</label>
        </div>
      </div>
      <form method="dialog"><button>Confirm</button></form>
    </section>
  </dialog>
</template>
<style>
html {
  &:has(dialog[open]) {
    overflow: hidden;
  }
}

dialog::-webkit-scrollbar {
  width: 5px; /* width of the entire scrollbar */
}

dialog::-webkit-scrollbar-track {
  background: #fbe8b5; /* color of the tracking area */
}

dialog::-webkit-scrollbar-thumb {
  background-color: #d26624; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
}
</style>
