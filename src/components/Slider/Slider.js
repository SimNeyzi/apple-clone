import React, {
  useMemo,
  Children,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

import "./Slider.css";

const Slider = ({ children }) => {
  const containerRef = useRef();
  const [current, setCurrent] = useState(1);
  const [translate, setTranslate] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 2500;
  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className="slide">
          {child}
        </li>
      ));
      return [
        <li key={children.length + 1} className="slide">
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className="slide">
          {children[0]}
        </li>,
      ];
    }
    return <li className="slide">{children[0]}</li>;
  }, [children]);

  // this will render only ones
  useLayoutEffect(() => {
    // console.log(containerRef.current.clientWidth);
    setTranslate(containerRef.current.clientWidth * current);
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const actionHandler = useCallback(() => {
    containerRef.current.style.transition = "ease 1000ms";
    if (current >= children.length) {
      setTranslate(containerRef.current.clientWidth * (children.length + 1));
      setCurrent(1);
    } else {
      setTranslate(containerRef.current.clientWidth * (current + 1));
      setCurrent((prev) => ++prev);
    }
  }, [current, children]);

  useEffect(() => {
    const transitionend = () => {
      if (current <= 1) {
        containerRef.current.style.transition = "ease 0ms";
        setTranslate(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transition = "ease 0ms";
        setTranslate(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener("transitionend", transitionend);

    return () => {
      document.removeEventListener("transitionend", transitionend);
    };
  }, [current, children]);

  useEffect(() => {
    // console.log(children.length);
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
