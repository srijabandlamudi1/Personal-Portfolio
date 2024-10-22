import React from "react"
import './Skills.css'

// Skills
import angularLogo from '../../assets/angular.png'
import awsLogo from '../../assets/aws.png'
import cssLogo from'../../assets/CSS.png'
import githubLogo from'../../assets/github.svg'
import htmlLogo from '../../assets/html.png'
import typescriptLogo from '../../assets/typescript.png'
import tableauLogo from '../../assets/tableau.svg'
import springbootLogo from '../../assets/springboot.png'
import mongodbLogo from '../../assets/mongodb.png'
import nodejsLogo from '../../assets/nodejs.png'
import reactLogo from '../../assets/React.png'
import powerbiLogo from '../../assets/powerbi.png'
import mysqlLogo from '../../assets/mysql.png'
import javaLogo from '../../assets/java.png'
import pythonLogo from '../../assets/Python.png'
import javascriptLogo from '../../assets/javascript.png'

const Skills = () => {
  return (
    <div id="Skills" className="skills">
      <div className="skills-title">
        <h1><span>My Skills</span></h1>
      </div>
      <div className="skills-container">
      <div className="card">
          <img src={angularLogo} alt="Angular Logo" />
          <span className="tooltip">Angular</span>
        </div>
        <div className="card">
          <img src={awsLogo} alt="AWS Logo" />
          <span className="tooltip">AWS</span>
        </div>
        <div className="card">
          <img src={githubLogo} alt="GitHub Logo" />
          <span className="tooltip">Github</span>
        </div>
        <div className="card">
          <img src={htmlLogo} alt="HTML Logo" />
        </div>
        <div className="card">
          <img src={cssLogo} alt="CSS Logo" />
        </div>
        <div className="card">
          <img src={typescriptLogo} alt="Typescript Logo" />
        </div>
        <div className="card">
          <img src={springbootLogo} alt="springboot Logo" />
        </div>
        <div className="card">
          <img src={reactLogo} alt="react Logo" />
        </div>
        <div className="card">
          <img src={pythonLogo} alt="python Logo" />
        </div>
        <div className="card">
          <img src={tableauLogo} alt="tableau Logo" />
        </div>
        <div className="card">
          <img src={powerbiLogo} alt="powerbi Logo" />
        </div>
        <div className="card">
          <img src={nodejsLogo} alt="nodejs Logo" />
        </div>
        <div className="card">
          <img src={javaLogo} alt="java Logo" />
        </div>
        <div className="card">
          <img src={mongodbLogo} alt="mongodb Logo" />
        </div>
        <div className="card">
          <img src={mysqlLogo} alt="mysql Logo" />
        </div>
        <div className="card">
          <img src={javascriptLogo} alt="javascript Logo" />
        </div>
      </div>
    </div>
  )
}

export default Skills;