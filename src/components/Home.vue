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
// instead of :value="words" @input="onInput" - this can be shorten to v-model="words" - which references the variable name of the affected ref

// Practice condtional rendering
const show = ref(true);

function onClickShow() {
  show.value = !show.value;
}

// Practice list rendering
interface Todo {
  id: number;
  text: string;
}

let id = 0;
const newTodo = ref("");
const todos = ref([
  { id: id++, text: "Learn HTML" },
  { id: id++, text: "Learn JavaScript" },
  { id: id++, text: "Learn Vue" },
]);

function addTodo() {
  todos.value = [...todos.value, { id: id++, text: newTodo.value }];
  newTodo.value = "";
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t.id !== todo.id);
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

  <div>
    <h1>Conditionally render</h1>
    <button @click="onClickShow">Click to show something else</button>
    <p v-if="show">SHOWINGGGG</p>
    <p v-else>NOT SHOWINGGGG</p>
  </div>

  <div>
    <h1>List rendering prace</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  color: blue;
}
</style>
