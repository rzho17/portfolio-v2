import React from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import { basePath } from "../../globals";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const SingleWork = () => {
  const { id } = useParams();
  const restPath = basePath + `posts/${id}` + "?acf_format=standard";
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [invalidPage, setInvalidPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data.acf);
        setIsLoaded(true);

        console.log(data);
      } else {
        setInvalidPage(true);
      }
    };
    fetchData();
  }, [restPath]);

  if (invalidPage) {
    return <p>sorry the seems like that is still in the works!</p>;
  }

  console.log(restPath);
  console.log(data);
  return (
    <>
      {isLoaded && (
        <section id="single-work">
          <div className="landing">
            {isDesktop ? (
              <div className="heading">
                <h1>{data.project_title}</h1>
              </div>
            ) : null}

            <picture>
              <img src={data.main_image.url} alt={data.main_image.alt} />
            </picture>

            <div className="text">
              {!isDesktop ? <h1>{data.project_title}</h1> : null}
              <p>{data.project_desc}</p>

              <h2>Built With</h2>
              <ul>
                {data.tech_stack_list.map((skill) => {
                  return (
                    <div>
                      <li>{skill.stack_name}</li>
                      <img
                        src={skill.stack_logo.url}
                        alt={skill.stack_logo.alt}
                      />
                    </div>
                  );
                })}
              </ul>

              <div className="links">
                <a href={data.code_link.url} target="_blank">
                  {data.code_link.title}
                </a>

                <a href={data.live_link.url} target="_blank">
                  {data.live_link.title}
                </a>
              </div>
            </div>
          </div>

          <div className="tldr-container">
            <h2>TLDR</h2>
            <ul className="tldr">
              {data.tldr.map((bullet) => {
                return <li>{bullet.bullet_point}</li>;
              })}
            </ul>
          </div>

          <div className="highlights-container">
            <h2>{data.project_highlights}</h2>

            <div className="highlights">
              {data.highlight.map((insight) => {
                return (
                  <div>
                    <figure>
                      <img
                        src={insight.highlight_image.url}
                        alt={insight.highlight_image.alt}
                      />
                    </figure>
                    <figcaption>{insight.highlight_info}</figcaption>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to={"/"}>Home</Link>
        </section>
      )}
    </>
  );
};

export default SingleWork;
