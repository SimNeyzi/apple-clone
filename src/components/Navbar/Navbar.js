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
              onMouseLeave={() => (setIsShown(false), setCurrenPage(""))}
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
      </nav>
      {isShown && (
        <div className="nav-flyout-scrool-container">
          <div className="nav-flyout-content">
            {pages.map(
              (page, key) => page.page === currentPage && page.subMenu.heading
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
