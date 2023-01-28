import React from "react";
import "./feature.css";

const Feature = ({ title, content }) => {
  return (
    <div className="feature">
      <div className="feature__title">
        <span className="feature__title--bar"></span>
        <p className="feature__title--text">{title}</p>
      </div>

      <div className="feature__content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Feature;
