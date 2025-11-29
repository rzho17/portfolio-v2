import React from "react";
import AboutListSection from "./AboutListSection";
import SkillsSection from "./SkillsSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";

// displays the ACF data from wordpress and outputs it in the about section
// contains components (AboutListSection, SkillsSection)
const AboutSection = ({ aboutData }) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  // selects all sub heading h3 and give the animation to them
  useGSAP(() => {
    const introH3 = document.querySelectorAll(".fade h3");
    introH3.forEach((h3) => {
      gsap.from(h3, {
        autoAlpha: 0,
        yPercent: -50,
        scrollTrigger: {
          trigger: h3,
          start: "center 60%",
          end: "bottom 40%",
        },
      });
    });

    // creates timeline for the intro container
    const sideInfoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-intro-container",
        toggleActions: "play complete none none",
      },
    });

    // beginning of about section
    const splitH3 = SplitText.create(".about-intro-container h3", {
      aria: "auto",
    });
    const splitP = SplitText.create(".about-text-container p");

    // animates first intro container
    // makes headline stagger
    // links appear after
    // then intro text
    sideInfoTl
      .from(splitH3.words, {
        opacity: 0,
        stagger: 0.1,
      })
      .from(
        ".about-intro-container h3",
        { borderBottom: 0, opacity: 0, duration: 0.3 },
        "<"
      )
      .from(".links a", { yPercent: 100, autoAlpha: 0, stagger: 0.1 })
      .from(splitP.lines, {
        autoAlpha: 0,
        xPercent: 10,
        stagger: 0.05,
      });
  });

  return (
    <section id="about">
      <h2 className="sr-only">{aboutData.about_heading}</h2>
      <div className="about-intro-section">
        <div className="sub-heading fade">
          <h3>{aboutData.about_intro}?</h3>
        </div>

        <AboutListSection list={aboutData["about_list"]} />

        <div className="sub-heading fade">
          <h3>
            {aboutData.about_ending} <span>more!</span>
          </h3>
        </div>
      </div>

      <span id="about-section"></span>
      <div className="about-info" id="about-info">
        <h2>
          {aboutData.about_heading}
          <span className="blob"></span>
        </h2>

        <div className="side-info">
          <div className="about-intro-container">
            <h3>{aboutData.about_intro_heading}</h3>
            <div className="links">
              <a href={aboutData.about_links[0].about_link} target="_blank">
                Github
              </a>
              <a href={aboutData.about_links[1].about_link} target="_blank">
                LinkedIn
              </a>
              <a href="mailto:richardho.works@gmail.com">Email</a>
            </div>
          </div>

          <div className="about-text-container">
            <p>{aboutData.about_me_text}</p>
            <p>{aboutData.about_me_text_2}</p>
            <p>{aboutData.about_me_text_3}</p>
          </div>

          <SkillsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
