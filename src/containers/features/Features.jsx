import React from "react";
import { Feature } from "../../components/componentsExport";
import "./features.css";
import featuresImage from "../../assets/features-image.png";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__top">
        <div className="features__top--left">
          <h2 className="gradient-text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a href="/">Request Early Access to Get Started</a>
        </div>

        <div className="features__top--right">
          <Feature
            title="Improving end distrusts instantly"
            content="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
          <Feature
            title="Become the tended active"
            content="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
          <Feature
            title="Message or am nothing"
            content="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
          <Feature
            title="Really boy law county"
            content="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>

      <div className="features__bottom">
        <div className="features__bottom--image">
          <img src={featuresImage} alt="A lady putting on a VR headset" />
        </div>
        <div className="features__bottom--text">
          <span>Request Early Access to Get Started</span>
          <h2 className="gradient-text">
            The possibilities are beyond your imagination
          </h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href="/">Request Early Access to Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
