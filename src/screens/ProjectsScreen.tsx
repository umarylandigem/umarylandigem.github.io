import React from "react"
import "../styles/projects.css"
import NavBar from "../components/NavBar"

interface Foo {
  frontImage: string;
  frontText: number;
  award: string;
  backText: string;
  link: string;
}

const data: Foo[] = [
  {
    frontImage: "assets/images/project-images/2022.png",
    frontText: 2022,
    award: "Bronze",
    backText: "Engineering E.coli to filter excess nitrates from the Chesapeake Bay in an accessible bioreactor system.",
    link: "",
  },
  {
    frontImage: "",
    frontText: 0,
    award: "",
    backText: "",
    link: "",
  },
  {
    frontImage: "",
    frontText: 0,
    award: "",
    backText: "",
    link: "",
  },
  
]
function SoftwareProjects() {
  return (
    <main>
      <div className="grid1">
        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="" />
            </div>
            <div className="front-text"></div>
          </div>

          <div className="back">
            <p className="award">:</p>
            <p className="text">
              
            </p>

            <a href="https://2022.igem.wiki/umaryland/" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2021.png" />
            </div>
            <div className="front-text">2021</div>
          </div>

          <div className="back">
            <p className="award">Gold:</p>
            <p className="text">
              Designing a phosphorous recycling system for the Chesapeake Bay
              that uses engineered E.coli housed in a bioreactor.
            </p>

            <a href="https://2021.igem.wiki/umaryland/" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2020.png" />
            </div>
            <div className="front-text">2020</div>
          </div>

          <div className="back">
            <p className="award">Bronze:</p>
            <p className="text">
              Modeling a rapid COVID-19 test kit that leverages deactivated
              CRISPR/dCas13 to create a visual output in the presence of
              coronavirus RNA.
            </p>

            <a href="https://2021.igem.org/Team:UMaryland" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2019.png" />
            </div>
            <div className="front-text">2019</div>
          </div>

          <div className="back">
            <p className="award">Bronze:</p>
            <p className="text">
              Engineering E.coli to filter excess nitrates from the Chesapeake
              Bay in an accessible bioreactor system.
            </p>

            <a href="https://2019.igem.org/Team:UMaryland" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2018.png" />
            </div>
            <div className="front-text">2018</div>
          </div>

          <div className="back">
            <p className="award">Gold:</p>
            <p className="text">
              A modular, scalar, and accelerated biodegradation system of
              polyethylene terephthalate achieved using a PETase - cellulose
              binding domain fusion protein.
            </p>

            <a href="https://2018.igem.org/Team:UMaryland" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2017.png" />
            </div>
            <div className="front-text">2017</div>
          </div>

          <div className="back">
            <p className="award">Bronze:</p>
            <p className="text">
              Saving the Cavendish banana by creating a soil probiotic that
              protects banana plants by detecting infection and responding with
              a potent fungicide
            </p>

            <a href="https://2018.igem.org/Team:UMaryland" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2016.png" />
            </div>
            <div className="front-text">2016</div>
          </div>

          <div className="back">
            <p className="award">Silver:</p>
            <p className="text">
              Creating a strain of E. coli that break down methane to be
              implemented into landfills as an environmentally friendly strategy
              for ameliorating global climate change
            </p>

            <a
              href="https://2016.igem.org/Team:UMaryland/Practices"
              target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2015.png" />
            </div>
            <div className="front-text">2015</div>
          </div>

          <div className="back">
            <p className="award">Gold:</p>
            <p className="text">
              Gold: Reducing the use of antibiotics in synthetic biology
              research and the spread of antibiotic resistance through an mRNA
              based toxin-antitoxin system.
            </p>

            <a href="https://2015.igem.org/Team:UMaryland" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2014.png" />
            </div>
            <div className="front-text">2014</div>
          </div>

          <div className="back">
            <p className="award">Gold:</p>
            <p className="text">
              Sensing the infection of Perkinsus marinus through an engineered
              biosensor to protect the Crasseoterra virginica (Eastern oyster)
              population
            </p>

            <a href="https://2014.igem.org/Team:UMaryland" target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <!--End Main Boxes-->
      </div>
    </main>
  )
}
export default function ProjectsScreen() {
  return (
    <>
      <NavBar/>

      <h1 className="header-text bebas-neue-regular">CHECK OUT OUR PAST PROJECTS!</h1>

    </>
  )
}



    

    <h1 className="header-text bebas-neue-regular">HARDWARE PROJECTS</h1>
    <div className="hardware">
      <div className="grid2">
        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2017-hardware.png" />
            </div>
            <div className="front-text">2017</div>
          </div>

          <div className="back">
            <p className="award">Bronze:</p>
            <p className="text">
              A compact, affordable, and multifunctional lab-in-a-box composed
              of a microcentrifuge, culture shaker, incubator and vortex
              machines.
            </p>

            <a
              href="https://2017.igem.org/Team:UMaryland?target=hardware"
              target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2016-hardware.png" />
            </div>
            <div className="front-text">2016</div>
          </div>

          <div className="back">
            <p className="award">Bronze:</p>
            <p className="text">
              A DIY ultra-low freezer made of a series of Peltier plates that
              reaches -80 C for storing sensitive biological materials.
            </p>

            <a
              href="https://2016.igem.org/Team:UMaryland/Hardware"
              target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>

        <div className="container">
          <div className="front">
            <div className="front-image">
              <img src="assets/images/project-images/2015-hardware.png" />
            </div>
            <div className="front-text">2015</div>
          </div>

          <div className="back">
            <p className="award">Bronze:</p>
            <p className="text">
              An inexpensive thermocycler made from a hairdryer and a soda can
              for polymerase chain reactions.
            </p>

            <a
              href="https://2015.igem.org/Team:UMaryland/Design"
              target="_blank"
              ><p>Visit Site</p></a
            >
          </div>
        </div>
      </div>
    </div>

    <br /><br />
  </body>
</html>
