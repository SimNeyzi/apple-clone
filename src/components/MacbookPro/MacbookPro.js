import React from "react";
import "./MacbookPro.css";
import CtaButtons from "../CtaButtons/CtaButtons";
const MacbookPro = () => {
  return (
    <section className="macbookPro unit-background-macbookPro">
      <div className="module-content">
        <div className="unit-wrapper">
          <a href="/" className="unit-link">
            &nbsp;
          </a>
          <div className="unit-text-wrapper">
            <h2 className="macbookPro-headline">MacBook Pro</h2>
            <h3 className="macbookPro-subhead">
              Supercharged by M2 Pro and M2 Max.
            </h3>
            <CtaButtons ctaFirst="Learn more" ctaSecond="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacbookPro;
