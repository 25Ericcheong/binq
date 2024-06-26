<script setup lang="ts">
import { MenuItemType } from "@/components/menu/menu-item-type";
import { MENU, OAT_MILK } from "@/components/menu/menu-items";
import {
  OAT_MILK_PRICE,
  useMenuStore,
  type CartItemBingsu,
} from "@/stores/useMenuStore";
import { getImageUrl } from "@/util/image";
import { computed, ref } from "vue";

const props = defineProps({
  bingsuName: { type: String, required: true },
  bingsuImageName: { type: String, required: true },
  price: { type: Number, required: true },
  recommendedToppings: { type: Array<String>, required: true },
});

const INITIAL_CART_ITEM = {
  price: props.price,
  name: props.bingsuName,
  quantity: 1,
  type: MenuItemType.Bingsu,
  toppings: [],
  instructions: undefined,
  isNormalOrOatMilk: undefined,
  hasCreamCheese: undefined,
  hasKonjacJelly: undefined,
  mangoToppings: undefined,
} as CartItemBingsu;

const store = useMenuStore();
const dialog = ref<HTMLDialogElement>();
const cartItemBingsu = ref<CartItemBingsu>({ ...INITIAL_CART_ITEM });

const THE_DARK_KNIGHT = "The Dark Knight";
const WHITE_PEACH_OOLONG = "White Peach Oolong";
const ROASTED_SOYBEAN_OOLONG = "Roasted Soybean Oolong";
const MATCHA = "Matcha";
const MANGO = "Mango";
const KAMQUAT_JASMINE = "Kamquat Jasmine";
const HOJI_CHA_CHA = "Hoji Cha Cha";

const NORMAL_MILK = "Milk";
const AVAILABLE_TOPPINGS = MENU.Topping.map((t) => t.name);
const NUM_REQUIRED_TOPPINGS = 3;

function openBingsuMenuModal() {
  dialog.value?.showModal();
}

function closeBinqsuMenuModal() {
  resetCartItem();
  dialog.value?.close();
}

function resetCartItem() {
  cartItemBingsu.value = { ...INITIAL_CART_ITEM };
}

const hasKonjacKellyBeenChosen = computed(() => {
  return cartItemBingsu.value.hasKonjacJelly !== undefined;
});

const hasToppingsBeenChosen = computed(() => {
  return cartItemBingsu.value.toppings.length === NUM_REQUIRED_TOPPINGS;
});

const hasMilkOptionBeenChosen = computed(() => {
  return cartItemBingsu.value.isNormalOrOatMilk !== undefined;
});

const hasCreamCheeseBeenChosen = computed(() => {
  return cartItemBingsu.value.hasCreamCheese !== undefined;
});

const hasMangoToppingsBeenChosen = computed(() => {
  return cartItemBingsu.value.mangoToppings !== undefined;
});

const shouldDisableConfirmationButton = computed(() => {
  if (!hasToppingsBeenChosen.value) {
    return true;
  }

  if (props.bingsuName === WHITE_PEACH_OOLONG) {
    return !hasKonjacKellyBeenChosen.value;
  }

  if (props.bingsuName === THE_DARK_KNIGHT) {
    return !hasKonjacKellyBeenChosen.value || !hasMilkOptionBeenChosen.value;
  }

  if (props.bingsuName === ROASTED_SOYBEAN_OOLONG) {
    return !hasKonjacKellyBeenChosen.value || !hasCreamCheeseBeenChosen.value;
  }

  if (props.bingsuName === MATCHA || props.bingsuName === HOJI_CHA_CHA) {
    return (
      !hasKonjacKellyBeenChosen.value ||
      !hasCreamCheeseBeenChosen.value ||
      !hasMilkOptionBeenChosen.value
    );
  }

  if (props.bingsuName === MANGO) {
    return !hasMangoToppingsBeenChosen.value || !hasToppingsBeenChosen.value;
  }

  // only need to check that toppings have been chosen
  if (props.bingsuName === KAMQUAT_JASMINE) {
    return false;
  }

  // this should not happen as case has not been handled
  throw true;
});

function handleBingsuConfirmation() {
  store.addBingsuOrder(cartItemBingsu.value);
  resetCartItem();
  closeBinqsuMenuModal();
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
    <div class="fixed top-14 left-[50%] ml-[125px]">
      <button
        class="w-[40px] h-[40px] bg-darkorangebq rounded-full"
        @click="closeBinqsuMenuModal"
      >
        <img class="h-full w-full" src="../../assets/icons/cross.jpg" />
      </button>
    </div>

    <picture class="h-[50%] w-full mb-8">
      <source
        :srcset="getImageUrl(props.bingsuImageName, 'menu', 'bingsus', true)"
        type="image/webp"
      />
      <source
        :srcset="getImageUrl(props.bingsuImageName, 'menu', 'bingsus')"
        type="image/jpg"
      />
      <img
        class="w-full h-[50%]"
        :src="getImageUrl(props.bingsuImageName, 'menu', 'bingsus')"
        alt="Image of bingsu that Binq has specially created"
      />
    </picture>

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
        v-if="
          props.bingsuName === WHITE_PEACH_OOLONG ||
          props.bingsuName === THE_DARK_KNIGHT ||
          props.bingsuName === ROASTED_SOYBEAN_OOLONG ||
          props.bingsuName === MATCHA ||
          props.bingsuName === MANGO ||
          props.bingsuName === HOJI_CHA_CHA
        "
        class="py-10 border-b-4 border-darkorangebq border-solid"
      >
        <div
          v-if="
            props.bingsuName === ROASTED_SOYBEAN_OOLONG ||
            props.bingsuName === MATCHA ||
            props.bingsuName === HOJI_CHA_CHA
          "
          class="pb-10"
        >
          <p class="pb-5 font-semibold">Cream Cheese</p>
          <div class="flex items-center pb-4">
            <input
              type="radio"
              v-bind:value="true"
              v-model="cartItemBingsu.hasCreamCheese"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Include</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              v-bind:value="false"
              v-model="cartItemBingsu.hasCreamCheese"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Exclude</label>
          </div>
        </div>
        <div
          v-if="
            props.bingsuName === WHITE_PEACH_OOLONG ||
            props.bingsuName === THE_DARK_KNIGHT ||
            props.bingsuName === ROASTED_SOYBEAN_OOLONG ||
            props.bingsuName === MATCHA ||
            props.bingsuName === HOJI_CHA_CHA
          "
          class="pb-10"
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
        <div
          v-if="
            props.bingsuName === THE_DARK_KNIGHT ||
            props.bingsuName === MATCHA ||
            props.bingsuName === HOJI_CHA_CHA
          "
        >
          <p class="pb-5 font-semibold">Milk Type</p>
          <div class="flex items-center pb-4">
            <input
              type="radio"
              v-bind:value="OAT_MILK"
              v-model="cartItemBingsu.isNormalOrOatMilk"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Oat Milk (+RM{{ OAT_MILK_PRICE }})</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              v-bind:value="NORMAL_MILK"
              v-model="cartItemBingsu.isNormalOrOatMilk"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Normal Milk</label>
          </div>
        </div>
        <div v-if="props.bingsuName === MANGO">
          <p class="pb-5 font-semibold">Mango Topping Options</p>
          <div class="flex items-center pb-4">
            <input
              type="radio"
              value="Sago and Orange"
              v-model="cartItemBingsu.mangoToppings"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Sago and Orange</label>
          </div>
          <div class="flex items-center pb-4">
            <input
              type="radio"
              value="Sago only"
              v-model="cartItemBingsu.mangoToppings"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Sago only</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              value="Orange only"
              v-model="cartItemBingsu.mangoToppings"
              class="mr-4 accent-darkorangebq h-[20px] w-[20px]"
            />
            <label>Orange only</label>
          </div>
        </div>
      </div>
      <div class="py-10 border-b-4 border-darkorangebq border-solid">
        <div class="pb-5 flex justify-between">
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
              'opacity-50':
                cartItemBingsu.toppings.length === NUM_REQUIRED_TOPPINGS &&
                !cartItemBingsu.toppings.includes(toppingName),
            }"
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
          v-model="cartItemBingsu.instructions"
          placeholder="Please fill if you have any special request"
          type="text"
        ></textarea>
      </div>
      <div
        class="fixed bottom-10 left-[50%] bg-creamyellowbq block -ml-[160px]"
      >
        <button
          class="w-[315px] p-2 bg-darkorangebq rounded-full text-creamwhitebq"
          :class="{
            'opacity-50': shouldDisableConfirmationButton,
          }"
          @click="handleBingsuConfirmation"
          :disabled="shouldDisableConfirmationButton"
        >
          Confirm
        </button>
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
