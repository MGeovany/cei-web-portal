import React from 'react'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import { Navbar } from './componentes/Navbar'
import { LandingPage } from './pages/LandingPage'
import { CalendarioPage } from './pages/CalendarioPage'
import { Recursos } from './pages/Recursos'
import { Footer } from './componentes/Footer'
import { Casos } from './pages/Casos'
import { casoModal } from './modals/casoModal'

function App () {
  return (
    <MantineProvider>
      <ModalsProvider modals={{ casoModal }}>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/calendario" element={<CalendarioPage />} />
              <Route path="/casos-de-exito" element={<Casos />} />
              <Route path="/recursos" element={<Recursos />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}

export default App
