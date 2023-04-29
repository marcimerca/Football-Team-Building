<template>
  <div v-if="!userStore.user">
    <v-btn @click="login">Login With Google</v-btn>
  </div>
  <div v-else>
    <h3>Welcome</h3>
    <h3 style="margin-bottom: 2px">{{ userStore.user.displayName }}</h3>
    <v-img style="margin-bottom: 2px" :src="playerwhite"></v-img>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script setup>
import playerwhite from "../images/playerwhite.png";
import { login, logout } from "../services/auth";
import { useUserStore } from "../store/user";

const userStore = useUserStore();
</script>
<style scoped>
h3 {
  color: rgb(236, 236, 236);
}
</style>
