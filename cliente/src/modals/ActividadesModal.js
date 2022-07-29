/* eslint-disable react/prop-types */
import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  vertical: false,
}

export const ActividadesModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal'>
      <div className='asset__content'>
        <div className='asset__modal__title'>
          <div>{innerProps.titulo}</div>
        </div>
        <div className='asset__modal__subtitle'>
          <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
            • {innerProps.fecha}
          </span>
        </div>
        <div className='asset__modal__body lh-2'>{innerProps.desc}</div>
        <div className='asset__modal__title'>
          <div>Fotos del Evento</div>
        </div>
        
        <div className='fotos_list'>
        <Slider {...settings}>
          {innerProps.photos.map((photo, index) => (
            <div key={index}>
              {' '}
                <div className='foto__img'>
                  <img src={photo.img} alt={photo.descrip} />
                </div>
              
            </div>
          ))}
          </Slider>
        </div>
        
      </div>
    </div>
  </>
)
