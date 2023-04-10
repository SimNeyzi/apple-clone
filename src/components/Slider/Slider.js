import React, {
  useMemo,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

import "./Slider.css";

const Slider = ({ images }) => {
  const containerRef = useRef();
  const [current, setCurrent] = useState(1);
  const [translate, setTranslate] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;
  const slides = useMemo(() => {
    if (images.length > 1) {
      let items = images.map((child, index) => (
        <li key={index} className="slide">
          <img src={child} alt="show" />
        </li>
      ));
      return [
        <li key={images.length + 1} className="slide">
          <img src={images[images.length - 1]} alt="show" />
        </li>,
        ...items,
        <li key={images.length + 2} className="slide">
          <img src={images[0]} alt="show" />
        </li>,
        <li key={images.length + 3} className="slide">
          <img src={images[1]} alt="show" />
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

  const actionHandler = useCallback(() => {
    containerRef.current.style.transition = "ease 1000ms";
    if (current >= images.length) {
      setTranslate(containerRef.current.clientWidth * (images.length + 1));
      setCurrent(1);
    } else {
      setTranslate(containerRef.current.clientWidth * (current + 1));
      setCurrent((prev) => ++prev);
    }
  }, [current, images]);

  useEffect(() => {
    const transitionend = () => {
      console.log("transitioned");
      if (current <= 1) {
        containerRef.current.style.transition = "ease 0ms";
        setTranslate(containerRef.current.clientWidth * current);
      }

      if (current >= images.length) {
        containerRef.current.style.transition = "ease 0ms";
        setTranslate(containerRef.current.clientWidth * images.length);
      }
    };

    document.addEventListener("transitionend", transitionend);

    return () => {
      document.removeEventListener("transitionend", transitionend);
    };
  }, [current, images]);

  useLayoutEffect(() => {
    console.log("action handler");
    timeoutRef.current = setTimeout(() => actionHandler(), delay);
    return () => {
      resetTimeout();
    };
  }, [actionHandler]);

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
    </section>
  );
};

export default Slider;
