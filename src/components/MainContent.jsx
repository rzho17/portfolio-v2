import React from "react";
import { Link, useOutletContext } from "react-router";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import FeaturedWorks from "./FeaturedWorks";
import { useEffect } from "react";

// renders all the content for the home page
const MainContent = () => {
  const { data } = useOutletContext();

  useEffect(() => {
    document.title = "Richard Ho | Creative Developer";
  });

  return (
    <>
      <HomeSection homeData={data} />
      <AboutSection aboutData={data} />
      <FeaturedWorks />
    </>
  );
};

export default MainContent;
