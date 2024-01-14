<script setup lang="ts">
import Child from "./Child.vue";

defineProps<{
  title: string;
}>();

</script>

<template>
  <div>
    <h1 >{{ title }}</h1>
  </div>
  <Child msg="Temporary" />
</template>

<style scoped>
</style>
