import React from "react";

import BlogPost from "./BlogPost";
import classes from "./BlogPostList.module.css";

const BlogPostList = (props) => {
  return (
    <ul className={classes["blog-post-list"]}>
      {props.blogPosts.map((blogPost) => (
        <BlogPost
          key={blogPost.id}
          title={blogPost.title}
          blogPost={blogPost.blogPost}
        />
      ))}
    </ul>
  );
};

export default BlogPostList;
