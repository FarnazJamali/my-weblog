import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const { data: blog, loading } = useFetch("http://localhost:8000/Blogs/" + id);
   const navigate = useNavigate();
   const handleDelete = () => {
     fetch("http://localhost:8000/Blogs/" + blog.id, {
       method: "DELETE",
     }).then(() => {
        navigate("/");
       console.log("deleted" + blog.id);
     });
   };
  return (
    <>
      <div className="blog-details">
        {loading && <div>Loading...</div>}

        {blog && (
          <article>
            <h2>Blog {id}</h2>
            <p>written by {blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>

      <Link to="/">Back to Home page!</Link>
    </>
  );
};

export default Blogdetails;
