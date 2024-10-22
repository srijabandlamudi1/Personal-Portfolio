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
            title: "E-Commerce App",
            techStack: ["React", "Redux", "Firebase", "Stripe"],
            description: "Built a scalable e-commerce platform with real-time inventory management and integrated payment processing using Stripe."
        },
        {
            title: "Social Media Dashboard",
            techStack: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
            description: "Developed an interactive dashboard for social media analytics, enabling users to track engagement and insights across multiple platforms."
        },
        {
            title: "Social Media Dashboard",
            techStack: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
            description: "Developed an interactive dashboard for social media analytics, enabling users to track engagement and insights across multiple platforms."
        },
        {
            title: "Social Media Dashboard",
            techStack: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
            description: "Developed an interactive dashboard for social media analytics, enabling users to track engagement and insights across multiple platforms."
        }
    ];

    return (
        <div className="projects-section">
            <h2 className="projects-heading">Projects</h2>
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
