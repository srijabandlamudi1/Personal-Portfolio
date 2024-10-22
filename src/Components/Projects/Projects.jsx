import React from "react"
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
        <div className="projects-title">
            <h1><span>Projects</span></h1>
            <div className="projects-container">
            <div className="projects-card">
                <h2>Personal Portfolio</h2>
                <span className="tooltip1"><p>Created a portfolio using react</p></span>
            </div>
            <div className="projects-card">
                <h2>Insulin Dosage Prediction System</h2>
                <span className="tooltip1"><p>Implemented a Machine Learning model to predict insulin dosage for diabetics using Linear Regression and Gradient Boosting, utilizing
                Python libraries such as TensorFlow, Scikit-learn, NumPy, and Matplotlib</p></span>
            </div>
            <div className="projects-card">
                <h2>College Fee Management System</h2>
                <span className="tooltip1"><p>Developed a sophisticated fee management system for college administrators, streamlining fee collection, receipt generation, and transaction
                tracking.</p></span>
            </div>
            <div className="projects-card">
                <h2>Travel Tool</h2>
                <span className="tooltip1"><p>Designed and developed a comprehensive travel planning application, increasing user engagement by 30%.</p>
                <p>Implemented user authentication, itinerary creation, and responsive design, reducing trip planning time by 20%.</p></span>
            </div>
            <div className="projects-card">
                <h2>Pharmacy Management App</h2>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Projects