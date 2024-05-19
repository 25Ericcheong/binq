import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home.vue";
import Menu from "@/views/menu.vue";

const PATHS = {
  HOME: "/",
  MENU: "/menu",
};

const routes = [
  { name: "home", path: PATHS.HOME, component: Home },
  { name: "menu", path: PATHS.MENU, component: Menu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.onError(() => {
  return { name: "home", path: PATHS.HOME, component: Home };
});

export { PATHS, router };
