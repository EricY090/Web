import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SecondPage from "./Pages/SettingsPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import Navbar from "./Components/Navbar";
import "./index.css";
import { useEffect, useState } from "react";



var dark = 0
function App() {
  const [color, setColor] = useState("white")
  const click = () => {
    if (dark==0){
      setColor("black");
      dark = 1
    }
    else {
      setColor('white');
      dark = 0
    }
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <button onClick = {
          () => {click()}
        } className="text-lg font-semibold text-purple-600 bg-blue-100">Change the Mode</button>
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
