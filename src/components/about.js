import React from 'react'

const About = ({open, setOpen}) => (
  <div>
    <div className={open == true ? "about__overlay" : "about__overlay close"} onClick={ () => setOpen(false)}>
    </div>
    <div className={open == true ? "about__modal" : "about__modal close"}>
      {/* add CV info and some other stuffs like education and work experience*/}
      <div className="about__modal--all">
        <div className="education">
          <h1>Education</h1>
          <div className="">
            <h3>University of the People</h3>
            <p>BSc. Computer Science</p>
            <p>2019 - 2023</p>
          </div>
          <div className="">
            <h3>Udacity</h3>
            <p>Bertelsmann Tech Scholarship Challenge Course - Cloud Track</p>
            <p>2019 - 2020</p>
          </div>
          <div className="">
            <h3>Yaba College of Technology</h3>
            <p>National Diploma, Computer Engineering</p>
            <p>2013 - 2016</p>
          </div>
        </div>
        <div className="job">
          <h1>Experience</h1>
          <div className="">
            <h3>Ruby/Javascript Developer</h3>
            <p>Fluxx, SanFransisco</p>
            <p>Aug 2019 - date</p>
          </div>
          <div className="">
            <h3>Software Engineer</h3>
            <p>Andela, Lagos</p>
            <p>Nov 2018 - date</p>
          </div>
          <div className="">
            <h3>Software Developer</h3>
            <p>AppsWorkforce, Lagos</p>
            <p>April 2016 - March 2017</p>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1Fm9qSlhSl9MylW0IeRu1yp_T2W1pu7PZ/view?usp=sharing" target="_blank">View Resume</a>
      </div>
    </div>
  </div>
)

export default About