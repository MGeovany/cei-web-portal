import React from 'react'
import '../styles/CarouselHome.css'
import { Carousel } from '@mantine/carousel'
import { CarouselCard } from './CarouselCard'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
const data = [
  {
    title: 'Manos de Vida',
    desc: 'Manos de Vida es una plataforma que permite a los usuarios registrarse y publicar sus actividades de manera rápida y sencilla.',
    category: 'Casos de éxito',
    image:
      'https://images.pexels.com/photos/11969709/pexels-photo-11969709.jpeg'
  },
  {
    title: 'En el hub de unitec, celebramos el dia mundial del emprendimiento',
    desc: '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
    category: 'Blog',
    image: 'https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg'
  },
  {
    title: 'En el hub de unitec, celebramos el dia mundial del emprendimiento',
    desc: '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
    category: 'Casos de éxito',
    image: 'https://images.pexels.com/photos/5611139/pexels-photo-5611139.jpeg'
  },
  {
    title: 'En el hub de unitec, celebramos el dia mundial del emprendimiento',
    desc: '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
    category: 'Blog',
    image:
      'https://images.pexels.com/photos/12879613/pexels-photo-12879613.jpeg'
  }
]
export const CarouselHome = ({ dataHome }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  const slides = data.map((item, i) => (
    <Carousel.Slide key={i}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ))
  return (
    <div className='carousel-home'>
      <div className='section-title'>{dataHome.titulo_carousel}</div>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize='100%'
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%' }]}
        slideGap='xl'
        align='start'
        loop
        dragFree
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        {slides}
      </Carousel>
    </div>
  )
}
