<script setup>
  import players from "../data/players.json";
  import { useRouter } from "vue-router";
const router = useRouter();
  const goToPlayer = (playerId) => router.push(`/players/${playerId}`)
</script>

<template>
  <header>
    <h1>List of players</h1>
  </header>
  <v-list class="list" lines="one">
    <v-list-item class="list-item" @click="goToPlayer(player.playerId)"
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

.list-item {
margin: 20px;
height: 90px;
background-color:rgba(235, 233, 233, 0.184)
}

</style>
