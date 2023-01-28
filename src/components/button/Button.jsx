import React from "react";
import "./button.css";

const Button = ({ href, text }) => {
  return (
    <a href={href} className="btn">
      {text}
    </a>
  );
};

export default Button;
