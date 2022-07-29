/* eslint-disable react/prop-types */
import React from 'react'
import { ActividadesCard } from './ActividadesCard'
import { Arrow } from '../utils/svgIcons'
import Slider from 'react-slick'
import '../styles/Calendario.css'

export const Actividades = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const data = props.data

  return (
    <div className='ctividades'>
      <div className='actividades-container-section'>
        <div className='actividades-section-title'>
          Actividades celebradas por el CEI
          <span>
            <Arrow height={25} width={25} fill='#e1575f' />
          </span>
        </div>
        <div className='container-carrouselact'>
          <Slider {...settings}>
            {data.map((actividad, index) => (
              <div key={index}>
                {' '}
                <ActividadesCard actividad={actividad} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
