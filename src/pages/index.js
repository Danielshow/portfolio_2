import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Danielshow" />
    <div className="wrapper">
      <div className="box social">
        <div className="social__links">
          <h1>Social Links</h1>
          <p>Github</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Dev.to</p>
          <p>Medium</p>
          <p></p>
        </div>
      </div>
      <div className="box home">
        <div class="home__nav">
          <ul class="home__nav--list">
            <li>Blog</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div class="home__hero">
          <h1>Danielshow</h1>
          <h3>Software Developer</h3>
          <p>stack: Python, javascript, Ruby</p>
        </div>
        <div>
          Built with gatsby ❤️
        </div>
      </div>
      <div className="box pics">
        <Image className="pics__img"/>
      </div>
      <div className="box about">
        <h1>About Me</h1>
        <p>Hello! I’m a Technophile and Software Developer specializing in developing web applications, testing and making the internet a more beautiful and positive place. I am a fast learner who loves learning new concepts and technology. I hold a National Diploma in Computer Engineering from Yaba College of Technology. I have over 3 years of experience in software development.</p>
      </div>
      <div className="box special">
      <h1>Specializing in: </h1>
      <ul>
        <li> &rarr; Web Development</li>
        <li> &rarr; Software Architecture</li>
        <li> &rarr; Testing</li>
        <li> &rarr; Unit Testing</li>
        <li> &rarr; Object Oriented Programming</li>
        <li> &rarr; Mentoring</li>
        <li> &rarr; Database Architecture</li>
        <li> &rarr; Agile Methodology</li>
      </ul>
      </div>
      <div className="box e">
        <div className="talk">T</div>
        <div className="form">F</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
