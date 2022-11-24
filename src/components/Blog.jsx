import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blog = ({ blogs, title }) => {
  return (
    <>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`Blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p> witten by {blog.author}</p>
            </Link>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
