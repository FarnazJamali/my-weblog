import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogdetails from "./components/Blogdetails";
import Create from "./components/create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/Blogs/:id" element={<Blogdetails />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/" exact element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
