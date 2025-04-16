

import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import Gears from "../components/Gears";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/nav-bar.css";
import "../styles/footer.css";

export default function HomeScreen() {
  setTimeout(Slideshow, 3000);

  return (
    <body>
      <NavBar />
      <div style={{height: 50}}/>

      <div id="title-holder">
        <div className="title-content">
          <p>UMARYLAND IGEM</p>
        </div>
      </div>

      <Slideshow />

      <Gears />

      <div className="text-block">
        <h1>What is iGEM?</h1>
        <p>
          iGEM (international Genetically Engineered Machine) is a competition
          that challenges students from universities all around the world to
          solve local and global problems with synthetic biology. At the end of
          each year, iGEM teams travel to Paris to defend the scientific merit
          and community impact of their projects.
        </p>

        <br />
      </div>

            <div className="text-block">
                <h1>UMaryland iGEM</h1>
                <p>UMaryland iGEM is a team of undergraduate students at the University of Maryland, College Park that compete in iGEM annually. Our organization is student run - we develop a project idea, conduct wet lab and computational research, meet with stakeholders to get feedback, fundraise to support our team, and promotional materials to display our research.</p>

                <p>UMaryland iGEM is a great opportunity for students to learn both technical and communication skills, all while gaining experience in many aspects of the research process. In the past, our team has worked on projects relating to plastic degradation, the banana plight, methane pollution, and the bioremediation of phosphorus and nitrogen in the Chesapeake Bay.</p>


            </div>

            <div style={{height: 30}}></div>

            <PhotoGallery></PhotoGallery>

            <Footer/>
        </body>
    )
}
