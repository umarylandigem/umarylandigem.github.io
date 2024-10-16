import React from "react";
import { useState, useEffect } from "react";

interface ShowSlideArgs {
    currentSlide : number;
}
function ShowSlide({currentSlide} : ShowSlideArgs) {


    setTimeout(ShowSlide, 3000);
    const images: string[] = [
        "main-page-picture.jpg",
        "heya-in-lab.jpg",
        "new-team-picture.jpg",
    ]

    return (
        <div className="mySlides" style={{display: "none"}}>
            <img src={"assets/images/index-slideshow/" + images[currentSlide]} alt={images[currentSlide]}/>
        </div>
    )

}

/*function plusSlides(n) {
    slideIndex += n;
    showSlides();
}*/

function Slideshow(){
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            let newIndex = currentSlide + 1 > 2 ? 0 : currentSlide + 1;

            setCurrentSlide(newIndex);
        }, 3000); // Delay of 3 seconds
    
        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, [currentSlide]); // Empty dependency array ensures the effect runs only once on mount

    return(
        <div className="slideshow-container">
            <ShowSlide currentSlide={currentSlide}/>
        </div>
    )
}

export default Slideshow;