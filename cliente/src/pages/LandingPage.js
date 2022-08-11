import React from 'react'
import { CarouselHome } from '../componentes/CarouselHome'
import { Home } from '../componentes/Home'
import { NuestroEquipo } from '../componentes/NuestroEquipo'
import { QuienesSomos } from '../componentes/QuienesSomos'

import '../styles/Home.css'

export const LandingPage = () => {
  return (
    <>
      <Home />
      {/*  <CarouselHome /> */}
      <QuienesSomos />
      <NuestroEquipo />
    </>
  )
}
