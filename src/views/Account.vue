<template>
  <h1>Account</h1>
  <p>{{ userStore.user.displayName }}</p>
</template>

<script setup>
import { useUserStore } from "../store/user";
const userStore = useUserStore();
</script>
