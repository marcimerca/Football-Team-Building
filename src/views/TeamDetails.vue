<script setup>
import { Database } from "../services/database";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  teamId: {
    type: String,
    required: true,
  },
});

const team = ref();

Database.Teams.getById(props.teamId).then(
  (teamData) => (team.value = teamData)
);
</script>

<template>
  <div v-if="team" class="container">
    <header>
      <img class="logo" :src="team.teamLogo" />
      <h1 v-if="team.teamExtendedName">
        {{ team.teamExtendedName }}
      </h1>
      <h1 v-else>{{ team.teamName }}</h1>
    </header>
    <v-card class="main-card" min-width="400" max-width="400">
      <v-img
        class="align-end text-white"
        height="300"
        :src="team.teamStadiumImage"
        cover
      >
      </v-img>

      <v-card-subtitle class="pt-4"
        ><em>Stadium: {{ team.teamStadiumName }}</em></v-card-subtitle
      >
      <v-card-item class="key-value">
        <v-chip>Club Foundation:</v-chip>
        <br />
        <v-card-text class="card-text">{{
          team.teamFoundationDate
        }}</v-card-text>
      </v-card-item>
      <v-card-item class="key-value">
        <v-chip>Nicknames:</v-chip>
        <br />
        <v-card-text class="card-text">
          {{ team.teamNicknames }}
        </v-card-text>
      </v-card-item>

      <v-card-actions class="bottom-card">
        <v-btn @click="router.push(`/teams`)">
          <v-icon icon="md:arrow_back" style="margin-right: 5px" /> Teams
        </v-btn>
        <span class="material-symbols-outlined"> </span>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>
    <h1>Team not found with id {{ teamId }}</h1>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
}
.logo {
  height: 100px;
  margin-right: 10px;
}
.main-card {
  margin: 0 auto;
}
.card-text {
  padding: 2px;
}
.pt-4 {
  margin-bottom: 2px;
}
.key-value {
  margin-bottom: -15px;
}

.bottom-card {
  margin-top: 12px;
}

button {
  margin: 0 auto;
}
</style>
