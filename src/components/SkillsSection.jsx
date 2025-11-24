import React from "react";
import { useEffect, useState } from "react";
import { basePath } from "../../globals";

const SkillsSection = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const restPath =
    basePath + "portfolio-skill?acf_format=standard&_fields=id,title,acf";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data.reverse());
        setIsLoaded(true);

        // console.log(data);
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded
        ? data.map((skill) => {
            const stackList = skill.acf.stack_items;
            const safeStackList = Array.isArray(stackList) ? stackList : [];
            // console.log(stackList);
            return (
              <div className="skill-container">
                <h3>{skill.acf.stack_title}</h3>

                <div className="skill-side">
                  <p className="desc">{skill.acf.stack_desc}</p>
                  <ul>
                    {safeStackList.map((item) => {
                      return (
                        <li>
                          {item.stack_name}
                          {/* <figure className="skill-container">
                            <img
                              src={`${item.stack_image.sizes.medium}`}
                              alt={`Icon logo of ${item.stack_name}`}
                            />

                            <figcaption>{item.stack_name}</figcaption>
                          </figure> */}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default SkillsSection;
