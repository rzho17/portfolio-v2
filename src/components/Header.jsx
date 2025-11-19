import React, { useState } from "react";
import { Link } from "react-router";

const Header = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   when not in mobile
  // display the nav items

  // when in mobile display hamburger menu
  //
  return (
    <header>
      <h2>{content}</h2>
      <nav className={`${isOpen ? "open" : ""}`}>
        <div className="hamburger-container" onClick={toggleMenu}>
          <div className="small-square"></div>
          <div className="small-square"></div>
          <div className="small-square"></div>
          <div className="small-square"></div>
        </div>

        <ul className="nav-list">
          <li>
            <Link to={"/#about"}>About</Link>
          </li>
          <li>
            <Link to={"/works"}>Works</Link>
          </li>
          <li>
            <Link to={"/#footer"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
