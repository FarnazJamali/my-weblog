import Blog from "./Blog";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, loading } = useFetch("http://localhost:8000/Blogs");

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
