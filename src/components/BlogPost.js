import React from "react";

import classes from "./BlogPost.module.css";

const BlogPost = (props) => {
  return (
    <li className={classes["blog-post"]}>
      <h2>{props.title}</h2>
      <p>{props.blogPost}</p>
    </li>
  );
};

export default BlogPost;
