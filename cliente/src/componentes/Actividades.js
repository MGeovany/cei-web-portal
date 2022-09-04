/* eslint-disable react/prop-types */
import React from 'react'
import { ActividadesCard } from './ActividadesCard'
import { Arrow } from '../utils/svgIcons'
import '../styles/Calendario.css'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { useMantineTheme } from '@mantine/core'


export const Actividades = (props) => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
  
  
  const data = props.data
  const slides = data.map((item, i) => (
    <Carousel.Slide key={i}>
      <ActividadesCard {...item} />
    </Carousel.Slide>
  ))

  return (
    <div className='ctividades'>
      <div className='actividades-container-section'>
        <div className='actividades-section-title'>
          Actividades celebradas por el CEI
          <span style={{ marginLeft: '12px' }}>
            <Arrow height={30} width={25} fill='#e1575f' />
          </span>
        </div>
        <div className='container-carrouselact'>
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
      </div>
    </div>
  )
}
