import React from "react";

const FeatureProjectImage = ({ url, alt }) => {
  return (
    <figure className="feature-project-container">
      <img src={url} alt={alt} loading="lazy" />
    </figure>
  );
};

export default FeatureProjectImage;
