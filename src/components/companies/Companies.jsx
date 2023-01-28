import React from "react";
import "./companies.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Companies = () => {
  return (
    <section className="companies">
      <div className="companies__company">
        <img src={google} alt="Google Logo" />
      </div>
      <div className="companies__company">
        <img src={slack} alt="Slack Logo" />
      </div>
      <div className="companies__company">
        <img src={atlassian} alt="Atlassian Logo" />
      </div>
      <div className="companies__company">
        <img src={dropbox} alt="Dropbox Logo" />
      </div>
      <div className="companies__company">
        <img src={shopify} alt="Shopify Logo" />
      </div>
    </section>
  );
};

export default Companies;
