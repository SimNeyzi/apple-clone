import React from "react";
import "./Ipad.css";
import CtaButtons from "../CtaButtons/CtaButtons";
const Ipad = () => {
  return (
    <section className="ipad unit-background-ipad">
      <div className="module-content">
        <div className="unit-wrapper">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="ipad-headline">iPad</h2>
            <h3 className="ipad-subhead">Loveable. Drawable. Magical.</h3>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ipad;
