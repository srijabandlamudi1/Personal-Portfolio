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
                            <h3>Master's Degree</h3>
                            <p>University of North Carolina At Charlotte [Aug 2022 - Dec 2023]</p>
                            <p>Major: Computer Science</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Course Work: Software System Design & Implementation, Visual Analytics, Big Data Analytics, Database Systems, Information visualization, Algorithms and Data Structures, Knowledge Disc in Databases, Intelligent Systems.</p>
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
                            <h3>Software Engineer</h3>
                            <p>Destin IT [May 2023 - Present]</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Working as a Software Engineer, developed scalable applications using Java, Spring Boot, and Angular, with a focus on performance optimization, CI/CD, and efficient cloud infrastructure management.</p>
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
                            <h3>Bachelor's Degree</h3>
                            <p>Gandhi Institute of technology and Management, Visakhapatnam</p>
                            <p>Major: Computer Science</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Course Work: Database Management Systems, Machine Learning, Artificial Intelligence, Data Structures, Web Technologies, Data Mining and Data Warehousing, Operating Systems, Cloud Computing.</p>
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
                            <h3>Full-Stack Developer</h3>
                            <p>Phoenix Global [June 2021- April 2022]</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>Designed front-end interfaces, developed scalable backend services, optimized databases, managed container orchestration, and leveraged cloud infrastructure for seamless deployment.</p>
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
                            <h3>Software Developer</h3>
                            <p>Indian Servers [August 2020- May 2021]</p>
                        </div>
                        <div className="edu-flip-card-back">
                            <p>led web application development using React and Node.js, integrated secure OAuth protocols, streamlined CI/CD pipelines with Jenkins and Docker, and facilitated Agile processes for enhanced project delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
