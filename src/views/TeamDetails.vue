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
      <h1 v-if="team.teamExtendedName">
        {{ team.teamExtendedName }}
      </h1>
      <h1 v-else>{{ team.teamName }}</h1>
    </header>
    <v-card class="main-card">
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
      <br />
    </v-card>
    <v-btn @click="router.push(`/teams`)">
      <v-icon icon="md:arrow_back" style="margin-right: 5px" /> Teams
    </v-btn>
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
  color: rgb(236, 236, 236);
}
.logo {
  height: 100px;
  margin-right: 10px;
}
.main-card {
  margin: 0 auto;
  width: 400px;
  background-color: rgb(236, 236, 236);
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
  margin: 15px auto;
  background-color: rgb(236, 236, 236);
}

@media only screen and (max-width: 580px) {
  .container .main-card {
    width: 80%;
    height: 500px;
  }
}
</style>
