import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SecondPage from "./Pages/SettingsPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import Navbar from "./Components/Navbar";
import "./index.css";
import { useEffect, useState } from "react";



var dark = 0
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/leaderboard-page" element={<LeaderboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
