import "./App.css";
import BlogPostList from "./components/BlogPostList";
import AddBlogPost from "./components/AddBlogPost";

import { useState, useCallback, useEffect } from "react";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  async function postBlogPost(blogPost) {
    const response = await fetch(
      "https://fir-react-blog-f39ea-default-rtdb.firebaseio.com/blogposts.json",
      {
        method: "POST",
        body: JSON.stringify(blogPost),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    fetchBlogPosts();
  }

  const fetchBlogPosts = useCallback(async () => {
    setBlogPosts([]);
    const response = await fetch(
      "https://fir-react-blog-f39ea-default-rtdb.firebaseio.com/blogposts.json"
    );
    const postData = await response.json();

    for (const key in postData) {
      setBlogPosts((oldBlogPostArray) => [
        ...oldBlogPostArray,
        {
          id: key,
          title: postData[key].title,
          blogPost: postData[key].postText,
        },
      ]);
    }
  });

  useEffect(() => {
    fetchBlogPosts();
    console.log(blogPosts);
  }, []);

  return (
    <div className='App'>
      <AddBlogPost onAddBlogPost={postBlogPost} />
      <BlogPostList blogPosts={blogPosts} />
    </div>
  );
}

export default App;
