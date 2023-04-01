import React, { useState, useEffect, useRef } from "react";
import "./MovieSlider.css";
import image01 from "./image01.jpg";
import image02 from "./image02.jpg";
import image03 from "./image03.jpg";

let shows = [image01, image02, image03];
const delay = 2500;
const MovieSlider = () => {
  const [index, setIndex] = useState(1);
  const timeoutRef = useRef(null);
  const testRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === shows.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    // console.log("testRef: ", index, testRef.current.offsetLeft);
    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    if (index === shows.length - 1) {
      let first = shows.splice(0, 1);
      console.log(first);
      shows.splice(index + 1, 0, first);
      // shows.push(first);
      console.log(shows);
    }
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className={`slideshowSlider`}
        style={{ transform: `translate(${-index * 100}%)` }}
      >
        {shows.map((show, index) => (
          <div className="slide" key={show + index} ref={testRef}>
            <img src={show} alt="show"></img>
          </div>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {shows.map((_, idx) => (
          <div
            className={`slideshowDot${index === idx ? " active" : ""}`}
            key={idx}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default MovieSlider;
