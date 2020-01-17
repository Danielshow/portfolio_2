import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
  FaMedium,
} from "react-icons/fa"

const Social = () => (
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
)

export default Social
