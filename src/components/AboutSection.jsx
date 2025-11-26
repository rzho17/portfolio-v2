import React from "react";
import AboutListSection from "./AboutListSection";
import SkillsSection from "./SkillsSection";

const AboutSection = ({ aboutData }) => {
  return (
    <section id="about">
      <h2 className="sr-only">{aboutData.about_heading}</h2>
      <div className="about-intro-section">
        <h3>{aboutData.about_intro}?</h3>

        <AboutListSection list={aboutData["about_list"]} />

        <h3>{aboutData.about_ending}</h3>
      </div>

      <div className="about-info">
        <h2>
          {aboutData.about_heading}
          <span className="blob"></span>
        </h2>

        <div className="side-info">
          <div className="about-intro-container">
            <h3>{aboutData.about_intro_heading}</h3>
            <div>
              <a href={aboutData.about_links[0].about_link} target="_blank">
                Github
              </a>
              <a href={aboutData.about_links[1].about_link} target="_blank">
                LinkedIn
              </a>
              <a href="mailto:example@email.com">Email</a>
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
