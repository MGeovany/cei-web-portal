import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')
  const [isOpen, setIsOpen] = useState(window.location.pathname)

  const rutas = {
    inicio: '/',
    calendario: '/calendario',
    'casos-de-exito': '/casos-de-exito',
    blog: '/blog'
  }

  const navToggle = (e) => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active')
    } else setActive('nav__menu')

    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle')
    } else setIcon('nav__toggler')

    setTimeout(function () {
      setIsOpen(window.location.pathname)
    }, 200)
  }
  return (
    <div className='nav'>
      <ul className={active}>
        <li className='nav__item'></li>
        <li className='nav__item'>
          <Link to={rutas['inicio']}>
            <div
              className={
                isOpen === rutas['inicio'] ? 'nav__link dot' : 'nav__link-home'
              }
              onClick={(e) => navToggle(e)}
              value='home'
            >
              Inicio
            </div>
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={rutas['calendario']}>
            <div
              className={
                isOpen === rutas['calendario']
                  ? 'nav__link dot'
                  : 'nav__link-calendario'
              }
              onClick={(e) => navToggle(e)}
            >
              Actividades
            </div>
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={rutas['casos-de-exito']}>
            <div
              className={
                isOpen === rutas['casos-de-exito']
                  ? 'nav__link dot'
                  : 'nav__link-casos'
              }
              onClick={(e) => navToggle(e)}
            >
              Casos de Éxito
            </div>
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={rutas['blog']}>
            <div
              className={
                isOpen === rutas['blog'] ? 'nav__link dot' : 'nav__link-blog'
              }
              onClick={(e) => navToggle(e)}
            >
              Recursos
            </div>
          </Link>
        </li>
        <li>
          <div className='navbar-btns'>
            <Link
              to='/contactanos'
              value='contactanos'
              className='btn__contactanos'
              onClick={(() => setIsOpen('contactanos'), navToggle)}
            >
              Contáctanos
            </Link>
            <Link
              to='/postulate'
              className='btn__postulate'
              onClick={(() => setIsOpen('postulate'), navToggle)}
            >
              Postulate
            </Link>
          </div>
        </li>
      </ul>
      <div onClick={(() => setIsOpen('home'), navToggle)} className={icon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
  )
}
