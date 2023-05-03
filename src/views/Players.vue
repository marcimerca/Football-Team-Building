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
    <h1>Players</h1>
  </header>
  <v-btn @click="router.push(`/players/new`)">
    <v-icon icon="md:person_add" style="margin-right: 5px" /> Add Player</v-btn
  >
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
  color: rgb(236, 236, 236);
  margin: 0 auto;
  text-align: center;
}
.list {
  width: 400px;
  margin-top: 15px;
  height: 460px;
  overflow: scroll;
  background-color: rgb(236, 236, 236);
  text-align: center;
}
.list-item {
  margin: 20px;
  height: 90px;
  background-color: rgba(222, 219, 219, 0.436);
}
button {
  margin-top: 10px;
  background-color: rgb(236, 236, 236);
}

body {
  background-size: cover;
}

/*Mobile version*/

@media only screen and (max-width: 580px) {
  .list {
    height: 560px;
    width: 300px;
    overflow: scroll;
    background-color: rgb(236, 236, 236);
    margin: 15px auto;
    padding: 0;
  }
}
</style>
