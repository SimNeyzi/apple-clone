import React, { useState } from "react";
import "./Navbar.css";
import pages from "./pagesData.js";
import { FaApple } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { BsBag } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [currentPage, setCurrenPage] = useState("");
  return (
    <>
      <nav className="nav">
        <ul className="pages">
          <li className="logo">
            <a href="/" className="logo__link">
              <FaApple />
            </a>
          </li>

          {pages.map((page, key) => (
            <li
              className="page"
              key={page + key}
              onMouseEnter={() => (setIsShown(true), setCurrenPage(page.page))}
            >
              <a href="/" className="page__link">
                {page.page}
              </a>
            </li>
          ))}
        </ul>
        <ul className="icons">
          <li className="search">
            <a href="/" className="search__link">
              <TfiSearch />
            </a>
          </li>
          <li className="bag">
            <a href="/" className="bag__link">
              <BsBag />
            </a>
          </li>
          <li className="menu">
            <a href="/" className="menu__link">
              <TbMenu />
            </a>
          </li>
        </ul>

        {isShown && (
          <div
            className="nav-flyout-scrool-container"
            // onMouseLeave={() => (setIsShown(false), setCurrenPage(""))}
          >
            <div className="nav-flyout-content">
              <div className="pages-container">
                {pages.map(
                  (page, key) =>
                    page.page === currentPage &&
                    page.subMenus.map((submenu, key) => (
                      <div className="submenu-container">
                        <div key={submenu + key} className="submenu-heading">
                          {submenu.heading}
                        </div>
                        <ul className="submenu-items">
                          {submenu.items.map((item, key) => (
                            <li>
                              <a href="/">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
