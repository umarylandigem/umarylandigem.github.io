import React from "react"
import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

function Footer(){
    return (
        <>
            <div id="foot-content">
                <div id="brand-logo">
                    <Link to="/home">
                        <img id="logo" src="./assets/images/igem-transparent-logo.png" alt="Brand Logo" />
                    </Link>

                    <p>© UMaryland iGEM 2025</p>
                </div>

                <div id="quick-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><Link to="/">↳ About Us</Link></li>
                        <li><Link to="/">↳ Membership</Link></li>
                        <li><Link to="/team">↳ Team</Link></li>
                        <li><Link to="/projects">↳ Projects</Link></li>
                        <li><Link to="/contact">↳ Contact Us</Link></li>
                    </ul>
                </div>

                <div id="contact">
                    <h4>CONTACT US AT</h4>
                    <p>↳ umarylandigem@gmail.com</p>
                    <h4>MAILING ADDRESS</h4>
                    <p>↳ something, umd</p>
                </div>

                <div id="connect">
                    <h4>CONNECT WITH US</h4>
                    <div className="social-icons">
                        <FaInstagram />
                        <FaLinkedin />
                        <FaDiscord />
                        <img id="terplink" src="./assets/images/terplink-logo.png" alt="terplink Logo" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Footer;