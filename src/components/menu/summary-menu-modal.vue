<script setup lang="ts">
import { useMenuStore } from "@/stores/useMenuStore";
import { ref } from "vue";

const store = useMenuStore();
const dialog = ref<HTMLDialogElement>();

function openSummaryuMenuModal() {
  dialog.value?.showModal();
}

function closeSummmaryMenuModal() {
  dialog.value?.close();
}
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
      <div class="fixed top-14 left-[50%] ml-[125px]">
        <button
          class="w-[40px] h-[40px] bg-darkorangebq border-creamwhitebq border-solid border-2 rounded-full"
          @click="closeSummmaryMenuModal"
        >
          <img class="h-full w-full" src="../../assets/icons/cross.jpg" />
        </button>
      </div>
      <div class="bg-darkorangebq text-creamwhitebq py-10 px-5">
        <h1 class="text-3xl xl:text-6xl header-font font-bold pb-3">Summary</h1>
        <p>
          Please confirm your order at the cashier by paying. This speeds up our
          ability to queue orders. Thank you
        </p>
      </div>
      <section
        v-if="store.getBingsuOrders.length > 0"
        class="p-5 text-darkorangebq"
      >
        <h1 class="text-3xl xl:text-5xl header-font font-bold pb-3">
          Bingsu ({{ store.getBingsuOrders.length }})
        </h1>
        <div v-for="bingsu in store.getBingsuOrders" class="pb-5">
          <h2 class="text-xl xl:text-3xl font-bold pb-2">
            {{ bingsu.name }} (RM{{ bingsu.price }})
          </h2>
          <div class="pb-3">
            <p>&ensp;- Toppings</p>
            <p v-for="topping in bingsu.toppings">&ensp; {{ topping }}</p>
          </div>
          <div v-if="bingsu.hasCreamCheese !== undefined" class="pb-3">
            <p>&ensp;- Cream Cheese</p>
            <p v-if="bingsu.hasCreamCheese">&ensp; Include</p>
            <p v-else>&ensp; Exclude</p>
          </div>
          <div v-if="bingsu.hasKonjacJelly !== undefined" class="pb-3">
            <p>&ensp;- Konjac Jelly</p>
            <p v-if="bingsu.hasKonjacJelly">&ensp; Include</p>
            <p v-else>&ensp; Exclude</p>
          </div>
          <div v-if="bingsu.mangoToppings !== undefined" class="pb-3">
            <p>&ensp;- Mango Toppings</p>
            <p>&ensp; {{ bingsu.mangoToppings }}</p>
          </div>
          <div v-if="bingsu.isNormalOrOatMilk !== undefined" class="pb-3">
            <p>&ensp;- Milk Type</p>
            <p>&ensp; {{ bingsu.isNormalOrOatMilk }}</p>
          </div>
          <div v-if="bingsu.instructions !== undefined">
            <p>&ensp;- Instructions</p>
            <p>&ensp; {{ bingsu.instructions }}</p>
          </div>
        </div>
      </section>
      <section
        v-if="store.getDrinksOrders.length > 0"
        class="p-5 text-darkorangebq"
      >
        <h1 class="text-3xl xl:text-5xl header-font font-bold pb-3">
          Drinks ({{ store.getDrinksOrders.length }})
        </h1>
        <div v-for="drink in store.getDrinksOrders" class="pb-5">
          <h2 class="text-xl xl:text-3xl font-bold pb-2">
            {{ drink.name }} (RM{{ drink.price }})
          </h2>
          <div class="pb-3">
            <p>&ensp;- Sugar Level</p>
            <p>&ensp; {{ drink.sugarLevel }}%</p>
          </div>
          <div v-if="drink.iceLevel !== undefined" class="pb-3">
            <p>&ensp;- Ice Level</p>
            <p>&ensp; {{ drink.iceLevel }}%</p>
          </div>
          <div v-if="drink.hasCreamCheese !== undefined" class="pb-3">
            <p>&ensp;- Cream Cheese</p>
            <p v-if="drink.hasCreamCheese">&ensp; Include</p>
            <p v-else>&ensp; Exclude</p>
          </div>
          <div v-if="drink.topping !== undefined" class="pb-3">
            <p>&ensp;- Topping Chosen</p>
            <p>&ensp; {{ drink.topping }}</p>
          </div>
          <div v-if="drink.instructions !== undefined">
            <p>&ensp;- Instructions</p>
            <p>&ensp; {{ drink.instructions }}</p>
          </div>
        </div>
      </section>
      <section
        v-if="store.getToppingOrders.length > 0"
        class="p-5 text-darkorangebq"
      >
        <h1 class="text-3xl xl:text-5xl header-font font-bold pb-3">
          Additional Toppings ({{
            store.getToppingOrders.reduce(
              (sum, prev) => sum + prev.quantity,
              0
            )
          }})
        </h1>
        <div v-for="topping in store.getToppingOrders" class="pb-5">
          <p class="pb-2">
            {{ topping.name }} (RM{{ topping.price }}) X {{ topping.quantity }}
          </p>
        </div>
      </section>
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
