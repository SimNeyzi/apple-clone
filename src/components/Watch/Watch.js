import React from "react";
import "./Watch.css";
import CtaButtons from "../CtaButtons/CtaButtons";
import { FaApple } from "react-icons/fa";

const Watch = () => {
  return (
    <section className="watch unit-background-watch">
      <div className="module-content">
        <div className="unit-wrapper">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="watch-headline">
              <FaApple />
              WATCH
            </h2>
            <h3 className="watch-series">SERIES 8</h3>
            <h3 className="watch-subhead">A healthy leap ahead.</h3>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Watch;
