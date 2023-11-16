import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AdditionModule from "./Components/AdditionModule";
import SubtractionModule from "./Components/SubtractionModule.jsx";
import DivisionModule from "./Components/DivisionModule.jsx";
import Setting from "./Pages/setting.jsx";
import MultiplicationModule from "./Components/MultiplicationModule.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/setting" element={<Setting />}></Route>
          <Route exact path="/addition" element={<AdditionModule />}></Route>
          <Route
            exact
            path="/subtraction"
            element={<SubtractionModule />}
          ></Route>
          <Route
            exact
            path="/multiplication"
            element={<MultiplicationModule />}
          ></Route>
          <Route exact path="/division" element={<DivisionModule />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
