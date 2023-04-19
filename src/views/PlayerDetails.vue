<script setup>
  import players from "../data/players.json";

  const props = defineProps({
    playerId: {
      type: String,
      required: true,
    },
  });

  const player = players.find((player) => player.playerId === props.playerId);
</script>

<template>
  <header>
    <h1>
      {{ player.playerName }}
    </h1>
  </header>
  <v-card width="500px">
    <v-img cover height="250" :src="player.playerCover"></v-img>
    <v-card-item>
      <v-card-title>{{ player.playerPosition }}</v-card-title>
      <v-card-subtitle>
        <span class="me-1">#{{ player.playerNumber }}</span>
      </v-card-subtitle>
      <v-card-item class="info">
        <v-card-item class="key-value">
          <v-chip> Date of birth </v-chip>
          <v-card-text class="card-text">
            {{ player.playerDateOfBirth }}</v-card-text
          >
        </v-card-item>
        <v-card-item class="key-value">
          <v-chip>Height</v-chip>
          <v-card-text class="card-text">{{ player.playerHeight }}</v-card-text>
        </v-card-item>
        <v-card-item class="key-value">
          <v-chip>Nationality</v-chip>
          <v-card-text class="card-text">{{
            player.playerNationality
          }}</v-card-text>
        </v-card-item>
      </v-card-item>
    </v-card-item>
  </v-card>
</template>

<style scoped>

header {
    margin-bottom: 15px;
}
  .card-text {
    padding: 2px;
  }


</style>
