import React from "react";
import { Link, useOutletContext } from "react-router";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";

const MainContent = () => {
  const { data } = useOutletContext();

  console.log(data);
  return (
    <main>
      <HomeSection homeData={data} />
      <AboutSection aboutData={data} />
      <section id="#works"></section>
      <Link to={"/works"}>TO all works</Link>
      <Link to={"/works/123123"}>TO a single workds</Link>
    </main>
  );
};

export default MainContent;
