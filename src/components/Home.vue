<script setup lang="ts">
import { reactive, ref, computed, onMounted } from "vue";

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

// Practice list rendering and using computed for a ref basedo n other reactive data sources
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let id = 0;
const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

const filteredTodos = computed(() => {
  if (hideCompleted.value) {
    return todos.value.filter((t) => t.done !== hideCompleted.value);
  }

  return todos.value;
});

function addTodo() {
  todos.value = [
    ...todos.value,
    { id: id++, text: newTodo.value, done: false },
  ];
  newTodo.value = "";
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t.id !== todo.id);
}

// Practice lifecycle and template refs. Directly updating DOM ourselves
const pElementRef = ref<null | HTMLParagraphElement>(null);

onMounted(() => {
  if (pElementRef.value) {
    pElementRef.value.textContent = "Mounted! Something else sssnow";
  }
});
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
    <h1>List rendering practice</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>

  <div>
    <h1>Lifecycle and template refs practice. Directly updating DOM our own</h1>
    <p ref="pElementRef">Something else</p>
  </div>
</template>

<style scoped>
.title {
  color: blue;
}

.done {
  text-decoration: line-through;
}
</style>
