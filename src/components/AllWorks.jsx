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
        <div>
          {data.map((project) => {
            return (
              <div>
                <h2>{project.id}</h2>
                <Link to={`/works/${project.id}`}>To {project.id}</Link>
              </div>
            );
          })}
          <p>all works page</p>
          <Link to={"/works/asdffs"}>To Single</Link>
          <Link to={"/"}>To Home</Link>
        </div>
      ) : (
        <p>loading hehe</p>
      )}
    </>
  );
};

export default AllWorks;
