import React from "react";
import { Blog } from "../../components/componentsExport";
import "./blogs.css";

const Blogs = () => {
  const blogs = [
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: "blog-1",
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: "blog-2",
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: "blog-3",
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: "blog-4",
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: "blog-5",
    },
  ];

  return (
    <div className="blogs" id="blogs">
      <h3 className="blogs__title gradient-text">
        A lot is happening. <br />
        We are blogging about it.
      </h3>

      <div className="blogs__grid">
        {blogs.map((blog, index) => {
          return (
            <Blog
              key={index}
              title={blog.title}
              date={blog.date}
              image={blog.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
