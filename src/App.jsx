import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path=""></Route>
          </Routes>
        </Router>
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
