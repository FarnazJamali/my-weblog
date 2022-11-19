import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <>
      <div className="create">
        <h2>Add a new post</h2>
        <form>
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
          <button type="submit">Add new post</button>
        </form>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Create;
