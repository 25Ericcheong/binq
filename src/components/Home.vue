<script setup lang="ts">
import { reactive } from "vue";

defineProps<{
  title: string;
}>();

const testing = reactive({
  text: "Someone has to start from somewhere",
});
</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <p>{{ testing.text }}</p>
  </div>
</template>

<style scoped>
.title {
  color: #ff5733;
}
</style>
