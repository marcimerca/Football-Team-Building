<template>
  <div
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    "
  >
    <h1>Account</h1>
    <p>{{ userStore.user.displayName }}</p>
    <v-img
      :src="userStore.user.photoURL"
      width="50px"
      style="border-radius: 50%"
    >
    </v-img>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user";
const userStore = useUserStore();
</script>
