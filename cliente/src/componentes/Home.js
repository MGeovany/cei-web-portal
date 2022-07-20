import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

import { Arrow, HeroBanner } from '../utils/svgIcons'

export const Home = () => {
  return (
    <div className='home'>
      <div className='home__banner'>
        <HeroBanner />
      </div>
      <div className='home__text'>
        <h1 className='home__title'>
          AMAMOS AYUDARTE <br />A <span>CRECER</span>
        </h1>

        <div className='home__btns'>
          <Link to='/postulate'>
            <div className='home__btn__propuesta'>Enviar Propuesta</div>
          </Link>
          <Link to='/blog'>
            <div className='home__btn__blog'>
              Ver Nuestro Blog <Arrow fill='#ffffff' width={24} height={23} />{' '}
            </div>
          </Link>
        </div>

        <div className='home__cnt'>
          Te lanzamos con toda la fuerza posible, <br />
          porque sabemos que la necesitas y porque no es <br />
          momento de ponerse límites.
        </div>
      </div>
      <div className='home__img'>
        <img src='/assets/people/Startup.png' alt='Startup' />
      </div>
    </div>
  )
}
