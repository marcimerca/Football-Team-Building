<template>
  <div v-if="!userStore.user">
    <v-btn @click="login">Login With Google</v-btn>
  </div>
  <div v-else>
    <p>Welcome {{ userStore.user.displayName }}</p>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script setup>
import { login, logout } from "../services/auth";
import { useUserStore } from "../store/user";

const userStore = useUserStore();
</script>
