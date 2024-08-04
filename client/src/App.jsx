import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import routes from './routes.jsx'
import { Navbar } from './components'


function App() {

  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element= {<route.component/>} />
          ))}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
