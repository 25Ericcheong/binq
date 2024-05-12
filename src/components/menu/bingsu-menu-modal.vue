<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<HTMLDialogElement>();

function handleMenuModalToggle() {
  console.log("test");
  dialog.value?.showModal();
}
</script>
<template>
  <section
    class="w-full h-[50px] flex justify-end body-font text-xl xl:text-2xl"
  >
    <button
      class="bg-darkorangebq text-creamwhitebq p-3 rounded-full items-center"
      @click="handleMenuModalToggle"
    >
      Add item
    </button>
  </section>
  <dialog
    ref="dialog"
    class="backdrop:bg-blackbq backdrop:opacity-50 h-full w-[390px]"
  >
    <p>Testing</p>
    <form method="dialog"><button>Confirm</button></form>
  </dialog>
</template>
<style scoped></style>
