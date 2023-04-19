<script setup>
import players from "../data/players.json"

const props = defineProps({
    playerId: {
        type: String,
        required: true,
    },
});

const player = players.find((player) => player.playerId === props.playerId)

</script>


<template>
    <header>
        <h1>
            Player Details
        </h1>
    </header>
    <img :src="player.playerImage">
</template>

<style scoped></style>