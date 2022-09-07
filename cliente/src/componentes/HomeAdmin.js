import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow, HeroBanner } from '../utils/svgIcons'

export const HomeAdmin = () => {
  return (
    <div className='home'>
      <div className='home__banner'>
        <HeroBanner />
      </div>
      <div className='home__text'>
        <h1 className='home__title'>
          Bienvenido al panel administrativo del CEI
        </h1>
        <div className='home__btns'>
          <div className='home__btn__propuesta'>Editar Contenido</div>

          <Link to='/'>
            <div className='home__btn__blog'>
              Ver Vista Principal
              <Arrow fill='#ffffff' width={24} height={23} />
            </div>
          </Link>
        </div>
      </div>
      <div className='home__img'>
        <img src='/assets/people/Startup.png' alt='Startup' />
      </div>
    </div>
  )
}
