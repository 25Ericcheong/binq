<script setup lang="ts">
import { useMenuStore } from "@/stores/useMenuStore";
import { ref } from "vue";
import { MenuItemType } from "./menu-item-type";

const store = useMenuStore();
const dialog = ref<HTMLDialogElement>();

function openSummaryuMenuModal() {
  dialog.value?.showModal();
}

function closeSummmaryMenuModal() {
  dialog.value?.close();
}

const orders = store.getAllOrders;
const bingsus = orders.map((item) => item.type === MenuItemType.Bingsu);
const drinks = orders.map((item) => item.type === MenuItemType.Drinks);
const toppings = orders.map((item) => item.type === MenuItemType.Topping);
</script>
<template>
  <section>
    <button
      @click="openSummaryuMenuModal"
      class="p-3 md:p-4 mr-5 rounded-lg bg-darkorangebq text-creamwhitebq text-xl sm:text-3xl"
    >
      Review Order
    </button>
    <dialog
      ref="dialog"
      class="backdrop:bg-blackbq backdrop:opacity-50 h-full w-[390px] bg-creamyellowbq"
    >
      <div class="fixed h-0">
        <button
          class="w-[40px] h-[40px] bg-darkorangebq absolute top-5 left-[335px] border-creamwhitebq border-solid border-2 rounded-full"
          @click="closeSummmaryMenuModal"
        >
          <img class="h-full w-full" src="../../assets/icons/cross.jpg" />
        </button>
      </div>
      <div class="bg-darkorangebq text-creamwhitebq p-10">
        <h2 class="self-center text-5xl xl:text-6xl header-font font-bold pb-3">
          Summary
        </h2>
        <p>
          Repeat your order at the cashier. This speeds up our ability to queue
          orders. Thank you
        </p>
      </div>
      <section></section>
    </dialog>
  </section>
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
