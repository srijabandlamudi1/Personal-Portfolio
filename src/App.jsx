import React from "react"

import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Education from "./Components/Education/Education"
import ContactForm from "./Components/ContactForm/Contactform"
import SideNavbar from "./Components/SideNavbar/SideNAvbar"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import ProjectsList from "./Components/Project/ProjectsList"


const App = () => {
  return (
    <div>
      <Navbar/>
      <SideNavbar/>
      <ScrollToTop/>
      <Hero/>
      <About/>
      <Skills/>
      <ProjectsList/>
      <Education/>
      <ContactForm/>
    </div>
  )
}

export default App