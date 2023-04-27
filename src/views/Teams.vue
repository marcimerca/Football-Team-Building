<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Database } from "../services/database";

const router = useRouter();

const goToTeam = (teamId) => router.push(`/teams/${teamId}`);

// ? empty array of teams => we use "ref" to make it reactive => UI changes automatically
const teams = ref([]);
// ? This function makes a call to the database and gets all the teams data and stores it in the "teams" variable
const getTeams = async () => {
  const res = await Database.Teams.get();
  teams.value = res;
};
// ? This function is called when the component is mounted => it gets all the teams data
getTeams();

// SEE services/database.js for more details
</script>

<template>
  <header>
    <h1>Teams</h1>
  </header>

  <div class="teams-container" v-if="teams">
    <v-card
      class="team-card"
      :title="team.teamName"
      v-for="team in teams"
      :key="team.teamId"
    >
      <v-img class="logo" :src="team.teamLogo" />
      <v-card-actions style="justify-content: center">
        <v-btn @click="goToTeam(team.firebaseId)">Details</v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <br />
  <RouterLink to="/"
    ><v-btn>
      <v-icon icon="md:arrow_back" style="margin-right: 5px" />Home
    </v-btn></RouterLink
  >
</template>

<style scoped>
header {
  margin-bottom: 10px;
  color: rgb(236, 236, 236);
}

.teams-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.team-card {
  width: 180px;
  margin: 0 10px;
  cursor: pointer;
  background-color: rgb(236, 236, 236);
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
button {
  background-color: rgb(236, 236, 236);
}

/*Mobile version*/

@media only screen and (max-width: 580px) {
  .teams-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
  }
  .team-card {
    width: 160px;
    height: 160px;
    margin: 0 5px;
    cursor: pointer;
    background-color: rgb(236, 236, 236);
  }
}
</style>
