import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SecondPage from "./Pages/Settings";
import Navbar from "./Components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
