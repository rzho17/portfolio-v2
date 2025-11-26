import React from "react";
import { useState, useEffect } from "react";
import { basePath } from "../../globals";
import { Link } from "react-router";
import FeatureProjectImage from "./FeatureProjectImage";
import ACFImage from "./ACFImage";

const FeaturedWorks = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const restPath = basePath + "posts?portfolio-featured=6&acf_format=standard";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data.reverse());
        setIsLoaded(true);

        console.log(data);
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);
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
                <div className="featured-project">
                  {/* <FeatureProjectImage
                    url={`${projectPath.main_image.url}`}
                    alt={`${projectPath.main_image.alt}`}
                  /> */}
                  <ACFImage acfImageObject={projectPath.main_image} />
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
