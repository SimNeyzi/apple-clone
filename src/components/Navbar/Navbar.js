import React from "react";
import "./Navbar.css";
import { FaApple } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { BsBag } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";

const pages = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Airpods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="pages">
        <li className="logo">
          <a href="/" className="logo__link">
            <FaApple />
          </a>
        </li>
        {pages.map((page, key) => (
          <li className="page" key={key}>
            <a href="/" className="page__link">
              {page}
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
  );
};

export default Navbar;
