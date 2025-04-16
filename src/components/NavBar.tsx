import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div id="left-side">
                <div id="name">U M A R Y L A ND</div>
                <div id="brand-logo">
                    <Link to="/home">
                        <img src="./assets/images/igem-logo.png" alt="Brand Logo" />
                    </Link>
                </div>
            </div>

            <div className="links">
                <Link to="/">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/team">TEAM</Link>
                <Link to="/join">JOIN</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
    )
}

<Link to="/homescreen">
    <button className="clickable">ENTER</button>
</Link>

export default NavBar;