import React from "react";
import { useState, useEffect } from "react";
import { basePath } from "../../globals";
import { Link } from "react-router";
import ACFImage from "./ACFImage";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoadingScreen from "../utils/LoadingScreen";

// Displays the projects from featured works using the featured taxonomy tag and ACF data
const FeaturedWorks = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const restPath =
    basePath +
    "posts?portfolio-featured=6&acf_format=standard&orderby=date&order=asc";
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data.reverse());
        setIsLoaded(true);
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  useGSAP(() => {
    if (!isDesktop) return;

    const allFeatured = document.querySelectorAll(".featured-project");

    allFeatured.forEach((container) => {
      const img = container.querySelector("img");

      const tween = gsap.to(img, {
        scale: 0.95,
        duration: 0.3,
        filter: "none",
        borderRadius: "10",
        paused: true,
      });

      container.addEventListener("mouseenter", () => tween.play());
      container.addEventListener("mouseleave", () => tween.reverse());
    });
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        <section id="works">
          <h2>
            Featured Works
            <span className="blob"></span>
          </h2>

          <div className="featured-container">
            {data.map((project) => {
              const projectPath = project.acf;
              return (
                <div className="featured-project" key={project.id}>
                  <Link to={`works/${project.id}`} className="see-more">
                    <ACFImage acfImageObject={projectPath.main_image} />
                  </Link>

                  <div className="featured-text">
                    <h3>{projectPath.project_title}</h3>
                    <figcaption>{projectPath.short_desc}</figcaption>

                    <Link to={`works/${project.id}`} className="see-more">
                      Explore
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default FeaturedWorks;
