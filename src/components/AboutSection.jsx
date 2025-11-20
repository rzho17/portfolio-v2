import React from "react";

const AboutSection = ({ aboutData }) => {
  return (
    <section id="about">
      <p>{aboutData.about_intro}</p>
      <div>
        <ul>
          {aboutData["about_list"].map((key) => {
            return <li>{key.characteristic}</li>;
          })}
        </ul>
      </div>
      <p>{aboutData.about_ending}</p>

      <h2>{aboutData.about_heading}</h2>
      <p>{aboutData.about_me_text}</p>
      <p>{aboutData.about_me_text_2}</p>
    </section>
  );
};

export default AboutSection;
