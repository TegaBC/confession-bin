import './App.css'
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/Navbar"
import HomePage from './pages/Home'
import ViewPost from './pages/ViewPost'
import CreatePost from './pages/CreatePost'

function App() {

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/confession/:id" element={<ViewPost/>} />
          <Route path="/confession/create" element={<CreatePost/>} />
        </Routes>
    </div>
  )
}

export default App
