import { createRouter, createWebHistory } from "vue-router";

import Menu from "./components/menu/menu.vue";
import Home from "./views/home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/menu", component: Menu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
