<script setup>
import players from "../data/players.json";
</script>

<template>
  <div>
    <h1>List of players</h1>
  </div>
  <!-- TODO: change in v-list -->
  <div class="prova" v-for="player in players">
    <p>
      {{ player.playerName }}
    </p>
  </div>
</template>

<style scoped></style>
