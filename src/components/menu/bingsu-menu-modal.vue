<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  bingsuName: { type: String, required: true },
  bingsuImagePath: { type: String, required: true },
  price: { type: Number, required: true },
  recommendedToppings: { type: Array<String>, required: true },
});

const dialog = ref<HTMLDialogElement>();

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
    <section class="mx-3">
      <div class="pb-2 flex flex-col text-darkorangebq">
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
      <form method="dialog"><button>Confirm</button></form>
    </section>
  </dialog>
</template>
<style scoped></style>
