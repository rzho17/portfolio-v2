import React from "react";
import { useOutletContext } from "react-router";

const HomeSection = ({ homeData }) => {
  return (
    <section id="home">
      <div className="main-title">
        <h1>
          {homeData.main_title_top}
          <span>
            {homeData.main_title_bot}
            <span className="blob"></span>
          </span>
        </h1>
      </div>

      <p className="brand-title">{homeData.specialty_title}</p>
      <p className="slogan">{homeData.intro_description}</p>
    </section>
  );
};

export default HomeSection;
