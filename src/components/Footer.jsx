import { Link } from "react-router";

// Dynamic footer using api data
const Footer = ({ data }) => {
  return (
    <footer id="footer">
      <a href="/">
        <h2>
          {data.main_title_top}
          <span>
            {data.main_title_bot}
            <span className="blob"></span>
          </span>
        </h2>
      </a>
      <nav>
        <ul>
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
        <a href="mailto:richardho.works@gmail.com" target="_blank">
          <img
            src={data.footer_links[2].icon.url}
            alt={data.footer_links[2].icon.alt}
          />
        </a>
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        scroll to top
      </button>
    </footer>
  );
};

export default Footer;
