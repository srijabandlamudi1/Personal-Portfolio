import React from 'react';
import './Project.css';

const ProjectCard = ({ title, techStack, description }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <div className="window-buttons">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                </div>
                <h3>{title}</h3>
            </div>
            <div className="project-content">
                <code>
                    <span className="keyword">const</span> project = &#123;<br />
                    &nbsp;&nbsp;<span className="property">title</span>: <span className="string">'{title}'</span>,<br />
                    &nbsp;&nbsp;<span className="property">techStack</span>: <span className="array">{`[${techStack.map(stack => `'${stack}'`).join(', ')}]`}</span>,<br />
                    &nbsp;&nbsp;<span className="property">description</span>: <span className="string">'{description}'</span>,<br />
                    &#125;;
                </code>
            </div>
        </div>
    );
}

export default ProjectCard;
