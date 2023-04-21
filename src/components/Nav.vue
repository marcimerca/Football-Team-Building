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
</style>
