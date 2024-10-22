import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="Experience" className="resume-container">
      {/* Main Heading */}
      <h1 className="main-heading"><span>My Resume</span></h1>

      <div className="experience-education-container">
        {/* Education Section */}
        <div className="education-section">
          <h2 className="section-heading">Education</h2>
          <div className="education-card">
            <h3>Education 1</h3>
            <p>Bachelor of Technology in Computer Science</p>
            <p>XYZ University, 2020</p>
          </div>
          <div className="education-card">
            <h3>Education 2</h3>
            <p>Master's in Software Engineering</p>
            <p>ABC University, 2022</p>
          </div>
        </div>

        {/* Line Separator */}
        <div className="line-separator"></div>

        {/* Experience Section */}
        <div className="experience-section">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-card">
            <h3>Experience 1</h3>
            <p>Software Engineer at TCS</p>
            <p>June 2023 - Present</p>
          </div>
          <div className="experience-card">
            <h3>Experience 2</h3>
            <p>Full Stack Developer at Accenture</p>
            <p>June 2020 – Oct 2021</p>
          </div>
          <div className="experience-card">
            <h3>Experience 3</h3>
            <p>Software Engineer at Deloitte</p>
            <p>April 2019 – April 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
