/* eslint-disable react/prop-types */
import React from 'react'
import { ActividadesCard } from './ActividadesCard'
import '../styles/Calendario.css'
import { useMediaQuery } from '@mantine/hooks'
import { useMantineTheme } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export const Actividades = ({ data, section }) => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  const slides = data.map((item, i) => (
    <Carousel.Slide key={i}>
      <ActividadesCard {...item} />
    </Carousel.Slide>
  ))
  return (
    <div style={{ padding: '1rem', marginTop: '4rem' }}>
      <div className='casos-section-title'>{section}</div>
      <Carousel
        slideSize='25%'
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap='xl'
        align='start'
        loop
        dragFree
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </div>
  )
}
