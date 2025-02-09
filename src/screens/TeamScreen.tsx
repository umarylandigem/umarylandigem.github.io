import "../styles/team.css"
import "../styles/nav-bar.css"

import MembersData from "../data/MembersData.tsx";
import BoardData from "../data/BoardData.tsx";

import React from "react"
import NavBar from "../components/NavBar"


interface Person {
  name: string;
  year: string;
  major: string;
  committees: string;
  src: string;
}

interface BioArgs {
  person: Person;
  isBoard: boolean;
}


function Advisors() {
  return (
    <>
    <NavBar/>

    <div style={{ padding: "20px" }}>
      <h2
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "3rem" }}
      >
        Advisors
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src="https://static.igem.wiki/teams/5104/team/eisenstein-headshot-updated.png"
          alt="Dr. Edward Eisenstein"
          className="advisor-image square-image"
          style={{
            border: "5px solid #d2421e",
            marginRight: "20px",
          }}
        />
        <div>
          <p style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            Dr. Edward Eisenstein is a Fellow in the Institute for Bioscience
            and Biotechnology Research and an Associate Professor in the
            Fischell Department of Bioengineering at the University of
            Maryland. Trained in synthetic biology and protein engineering,
            his current research interests are focused on protein and
            biosystem engineering for applications in plants such as biofuels
            and pathogen resistance. He has advised the Umaryland iGEM team
            since 2014 and is an active leader of the iGEM Engineering and
            Steering Committees.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          flexDirection: "row-reverse",
        }}
      >
        <img
          src="https://static.igem.wiki/teams/5104/team/kahn-jason-chem-web-updated.png"
          alt="Dr. Jason D. Kahn"
          className="advisor-image square-image"
          style={{
            border: "5px solid #d2421e",
            marginLeft: "20px",
          }}
        />
        <div>
          <p style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            Dr. Jason D. Kahn is a biophysical chemist who studies
            protein-nucleic acid interaction and engineering. He is best known
            for studies of DNA looping, bending, twisting, and cyclization, as
            well as hybridization thermodynamics for modified bases. He
            teaches a variety of chemistry, biochemistry, and molecular
            biology courses, which he credits for initiating his interest in
            synthetic biology. With Dr. Eisenstein, he has mentored UMaryland
            iGEM since 2014.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default function TeamScreen() {
  return (
    <>

          <Advisors/>

          <h2 className="section-title" style={{ fontSize: "3rem" }}>
            Board
          </h2>

          <div className="grid-container">
            {BoardData.map((person) => <Bio person={person} isBoard = {true}/>)}
          </div>

          <h2 className="section-title" style={{ fontSize: "3rem" }}>
            Members
          </h2>
          <div className="grid-container">
            {MembersData.map((person) => <Bio person={person} isBoard={false}/>)}
          </div>
    </>
  );
}

function Bio({person, isBoard} : BioArgs ) {
  return (
    <div className="grid-item-wrapper">
      <div className={isBoard ? "grid-item board-item" : "grid-item member-item"}>
        <img
          src={person.src}
          alt={person.name}
          className="square-image"
        />
      </div>
      <p className="name">{person.name}</p>
      <p className="bioText" title="Year">{person.year}</p>
      <p className="bioText" title="Major">{person.major}</p>
      <p className="bioText" title="Committee(s)">{person.committees}</p>
    </div>
  )
}

function Graphics() {
    return (
        <>
        <div className="left-corner">
            <img
            src="src/assets/images/igem-multiple-gears-official.png"
            alt="Multiple gears"
            />
        </div>

        <div className="right-corner">
            <img
            src="src/assets/images/igem-multiple-gears-official.png"
            alt="Multiple gears"
            />
        </div></>
    )
}

// Old Advisors
/*
function Advisors() {
    return (
        <>
        <br /><br />

        <div className="advisor-block" style={{marginLeft: "15%"}}>
        <div className="circle" style={{float: "left"}}>
            <img src="src/assets/images/team-images/advisors/dr-einstein.jpg" />
        </div>
        <div className="advisor-text" style={{float: "left"}}>
            Dr. Edward Eisenstein is a Fellow in the Institute for Bioscience and
            Biotechnology Research and an Associate Professor in the Fischell
            Department of Bioengineering at the University of Maryland. Trained in
            synthetic biology and protein engineering, his current research
            interests are focused on protein and biosystem engineering for
            applications in plants such as biofuels and pathogen resistance. He has
            advised the Umaryland iGEM team since 2014 and is an active leader of
            the iGEM Engineering and Steering Committees.
        </div>
        </div>

        <br /><br />
        <div className="advisor-block" style={{float: "right",  marginRight: "15%"}}>
        <div className="circle" style={{float: "right"}}>
            <img src="src/assets/images/team-images/advisors/dr-kahn.jpg" />
        </div>
        <div className="advisor-text" style={{float: "right"}}>
            Dr. Jason D. Kahn is a biophysical chemist who studies protein-nucleic
            acid interaction and engineering. He is best known for studies of DNA
            looping, bending, twisting, and cyclization, as well as hybridization
            thermodynamics for modified bases. He teaches a variety of chemistry,
            biochemistry, and molecular biology courses, which he credits for
            initiating his interest in synthetic biology. With Dr. Eisenstein, he
            has mentored UMaryland iGEM since 2014.
        </div>
        </div>
        </>
    )
}
*/
//Old TeamScreen
/*
export default function TeamScreen() {
    return (
        <body>
            <NavBar/>
            <Graphics/>
            {/**Advisor images are 205x205px *}
            <div id="title">OUR TEAM</div>


            <div className="section">ADVISORS</div>
            <Advisors/>

            <Slideshow/>
        </body>
    )
}
*/
function Slideshow() {
    return (
        <>
            <div id="slideshow-modal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div className="slideshow">
                    <span className="prev-arrow">&#10094;</span>
                    <div className="slideshow-content"></div>
                    <span className="next-arrow">&#10095;</span>
                    </div>
                </div>
            </div>

    <div className="section" style={{marginTop: "250px"}}>BOARD</div>
    <br />

    <div id="grid1">
      <div className="profile">
        <img
          src="src/assets/images/team-images/exec/renee-jaranson.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img src="src/assets/images/team-images/exec/Mia-Jocic.JPG" className="image" />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/exec/abhi-senthilkumar.JPG"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/exec/jonathan-wu.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/exec/valeria-salas-dietz.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/mahita-kamalahasan.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/navya-bansal.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Lauren-Applegate.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Gadigi-Aditri.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/jonathon-meyer.jpg"
          className="image"
        />
      </div>

      <div className="empty profile"></div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/IMG_3901.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Sami_Kudagunti_Headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img src="" alt="" />
      </div>

      <div className="empty profile"></div>
    </div>

    <br /><br />
    <div className="section">MEMBERS</div>
    <br />

    <div id="grid2">
      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Krista-Adu-Osei.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/brennen.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/patrick.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Vikram Khandelwal Headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Viharika.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img src="src/assets/images/team-images/members/Ananya.jpg" className="image" />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Patricia Rosemond Headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Dana_Harel_Headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Haider Hussain headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Rebecca Lu Headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Kevin Zhang headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/Graham Ferguson Headshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img src="src/assets/images/team-images/members/sarahz.jpg" className="image" />
      </div>

      <div className="profile">
        <img
          src="src/assets/images/team-images/members/keithheadshot.jpg"
          className="image"
        />
      </div>

      <div className="profile">
        <img src="" alt="" />
      </div>

      <br />
    </div>
        </>
    )
}


