import React from 'react'

import '../styles/Home.css'

import { Arrow } from '../utils/svgIcons'

export const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__text">
          <h1 className="home__title">
            AMAMOS AYUDARTE A <span className="span__green">CRECER</span>
          </h1>

          <div className="home__btns">
            <div className="home__btn__propuesta">Enviar Propuesta</div>
            <div className="home__btn__blog">Ver Nuestro Blog</div>
            <Arrow fill="#7ac678" />
          </div>

          <div className="home__cnt">
            Te lanzamos con toda la fuerza posible, porque sabemos que la
            necesitas y porque no es momento de ponerse límites.
          </div>
        </div>
        <div className="home__img">
          <img src="/assets/people/Startup.png" alt="Startup" />
        </div>
      </div>
    </div>
  )
}
