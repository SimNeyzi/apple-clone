import React from "react";
import "./Iphone14.css";
import { BsChevronRight } from "react-icons/bs";
import iphone14Yellow from "./iphone14__yellow.jpg";

const Iphone14 = () => {
  return (
    <section
      className="iphone14 unit-image"
      style={{
        // backgroundImage: `url('${iphone14Yellow}')`,
        background: `url('${iphone14Yellow}') no-repeat center center`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
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
            <div className="cta-links">
              <a href="/" className="icon learn-more">
                Learn More
                <BsChevronRight className="chevron-right" />
              </a>
              <a href="/" className="icon shop">
                Shop
                <BsChevronRight className="chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iphone14;
