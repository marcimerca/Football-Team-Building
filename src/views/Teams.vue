<script setup>
import teams from "../data/teams.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>
      Teams
    </h1>
  </div>

  <div class="teams-container">
    <RouterLink v-for="team in teams" :to="`/teams/${team.teamId}`" :key="team.teamId">
      <div class="team-card">
        <img class="logo" :src="team.teamLogo">
        <h2>{{ team.teamName }}</h2>
      </div>
    </RouterLink>
  </div>
  <br>
  <span>Return back to </span>
  <RouterLink to="/"><button>Home</button></RouterLink>
</template>

<style scoped>
.teams-container {
  display: flex;
  justify-content: center;
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
  width: 90px;
  margin-right: 10px;
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
