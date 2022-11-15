import { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/Blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  });
  return (
    <>
      <div className="home">
        {loading && <h5>Loading...</h5>}
        {blogs && <Blog blogs={blogs} title={"All my posts!"} />}
      </div>
    </>
  );
};

export default Home;
