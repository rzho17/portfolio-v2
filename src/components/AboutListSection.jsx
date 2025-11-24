import React from "react";

const AboutListSection = ({ list }) => {
  return (
    <div className="about-list">
      <ul>
        {list.map((key) => {
          return <li>{key.characteristic}</li>;
        })}
      </ul>
    </div>
  );
};

export default AboutListSection;
