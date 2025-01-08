import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div id="About" className="about-section">
      <h1 className="about-heading"><span>ABOUT ME</span></h1>
      <div className="about-content">
        {/* Left Side */}
        <div className="left-section">
          <div className="contact-card">
            <h2>Srija Bandlamudi</h2>
            <p>Email: <a href="mailto:srijabandlamudi1@gmail.com">srijabandlamudi181@gmail.com</a></p>
            <p>Phone: <a href="tel:+17048580203">+17048580203</a></p>
            <div className="social-icons">
              <a href="https://github.com/srijabandlamudi1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/srijabandlamudi/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/srija_bandlamudi/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-section">
          <p>I am a <span className="highlight-purple">Software Engineer </span>with 3 years of experience, specializing in crafting sleek front-ends and robust back-ends using Java, Spring Boot, React, and Angular. As a versatile <span className='highlight-purple'>Full-Stack Developer</span>, I build scalable backend services and responsive UIs to deliver seamless user experiences. My expertise extends to Docker and Kubernetes, streamlining deployments and enhancing scalability, while my proficiency with MySQL, MongoDB, and DynamoDB ensures optimized database performance. Skilled in building CI/CD pipelines using Jenkins and Git, I facilitate smooth code integration and hassle-free deployments. Whether in Agile or Waterfall environments, I thrive on problem-solving, collaboration, and bringing innovative solutions to life, with additional experience in AWS, Azure, and data visualization using Power BI and Tableau.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
