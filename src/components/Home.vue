<script setup lang="ts">
import { reactive } from "vue";

defineProps<{
  msg: string;
}>();

const testing = reactive({
  text: "Someone has to start from somewhere",
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ testing.text }}</p>
  </div>
</template>

<style scoped></style>
