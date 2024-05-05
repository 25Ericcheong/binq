import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Menu from "./components/menu/menu.vue";

const routes = [
  { path: "/", component: App },
  { path: "/menu", component: Menu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
