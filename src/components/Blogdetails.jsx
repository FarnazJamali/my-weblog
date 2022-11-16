import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const { data: blog, loading } = useFetch("http://localhost:8000/Blogs/" + id);
  return (
    <>
      <div className="blog-details">
        {loading && <div>Loading...</div>}

        {blog && (
          <article>
            <h2>Blog {id}</h2>
            <p>written by {blog.author}</p>
            <p>{blog.body}</p>
          </article>
        )}
      </div>

      <Link to="/">Back to Home page!</Link>
    </>
  );
};

export default Blogdetails;
