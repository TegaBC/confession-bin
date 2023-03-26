import './App.css'
import { Routes, Route } from "react-router-dom"

import HomePage from './pages/Home'
import NavBar from "./components/Navbar"
import ViewPost from './pages/ViewPost'

function App() {

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/confession/:id" element={<ViewPost/>} />
        </Routes>
    </div>
  )
}

export default App
