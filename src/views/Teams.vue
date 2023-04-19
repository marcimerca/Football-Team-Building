<script setup>
import teams from "../data/teams.json";
import { useRouter } from "vue-router";

const router = useRouter();

const goToTeam = (teamId) => router.push(`/teams/${teamId}`);
</script>

<template>
  <div>
    <h1>Teams</h1>
  </div>

  <div class="teams-container">
    <v-card
      :title="team.teamName"
      :subtitle="team.teamId"
      v-for="team in teams"
      :key="team.teamId"
    >
      <v-img class="logo" :src="team.teamLogo" />
      <v-card-actions style="justify-content: center">
        <v-btn @click="goToTeam(team.teamId)">Details</v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <br />
  <span>Return back to </span>
  <RouterLink to="/"><button>Home</button></RouterLink>
</template>

<style scoped>
.teams-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.team-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 18px;
  width: fit-content;
  margin: 0 10px;
  cursor: pointer;
}

.logo {
  height: 90px;
}

.team-photo {
  width: 30%;
  height: 30%;
}

.team-card h2 {
  font-size: 30px;
  font-weight: 600;
}

a {
  color: black;
}
</style>
