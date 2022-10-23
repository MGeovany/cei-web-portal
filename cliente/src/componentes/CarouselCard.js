/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/CarouselHome.css'

export const CarouselCard = (item) => {
  return (
    <div className='carousel-card'>
      <div className='carousel-card__img'>
        <img src={item.imagen} alt={item.titulo} />
        <div className='carousel-card__content carousel-card_title'>
          {item.titulo}
          <div className='carousel-card_description'>{item.descripcion}</div>
        </div>
      </div>
    </div>
  )
}
