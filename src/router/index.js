import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams,
    },
  ],
});

export default router;
