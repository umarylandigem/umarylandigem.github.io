import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div id="brand-logo">
                <a href="index.html" target="_self">
                <img src="assets/images/igem-logo.png" alt="Brand Logo" />
                </a>
            </div>
            <div id="links" className=".questrial-regular">
                <a href="projects.html" target="_self">PROJECTS</a>
                <a href="team.html" target="_self">TEAM</a>
                <a href="contact.html" target="_self">CONTACT</a>
            </div>
        </nav>
    )
}

<Link to="/homescreen">
    <button className="clickable">ENTER</button>
</Link>

export default NavBar;