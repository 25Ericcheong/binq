import { createRouter, createWebHistory } from "vue-router";

import Menu from "./components/menu/menu.vue";
import Home from "./views/home.vue";

const PATHS = {
  HOME: "/",
  MENU: "/menu",
};

const routes = [
  { path: PATHS.HOME, component: Home },
  { path: PATHS.MENU, component: Menu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { PATHS, router };
