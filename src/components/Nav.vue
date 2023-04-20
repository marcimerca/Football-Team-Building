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
          <v-btn @click="router.push(`/`)">Home</v-btn>
          <v-btn @click="router.push(`/teams`)">Teams</v-btn>
          <v-btn @click="router.push(`/players`)">Players</v-btn>
        </div>
        <span
          style="display: flex; align-items: center; margin-right: 10px"
          v-if="userStore?.user"
        >
          <v-icon icon="md:person" style="margin-right: 5px" />
          {{ userStore?.user?.displayName }}
        </span>
        <v-btn
          v-if="userStore?.user"
          @click="logout"
          style="margin-right: 10px"
        >
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
