import React, {
  useMemo,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import "./Slider.css";

const Slider = ({ images }) => {
  const containerRef = useRef();
  const [current, setCurrent] = useState(1);
  const [translate, setTranslate] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const delay = 5000;
  const slides = useMemo(() => {
    if (images.length > 1) {
      let items = images.map((image, index) => (
        <li key={index} className="slide">
          <img className="slide-img" src={image} alt="show" />
        </li>
      ));
      return [
        <li key={images.length + 1} className="slide">
          <img
            className="slide-img"
            src={images[images.length - 1]}
            alt="show"
          />
        </li>,
        ...items,
        <li key={images.length + 2} className="slide">
          <img className="slide-img" src={images[0]} alt="show" />
        </li>,
        <li key={images.length + 3} className="slide">
          <img className="slide-img" src={images[1]} alt="show" />
        </li>,
      ];
    }
    return (
      <li className="slide">
        <img src={images[0]} alt="show" />
      </li>
    );
  }, [images]);

  // this will render only ones
  useLayoutEffect(() => {
    setTranslate(containerRef.current.clientWidth * current);
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const actionHandler = useCallback(
    (idx) => {
      containerRef.current.style.transition = "ease 1000ms";
      if (idx !== undefined) {
        setTranslate(containerRef.current.clientWidth * (idx + 1));
        setCurrent(idx + 1);
      } else if (current >= images.length) {
        setTranslate(containerRef.current.clientWidth * (images.length + 1));
        setCurrent(1);
      } else {
        setTranslate(containerRef.current.clientWidth * (current + 1));
        setCurrent((prev) => ++prev);
      }
    },
    [current, images]
  );

  const handleClick = (idx) => {
    actionHandler(idx);
  };

  const handleSlider = () => {
    console.log("isPaused 1: ", isPaused);
    setIsPaused(!isPaused);
    console.log("isPaused 2: ", isPaused);
  };

  useEffect(() => {
    let activeSlide = containerRef.current.children[current];

    const transitionend = () => {
      if (current === 1) {
        containerRef.current.style.transition = "0ms";
        setTranslate(containerRef.current.clientWidth * current);
      }

      if (current >= images.length) {
        containerRef.current.style.transition = "0ms";
        setTranslate(containerRef.current.clientWidth * images.length);
      }
    };

    document.addEventListener("transitionend", transitionend);
    activeSlide.style.opacity = 1;
    return () => {
      document.removeEventListener("transitionend", transitionend);
      activeSlide.style.opacity = "0.33";
    };
  }, [current, images]);

  useLayoutEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => actionHandler(), delay);
    }

    return () => {
      resetTimeout();
    };
  }, [actionHandler, isPaused]);

  return (
    <section className="slideshow">
      <ul
        ref={containerRef}
        className="slideshowSlider"
        style={{
          transform: `translate(${-translate}px)`,
        }}
      >
        {slides}
      </ul>

      <div className="navigation">
        <span className={`slideshowDots`}>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${current - 1 === idx ? " active" : ""}`}
              onClick={() => handleClick(idx)}
            ></div>
          ))}
        </span>
        <span className="playbutton-container" onClick={handleSlider}>
          {isPaused ? (
            <BsPlayCircle className="play-button" />
          ) : (
            <BsPauseCircle className="play-button" />
          )}
        </span>
      </div>
    </section>
  );
};

export default Slider;
