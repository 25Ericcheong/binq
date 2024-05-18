<script setup lang="ts">
import { MenuItemType } from "@/components/menu/menu-item-type";
import { useMenuStore, type CartItemDrinks } from "@/stores/useMenuStore";
import { computed, ref } from "vue";

const props = defineProps({
  drinksName: { type: String, required: true },
  drinksImagePath: { type: String, required: true },
  drinksDescription: { type: String, required: true },
  price: { type: Number, required: true },
});

const INITIAL_CART_ITEM = {
  price: props.price,
  name: props.drinksName,
  quantity: 1,
  type: MenuItemType.Drinks,
  topping: undefined,
  instructions: undefined,
  sugarLevel: undefined,
  iceLevel: undefined,
  hasCreamCheese: undefined,
} as CartItemDrinks;

const store = useMenuStore();
const dialog = ref<HTMLDialogElement>();
const cartItemDrink = ref<CartItemDrinks>({ ...INITIAL_CART_ITEM });

const WATERMELON_CHEEZO = "Watermelon Cheezo";
const SIGNATURE_BINQ_TEA = "Signature Binq Tea";
const LYCHEE_CHEEZO = "Lychee Cheezo";
const GRAPE_CHEEZO = "Grape Cheezo";
const ROASTED_DA_HONG_PAO_MILK_TEA = "Roasted Da Hong Pao Milk Tea";

const SPECIFIC_AVAILABLE_TOPPINGS = [
  "White Crystal Jelly",
  "Nata De Coco",
  "Peach Popping Boba",
  "Passionfruit Popping Boba",
  "Waterchestnut Popping Boba",
  "Lychee Popping Boba",
  "No Topping",
];
const SUGAR_LEVELS = [100, 75, 50, 25, 0];
const ICE_LEVELS = [100, 50, 0];

function openDrinksMenuModal() {
  dialog.value?.showModal();
}

function closeDrinksMenuModal() {
  resetCartItem();
  dialog.value?.close();
}

function resetCartItem() {
  cartItemDrink.value = { ...INITIAL_CART_ITEM };
}

const hasSugarLevelBeenChosen = computed(() => {
  return cartItemDrink.value.sugarLevel !== undefined;
});

const hasIceLevelBeenChosen = computed(() => {
  return cartItemDrink.value.iceLevel !== undefined;
});

const hasCreamCheeseBeenChosen = computed(() => {
  return cartItemDrink.value.hasCreamCheese !== undefined;
});

const hasToppingBeenChosen = computed(() => {
  return cartItemDrink.value.topping !== undefined;
});

const shouldDisableConfirmationButton = computed(() => {
  if (!hasToppingBeenChosen.value || !hasSugarLevelBeenChosen.value) {
    return true;
  }

  if (props.drinksName === SIGNATURE_BINQ_TEA) {
    return !hasIceLevelBeenChosen.value;
  }

  if (
    props.drinksName === LYCHEE_CHEEZO ||
    props.drinksName === GRAPE_CHEEZO ||
    props.drinksName === WATERMELON_CHEEZO
  ) {
    return !hasCreamCheeseBeenChosen.value;
  }

  if (props.drinksName === ROASTED_DA_HONG_PAO_MILK_TEA) {
    return !hasCreamCheeseBeenChosen.value || !hasIceLevelBeenChosen.value;
  }

  // this should not happen as case has not been handled
  throw true;
});

function handleDrinksConfirmation() {
  store.addDrinksOrder(cartItemDrink.value);
  resetCartItem();
  closeDrinksMenuModal();
}
</script>
<template>
  <section class="w-full h-[50px] flex justify-end">
    <button
      class="bg-darkorangebq text-creamwhitebq p-3 rounded-full items-center"
      @click="openDrinksMenuModal"
    >
      Add item
    </button>
  </section>
  <dialog
    ref="dialog"
    class="backdrop:bg-blackbq backdrop:opacity-50 h-full w-[390px] bg-creamyellowbq"
  >
    <div class="fixed h-0">
      <button
        class="w-[40px] h-[40px] bg-darkorangebq absolute top-5 left-[335px] rounded-full"
        @click="closeDrinksMenuModal"
      >
        <img class="h-full w-full" src="../../assets/icons/cross.jpg" />
      </button>
    </div>
    <img
      :src="props.drinksImagePath"
      alt="Image of drinks that Binq has specially created"
      class="h-[40%] w-full mb-8"
    />
    <section class="mx-3 text-darkorangebq">
      <div
        class="flex flex-col pb-10 border-b-4 border-darkorangebq border-solid"
      >
        <div class="flex justify-between">
          <p class="pb-2 font-semibold">{{ props.drinksName }}</p>
          <p class="pb-2 font-semibold">RM{{ props.price.toFixed(2) }}</p>
        </div>
        <p>
          {{ props.drinksDescription }}
        </p>
      </div>

      <div class="py-10 border-b-4 border-darkorangebq border-solid">
        <div class="pb-10">
          <p class="pb-5 font-semibold">Sugar Level</p>
          <div
            v-for="sugarNumLevel in SUGAR_LEVELS"
            class="flex items-center pb-4"
          >
            <input
              type="radio"
              :value="sugarNumLevel"
              v-model="cartItemDrink.sugarLevel"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>{{ sugarNumLevel }}%</label>
          </div>
        </div>
        <div v-if="props.drinksName === SIGNATURE_BINQ_TEA" class="pb-10">
          <p class="pb-5 font-semibold">Ice Level</p>
          <div v-for="iceNumLevel in ICE_LEVELS" class="flex items-center pb-4">
            <input
              type="radio"
              :value="iceNumLevel"
              v-model="cartItemDrink.iceLevel"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>{{ iceNumLevel }}%</label>
          </div>
        </div>
        <div
          v-if="
            props.drinksName === WATERMELON_CHEEZO ||
            props.drinksName === LYCHEE_CHEEZO ||
            props.drinksName === GRAPE_CHEEZO ||
            props.drinksName === ROASTED_DA_HONG_PAO_MILK_TEA
          "
          class="pb-10"
        >
          <p class="pb-5 font-semibold">Cream Cheese</p>
          <div class="flex items-center pb-4">
            <input
              type="radio"
              v-bind:value="true"
              v-model="cartItemDrink.hasCreamCheese"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Include</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              v-bind:value="false"
              v-model="cartItemDrink.hasCreamCheese"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Exclude</label>
          </div>
        </div>
        <div class="py-10 border-b-4 border-darkorangebq border-solid">
          <div class="pb-5 flex justify-between">
            <p class="font-semibold">Select Topping</p>
            <p>Select 1</p>
          </div>
          <div
            v-for="toppingName in SPECIFIC_AVAILABLE_TOPPINGS"
            class="flex items-center pb-4"
          >
            <input
              type="radio"
              :value="toppingName"
              v-model="cartItemDrink.topping"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>{{ toppingName }}</label>
          </div>
        </div>
        <div class="py-10 mb-24 border-b-4 border-darkorangebq border-solid">
          <div class="mb-5">
            <label class="font-semibold">Special Instructions</label>
          </div>
          <textarea
            class="bg-creamyellowbq border-solid border-2 border-darkorangebq p-2 placeholder:text-darkorangebq h-[300px] w-full"
            v-model="cartItemDrink.instructions"
            placeholder="Please fill if you have any special request"
            type="text"
          ></textarea>
        </div>
        <div class="fixed bottom-10 bg-creamyellowbq block">
          <button
            class="w-[365px] p-2 bg-darkorangebq rounded-full text-creamwhitebq"
            :class="{
              'opacity-50': shouldDisableConfirmationButton,
            }"
            @click="handleDrinksConfirmation"
            :disabled="shouldDisableConfirmationButton"
          >
            Confirm
          </button>
        </div>
      </div>
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
