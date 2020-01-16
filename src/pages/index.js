import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
  FaMedium,
  FaPhoneSlash,
  FaGoogle,
  FaPhone,
  FaChess,
} from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="wrapper">
      <div className="box social">
        <h1>Social Links</h1>
        <div className="social__links">
          <p>
            <a
              href="https://github.com/Danielshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize="3rem" /> Github
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/shotonwa-daniel-aa8190125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin fontSize="3rem" /> LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/d_showWorld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter fontSize="3rem" /> Twitter
            </a>
          </p>
          <p>
            <a
              href="https://dev.to/danielshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDev fontSize="3rem" /> Dev.to
            </a>
          </p>
          <p>
            <a
              href="https://medium.com/@danielshotonwa53"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium fontSize="3rem" /> Medium
            </a>
          </p>
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
          <h3>Software Engineer</h3>
          <p>Python, javascript and Ruby Developer</p>
        </div>
        <div class="built__gatsby">
          Built with gatsby
          <span role="img" aria-label="love">
            ❤️
          </span>
        </div>
      </div>
      <div className="box pics">
        <Image className="pics__img" />
      </div>
      <div className="box about">
        <h1>About Me</h1>
        <p>
          Hello! I’m a Technophile and Software Developer specializing in
          developing web applications, testing and making the internet a more
          beautiful and positive place. I am a fast learner who loves learning
          new concepts and technology. I hold a National Diploma in Computer
          Engineering from Yaba College of Technology. I have over 3 years of
          experience in software development.
        </p>
        <p>Fun Fact &rarr; I love Chess and VIM</p>
      </div>
      <div className="box special">
        <h1>Specialized in: </h1>
        <ul>
          <li> &rarr; Web Development</li>
          <li> &rarr; Software Architecture</li>
          <li> &rarr; End to End Testing</li>
          <li> &rarr; Unit Testing</li>
          <li> &rarr; Object Oriented Programming</li>
          <li> &rarr; Mentoring</li>
          <li> &rarr; Database Architecture</li>
          <li> &rarr; Agile Methodology</li>
        </ul>
        <br />
        <h1>Nugget:</h1>
        <br></br>
        <p>Do you want to be super productive, try VIM and Bash Scripting</p>
      </div>
      <div className="box e">
        <div className="talk">
          Do you have any interesting idea to discuss or something intuitive to
          build{" "}
          <span role="img" aria-label="build">
            👷‍♀️
          </span>
          , <br />
          Let's chat <FaPhoneSlash />
        </div>
        <div className="form">
          <p><FaGoogle /> danielshotonwa53@gmail.com</p>
          <p><FaPhone /> +2348096522832</p>
          <p><FaChess /></p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
