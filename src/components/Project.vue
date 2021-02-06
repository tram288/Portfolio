<template>
  <body>
    <div>
      <h1>Projects</h1>
    </div>
    <body class="projects">
      <div class="container">
        <div class="box">
          <div class="icon">1</div>
          <div class="content">
            <h3>1st Place Fairﬁeld County Global Game Jam</h3>
            <p>
              Devised and implement a tower defense game within 48 hours using
              C# and Unity platform. Implemented enemy movement script, designed
              user interface GUI, and game level creation.
            </p>
            <a href="https://globalgamejam.org/2019/games/forest-tap" target="_blank">Read More</a>
          </div>
        </div>

        <div class="box">
          <div class="icon">2</div>
          <div class="content">
            <h3>Mira <br />(Interactive Smart Mirror)</h3>
            <p>
              Won Most Creative. Utilized HTML, CSS, and JavaScript in an
              ASP.NET framework to create a widget smart mirror. Programmed a
              Raspberry Pi with Python script that uses a PIR sensor to detect
              motions.
            </p>
            <a href="https://digitalcommons.sacredheart.edu/acadfest/2019/all/2/" target="_blank">Read More</a>
          </div>
        </div>

        <div class="box">
          <div class="icon">3</div>
          <div class="content">
            <h3>Island Outlast<br />(C# 3D Unity survival game)</h3>
            <p>
              Created game assets to include modeling, UV layouts, and texture
              creation. Your character crashed on an island. You need to race to
              the top of the mountain before your hunger and thirst rapidly
              drop.
            </p>
            <a href="https://github.com/tram288/Island-Outlast" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    </body>
  </body>
</template>

<script>
export default {
  name: "Project",
  components: {},
};
</script>

<style scoped>
h1 {
  padding-top: 60px;
  text-align: center;
  color: #8458b3;
}
.body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: 'Poppins', sans-serif;   */
}
.container {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between;    */
  margin: 50px auto;
  justify-content: center;
}
.container .box {
  position: relative;
  width: 350px;
  padding: 40px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 5px;
  box-sizing: border-box;
  overflow: hidden;
}
.container .box .icon {
  position: relative;
  width: 80px;
  height: 80px;
  color: #fff;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  font-size: 40px;
  font-weight: 700;
  transition: 1s;
}
.container .box:nth-child(1) .icon {
  box-shadow: 0 0 0 0 #5093c5;
  background: #5093c5;
}
.container .box:nth-child(1):hover .icon {
  box-shadow: 0 0 0 400px #5093c5;
  background: #5093c5;
}
.container .box:nth-child(2) .icon {
  box-shadow: 0 0 0 0 #7e75ad;
  background: #7e75ad;
}
.container .box:nth-child(2):hover .icon {
  box-shadow: 0 0 0 400px#7e75ad;
  background: #7e75ad;
}
.container .box:nth-child(3) .icon {
  box-shadow: 0 0 0 0 #b65492;
  background: #b65492;
}
.container .box:nth-child(3):hover .icon {
  box-shadow: 0 0 0 400px#b65492;
  background: #b65492;
}
.container .box .content {
  position: relative;
  z-index: 1;
  transition: 0.5s;
}
/* .container .box:hover .content {
   color: #fff; 
} */

.container .box .container p {
  margin: 0;
  padding: 0;
}
 /* a{
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}  */
</style>