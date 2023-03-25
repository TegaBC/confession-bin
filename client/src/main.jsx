import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 

import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./components/Navbar"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
