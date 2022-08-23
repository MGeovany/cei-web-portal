import React from 'react'
import '../styles/CarouselHome.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import { CarouselCard } from './CarouselCard'

export const CarouselHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    arrows: true,
    fade: false,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: true
  }

  const data = [
    {
      title: 'Manos de Vida',
      desc: 'Manos de Vida es una plataforma que permite a los usuarios registrarse y publicar sus actividades de manera rápida y sencilla.',
      category: 'Casos de éxito',
      image:
        'https://images.pexels.com/photos/11969709/pexels-photo-11969709.jpeg'
    },
    {
      title:
        'En el hub de unitec, celebramos el dia mundial del emprendimiento',
      desc: '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
      category: 'Blog',
      image:
        'https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg'
    },
    {
      title:
        'En el hub de unitec, celebramos el dia mundial del emprendimiento',
      desc: '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
      category: 'Casos de éxito',
      image:
        'https://images.pexels.com/photos/5611139/pexels-photo-5611139.jpeg'
    },
    {
      title:
        'En el hub de unitec, celebramos el dia mundial del emprendimiento',
      desc: '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
      category: 'Blog',
      image:
        'https://images.pexels.com/photos/12879613/pexels-photo-12879613.jpeg'
    }
  ]

  return (
    <div className='carousel-home'>
      <div className='section-title carousel-title'>
        Te mantenemos al tanto de lo que sucede <br /> a tu alrededor 🤠
      </div>
      <div className='carousel-home-item'>
        <Slider {...settings}>
          {data.map((item, index) => (
            <CarouselCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
