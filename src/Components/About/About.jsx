import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div id="About" className="about-section">
      <h1 className="about-heading"><span>About Me</span></h1>
      <div className="about-content">
        {/* Left Side */}
        <div className="left-section">
          <h2>Srija Bandlamudi</h2>
          <p>Email: <a href="mailto:srijabandlamudi1@gmail.com">srijabandlamudi1@gmail.com</a></p>
          <p>Phone: <a href="tel:+17048580203">+17048580203</a></p>
          <div className="social-icons">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-section">
          <p>
            I am a software engineer with over 3 years of experience in developing full-stack applications. I specialize in JavaScript, Python, TypeScript, and have worked with frameworks like React, Angular, and Django. I am passionate about building efficient, scalable, and user-friendly solutions, continuously improving my skills and staying updated with the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
