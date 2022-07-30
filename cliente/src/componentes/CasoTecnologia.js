/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { CasoCard } from './CasoCard'
import Slider from 'react-slick'

export const CasoTecnologia = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    vertical: false
  }

  const casosTec = props.casosTec

  return (
    <div className='casos-tecnologia'>
      <div className='casos-container-section'>

        <div className='casos-section-title'>TECNOLOGÍA</div>
        <div className='casos-section-content'>
          <div className='container-carrousel'>
            <Slider {...settings}>
          {casosTec.map((caso, index) => (
            <div key={index}>
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

/* CasoTecnologia.propTypes = {
  casosTec: PropTypes.array.isRequired
}
 */
