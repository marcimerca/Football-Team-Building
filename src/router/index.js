import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
import TeamDetails from "../views/TeamDetails.vue";
import Players from "../views/Players.vue";
import PlayerDetails from "../views/PlayerDetails.vue";
import NotFound from "../views/NotFound.vue";

import { useUserStore } from "../store/user";

import { checkUserIsLoggedIn } from "../services/auth";

const loggedInGuard = async (to, from, next) => {
  try {
    const userStore = useUserStore();

    await checkUserIsLoggedIn();

    if (to.name !== "login" && !userStore.isAuthenticated)
      next({ name: "login" });
    else next();
  } catch (err) {
    console.error(err);
    next({ name: "login" });
  }
};

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
      path: "/teams/:teamId",
      name: "team-details",
      component: TeamDetails,
      props: true,
    },
    {
      path: "/players",
      name: "players",
      component: Players,
    },
    {
      path: "/players/:playerId",
      name: "player-details",
      component: PlayerDetails,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/Account.vue"),
      beforeEnter: loggedInGuard,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
