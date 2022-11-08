const Blog = ({ blogs, title, handleDelete }) => {
  //   const blogs = props.blogs;
  //   console.log(blogs);

  return (
    <>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p> witten by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Post</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
