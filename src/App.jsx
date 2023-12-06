import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RatePage from "./Pages/RatingPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import HelpPage from "./Pages/HelpPage";
import Navbar from "./Components/Navbar";
import "./index.css";
import { useEffect, useState } from "react";
import stars from "./Pages/img/bg-stars.jpg"



var dark = 0
function App() {
  const [color, setColor] = useState("white")
  const [img, setImg] = useState("")
  const click = () => {
    if (dark==0) {
      setColor("black")
      dark = 1
    }
    else if (dark == 1) {
      setColor("white")
      setImg(stars)
      dark = 2
    }
    else {
      setColor("white")
      setImg("")
      dark = 0
    }
  };
  useEffect(()=>{
    document.body.style.backgroundColor = color
    document.body.style.backgroundImage = `url('${img}')`
  }, [color, img])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <button onClick = {
          () => {click()}
        } className="absolute right-2 text-lg font-semibold text-white bg-purple-600 py-2">Change the Mode</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ratings" element={<RatePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
