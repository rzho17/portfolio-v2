import React from "react";
import { Link, useOutletContext } from "react-router";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import FeaturedWorks from "./FeaturedWorks";

const MainContent = () => {
  const { data } = useOutletContext();

  console.log(data);
  return (
    <>
      <HomeSection homeData={data} />
      <AboutSection aboutData={data} />
      <FeaturedWorks />
      <Link to={"/works"}>TO all works</Link>
      <Link to={"/works/123123"}>TO a single workds</Link>
    </>
  );
};

export default MainContent;
