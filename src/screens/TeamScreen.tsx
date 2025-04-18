import "../styles/team.css";
import "../styles/nav-bar.css";

import MembersData from "../data/MembersData2025.tsx";
import BoardData from "../data/BoardData2025.tsx";

import React from "react";
import NavBar from "../components/NavBar";
import { CgEnter } from "react-icons/cg";

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
    <div style={{ marginLeft: 100, marginRight: 100 }}>
      <h2 className="section-title" style={{ fontSize: "4rem", marginTop: 20 }}>
        Advisors
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src="https://static.igem.wiki/teams/5104/team/eisenstein-headshot-updated.png"
          alt="Dr. Edward Eisenstein"
          className="advisor-image square-image"
          style={{
            border: "5px solid #3A8853",
            borderRadius: 200,
            marginRight: "20px",
          }}
        />
        <div>
          <h1 style={{fontFamily: "Rosario-Regular" }}>
            Dr. Edward Eisenstein
          </h1>
          <p style={{ fontSize: "1.4rem", fontFamily: "Rosario-Regular" }}>
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
          justifyContent: "center",
          marginBottom: "20px",
          flexDirection: "row-reverse",
        }}
      >
        <img
          src="https://static.igem.wiki/teams/5104/team/kahn-jason-chem-web-updated.png"
          alt="Dr. Jason D. Kahn"
          className="advisor-image square-image"
          style={{
            border: "5px solid #3A8853",
            marginLeft: "20px",
            borderRadius: 200
          }}
        />
        <div>
          <h1 style={{fontFamily: "Rosario-Regular", textAlign: "right" }}>
          Dr. Jason D. Kahn
          </h1>
          <p style={{ fontSize: "1.4rem", fontFamily: "Rosario-Regular", textAlign: "right" }}>
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
  );
}

export default function TeamScreen() {
  return (
    <>
      <NavBar />
      <h2 className="section-title" style={{ fontSize: "6rem"}}>
        OUR 2025 TEAM
      </h2>
      <Advisors />

      <h2 className="section-title" style={{ fontSize: "4rem" }}>
        Board
      </h2>

      <div className="grid-container">
        {BoardData.map((person) => (
          <Bio person={person} isBoard={true} />
        ))}
      </div>

      <h2 className="section-title" style={{ fontSize: "4rem" }}>
        Members
      </h2>
      <div className="grid-container">
        {MembersData.map((person) => (
          <Bio person={person} isBoard={false} />
        ))}
      </div>
    </>
  );
}

function Bio({ person, isBoard }: BioArgs) {
  return (
    <div className="grid-item-wrapper">
      <div className={isBoard ? "grid-item board-item" : "grid-item member-item"}>
        <img src={person.src} alt={person.name} className="square-image" />
      </div>
      <div className = "bio">
        <p className="name">{person.name}</p>
        <p className="bioText" title="Year">
          {person.year}
        </p>
        <p className="bioText" title="Major">
          {person.major}
        </p>
        <p className="bioText" title="Committee(s)">
          {person.committees}
        </p>
      </div>

    </div>
  );
}

function Graphics() {
  return (
    <>
      <div className="left-corner">
        <img
          src="./assets/images/igem-multiple-gears-official.png"
          alt="Multiple gears"
        />
      </div>

      <div className="right-corner">
        <img
          src="./assets/images/igem-multiple-gears-official.png"
          alt="Multiple gears"
        />
      </div>
    </>
  );
}

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

      <div className="section" style={{ marginTop: "250px" }}>
        BOARD
      </div>
      <br />

      <div id="grid1">
        <div className="profile">
          <img
            src="./assets/images/team-images/exec/renee-jaranson.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/exec/Mia-Jocic.JPG"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/exec/abhi-senthilkumar.JPG"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/exec/jonathan-wu.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/exec/valeria-salas-dietz.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/mahita-kamalahasan.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/navya-bansal.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Lauren-Applegate.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Gadigi-Aditri.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/jonathon-meyer.jpg"
            className="image"
          />
        </div>

        <div className="empty profile"></div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/IMG_3901.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Sami_Kudagunti_Headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img src="" alt="" />
        </div>

        <div className="empty profile"></div>
      </div>

      <br />
      <br />
      <div className="section">MEMBERS</div>
      <br />

      <div id="grid2">
        <div className="profile">
          <img
            src="./assets/images/team-images/members/Krista-Adu-Osei.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/brennen.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/patrick.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Vikram Khandelwal Headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Viharika.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Ananya.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Patricia Rosemond Headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Dana_Harel_Headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Haider Hussain headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Rebecca Lu Headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Kevin Zhang headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/Graham Ferguson Headshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/sarahz.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img
            src="./assets/images/team-images/members/keithheadshot.jpg"
            className="image"
          />
        </div>

        <div className="profile">
          <img src="" alt="" />
        </div>

        <br />
      </div>
    </>
  );
}
