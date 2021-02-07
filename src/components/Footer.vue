<template>
  <body>
    <header>
      <div id="footer"></div>
    </header>
    <main>
      <div>
        <div class="flex-container1">
          <h3>Contact Me</h3>
          <div class="vl"></div>
        </div>
      </div>
      <div class="flex-container2">
        <div>
          <p>
            Email:<a href="mailto: tram288@gmail.com"> tram288@gmail.com</a>
          </p>
        </div>
        <div>
          <p>
            LinkedIn:<a
              href="https://www.linkedin.com/in/tram-nguyen-12a2b417a/"
              target="_blank"
            >
              tram-nguyen-12a2b417a</a
            >
          </p>
        </div>
        <div>
          <p>
            GitHub:<a href="https://github.com/tram288" target="_blank">
              tram288</a
            >
          </p>
        </div>
      </div>
      <div class="flex-container3">
        <a href="https://github.com/tram288/Portfolio" target="_blank">Source Code</a>
        <p>© 2021 Tram Nguyen</p>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
body {
  height: 50%;
  width: 100%;
  background-color: #000000;
}
h3 {
  margin-top: 20px;
  margin-left: 30px;
  color: #fff;
}
.vl {
  margin-top: 2%;
  border-left: 1px solid #c5c5c5;
  height: 70px;
  margin-left: 50px;
}
p {
  color: #fff;
}
main {
  display: grid;
  grid-template-columns: auto auto auto;
  overflow: hidden;
}
.flex-container1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.flex-container2 {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 0.75;
}
.flex-container3 {
  margin-top: 15px;
}
</style>