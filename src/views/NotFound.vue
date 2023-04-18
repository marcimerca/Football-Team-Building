<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <header>
        <h1>
            Sorry, the page you searched for doesn't exist :(
        </h1>
    </header>
    <h2>Fun (?) fact</h2>
    <div class="fun-fact">
        <h2> Did you know that Football was invented around 476 BC in China <br>and was called Cuju?
            <br><br>Unfortunately, the page you searched for was not "invented" yet.
        </h2>
        <img src="https://inchiostrovirtuale.it/wp-content/uploads/2019/11/Calcio-in-Cina.jpg">
    </div>

    <footer> Don't be angry and return back to
        <RouterLink to="/"><button>Home</button></RouterLink>
    </footer>
</template>

<style scoped>
header h1 {
    font-size: 40px;
}
img {
    width: 35%;

}

.fun-fact {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.fun-fact h2 {
    font-weight: normal;
    text-align: left;
}
button {
    margin-left: 10px;
}
footer {
    margin-top: 90px;
}
</style>