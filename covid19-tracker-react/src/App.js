import "./App.css";
import Homepage from "./Pages/Homepage";
import Country from "./Pages/Country";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/country/:countryname" element={<Country />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
