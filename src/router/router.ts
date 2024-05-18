import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home.vue";
import Menu from "../views/menu.vue";

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
