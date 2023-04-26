<template>
  <header>
    <h1>Welcome to</h1>
    <h1>Football Team Building</h1>
  </header>
  <div class="info">
    <h1>About this project</h1>
    <p>
      This project was created using <strong><a href="https://vuejs.org/" target=”_blank”>Vue.js</a></strong> as the main
      framework. For the style, in addition to CSS, the <a href="https://vuetifyjs.com/en/" target=”_blank”>Vuetify</a> library has been imported.
      In this project it will be possible to view three main pages:
      <em>Home</em>, <em>Teams</em>, and <em>Players</em>.
      <br> <br> 

      <ul>
        <li>In
      <em>Home</em>, you can view this brief presentation of the project with the main
      information about it.</li>
       <li>In <em>Teams</em>, you can view three italian football clubs,
      Milan, Juventus and Inter. From there, you can access to a page with more
      details about each team.</li>
      <li>In <em>Players</em>, you can view a list of players
      belonging to the teams mentioned above. From there, you can access to a
      page with more details about each player and to the page where you can
      create a new player.</li>
      </ul>  
    </p>
  </div>
  <div class="why">
    <h1>Why</h1>
    <p>
      I decided to undertake this project with the aim of putting into practice
      the knowledge acquired so far in my web developing career.
    </p>
  </div>
  <div class="who">
    <h1>Who</h1>
    <p>
      My name is Marcello Mercanzin, i'm 26 and i live near Vicenza. I've always
      been interested in the world of web development, and now I would like to
      pursue this type of career.
    </p>
  </div>
  <div class="explore">
    <h1>Explore</h1>
    <p>
      Click one of the button in the Navigation Bar to start exploring this
      project.
    </p>
  </div>
</template>

<style scoped>
.info,
.why,
.who,
.explore {
  margin: 0 auto;
  text-align: left;
  width: 70%;
  margin-bottom: 15px;
}

.info {
  text-align: left;
  margin-top: 20px;
}


.info h1,
.why h1,
.who h1,
.explore h1 {
  font-size: 30px;
  margin-bottom: 10px;
}

a {
  margin: 0 10px;
  color: black;
}

button {
  margin: 20px 10px;
}
</style>
