<script setup>
  import players from "../data/players.json";
</script>

<template>
  <header>
    <h1>List of players</h1>
  </header>
  <v-list class="list" lines="one">
    <v-list-item
      v-for="player in players"
      :key="player.playerId"
      :title="player.playerName"
      :subtitle="player.playerPosition"
      :prepend-avatar="player.playerImage"
    >
   </v-list-item>
  </v-list>
</template>

<style scoped>
header {
  margin-bottom: 30px;
}
</style>
