import React from 'react';
import './Education.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Education = () => {
    return (
        <div id="Experience" className="education-experience">
            <h2>Education - Experience</h2>
            <div className="edu-timeline">
                {/* First Education Entry */}
                <div className="edu-timeline-entry left">
                    <div className="edu-icon-container">
                        <FaGraduationCap />
                    </div>
                    <div className="edu-flip-card">
                        <div className="edu-flip-card-front">
                            <h3>High School Diploma</h3>
                            <p>Science High School "Albert Einstein"</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Coursework: Physics, Mathematics, Chemistry, Biology</p>
                        </div>
                    </div>
                </div>

                {/* First Experience Entry */}
                <div className="edu-timeline-entry right">
                    <div className="edu-icon-container">
                        <FaBriefcase />
                    </div>
                    <div className="edu-flip-card">
                        <div className="edu-flip-card-front">
                            <h3>Freelance</h3>
                            <p>Graphic Designer, Illustrator</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Roles: Branding, Marketing, Client Interactions</p>
                        </div>
                    </div>
                </div>

                {/* Additional Education Entry */}
                <div className="edu-timeline-entry left">
                    <div className="edu-icon-container">
                        <FaGraduationCap />
                    </div>
                    <div className="edu-flip-card">
                        <div className="edu-flip-card-front">
                            <h3>Bachelor's Degree in Computer Science</h3>
                            <p>XYZ University</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Coursework: Data Structures, Algorithms, Software Engineering</p>
                        </div>
                    </div>
                </div>

                {/* Second Experience Entry */}
                <div className="edu-timeline-entry right">
                    <div className="edu-icon-container">
                        <FaBriefcase />
                    </div>
                    <div className="edu-flip-card">
                        <div className="edu-flip-card-front">
                            <h3>Software Developer</h3>
                            <p>ABC Tech Solutions</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Roles: Full Stack Development, API Integration, Code Optimization</p>
                        </div>
                    </div>
                </div>

                {/* Third Experience Entry */}
                <div className="edu-timeline-entry left">
                    <div className="edu-icon-container">
                        <FaBriefcase />
                    </div>
                    <div className="edu-flip-card">
                        <div className="edu-flip-card-front">
                            <h3>Internship</h3>
                            <p>DEF Corporation</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Roles: Data Analysis, Reporting, Automation Scripts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
