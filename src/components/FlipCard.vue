<template>
  <div class="card middle">
    <div class="front">
      <img src="../assets/IMG_3141.png" />
    </div>
    <div class="back">
      <div class="back-content middle">
        <h4>Tram Nguyen</h4>
        <span>LinkedIn</span>
        <span> GitHub</span>
        <div class="sm">
          <a
            href="https://www.linkedin.com/in/tram-nguyen-12a2b417a/"
            target="_blank"
            ><img src="../assets/linkedin.png" width="30" height="30"
          /></a>
          <a href="https://github.com/tram288" target="_blank"
            ><img src="../assets/github.png" width="30" height="30"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

body {
  background: #333;
}
.middle {
  position: relative; /*changed from absolute*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card {
  cursor: pointer;
  width: 200px;
  height: 300px;
  border: none;

  /* 
  height: 480px;
  width: 340px;
  border-radius: 50%;
  overflow: hidden;
  border: none;  */
}

.front,.back {
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  transition: transform 0.6s linear;
}
.front img {
  height: 100%;
}
.front {
  transform: perspective(600px) rotateY(0deg);
}
.back {
  /* background: #f2f0f3; */
  transform: perspective(600px) rotateY(180deg);
}
.back-content {
  text-align: center;
  width: 100%;
}
.sm {
  margin: 20px 0;
}
.sm a {
  display: inline-flex;
  width: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.card:hover > .front {
  transform: perspective(600px) rotateY(-180deg);
}

.card:hover > .back {
  transform: perspective(600px) rotateY(0deg);
}
</style>
