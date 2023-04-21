<script setup>
import { Database } from "../services/database";
import { ref } from "vue";

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
  <header v-if="team">
    <img class="logo" :src="team.teamLogo" />
    <h1>
      {{ team.teamName }}
    </h1>
  </header>
  <div v-else>
    <h1>Team not found with id {{ teamId }}</h1>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
}
.logo {
  width: 90px;
  margin-right: 10px;
}
</style>
