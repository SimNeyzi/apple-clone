import React from "react";
import "./HomePod.css";
import CtaButtons from "../CtaButtons/CtaButtons";
const HomePod = () => {
  return (
    <section className="homePod unit-background-homePod">
      <div className="module-content">
        <div className="unit-wrapper">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="homePod-headline">HomePod</h2>
            <h3 className="homePod-subhead">Profound sound.</h3>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePod;
