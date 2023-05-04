<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const tab = ref("");
</script>

<template>
  <v-card class="tab-card">
    <v-tabs class="tab-titles" v-model="tab" selected-class="tab-active">
      <v-tab value="one">About</v-tab>
      <v-tab value="two">Why&Who</v-tab>
      <v-tab value="three">Explore</v-tab>
    </v-tabs>

    <v-card-text style="font-size: 12px">
      <v-window v-model="tab">
        <v-window-item value="one" class="text-left">
          <p>
            This project was created using
            <strong
              ><a href="https://vuejs.org/" target="”_blank”"
                ><code>Vue.js</code></a
              ></strong
            >
            as the main framework. For the style, in addition to CSS, the
            <a href="https://vuetifyjs.com/en/" target="”_blank”"
              ><code>Vuetify</code></a
            >
            library has been imported. In this project it will be possible to
            view three main pages: <em>Home</em>, <em>Teams</em>, and
            <em>Players.</em>
          </p>
          <br />
          <ul>
            <li>
              In <em>Home</em>, you can view this brief presentation of the
              project with the main information about it.
            </li>
            <li>
              In <em>Teams</em>, you can view three italian football clubs,
              Milan, Juventus and Inter. From there, you can access to a page
              with more details about each team.
            </li>
            <li>
              In <em>Players</em>, you can view a list of players belonging to
              the teams mentioned above. From there, you can access to a page
              with more details about each player and to the page where you can
              create a new player.
            </li>
          </ul></v-window-item
        >

        <v-window-item value="two" class="text-left">
          <h3>Why</h3>

          <p>
            I decided to undertake this project with the aim of putting into
            practice the knowledge acquired so far in my web developing career.
            In particular, I wanted to create a project related to the world of
            football, as it is one of my passions.
          </p>
          <br />
          <h3>Who</h3>

          <p>
            My name is Marcello Mercanzin, i'm 26 and i live near Vicenza. I've
            always been interested in the world of web development, and now I
            would like to pursue this type of career.
          </p>
        </v-window-item>

        <v-window-item value="three" class="text-left">
          <p>
            Click one of the buttons below or in the Navigation Bar to start
            exploring this project.
          </p>
          <v-card-item class="explore-icons">
            <v-btn
              class="explore-buttons"
              @click="router.push(`/`)"
              variant="text"
            >
              <v-icon
                icon="md:home"
                size="25px"
                style="margin-right: 5px"
              ></v-icon
              >Home
            </v-btn>
            <v-btn
              class="explore-buttons"
              @click="router.push(`/teams`)"
              variant="text"
            >
              <v-icon
                icon="md:sports_soccer"
                style="margin-right: 5px"
                size="25px"
              />Teams</v-btn
            >
            <v-btn
              class="explore-buttons"
              @click="router.push(`/players`)"
              variant="text"
            >
              <v-icon icon="md:groups" style="margin-right: 5px" size="25px" />
              Players</v-btn
            >
          </v-card-item>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<style scoped>
@media only screen and (max-width: 580px) {
  body {
    background-color: rgb(236, 236, 236);
  }
  .tab-card {
    display: inline-block;
    width: 320px;
    padding: 0;
    margin: 0;
    margin-top: -7px;
    border: 0;
    background-color: rgba(236, 236, 236);
  }

  .card {
    height: 30%;
    display: flex;
    flex-direction: column;
  }
  button h2 {
    width: 100%;
    font-size: 20px;
  }

  .card-text {
    font-size: 12px;
  }
  .explore-icons button {
    width: 100px;
    margin: 10px 7px;
  }
  ul {
    padding-left: 16px;
    padding-right: 0px;
    margin-top: -10px;
  }
  h3 {
    padding-left: 13px;
    margin-bottom: 10px;
  }
  p {
    padding-left: 13px;
    padding-right: 5px;
  }
  code {
    margin-left: -7px;
    margin-right: -7px;
  }
  .explore-icons {
    display: flex;
    width: 280px;
    padding-left: 0;
    padding-right: 0;
  }
  .explore-icons button {
    width: 90px;
    font-size: 12px;
  }
  .explore-icons .explore-buttons {
    margin: 0 auto;
    margin-right: 5px;
    margin-left: 5px;
  }
  .tab-titles {
    background-color: black;
    color: white;
  }
  .tab-active {
    color: rgb(201, 199, 199);
  }
  a {
    margin: 0 10px;
    color: black;
  }
  .explore-icons {
    text-align: center;
    width: 100%;
  }
}
</style>
