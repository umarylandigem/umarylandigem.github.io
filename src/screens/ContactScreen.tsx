import React from "react"

import "../styles/contact.css"
import "../styles/nav-bar.css"

import NavBar from "../components/NavBar"

function Content() {
    return (
        <div id="content">
            <div className="left">
                <p>FOLLOW US ON INSTAGRAM!</p>
                <a href="https://www.instagram.com/umarylandigem/" target="_blank">
                <img
                    className="image"
                    src="assets/images/insta.png"
                    width="50px"
                    height="50px"
                />
                </a>

            </div>

            <div id="title-holder">
                <p>CONTACT US</p>
            </div>

            <div className="right">
                <p>EMAIL</p>
                <a href="mailto:umarylandigem@gmail.com" target="_blank">
                <img className="image" src="assets/images/mail.png" width="55px" height="55px" />
                </a>
            </div>
        </div>
    )
}

function Container() {
    return (
        <div className="container">
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSdax7ltrEHUSCVeqixSkgjwDO_cnZCzyOBGfTZZ4JcXaarCZg/formResponse">
                <label htmlFor="entry.1308735583">First Name</label>
                <input type="text" id="fname" name="entry.1308735583" placeholder="First"/>

                <label htmlFor="entry.500588330">Last Name</label>
                <input type="text" id="lname" name="entry.500588330" placeholder="Last"/>

                <label htmlFor="entry.881700800">Email</label>
                <input type="text" id="email" name="entry.881700800"/>


                <label htmlFor="entry.1959053539">Comment</label>
                <textarea id="comment" name="entry.1959053539" style={{height:"200px"}}></textarea>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default function ContactScreen() {
    return (
        <body>
            <NavBar/>

            {/**Graphics */}
            <div className="left-corner">
                <img src="assets/images/igem-multiple-gears-official.png" alt="Multiple gears"/>
            </div>

            <div className="right-corner">
                <img src="assets/images/igem-multiple-gears-official.png" alt="Multiple gears"/>
            </div>

            <Content/>
            <Container/>
        </body>
    )
}

