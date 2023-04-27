<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { logout } from "../services/auth";

const router = useRouter();
const userStore = useUserStore();
</script>

<template>
  <div class="container">
    <v-layout>
      <v-app-bar class="nav-bar">
        <div class="buttons">
          <v-btn @click="router.push(`/`)">
            <v-icon icon="md:home" style="margin-right: 5px" />Home
          </v-btn>
          <v-btn @click="router.push(`/teams`)">
            <v-icon icon="md:sports_soccer" style="margin-right: 5px" />
            Teams</v-btn
          >
          <v-btn @click="router.push(`/players`)">
            <v-icon icon="md:groups" style="margin-right: 5px" />
            Players</v-btn
          >
          <v-btn v-if="userStore.user" @click="router.push(`/account`)">
            <v-icon icon="md:person" style="margin-right: 5px" />{{
              userStore.user.displayName
            }}</v-btn
          >
        </div>
        <v-btn v-if="userStore.user" @click="logout" style="margin-right: 10px">
          <v-icon icon="md:logout" style="margin-right: 5px" />
          Logout
        </v-btn>
        <v-btn v-else @click="router.push('/login')">
          <v-icon icon="md:login" style="margin-right: 5px" />
          Login
        </v-btn>
      </v-app-bar>
    </v-layout>
    <v-layout>
      <v-app-bar class="mobile-bar">
        <div class="buttons">
          <v-btn @click="router.push(`/`)">
            <v-icon icon="md:home" style="margin-right: 5px" />H
          </v-btn>
          <v-btn @click="router.push(`/teams`)">
            <v-icon icon="md:sports_soccer" style="margin-right: 5px" />
            T</v-btn
          >
          <v-btn @click="router.push(`/players`)">
            <v-icon icon="md:groups" style="margin-right: 5px" />
            P</v-btn
          >
          <v-btn v-if="userStore.user" @click="router.push(`/account`)">
            <v-icon icon="md:person" style="margin-right: 5px" />{{
              userStore.user.displayName[0]
            }}</v-btn
          >
        </div>
        <v-btn v-if="userStore.user" @click="logout" style="margin-right: 10px">
          <v-icon icon="md:logout" style="margin-right: 5px" />
        </v-btn>
        <v-btn v-else @click="router.push('/login')">
          <v-icon icon="md:login" style="margin-right: 5px" />
        </v-btn>
      </v-app-bar>
    </v-layout>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 50px;
}

.buttons {
  margin: 0 auto;
}

.mobile-bar {
  display: none;
}
/*Mobile version*/

@media only screen and (max-width: 580px) {
  .nav-bar {
    display: none;
  }
  .mobile-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    background-color: white;
    z-index: 900;
  }
}
</style>
