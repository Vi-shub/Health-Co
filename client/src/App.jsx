import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import routes from './routes.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
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
