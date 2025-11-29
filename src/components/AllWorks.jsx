import { Link } from "react-router";
import { basePath } from "../../globals";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingScreen from "../utils/LoadingScreen";

//takes all posts from the project posts in wordpress backend and displays them
// with links to each single project
const AllWorks = () => {
  const restPath =
    basePath + "posts?orderby=date&order=desc&acf_format=standard";
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoaded(true);
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  useEffect(() => {
    document.title = "Richard Ho | All Works";
  });

  //animations
  useGSAP(() => {
    gsap.set(".article-container", { autoAlpha: 1 });
    gsap.fromTo(
      "#all-works article",
      {
        x: -100,
        opacity: 0,
      },
      { x: 0, opacity: 1, stagger: 0.4 }
    );
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        <>
          <section id="all-works">
            <h1>
              All Works
              <span className="blob"></span>
            </h1>
            <div className="article-container">
              {data.map((project, index) => {
                const singleProject = project.acf;

                return singleProject.short_desc ? (
                  <Link
                    to={`/works/${project.id}`}
                    className="container-link"
                    key={project.id}
                  >
                    <article>
                      <span>{index + 1}</span>
                      <div>
                        <h2>{singleProject.project_title}</h2>
                        <p>{singleProject.short_desc}</p>
                      </div>

                      <button aria-label="Project Link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12l-12-9v5h-12v8h12v5l12-9z" />
                        </svg>
                      </button>
                    </article>
                  </Link>
                ) : (
                  <article key={project.id}>
                    <span>{index + 1}</span>
                    <div>
                      <h2>{singleProject.project_title}</h2>
                      <p>
                        Something good is cooking, can you smell it? Coming
                        Soon...
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default AllWorks;
