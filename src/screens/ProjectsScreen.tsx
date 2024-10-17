import React from "react"
import "../styles/projects.css"
import NavBar from "../components/NavBar"

import SoftwareProjects from "../data/SoftwareProjects"
import HardwareProjects from "../data/HardwareProjects"

interface ProjectArgs {
  year: number;
  award: string;
  backText: string;
  link: string;
}

interface ContainerArgs {
  project: ProjectArgs;
}

function Container({project} : ContainerArgs) {
  return (
    <div className="container">
      <div className="front">
        <div className="front-image">
          <img src={"src/assets/images/project-images/" + project.year + ".png"} />
        </div>
        <div className="front-text">{project.year}</div>
      </div>

      <div className="back">
        <p className="award">{project.award}</p>
        <p className="text">
          {project.backText}
        </p>

        <a href={project.link} target="_blank"><p>Visit Site</p></a>
      </div>
    </div>
  )
}

function RenderSoftwareProjects() {
  return (
    <main>
      <div className="grid1">
        {SoftwareProjects.map((project:ProjectArgs) => <Container project={project}/>)}
      </div>
    </main>
  )
}

function RenderHardwareProjects() {
  return (
    <div className="hardware">
      {HardwareProjects.map((project: ProjectArgs) => <Container project={project}/>)}
    </div>
  )
}

export default function ProjectsScreen() {
  return (
    <>
      <NavBar/>

      <h1 className="header-text">CHECK OUT OUR PAST PROJECTS!</h1>
      <RenderSoftwareProjects/>

      <h1 className="header-text">HARDWARE PROJECTS</h1>
      <RenderHardwareProjects/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}