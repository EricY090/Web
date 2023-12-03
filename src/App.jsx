/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
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
      <div className="">
        <button onClick = {
          () => {click()}
        } className="text-lg font-semibold text-purple-600 bg-blue-100">Change the Mode</button>
        <HomePage/>
      </div>
    )
}

export default App;
