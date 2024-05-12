<script setup lang="ts">
import { useMenuStore } from "@/stores/useMenuStore";
import { computed, ref } from "vue";

const props = defineProps({
  toppingName: { type: String, required: true },
});

const store = useMenuStore();
const quantitySelected = ref<number>(0);

const condButtonDisable = computed(() => ({
  "opacity-50": quantitySelected.value === 0,
}));

function handleQuantityUpdate(numberUpdate: number) {
  quantitySelected.value = quantitySelected.value + numberUpdate;
}

function handleToppingConfirmation() {
  store.addToppingOrder(quantitySelected.value, props.toppingName);
  quantitySelected.value = 0;
}
</script>
<template>
  <section class="w-full h-[50px] flex body-font text-xl xl:text-2xl">
    <div class="w-1/2 flex justify-between items-center">
      <button
        class="bg-darkorangebq h-3/4 p-1 rounded-full"
        :disabled="quantitySelected === 0"
        :class="condButtonDisable"
        @click="() => handleQuantityUpdate(-1)"
      >
        <img class="h-full" src="../../assets/icons/subtract.jpg" />
      </button>
      <p>{{ quantitySelected }}</p>
      <button
        class="bg-darkorangebq h-3/4 p-1 rounded-full"
        @click="() => handleQuantityUpdate(1)"
      >
        <img class="h-full" src="../../assets/icons/addition.jpg" />
      </button>
    </div>
    <div class="w-1/2 flex justify-end">
      <button
        class="bg-darkorangebq text-creamwhitebq p-3 rounded-full items-center"
        :disabled="quantitySelected === 0"
        :class="condButtonDisable"
        @click="handleToppingConfirmation"
      >
        Add item
      </button>
    </div>
  </section>
</template>
<style scoped></style>
