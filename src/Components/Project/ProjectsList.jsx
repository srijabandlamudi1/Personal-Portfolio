import React from 'react';
import ProjectCard from './Project';
import './Project.css';

const ProjectsList = () => {
    const projects = [
        {
            title: "Travel Tool",
            techStack: ["MongoDB", "Express.js", "Angular", "Node.js", "JWT", "OAuth 2.0"],
            description: "Developed a robust web application to streamline travel planning. Enhanced user engagement by 30% with a mobile-first, responsive design. Implemented secure authentication using JWT and OAuth 2.0."
        },
        {
            title: "College Fee Management System",
            techStack: ["Java", "SpringBoot", "Hibernate", "MySQL", "Maven", "Eclipse IDE", "JUnit"],
            description: "Developed a College Fee Management System using Java, Spring Boot, Hibernate, and MySQL, with Eclipse IDE, Maven, and JUnit for development and testing. The system automates finance-related tasks such as fee collection, receipt generation, and transaction tracking, providing functionalities to manage student details, add fee records, and check dues. The use of Spring Boot and Hibernate ensured efficient data handling and seamless integration, while JUnit facilitated robust testing."
        },
        {
            title: "Personal Portfolio",
            techStack: ["React", "Vite", "HTML", "CSS", "JavaScript", "Github"],
            description: "Developed a personal portfolio using React and Vite to showcase projects, skills, and professional experience. Designed a dynamic and responsive interface to provide a seamless user experience, with optimized performance leveraging Vite's fast build and development capabilities. Integrated modern UI components to highlight achievements and projects effectively, ensuring a polished and professional presentation."
        },
        {
            title: "Pharmacy Management App",
            techStack: ["React", "Java", "SpringBoot", "Firebase", "Junit", "Postman", "Maven"], 
            description: "Developed a Pharmacy Management System using React for the frontend and Java, Spring Boot for the backend, leveraging Microservice Architecture for scalability and efficiency. Integrated Firebase for real-time inventory and prescription handling, with REST APIs for dynamic order processing. Utilized JUnit and Postman for testing, and deployed the system using GitHub, Maven, and AWS S3 & EC2 for cloud infrastructure."
        },
        {
            title: "Insulin Dosage Prediction System",
            techStack: ["Python", "TensorFlow", "Scikit-learn", "Numpy", "Matplotlib"],
            description: "Developed a Machine Learning model to predict the optimal insulin dosage for diabetic patients, utilizing Linear Regression and Gradient Boosting algorithms. Implemented the project using Python libraries including TensorFlow, Scikit-learn, NumPy, and Matplotlib, achieving 98% accuracy on test data with the Gradient Boosting model."
        }
    ];

    return (
        <div id="Project" className="projects-section">
            <h2 className="projects-heading">PROJECTS</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        techStack={project.techStack}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsList;
