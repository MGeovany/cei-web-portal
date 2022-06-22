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
import { casoModal } from './modals/casoModal'
import { Blog } from './pages/Blog'
import { Postulate } from './pages/Postulate'
import { Contactanos } from './pages/Contactanos'
import { PageNotFound } from './pages/PageNotFound'

// Private Route
import PrivateRoute from './componentes/PrivateRoute'
import { Dashboard } from './pages/Dashboard'
import { CasosAdmin } from './pages/CasosAdmin'
import { BlogAdmin } from './pages/BlogAdmin'
import { PostulateAdmin } from './pages/PostulateAdmin'
import { ContactanosAdmin } from './pages/ContactanosAdmin'
import { CalendarioAdmin } from './pages/CalendarioAdmin'

// Modals
import { agregarCasoModal } from './modals/agregarCasoModal'
import { verCasoModal } from './modals/verCasoModal'
import { blogModal } from './modals/blogModal'
import { agregarBlogModal } from './modals/agregarBlogModal'
import { verBlogModal } from './modals/verBlogModal'
import { CalendarioEvents } from './modals/CalendarioEvents'
import { AgregarEventos } from './modals/AgregarEventos'
import { EditarEventos } from './modals/EditarEventos'
import { EditarCasoModal } from './modals/EditarCasoModal'
import { EditarBlogModal } from './modals/EditarBlogModal'
import { NotificationsProvider } from '@mantine/notifications'

function App() {
  return (
    <MantineProvider>
      <NotificationsProvider>
        <ModalsProvider
          modals={{
            casoModal,
            agregarCasoModal,
            verCasoModal,
            blogModal,
            agregarBlogModal,
            verBlogModal,
            CalendarioEvents,
            AgregarEventos,
            EditarEventos,
            EditarCasoModal,
            EditarBlogModal
          }}
        >
          <div className='App'>
            <Router>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/calendario' element={<CalendarioPage />} />
                <Route path='/casos-de-exito' element={<Casos />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contactanos' element={<Contactanos />} />
                <Route path='/postulate' element={<Postulate />} />

                <Route path='/admin' element={<PrivateRoute />}>
                  <Route path='/admin/' element={<Dashboard />} />
                  <Route
                    path='/admin/casos-de-exito'
                    element={<CasosAdmin />}
                  />
                  <Route
                    path='/admin/calendario'
                    element={<CalendarioAdmin />}
                  />
                  <Route path='/admin/blog' element={<BlogAdmin />} />
                  <Route path='/admin/postulate' element={<PostulateAdmin />} />
                  <Route
                    path='/admin/contactanos'
                    element={<ContactanosAdmin />}
                  />
                </Route>
                <Route path='*' element={<PageNotFound />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  )
}

export default App
