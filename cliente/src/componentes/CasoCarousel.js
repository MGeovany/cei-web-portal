/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { CasoCard } from './CasoCard'
import { useMediaQuery } from '@mantine/hooks'
import { useMantineTheme } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { motion } from "framer-motion"

export const CasoCarousel = ({ data, section }) => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  const slides = data.map((item, i) => (
    <Carousel.Slide key={i}>
      <CasoCard {...item} />
    </Carousel.Slide>
  ))

  return (
    <div style={{ padding: '1rem', marginTop: '4rem' }}>
      <motion.div whileInView={{ opacity: [0,0,0,0.3,0.5,0.8, 1] }}  className='casos-section-title'>{section}</motion.div>
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
