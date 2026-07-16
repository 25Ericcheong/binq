import { createRouter, createWebHistory } from "vue-router";

import Menu from "@/views/menu.vue";

export const PATHS = {
  HOME: "/",
  MENU: "/menu",
  BINGSU: "/bingsu",
  ABOUT: "/about-us",
  CATERING: "/catering",
  FIND_US: "/find-us",
};

const GA_ID = "G-JK4NSKLNWE";

const routes = [
  { path: PATHS.HOME,     redirect: PATHS.BINGSU },
  { name: "menu",     path: PATHS.MENU,     component: Menu },
  { name: "bingsu",   path: PATHS.BINGSU,   component: () => import("@/views/bingsu-page.vue") },
  { name: "about",    path: PATHS.ABOUT,    component: () => import("@/views/about-page.vue") },
  { name: "catering", path: PATHS.CATERING, component: () => import("@/views/catering-page.vue") },
  { name: "find-us",  path: PATHS.FIND_US,  component: () => import("@/views/find-us-page.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_ID, { page_path: to.fullPath });
  }
});

export { router };
