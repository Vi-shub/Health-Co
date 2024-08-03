import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
