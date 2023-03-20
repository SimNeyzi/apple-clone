import React from "react";
import "./Iphone14.css";
import CtaButtons from "../CtaButtons/CtaButtons.js";

const Iphone14 = () => {
  return (
    <section className="iphone14 unit-background">
      <div className="module-content">
        <div className="unit-wrapper yellow">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="iphone14-headline">iPhone 14</h2>
            <h3 className="iphone14-subhead">
              A huge leap in battery life. <br /> Two great sizes. Now in
              yellow.
            </h3>
            <p className="callout">Available starting 3.14</p>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Shop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iphone14;
