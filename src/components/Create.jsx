import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { author, title, body };
    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
      console.log("Added");
    });
  };
  return (
    <>
      <div className="create">
        <h2>Add a new post</h2>
        <form onSubmit={handleSubmit}>
          <label>title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>body:</label>
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>author:</label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option defaultValue="Farnaz">Farnaz</option>
            <option value="Maryam">Maryam</option>
          </select>
          <button>Add new post</button>
        </form>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Create;
