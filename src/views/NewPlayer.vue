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
</script>

<template>
  <header>
    <h1>New Player</h1>
  </header>
  <div class="form-container">
    <v-text-field
      v-model="name"
      class="input"
      clearable
      label="Name"
    ></v-text-field>
    <v-select
      class="input"
      label="Position"
      :items="['GoalKeeper', 'Defender', 'Midfielder', 'Forward']"
    ></v-select>
    <v-text-field class="input" clearable label="Nationality"></v-text-field>
    <v-text-field
      class="input"
      type="number"
      clearable
      suffix="m"
      label="Height"
      model-value="1.50"
    ></v-text-field>
  </div>
  <v-btn @click="router.push(`/players`)">
    <v-icon icon="md:arrow_back" style="margin-right: 5px" /> Players
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
