<template>
  <div class="mynav">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="/#/">Tram Nguyen</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item href="/#/about">About</b-nav-item>
          <b-nav-item href="/#/timeline">Project</b-nav-item>
          <b-nav-item href="/#/intro">Contact</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style scoped>
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
</style>