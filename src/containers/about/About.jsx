import React from "react";
import { Feature } from "../../components/componentsExport";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <Feature
          title="What is GPT-3"
          content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>

      <div className="about__main">
        <h2 className="about__main--text gradient-text">
          The possibilities are beyond your imagination
        </h2>
        <a href="/" className="about__main--link">
          Explore The Library
        </a>
      </div>

      <div className="about__grid">
        <Feature
          title="Chatbots"
          content="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          title="Education"
          content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </section>
  );
};

export default About;
