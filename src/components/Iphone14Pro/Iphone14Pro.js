import React from "react";
import "./Iphone14Pro.css";
import CtaButtons from "../CtaButtons/CtaButtons.js";

const Iphone14Pro = () => {
  return (
    <section className="iphone14Pro unit-background-pro">
      <div className="module-content">
        <div className="unit-wrapper">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="iphone14Pro-headline">iPhone 14 Pro</h2>
            <h3 className="iphone14Pro-subhead">Pro.Beyond.</h3>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iphone14Pro;
