<script setup>
import { Database } from "../services/database";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  playerId: {
    type: String,
    required: true,
  },
});

const player = ref();

Database.Players.getById(props.playerId).then(
  (playerData) => (player.value = playerData)
);
</script>

<template>
  <div v-if="player">
    <header>
      <h1>
        {{ player.playerName }}
      </h1>
    </header>
    <v-card class="main-card">
      <v-img cover max-height="260" :src="player.playerCover">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
      <v-card-item>
        <v-card-title>{{ player.playerPosition }}</v-card-title>
        <v-card-subtitle class="subtitle">
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
            <v-card-text class="card-text">{{
              player.playerHeight
            }}</v-card-text>
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
    <div class="footer">
      <v-btn @click="router.push(`/players`)">Other Players</v-btn>
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  color: rgb(236, 236, 236);
}
.main-card {
  margin: 0 auto;
  width: 500px;
}
.subtitle {
  margin-bottom: -12px;
}
.card-text {
  padding: 2px;
}

.footer {
  margin-top: 5px;
}
body {
  background-size: cover;
}
@media only screen and (max-width: 580px) {
  .main-card {
    width: 300px;
  }
  body {
    background-size: cover;
    width: 420px;
  }
}
</style>
