import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "../store/user";

import { checkUserIsLoggedIn } from "../services/auth";

const loggedInGuard = async (to, from, next) => {
  try {
    const userStore = useUserStore();

    await checkUserIsLoggedIn();

    if (!userStore.isAuthenticated) {
      console.warn(
        "User is not logged in, redirecting to login page",
        "Wants to go to",
        to.name
      );
      next({ name: "login" });
    } else next();
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
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/teams",
      name: "teams",
      component: () => import("../views/Teams.vue"),
    },
    {
      path: "/teams/:teamId",
      name: "team-details",
      component: () => import("../views/TeamDetails.vue"),
      props: true,
    },
    {
      path: "/players",
      name: "players",
      component: () => import("../views/Players.vue"),
    },
    {
      path: "/players/:playerId",
      name: "player-details",
      component: () => import("../views/PlayerDetails.vue"),
      props: true,
    },
    {
      path: "/players/new",
      name: "new player",
      component: () => import("../views/NewPlayer.vue"),
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
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
