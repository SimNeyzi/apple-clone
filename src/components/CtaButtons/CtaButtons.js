import React from "react";
import "./CtaButtons.css";
import { BsChevronRight } from "react-icons/bs";

const CtaButtons = ({ ctaFirst, ctaSecond }) => {
  return (
    <div className="cta-links">
      <a href="/" className="icon ctaFirst">
        {ctaFirst}
        <BsChevronRight className="chevron-right" />
      </a>
      <a href="/" className="icon ctaSecond">
        {ctaSecond}
        <BsChevronRight className="chevron-right" />
      </a>
    </div>
  );
};

export default CtaButtons;
