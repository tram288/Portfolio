<template>
  <body>
    <header>
      <div id="experience">
        <h1>Experience</h1>
      </div>
    </header>
    <body>
      <div class="timeline">
        <ul>
          <li>
            <div class="content">
              <h3>Programming Instructor</h3>
              <h5>CS Explorers, Inc.</h5>
              <p>
                - Taught computer science education at an elementary and middle
                school level. <br />
                - Encouraged concepts related to database management, server
                fundamental, graphic design, robotics, user experience, and
                project leadership. <br />
                - Introduced the core principles of coding and supports the
                growth of STEM in the community.
              </p>
            </div>
            <div class="time">
              <h4>May 2016</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Telecom Technician</h3>
              <h5>Sacred Heart University</h5>
              <p>
                - Responsible for operation, administration, and maintenance of
                all equipment in support of voice and CATV infrastructure
                service for entire university (8,000 students, 2,000 faculties
                and staffs). <br />
                -Manage telecom queue ticket system and organizing related cable
                plant jobs. Assist Help Desk and Call Center in troubleshooting
                phone, CATV, and data network infrastructure for University
                buildings. <br />
                - Ensure service and “Troubleshooting” guides to all employees
                and residential students.
              </p>
            </div>
            <div class="time">
              <h4>June 2017</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Engineer Intern</h3>
              <h5>NBCUniversal Media, LLC</h5>
              <p>
                - Used programs such as Avid Media Composer and Interplay to
                assist senior engineers with ingesting incoming metadata and
                media as well as map-routing live feeds.<br />
                - Performed data analysis in a relational database management
                system by organizing shared excel sheets relating to current and
                archived data.<br />
                - Assist in programming new methods of handling ﬁles within
                diﬀerent departments.
              </p>
            </div>
            <div class="time">
              <h4>Sept. 2018</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Software Quality Engineer</h3>
              <h5>Optum</h5>
              <p>
                - Developing Test Cases, Test Strategies and Test Plans that
                will ensure comprehensive test coverage (Smoke, Defect,
                Regression). <br />
                - Write, design, and execute automated tests by creating scripts
                that run testing function automatically through Selenium
                WebDriver.<br />
                - Perform API test by using web methods to validate feedback,
                response time, and error code.<br />
                - Used SQL queries to gathered data and perform back-end
                database testing.
              </p>
            </div>
            <div class="time">
              <h4>July 2019</h4>
            </div>
          </li>
          <div style="clear: both"></div>
        </ul>
      </div>
    </body>
  </body>
</template>

<script>
export default {
  name: "Timeline",
  components: {},
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  /* font-family:Arial, Helvetica, sans-serif;  */
}
h1 {
  padding-top: 60px;
  text-align: center;
  color: #8458b3; 
}
.timeline {
  position: relative;
  margin: 50px auto; 
  /* padding: 40px 0; */
  width: 1000px;
  box-sizing: border-box;
}
.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #c5c5c5;
}
.timeline ul {
  margin: 0;
  padding-bottom: 0;
}
.timeline ul li {
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}
.timeline ul li:nth-child(odd) {
  float: left;
  text-align: left;
  clear: both;
  right: 40px;
}
.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}
.content {
  box-sizing: border-box;
  border: 1px;
  border-style: solid;
  border-color: #c5c5c5;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  top: 30px;
  right: -26px;
  width: 10px;
  height: 10px;
  background: #53376e;
  border-radius: 50%;
}

.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  top: 30px;
  left: -24px;
  width: 10px;
  height: 10px;
  background: #53376e;
  border-radius: 50%;
}

.timeline ul li h3 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: #8458b3;
}

.timeline ul li h5 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: #53376e;
}

.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
}

.timeline ul li .time h4 {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 18px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  background: #8458b3;
  color: #fff;
  border-radius: 18px;
}

.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 18px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  background: #8458b3;
  color: #fff;
  border-radius: 18px;
}
</style>