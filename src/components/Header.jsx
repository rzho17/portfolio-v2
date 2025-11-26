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
    const nav = document.querySelector("header");
    if (!nav) return;

    const scrollPoint = 100;

    const handleScroll = () => {
      if (window.scrollY > scrollPoint) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    const nav = document.querySelector("header");
    const scrollPoint = 50;

    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    const handleScroll = () => {
      if (window.scrollY > scrollPoint) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      body.classList.remove("no-scroll");
      window.removeEventListener("scroll", handleScroll);
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
      <Link to={"/"}>
        <h2>{content}</h2>
      </Link>

      {isDesktop ? (
        <nav className="desktop-nav-wrapper">
          <ul className="desktop-nav">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
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
              <Link to={"/"}>Home</Link>
            </li>
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
