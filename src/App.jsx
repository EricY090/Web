import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AdditionModule from './Components/AdditionModule'
import Setting from './Pages/setting.jsx'

function App() {
  return (
    <>
      <Router>
          <Routes> 
            <Route exact path="/" element={< Home />}></Route> 
            <Route exact path="/setting" element={< Setting />}></Route>
            <Route exact path="/addition" element={< AdditionModule />}></Route> 
          </Routes>
      </Router>
    </>
  )
}

export default App;