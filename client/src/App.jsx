import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/Home'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route link="/" element={<HomePage/>} />
        </Routes>
    </div>
  )
}

export default App
