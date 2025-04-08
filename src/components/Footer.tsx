import React from "react"
import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
            <div id="brand-logo">
                <Link to="/home">
                    <img src="./assets/images/igem-logo.png" alt="Brand Logo" />
                </Link>
            </div>

            <div id="quickLinks">

                <Link to="/">About Us</Link>
                <Link to="/">Membership</Link>
                <Link to="/">Team</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact Us</Link>
            </div>

            <div id="contact">

            </div>
        </>
    )
}