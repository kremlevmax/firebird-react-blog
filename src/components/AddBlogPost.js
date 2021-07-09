import React, { useRef } from "react";

import classes from "./AddBlogPost.module.css";

function AddBlogPost(props) {
  const titleRef = useRef("");
  const blogTextRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const blogPost = {
      title: titleRef.current.value,
      postText: blogTextRef.current.value,
    };

    props.onAddBlogPost(blogPost);

    blogTextRef.current.value = "";
    titleRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='blog-post-text'>Post Text</label>
        <textarea rows='5' id='blog-post-text' ref={blogTextRef}></textarea>
      </div>
      <button>Publish</button>
    </form>
  );
}

export default AddBlogPost;
