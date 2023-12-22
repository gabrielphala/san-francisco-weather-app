import Home from "./Home"
import View from "./View"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App () {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/view" element={<View/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}