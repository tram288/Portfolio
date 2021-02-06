<template>
  <div id="Intro">
    <body>
      <section>
        <div id="title">
        <!-- <img src="../assets/IMG_3141.png"/> -->
        <h1>Tram Nguyen</h1>
        <h5>Software Quality Engineer at Optum</h5>
        </div>
      </section>
    </body>
  </div>
</template>

<script>
export default {
  name: "Intro",
  components: {
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{
  width: 100px;
  clip-path: circle();
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
section {
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  position: relative;
  animation: change 10s ease-in-out infinite;
}
#title{
  border-style: solid;
  border: 3px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10rem 25rem;
}
h1 {
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap; 
}
h5{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 10rem;
  text-align: center;
  white-space: nowrap; 
}

@keyframes change {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>