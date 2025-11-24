import React from "react";
import { Link } from "react-router";

const Footer = ({ data }) => {
  return (
    <footer>
      <h2>
        {data.main_title_top}
        <span>
          {data.main_title_bot}
          <span className="blob"></span>
        </span>
      </h2>
      <nav>
        <ul>
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

      <div className="footer-icons">
        <a href={data.footer_links[0].footer_link} target="_blank">
          <img
            src={data.footer_links[0].icon.url}
            alt={data.footer_links[0].icon.alt}
          />
        </a>
        <a href={data.footer_links[1].footer_link} target="_blank">
          <img
            src={data.footer_links[1].icon.url}
            alt={data.footer_links[1].icon.alt}
          />
        </a>
        <a href="mailto:email@example.com" target="_blank">
          <img
            src={data.footer_links[2].icon.url}
            alt={data.footer_links[2].icon.alt}
          />
        </a>
      </div>

      <p>back to top</p>
    </footer>
  );
};

export default Footer;
