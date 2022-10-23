import React, { useState, useEffect } from 'react'
import { CarouselHome } from '../componentes/CarouselHome'
import { Home } from '../componentes/Home'
import { NuestroEquipo } from '../componentes/NuestroEquipo'
import { QuienesSomos } from '../componentes/QuienesSomos'

import '../styles/Home.css'

export const LandingPage = () => {
  const [dataHome, setDataHome] = useState({})

  useEffect(() => {
    const fetchContactanos = async () => {
      const response = await fetch('http://localhost:5000/1.0.0/inicio')
      const data = await response.json()
      setDataHome(data)
    }
    fetchContactanos()
  }, [])

  return (
    <>
      <Home dataHome={dataHome} />
      <CarouselHome dataHome={dataHome} />
      <QuienesSomos dataHome={dataHome} />
      <NuestroEquipo dataHome={dataHome} />
    </>
  )
}
