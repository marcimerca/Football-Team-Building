<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <h1>Sorry, the page you searched for doesn't exist :(</h1>
  </header>
  <v-card class="card">
    <div class="fun-fact">
      <h2>
        Did you know that Football was invented around 476 BC in China <br />and
        was called Cuju? <br /><br />Unfortunately, the page you searched for
        was not "invented" yet.
      </h2>
      <img
        src="https://inchiostrovirtuale.it/wp-content/uploads/2019/11/Calcio-in-Cina.jpg"
      />
    </div>
    <br /><br />
    <p>Don't be angry and return back to</p>
    <RouterLink to="/"
      ><v-btn variant="text">
        <v-icon icon="md:home" style="margin-right: 5px" />Home</v-btn
      ></RouterLink
    >
  </v-card>
</template>

<style scoped>
header h1 {
  font-size: 40px;
  color: white;
}

img {
  width: 35%;
  margin-left: 10px;
  margin-top: 20px;
}

.fun-fact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;
  margin-top: 7px;
}
h2 {
  color: black;
}
.fun-fact h2 {
  font-weight: normal;
  text-align: left;
  color: black;
  margin-top: 10px;
}
.card {
  background-color: rgba(236, 236, 236, 0.84);
  margin: 20px auto;
  width: 800px;
}
button {
  margin-left: 10px;
  color: rgb(0, 0, 0);
}
@media only screen and (max-width: 580px) {
  header h1 {
    font-size: 20px;
    color: white;
  }
  .card {
    font-size: 10px;
    width: 100%;
    padding: 19px;
  }

  .fun-fact {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }
  img {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>
