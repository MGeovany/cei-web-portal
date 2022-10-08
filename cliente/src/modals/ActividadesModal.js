/* eslint-disable react/prop-types */
import { Carousel } from '@mantine/carousel'
import React, { useRef } from 'react'

import Autoplay from 'embla-carousel-autoplay'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export const ActividadesModal = ({ context, id, innerProps }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }))
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  return (
    <>
      <div className='add__asset__modal'>
        <div className='asset__content'>
          <div className='asset__modal__title'>
            <div>{innerProps.title}</div>
          </div>
          <div className='asset__modal__subtitle'>
            <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
              {innerProps.createdDate}
            </span>
          </div>
          <div className='asset__modal__body lh-2'>{innerProps.desc}</div>
          <div className='asset__modal__title'>
            <div>Fotos del Evento</div>
          </div>

          {/*     <Carousel
            slideSize='25%'
            height={200}
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap='xl'
            align='start'
            loop
            plugins={[autoplay.current]}
            dragFree
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            slidesToScroll={mobile ? 1 : 2}
          >
            {innerProps.photos.map((item, i) => (
              <Carousel.Slide key={i}>
                <img
                  src={item.img}
                  alt={item.descrip}
                  style={{ width: '100%' }}
                />
              </Carousel.Slide>
            ))}
          </Carousel> */}
        </div>
      </div>
    </>
  )
}
