import { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/Blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  });
  return (
    <>
      <div className="home">
        {blogs && <Blog blogs={blogs} title={"All my posts!"} />}
      </div>
    </>
  );
};

export default Home;
