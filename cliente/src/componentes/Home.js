import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


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

        <motion.div  whileInView={{ opacity: [0,0,0,0.3,0.5,0.8, 1] }} className='home__subtitle'>
          Te lanzamos con toda la fuerza posible, <br />
          porque sabemos que la necesitas y porque no es <br />
          momento de ponerse límites.
        </motion.div>
      </div>
      <div className='home__img'>
        <img src='/assets/people/Startup.png' alt='Startup' />
      </div>
    </div>
  )
}
