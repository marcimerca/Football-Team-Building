<template>
    <div>
        <h1>
            Teams
        </h1>
    </div>
    <div class="teams-container">

        <div class="team-card">
            <img class="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png">
            <h2>AC Milan</h2>
        </div>


    </div>
</template>


<style scoped>
.team-card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 18px;
    width: fit-content;
    margin: 0 auto;
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
    font-weight:600;
}
</style>