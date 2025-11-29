import React from "react";
import { useEffect, useState } from "react";
import { basePath } from "../../globals";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// displays the skills section from wordpress api
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
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  useGSAP(() => {
    const skillContainer = document.querySelectorAll(".skill-container");

    skillContainer.forEach((container) => {
      gsap.from(container, {
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: container,
          start: "top 50%",
          end: "top center",
          toggleActions: "play none none none",
        },
      });
    });
  }, [isLoaded]);

  return (
    <>
      {isLoaded
        ? data.map((skill) => {
            const stackList = skill.acf.stack_items;
            const safeStackList = Array.isArray(stackList) ? stackList : [];

            return (
              <div className="skill-container" key={skill.id}>
                <h3>{skill.acf.stack_title}</h3>

                <div className="skill-side">
                  <p className="desc">{skill.acf.stack_desc}</p>
                  <ul>
                    {safeStackList.map((item) => {
                      return <li key={item.stack_name}>{item.stack_name}</li>;
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
