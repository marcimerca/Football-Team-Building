<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Database } from "../services/database";

const router = useRouter();
const goToPlayer = (playerId) => router.push(`/players/${playerId}`);

const players = ref([]);
const getPlayers = async () => {
  players.value = await Database.Players.get();
};

getPlayers();
</script>

<template>
  <header>
    <h1>List of players</h1>
  </header>
  <v-btn @click="router.push(`/players/new`)">Add Player</v-btn>
  <v-list class="list" lines="one">
    <v-list-item
      class="list-item"
      @click="goToPlayer(player.firebaseId)"
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
.list {
  margin-top: 15px;
}
.list-item {
  margin: 20px;
  height: 90px;
  background-color: rgba(235, 233, 233, 0.184);
}
</style>
