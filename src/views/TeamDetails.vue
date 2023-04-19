<script setup>
import teams from "../data/teams.json";

const props = defineProps({
  teamId: {
    type: String,
    required: true,
  },
});

const team = teams.find((team) => team.teamId === props.teamId);
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
