<script setup lang="ts">
import { reactive, ref } from "vue";

defineProps<{
  title: string;
}>();

const blueStyle = ref("title");
const description = ref("More description here");
const testing = reactive({
  text: "Someone has to start from somewhere",
});

// Practice event listener
const startingValue = ref(0);

function increment() {
  startingValue.value++;
}

function decrement() {
  startingValue.value--;
}

// Practice form bindings
const words = ref("");

function onInput(e: Event) {
  words.value = (e.target as HTMLInputElement).value;
}
</script>

<template>
  <div>
    <h1 :class="blueStyle">{{ title }}</h1>
    <p>{{ testing.text }}</p>
    <p>{{ description }}</p>
  </div>
  <div>
    <h1 :class="blueStyle">Event listener practice</h1>
    <button @click="increment">
      Click to increase count: {{ startingValue }}
    </button>
    <button @click="decrement">
      Click to decrease count: {{ startingValue }}
    </button>
  </div>
  <div>
    <h1>Form binding practice</h1>
    <input :value="words" @input="onInput" placeholder="Type something here" />
    <p>{{ words }}</p>
  </div>
</template>

<style scoped>
.title {
  color: blue;
}
</style>
