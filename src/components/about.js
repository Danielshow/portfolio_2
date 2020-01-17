import React from 'react'

const About = ({setOpen}) => (
  <>
    <div className="about__overlay" onClick={ () => setOpen(false)}>
    </div>
    <div className="about__modal">
      {/* add CV info and some other stuffs like education and work experience*/}
      <div class="about__modal--all">
        <div class="education">
          <h1>Education</h1>
          <div class="">
            <h3>University of the People</h3>
            <p>BSc. Computer Science</p>
            <p>2019 - 2023</p>
          </div>
          <div class="">
            <h3>Udacity</h3>
            <p>Bertelsmann Tech Scholarship Challenge Course - Cloud Track</p>
            <p>2019 - 2020</p>
          </div>
          <div class="">
            <h3>Yaba College of Technology</h3>
            <p>National Diploma, Computer Engineering</p>
            <p>2013 - 2016</p>
          </div>
        </div>
        <div class="job">
          <h1>Experience</h1>
          <div class="">
            <h3>Ruby/Javascript Developer</h3>
            <p>Fluxx, SanFransisco</p>
            <p>Aug 2019 - date</p>
          </div>
          <div class="">
            <h3>Software Engineer</h3>
            <p>Andela, Lagos</p>
            <p>Nov 2018 - date</p>
          </div>
          <div class="">
            <h3>Software Developer</h3>
            <p>AppsWorkforce, Lagos</p>
            <p>April 2016 - March 2017</p>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1Fm9qSlhSl9MylW0IeRu1yp_T2W1pu7PZ/view?usp=sharing" target="_blank">View Resume</a>
      </div>
    </div>
  </>
)

export default About