import { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "first post", body: "lorem ipsum ...", author: "farnaz" },
    { id: 2, title: "second post", body: "lorem ipsum ...", author: "farnaz" },
    { id: 3, title: "third post", body: "lorem ipsum ...", author: "ali" },
  ]);
  const handleDelete = (bId) => {
    const updatedBlogs = blogs.filter((blog) => bId !== blog.id);
    setBlogs(updatedBlogs);
  };
  useEffect(() => {
    console.log("use effect ran");
  });
  return (
    <>
      <div className="home">
        <Blog
          blogs={blogs}
          title={"All my posts!"}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Home;
