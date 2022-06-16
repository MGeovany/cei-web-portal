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
import { Blog } from './pages/Blog'

// Modals
import { agregarCasoModal } from './modals/agregarCasoModal'
import { casoModal } from './modals/casoModal'
import { verCasoModal } from './modals/verCasoModal'
import { blogModal } from './modals/blogModal'

import PrivateRoute from './componentes/PrivateRoute'

function App() {
  return (
    <MantineProvider>
      <ModalsProvider
        modals={{ casoModal, agregarCasoModal, verCasoModal, blogModal }}
      >
        <div className='App'>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/calendario' element={<CalendarioPage />} />
              <Route path='/casos-de-exito' element={<Casos />} />
              <Route path='/blog' element={<Blog />} />

              <Route path='/admin' element={<PrivateRoute />}>
                <Route path='/admin/casos' element={<CasosAdmin />} />
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
