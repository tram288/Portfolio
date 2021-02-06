<template>
  <body>
    <header>
      <div id="about"></div>
    </header>
    <main>
      <div>
        <FlipCard />
      </div>
      <div class="flex-container">
        <div><h3>Hello! I'm Tram.</h3></div>
        <div>
          <h4>
            I love rock climbing, graphic design, and learning new things.
            <br />Feel free to reach out. I am open to new opportunities every
            day.
          </h4>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import FlipCard from "./FlipCard.vue";

export default {
  name: "About",
  components: {
    FlipCard,
  },
};
</script>

<style scoped>
body {
  height: 50%;
  width: 100%;
}

h1 {
  margin-top: 10px;
  margin-left: 50%;
  margin-bottom: 0.5rem;
}

main {
  display: grid;
  grid-template-columns: 35% auto;
  overflow: hidden;
}
.card {
  padding-top: 40px;
  padding-left: 20px;
  box-sizing: border-box;
}
.sentences {
  display: flex;
  flex-direction: column;
}
h3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* margin-top: 100px;
  margin-left: 500px; */
  font-weight: bold;
  font-style: italic;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
}
h4 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* margin-top: 150px;
  margin-left: 500px; */
  font-style: italic;
  margin-top: 10px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
}

.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
}
</style>