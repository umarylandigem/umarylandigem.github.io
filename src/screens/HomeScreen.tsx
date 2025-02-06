import "../styles/home.css"
import "../styles/nav-bar.css"

import React from "react"
import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Slideshow from "../components/Slideshow"
import Gears from "../components/Gears"

export default function HomeScreen () {
    setTimeout(Slideshow, 3000);

    return (
        <body>
            <NavBar/>
            <div id="title-holder">
                <div className="title-content">
                    <p>UMARYLAND IGEM</p>
                </div>
            </div>    
            <Slideshow/>
            
            <Gears/>

            <div className="text-block">
                <h1>What is iGEM?</h1>
                <p>
                    iGEM (international Genetically Engineered Machine) is a competition
                    that challenges students from universities all around the world to solve
                    local and global problems with synthetic biology. At the end of each
                    year, iGEM teams travel to Paris to defend the scientific merit and
                    community impact of their projects.
                </p>

                <br />
            </div>

            <div className="text-block">
                <h1>UMaryland iGEM</h1>
                <p>UMaryland iGEM is a team of undergraduate students at the University of Maryland, College Park that compete in iGEM annually. Our organization is student run - we develop a project idea, conduct wet lab and computational research, meet with stakeholders to get feedback, fundraise to support our team, and promotional materials to display our research.</p>

                <p>UMaryland iGEM is a great opportunity for students to learn both technical and communication skills, all while gaining experience in many aspects of the research process. In the past, our team has worked on projects relating to plastic degradation, the banana plight, methane pollution, and the bioremediation of phosphorus and nitrogen in the Chesapeake Bay.</p>

                <h1>We are recruiting for iGEM 2024! Here are our team’s committees: </h1>
                <p>
                    Wet lab: Designing plasmid/genetic constructs, cloning, running experiments/assays
                </p>
                
                <p>
                Modeling: Creating CAD models, performing data analysis, using MATLAB and machine learning for predictions and modeling
                </p>
                
                <p>
                Finance: Writing grants + budget proposals, fundraising for travel
                </p>
                
                <p>
                Human Practices: Initiating stakeholder and advisor meetings for feedback, educating others about synthetic biology
                </p>
                
                <p>
                Design: Developing promotion videos, creating a project website, maintaining online/social media presence
                </p>

                <h1>  If you are interested in joining any of our committees, please send us an email at 
                    <a href="mailto:umarylandigem@gmail.com">umarylandigem@gmail.com</a>
                </h1>  
            </div>
        </body>
    )
}


