/* eslint-disable react/prop-types */
import React from 'react'
import { CasoCard } from './CasoCard'
import Slider from 'react-slick'

export const CasoSocial = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    vertical: false
  }

  const casosSoc = props.casosSoc
  return (
    <div className='casos-social'>
      <div className='casos-container-section'>
        <div className='casos-section-title'>SOCIAL</div>
        <div className='casos-section-content'>
          <div className='container-carrousel'>
          <Slider {...settings}>
          {casosSoc.map((caso, index) => (
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
CasoSocial.propTypes = {
  casosSoc: PropTypes.array.isRequired
}
 */
