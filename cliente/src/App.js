/* eslint-disable no-unused-vars */
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
import { agregarCasoModal } from './modals/agregarCasoModal'
import PrivateRoute from './componentes/PrivateRoute'
import { CasosAdmin } from './pages/CasosAdmin'

function App () {
  // const islogged = localStorage.getItem('token')

  return (
    <MantineProvider>
      <ModalsProvider modals={{ casoModal, agregarCasoModal }}>
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
