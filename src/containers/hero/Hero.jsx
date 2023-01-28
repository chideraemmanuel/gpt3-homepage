import React from "react";
import "./hero.css";
import aiIllustration from "../../assets/illustration.svg";
import users from "../../assets/users.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__text--title gradient-text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="hero__text--description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <form className="hero__text--input-group">
          <input type="email" placeholder="Your Email Address" required />
          <button>Get Started</button>
        </form>

        <div className="hero__text--users">
          <div className="hero__text--users__image">
            <img src={users} alt="Users profile images" />
          </div>
          <div className="hero__text--users__text">
            <span>
              1,600 people requested access to visit in the last 24 hours
            </span>
          </div>
        </div>
      </div>

      <div className="hero__image">
        <img src={aiIllustration} alt="AI Illustration" />
      </div>
    </section>
  );
};

export default Hero;
