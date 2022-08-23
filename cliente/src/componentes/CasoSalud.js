/* eslint-disable react/prop-types */
import React from 'react'
import { CasoCard } from './CasoCard'
import Slider from 'react-slick'

export const CasoSalud = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    vertical: false,
    responsive:[
      {breakpoint: 450,
      settings: {slidesToShow: 1,  slidesToScroll: 1 }

      },
      {breakpoint: 1050,
        settings: {slidesToShow: 2,  slidesToScroll: 2 }
  
      }
      
    ]
  }

  const casosSal = props.casosSal
  return (
    <div className='casos-tecnologia'>
      <div className='casos-container-section'>
        <div className='casos-section-title'>SALUD</div>
        <div className='casos-section-content'>
          <div className='container-carrousel'>
          <Slider {...settings}>
          {casosSal.map((caso, index) => (
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
CasoSalud.propTypes = {
  casosSal: PropTypes.array.isRequired
}
 */
