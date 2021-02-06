<template>
  <div id="scroll">
    <div id="home">
      <div class="mynav">
        <b-navbar toggleable="md" type="dark" variant="dark">
          <b-navbar-brand href="#home">Tram Nguyen</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto"> </b-navbar-nav>

            <b-navbar-nav>
              <b-nav-item href="#about">About</b-nav-item>
              <b-nav-item href="#project">Projects</b-nav-item>
              <b-nav-item href="#experience">Experience</b-nav-item>
              <b-nav-item href="#contact">Contact</b-nav-item>
              <b-nav-item href="mailto: tram288@gmail.com">Email Me</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="experience">
        <Timeline />
      </div>
      <div id="contact">
        <Footer />  
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import About from "./About.vue";
import Project from "./Project.vue";
import Timeline from "./Timeline.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: {
    Intro,
    About,
    Project,
    Timeline,
    Footer,
  },
};
</script>

<style scoped>
.mynav {
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 10000;
}

.navbar-brand {
  font-size: 25px;
  padding-left: 20px;
}

.nav-item {
  padding: 0px 10px 0px;
  text-align: center;
}

.bg-dark {
  background-color: #000000 !important;
}

#scroll {
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
</style>