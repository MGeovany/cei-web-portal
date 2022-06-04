import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

import { Navbar } from './componentes/Navbar'
import { LandingPage } from './pages/LandingPage'
import { Calendario } from './pages/Calendario'
import { Casos } from './pages/Casos'
import { Recursos } from './pages/Recursos'
import { Footer } from './componentes/Footer'

function App () {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/casos-de-exito" element={<Casos/>} />
          <Route path="/recursos" element={<Recursos/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
