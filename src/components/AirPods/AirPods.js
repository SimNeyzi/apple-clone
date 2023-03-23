import React from "react";
import "./AirPods.css";
import CtaButtons from "../CtaButtons/CtaButtons";
const AirPods = () => {
  return (
    <section className="airPods unit-background-airPods">
      <div className="module-content">
        <div className="unit-wrapper">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="airPods-headline">AirPods Pro</h2>
            <h3 className="airPods-subhead">
              Up to 2x more <br /> Active Noise Cancellation.{" "}
            </h3>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirPods;
