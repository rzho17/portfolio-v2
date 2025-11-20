import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

const Header = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll"); // cleanup
    };
  }, [isOpen]);

  useEffect(() => {
    if (isDesktop && isOpen) {
      setIsOpen(false);
    }
  }, [isDesktop, isOpen]);

  //   when not in mobile
  // display the nav items

  // when in mobile display hamburger menu
  //
  return (
    <header>
      <h2>{content}</h2>

      {isDesktop ? (
        <nav>
          <ul className="desktop-nav">
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
      ) : (
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
      )}
    </header>
  );
};

export default Header;
