/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/CarouselHome.css'

export const CarouselCard = (item) => {
  return (
    <div className='carousel-card'>
      <div className='carousel-card__img'>
        <img src={item.image} alt={item.title} />
      </div>
      {item.title}
    </div>
  )
}
