import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [navListOpen, setNavListOpen] = useState(true);

  function handleNavOpen() {
    setNavListOpen((open) => !open);
  }

  return (
    <header className="header ">
      <nav className="nav flex">
        <h1>Mero Portfolio</h1>

        <ul
          className={`flex nav__list ${
            navListOpen ? "nav__list-open" : "nav__list-close"
          }`}
        >
          <span className="icon icon__cross" onClick={handleNavOpen}>
            {!navListOpen && <FaTimes className="icon-nav" />}
          </span>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </ul>

        <span className="icon" onClick={handleNavOpen}>
          {navListOpen && <GiHamburgerMenu className="icon-nav" />}
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
