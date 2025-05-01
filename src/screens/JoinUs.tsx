import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../styles/join.css"


export default function JoinUs() {
    function TopSection() {
        return (
            <div className="top-section-container">
                <div className="top-section-title">
                    How to Get Involved
                </div>
                <div className="top-section-description">
                    Umaryland iGEM team members contribute to the project through our  technical and non-technical committees. Click on each box to learn more about committee responsibilities and check out the calendar below to find their meeting times and locations. 
                </div>  
            </div>
        )
    }
    return (
        <>
            <NavBar/>
            <div className = "join-container">
                <div style={{height: 50}}/>
                <TopSection/>


                <div className="calendar-title">Calendar</div>
                <iframe src="https://calendar.google.com/calendar/embed?src=783950988b43a3587b5ca89aa3a480105bc133fdfc5b63b5be395bfecbb4313f%40group.calendar.google.com&ctz=America%2FNew_York&mode=WEEK" className = "calendar"></iframe>
            </div>
            <div style={{height: 40}}/>
            <Footer/>
        </>
        
    )
}