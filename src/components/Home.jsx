import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "first post", body: "lorem ipsum ...", author: "farnaz" },
    { id: 2, title: "second post", body: "lorem ipsum ...", author: "farnaz" },
    { id: 3, title: "third post", body: "lorem ipsum ...", author: "ali" },
  ]);
  return (
    <>
      <h3>FARFAR</h3>
      <div>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p> witten by {blog.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
