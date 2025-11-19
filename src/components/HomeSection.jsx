import React from "react";
import { useOutletContext } from "react-router";

const HomeSection = ({ homeData }) => {
  return (
    <section id="#home">
      <h1>{homeData.main_title_top}</h1>
      <h1>{homeData.main_title_bot}</h1>

      <p>{homeData.specialty_title}</p>
      <p>{homeData.intro_description}</p>
    </section>
  );
};

export default HomeSection;
