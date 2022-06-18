import React from 'react'
import { Home } from '../componentes/Home'
import { NuestroEquipo } from '../componentes/NuestroEquipo'
import { QuienesSomos } from '../componentes/QuienesSomos'
import { Navbar } from '../componentes/Navbar'

import '../styles/Home.css'

export const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <div className='mobile-only'>
        <h1>
          AUN NO TENEMOS SOPORTE PARA
          <span style={{ color: '#7ac678' }}> VERSION MOBILE🤗</span>
        </h1>
        <h4>Por favor, utiliza la vista de Escritorio</h4>
        <div>
          Mientras nosotros trabajamos👷‍♂️👷‍♀️ para traerte la experiencia del CEI
          en mobile 📲
        </div>
      </div>
      <div className='desktop-only'>
        <Home />
        <QuienesSomos />
        <NuestroEquipo />
      </div>
    </div>
  )
}
