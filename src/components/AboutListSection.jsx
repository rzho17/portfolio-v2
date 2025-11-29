import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// returns and displays a list of the about characteristics
const AboutListSection = ({ list }) => {
  gsap.registerPlugin(ScrollTrigger);

  //  goes through all the list items in about section
  // changes background position based on scroll
  useGSAP(() => {
    const allList = document.querySelectorAll(".about-list li");
    allList.forEach((element) => {
      gsap.to(element, {
        backgroundPositionX: "-100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
  });

  return (
    <div className="about-list">
      <ul>
        {list.map((key) => {
          return <li key={key.characteristic}>{key.characteristic}</li>;
        })}
      </ul>
    </div>
  );
};

export default AboutListSection;
