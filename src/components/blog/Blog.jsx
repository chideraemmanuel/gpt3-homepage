import React from "react";
import "./blog.css";

const Blog = ({ image, title, date }) => {
  return (
    <a href="/" className="blog">
      <div className="blog__image">
        <img
          src={process.env.PUBLIC_URL + `/assets/${image}.png`}
          alt={title}
        />
      </div>
      <div className="blog__details">
        <div>
          <small>{date}</small>
          <h3>{title}</h3>
        </div>

        <span>Read Full Article</span>
      </div>
    </a>
  );
};

export default Blog;
