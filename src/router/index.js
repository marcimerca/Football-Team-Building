import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
import TeamDetails from "../views/TeamDetails.vue";
import NotFound from "../views/NotFound.vue";

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
    {
      path: "/teams/:id",
      name: "team-details",
      component: TeamDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
