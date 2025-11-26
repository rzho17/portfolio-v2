import { Link } from "react-router";
import { basePath } from "../../globals";
import { useEffect, useState } from "react";

const AllWorks = () => {
  const restPath = basePath + "posts";
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
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
                  <article>
                    <span>{index + 1}</span>
                    <div>
                      <h2>{singleProject.project_title}</h2>
                      <p>{singleProject.short_desc}</p>
                    </div>
                    <Link to={`/works/${project.id}`} aria-label="Project Link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12l-12-9v5h-12v8h12v5l12-9z" />
                      </svg>
                    </Link>
                  </article>
                ) : (
                  <article>
                    <span>{index + 1}</span>
                    <div>
                      <h2>Coming Soon...</h2>
                      <p>Something good is cooking, can you smell it?</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <p>all works page</p>
            <Link to={"/works/asdffs"}>To Single</Link>
            <Link to={"/"}>To Home</Link>
          </section>
        </>
      ) : (
        <p>loading hehe</p>
      )}
    </>
  );
};

export default AllWorks;
