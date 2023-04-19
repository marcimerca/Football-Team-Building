<script setup>
import teams from "../data/teams.json";
</script>
<template>
<<<<<<< HEAD
    <header>
        <img class="logo" :src="teams[0].teamLogo">
        <h1>
            {{ teams[0].teamName }} </h1>
    </header>
    
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
=======
  <div>
    <h1>
      {{ teams[0].teamName }}
    </h1>
  </div>
</template>

<style scoped></style>
>>>>>>> e0a2f073cab9f567157d7a15db74583c76b6264a
