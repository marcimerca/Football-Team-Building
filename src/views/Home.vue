<script setup>
import { ref } from "vue";
const showAbout = ref(false);
const showWhy = ref(false);
const showWho = ref(false);
</script>

<template>
  <header>
    <h1>Welcome to</h1>
    <h1>Football Team Building</h1>
  </header>
  <div class="main-content">
    <div class="info">
      <v-card class="card">
        <v-card-item>
          <v-card-actions>
            <v-card-item class="button-container">
              <v-btn
                @click="showAbout = true"
                prepend-icon="md:expand_more"
                color="black"
                variant="text"
              >
                <h2>About this project</h2>
              </v-btn>
            </v-card-item>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showAbout">
              <v-card-text>
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
                  library has been imported. In this project it will be possible
                  to view three main pages: <em>Home</em>, <em>Teams</em>, and
                  <em>Players.</em>
                </p>
                <br />
                <ul>
                  <li>
                    In <em>Home</em>, you can view this brief presentation of
                    the project with the main information about it.
                  </li>
                  <li>
                    In <em>Teams</em>, you can view three italian football
                    clubs, Milan, Juventus and Inter. From there, you can access
                    to a page with more details about each team.
                  </li>
                  <li>
                    In <em>Players</em>, you can view a list of players
                    belonging to the teams mentioned above. From there, you can
                    access to a page with more details about each player and to
                    the page where you can create a new player.
                  </li>
                </ul>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card-item>
        <v-card-item class="footer-button">
          <v-btn
            v-if="showAbout"
            @click="showAbout = false"
            text-align="center"
            variant="outlined"
          >
            Close
          </v-btn>
        </v-card-item>
      </v-card>
    </div>
    <div class="why-who">
      <v-card class="card">
        <v-card-item>
          <v-card-actions>
            <v-card-item class="button-container">
              <v-btn
                @click="showWhy = true"
                prepend-icon="md:expand_more"
                color="black"
                variant="text"
              >
                <h2>Why ?</h2>
              </v-btn>
            </v-card-item>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showWhy">
              <v-card-text>
                <p>
                  I decided to undertake this project with the aim of putting
                  into practice the knowledge acquired so far in my web
                  developing career.
                </p>
              </v-card-text>
            </div>
          </v-expand-transition>
          <v-card-item class="footer-button">
            <v-btn v-if="showWhy" @click="showWhy = false" variant="outlined">
              Close
            </v-btn>
          </v-card-item>
          <v-divider :thickness="1"></v-divider>

          <v-card-actions>
            <v-card-item class="button-container">
              <v-btn
                @click="showWho = true"
                color="black"
                prepend-icon="md:expand_more"
                variant="text"
              >
                <h2>Who ?</h2>
              </v-btn>
            </v-card-item>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showWho">
              <v-card-text>
                <p>
                  My name is Marcello Mercanzin, i'm 26 and i live near Vicenza.
                  I've always been interested in the world of web development,
                  and now I would like to pursue this type of career.
                </p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card-item>
        <v-card-item class="footer-button">
          <v-btn v-if="showWho" @click="showWho = false" variant="outlined">
            Close
          </v-btn>
        </v-card-item>
      </v-card>
    </div>
    <div class="explore">
      <v-card class="card">
        <v-card-item class="explore-container">
          <v-btn variant="text">
            <h2>Explore</h2>
          </v-btn>
        </v-card-item>
        <v-spacer></v-spacer>
        <v-card-text>
          <p>
            Click one of the button in the Navigation Bar to start exploring
            this project.
          </p>
        </v-card-text>
        <v-card-item class="ball">
          <v-icon icon="md:home" size="25px" style="margin: 3px" />
          <v-icon icon="md:sports_soccer" style="margin: 3px" size="25px" />
          <v-icon icon="md:groups" style="margin: 3px" size="25px" />
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
header {
  color: rgb(236, 236, 236);
  margin-bottom: 20px;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.card {
  background-color: rgb(236, 236, 236);
}
.info,
.why-who,
.explore {
  margin: 0 auto;
  width: 30%;
  text-align: left;
  margin-bottom: 15px;
}

.card {
  background-color: rgb(236, 236, 236);
}

.info {
  height: 50%;
  width: 33%;
}
.button-container {
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.explore-container {
  text-align: center;
  margin-top: 17px;
}
a {
  margin: 0 10px;
  color: black;
}
.ball {
  text-align: center;
  margin: 0 auto;
}
.footer-button {
  width: fit-content;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}
</style>
