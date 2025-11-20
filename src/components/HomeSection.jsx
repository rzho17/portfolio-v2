import React from "react";
import { useOutletContext } from "react-router";

const HomeSection = ({ homeData }) => {
  return (
    <section id="home">
      <div className="main-title">
        <h1>
          {homeData.main_title_top}
          <div>
            {homeData.main_title_bot}
            <div className="blob"></div>
          </div>
        </h1>
      </div>

      <p className="brand-title">{homeData.specialty_title}</p>
      <p className="slogan">{homeData.intro_description}</p>
    </section>
  );
};

export default HomeSection;
