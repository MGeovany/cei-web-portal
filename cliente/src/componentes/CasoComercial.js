/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { CasoCard } from './CasoCard'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

export const CasoComercial = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: false
  }

  const casosCom = props.casosCom
  return (
    <div className='casos-comercial'>
      <div className='casos-container-section'>
        <div className='casos-section-title'>COMERCIAL</div>
        <div className='casos-section-content'>
          <div className='container-carrousel'>
          <Slider {...settings}>
          {casosCom.map((caso, index) => (
            <div key={index}>
              {' '}
              <CasoCard caso={caso} />
            </div>
          ))}
          </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
/*
CasoComercial.propTypes = {
  casosCom: PropTypes.string.isRequired
}
 */
