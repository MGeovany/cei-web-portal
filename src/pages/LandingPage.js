import React from 'react'
import { Home } from '../componentes/Home'
import { NuestroEquipo } from '../componentes/NuestroEquipo'
import { QuienesSomos } from '../componentes/QuienesSomos'

export const LandingPage = () => {
  return (
    <div>
      <Home/>
      <QuienesSomos/>
      <NuestroEquipo/>
    </div>
  )
}
