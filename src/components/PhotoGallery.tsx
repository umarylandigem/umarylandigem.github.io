import "../styles/photo-gallery.css";

import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import React from "react";
import { useState } from "react";

function PhotoGallery() {
  const slideshow = [-
    "../assets/images/index-slideshow/heya-in-lab.jpg",
    "../assets/images/index-slideshow/main-page-picture.jpg",
    "../assets/images/index-slideshow/midatlantic-meetup.jpeg",
    "../assets/images/index-slideshow/new-team-picture.jpg",
  ];

  const [index, setIndex] = useState(0);

  const handleDotClick = (i: number) => {
    setIndex(i);
  };

  return (
    <div className="gallery">
      <div className="slideshow-row">
        <IoIosArrowDropleft
          className="arrow"
          onClick={() =>
            setIndex(index - 1 < 0 ? slideshow.length - 1 : index - 1)
          }
        />
        <img className="color-box" src={slideshow[index]} />
        <IoIosArrowDropright
          className="arrow"
          onClick={() =>
            setIndex(index + 1 > slideshow.length - 1 ? 0 : index + 1)
          }
        />
      </div>

      <div className="dots-row">
        {slideshow.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            style={{
              width: "12px",
              height: "12px",
              margin: "4px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: index === i ? "#333" : "#ccc",
              cursor: "pointer",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
