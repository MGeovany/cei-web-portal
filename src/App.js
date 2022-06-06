import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

import { Navbar } from './componentes/Navbar'
import { LandingPage } from './pages/LandingPage'
import { CalendarioPage } from './pages/CalendarioPage'
import { Recursos } from './pages/Recursos'
import { Footer } from './componentes/Footer'
import { Casos } from './pages/Casos'

function App () {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/calendario" element={<CalendarioPage/>} />
          <Route path="/casos-de-exito" element={<Casos/>} />
          <Route path="/recursos" element={<Recursos/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
