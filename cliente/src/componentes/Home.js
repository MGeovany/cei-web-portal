import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../styles/Home.css'

import { Arrow, HeroBanner } from '../utils/svgIcons'

export const Home = ({ dataHome }) => {
  return (
    <div className='home'>
      <div className='home__banner'>
        <HeroBanner />
      </div>
      <div className='home__text'>
        <h1 className='home__title'>{dataHome?.titulo}</h1>

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

        <motion.div
          whileInView={{ opacity: [0, 0, 0, 0.3, 0.5, 0.8, 1] }}
          className='home__subtitle'
        >
          {dataHome?.subtitulo}
        </motion.div>
      </div>
      <div className='home__img'>
        <img src={dataHome?.imagen} alt='Startup' />
      </div>
    </div>
  )
}
