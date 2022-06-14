/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './componentes/Navbar'
import { Footer } from './componentes/Footer'

// Pages
import { LandingPage } from './pages/LandingPage'
import { CalendarioPage } from './pages/CalendarioPage'
import { Casos } from './pages/Casos'
import { CasosAdmin } from './pages/CasosAdmin'
import { Recursos } from './pages/Recursos'

// Modals
import { agregarCasoModal } from './modals/agregarCasoModal'
import { casoModal } from './modals/casoModal'
import { verCasoModal } from './modals/verCasoModal'

import PrivateRoute from './componentes/PrivateRoute'

function App () {
  return (
    <MantineProvider>
      <ModalsProvider modals={{ casoModal, agregarCasoModal, verCasoModal }}>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/calendario" element={<CalendarioPage />} />
              <Route path="/casos-de-exito" element={<Casos />} />
              <Route path="/recursos" element={<Recursos />} />

              <Route path="/admin" element={<PrivateRoute/>}>
                <Route path="/admin/casos" element={<CasosAdmin />} />
              </Route>

            </Routes>
            <Footer />
          </Router>
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}

export default App
