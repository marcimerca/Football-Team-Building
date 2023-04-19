<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

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
            </v-app-bar>
            <v-icon
      color="success"
      icon="mdi-check-circle"
      size="large"
    ></v-icon>
        </v-layout>
    </div>
</template>

<style scoped> .container {
     margin-bottom: 50px;

 }

 .buttons {
     margin: 0 auto;
 }

</style>