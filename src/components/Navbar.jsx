import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Farfar Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </>
  );
};

//  style={{
//               color: "white",
//               backgroundColor: "#f1356d",
//               borderRadius: "8px",
//             }}
export default Navbar;
