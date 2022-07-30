import React from 'react'

export const CarruoselCardAct = (item) => {
  return (
    <div className='carousel-card'>
      <div className='carousel-card__img'>
        <img src={item.image} alt={item.title} />
      </div>
      {item.title}
    </div>
  )
}
