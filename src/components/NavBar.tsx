import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div id="brand-logo">
                <Link to="/home">
                    <img src="src/assets/images/igem-logo.png" alt="Brand Logo" />
                </Link>
            </div>
            <div className="links">
                <Link to="/projects">PROJECTS</Link>
                <Link to="/team">TEAM</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
    )
}

<Link to="/homescreen">
    <button className="clickable">ENTER</button>
</Link>

export default NavBar;