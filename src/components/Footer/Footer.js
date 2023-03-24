import React from "react";
import "./Footer.css";
import footerSections from "./footerData.js";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="disclaimer">
        Trade-in values will vary based on the condition, year, and
        configuration of your eligible trade-in device. Not all devices are
        eligible for credit. You must be at least 18 years old to be eligible to
        trade in for credit or for an Apple Gift Card. Trade-in value may be
        applied toward qualifying new device purchase, or added to an Apple Gift
        Card. Actual value awarded is based on receipt of a qualifying device
        matching the description provided when estimate was made. Sales tax may
        be assessed on full value of a new device purchase. In-store trade-in
        requires presentation of a valid photo ID (local law may require saving
        this information). Offer may not be available in all stores, and may
        vary between in-store and online trade-in. Some stores may have
        additional requirements. Apple or its trade-in partners reserve the
        right to refuse or limit quantity of any trade-in transaction for any
        reason.
      </p>
      <div className="footer-bar">
        {footerSections.map((section, key) => (
          <div className="section">
            <h5 key={key + section.category} className="section-heading">
              <strong>{section.category}</strong>
            </h5>
            <ul className="footer-list">
              {section.links.map((link, key) => (
                <li className="li-item">
                  <a href="/" className="link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
