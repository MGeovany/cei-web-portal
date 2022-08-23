/* eslint-disable react/prop-types */
import React from 'react'
import { ActividadesCard } from './ActividadesCard'
import { Arrow } from '../utils/svgIcons'
import Slider from 'react-slick'
import '../styles/Actividades.css'

export const Actividades = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 711,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const data = props.data

  return (
    <div className='actividades-container'>
      <div className='actividades-titulo'>
        <h1>
          Actividades celebradas por el CEI
          <span className='actividades-flecha'>
            <Arrow height={30} width={30} fill='#e1575f' />
          </span>
        </h1>
      </div>
      <div className='carrusel-actividades'>
        <Slider {...settings}>
          {data.map((actividad, index) => (
            <div key={index}>
              <ActividadesCard actividad={actividad} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
