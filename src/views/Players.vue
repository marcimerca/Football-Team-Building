<script setup>
import teams from "../data/teams.json";
import { RouterLink } from "vue-router";
const { playerName } = teams[0].teamPlayers;
</script>

<template>
  <div>
    <h1>List of players</h1>
  </div>
  <div class="prova" v-for="teamPlayer in teams[0].teamPlayers">
    <p>{{ teamPlayer.playerName }}</p>
  </div>
  <RouterLink to="/">Return back to Home </RouterLink> <br />
</template>

<style scoped></style>
