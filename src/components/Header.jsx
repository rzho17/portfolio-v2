import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

// displays correct header navigation depending on screen size
const Header = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   checks if the header has scrolled past a certain point and adds a background to it
  //   also disables scrolling when the mobile navigation is open
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

  //when moving from desktop to mobile or vice versa, closes the navigation and resets it
  useEffect(() => {
    if (isDesktop && isOpen) {
      setIsOpen(false);
    }
  }, [isDesktop, isOpen]);

  return (
    <header>
      <a href="/">
        <h2>{content}</h2>
      </a>

      {isDesktop ? (
        <nav className="desktop-nav-wrapper">
          <ul className="desktop-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to={"/#about-section"}>About</Link>
            </li>
            <li>
              <Link to={"/works"}>Works</Link>
            </li>
            <li>
              <Link to={"#footer"}>Contact</Link>
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
              <a href="/">Home</a>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"/#about-section"}>About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"/works"}>Works</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"#footer"}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
