import React, { useState, useEffect } from "react";
import "./MovieSlider.css";
import image01 from "./image01.jpg";
import image02 from "./image02.jpg";
import image03 from "./image03.jpg";

const shows = [image01, image02, image03];
const delay = 2500;
const MovieSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === shows.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {shows.map((show, index) => (
          <div className="slide" key={show + index}>
            <img src={show} alt="show"></img>
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {shows.map((_, idx) => (
          <div className="slideshowDot" key={idx}></div>
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
