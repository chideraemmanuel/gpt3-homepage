import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__text">
        <span>Request Early Access to Get Started</span>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>

      <a href="/" className="cta__button">
        Get Started
      </a>
    </section>
  );
};

export default Cta;
