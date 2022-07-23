import React from 'react'
import '../styles/Blog.css'
import { Arrow } from '../utils/svgIcons'
import { DescargablesCard } from './DescargablesCard'
import Slider from 'react-slick'

const descargables = [
    {
        id: 1,
        title:
          'PLANTILLA PARA UN RESUMEN EJECUTIVO',
        autor: 'CEI CEUTEC',
        fecha: '18/05/2020',
        img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        doc: 'hols'
      },
      {
        id: 2,
        title:
          'PLANTILLA PARA UN RESUMEN EJECUTIVO',
        autor: 'CEI CEUTEC',
        fecha: '18/05/2020',
        img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        doc: 'hols'
      },
      {
        id: 3,
        title:
          'PLANTILLA PARA UN RESUMEN EJECUTIVO',
        autor: 'CEI CEUTEC',
        fecha: '18/05/2020',
        img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        doc: 'hols'
      },
      {
        id: 4,
        title:
          'PLANTILLA PARA UN RESUMEN EJECUTIVO',
        autor: 'CEI CEUTEC',
        fecha: '18/05/2020',
        img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        doc: 'hols'
      }
]

export const RecursosDescargables = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        vertical: false
      }

  return (
    <div className='casos-tecnologia'>
      <div className='casos-container-section'>
        <div className='blog-section-title'>
          Recursos descargables
          <span>
            <Arrow height={32} width={30} fill='#e1575f' />
          </span>
        </div>

        <div className='casos-section-content'>
          <div className='container-carrousel'>
          <Slider {...settings}>
          {descargables.map((descargables, index) => (
            <div key={descargables.id}>
              <DescargablesCard descargables={descargables} />
            </div>
          ))}
          </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
