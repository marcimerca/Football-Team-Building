<script setup>
import teams from "../data/teams.json";
</script>
<template>

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



