<script setup>
import { Database } from "../services/database";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const players = ref([]);
const getPlayers = async () => {
  players.value = await Database.Players.get();
};
getPlayers();

const player = ref({});

const addPlayer = async () => {
  const id = await Database.Players.add(player.value);
  router.push(`/players/${id}`);
};
</script>

<template>
  <header>
    <h1>New Player</h1>
  </header>
  <div class="form-container">
    <v-text-field
      v-model="player.playerName"
      class="input"
      clearable
      label="Name"
    ></v-text-field>
    <v-select
      class="input"
      label="Position"
      v-model="player.playerPosition"
      :items="['GoalKeeper', 'Defender', 'Midfielder', 'Forward']"
    ></v-select>
    <v-text-field
      class="input"
      clearable
      type="text"
      label="Number"
      v-model="player.playerNumber"
    ></v-text-field>
    <v-text-field
      class="input"
      clearable
      label="Nationality"
      v-model="player.playerNationality"
    ></v-text-field>
    <v-text-field
      class="input"
      clearable
      label="Date of Birth"
      type="date"
      v-model="player.playerDateOfBirth"
    ></v-text-field>
    <v-text-field
      class="input"
      type="number"
      clearable
      suffix="cm"
      label="Height"
      v-model="player.playerHeight"
    ></v-text-field>
    <v-text-field
      class="input"
      type="url"
      clearable
      label="Image"
      v-model="player.playerCover"
    ></v-text-field>
  </div>
  <v-btn @click="addPlayer" style="margin-bottom: 50px">
    <v-icon icon="md:save" style="margin-right: 5px" /> Add Player
  </v-btn>
</template>

<style scoped>
header {
  margin-bottom: 30px;
}
.form-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  font-size: 4px;
}

.input {
  width: 60%;
}
</style>
