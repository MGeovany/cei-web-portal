/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { DescargablesCard } from './DescargablesCard'
import { useMediaQuery } from '@mantine/hooks'
import { useMantineTheme } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export const DescargablesCarousel = ({ data, section }) => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  const slides = data.map((item, i) => (
    <Carousel.Slide key={i}>
      {console.log(item.title)}

      <DescargablesCard {...item} />
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
