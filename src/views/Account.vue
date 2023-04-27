<template>
  <div
    class="content"
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    "
  >
    <h1>Account</h1>
    <v-card class="user-card" :title="userStore.user.displayName">
      <v-img
        class="avatar"
        :src="userStore.user.photoURL"
        width="50px"
        style="border-radius: 50%"
      >
      </v-img>
    </v-card>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}
.content {
  color: rgb(236, 236, 236);
}
.user-card {
  padding: 15px;
  background-color: rgb(236, 236, 236);
}
.avatar {
  margin-top: 10px;
  margin: 0 auto;
}
</style>

<script setup>
import { useUserStore } from "../store/user";
const userStore = useUserStore();
</script>
