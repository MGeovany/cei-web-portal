import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')
  const [isOpen, setIsOpen] = useState('')

  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active')
    } else setActive('nav__menu')

    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle')
    } else setIcon('nav__toggler')
  }
  return (
    <nav className='nav'>
      <ul className={active}>
        <li className='nav__item'></li>
        <li className='nav__item'>
          <Link
            to='/'
            className={isOpen === 'home' ? 'nav__link dot' : 'nav__link'}
            onClick={() => setIsOpen('home')}
          >
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/calendario'
            className={isOpen === 'cal' ? 'nav__link dot' : 'nav__link'}
            onClick={() => setIsOpen('cal')}
          >
            Actividades
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/casos-de-exito'
            className={isOpen === 'casos' ? 'nav__link dot' : 'nav__link'}
            onClick={() => setIsOpen('casos')}
          >
            Casos de Éxito
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/blog'
            className={isOpen === 'blog' ? 'nav__link dot' : 'nav__link'}
            onClick={() => setIsOpen('blog')}
          >
            blog
          </Link>
        </li>
        <li>
          <div className='navbar-btns'>
            <Link
              to='/contactanos'
              className='btn__contactanos'
              onClick={() => setIsOpen('')}
            >
              Contáctanos
            </Link>
            <Link
              to='/postulate'
              className='btn__postulate'
              onClick={() => setIsOpen('')}
            >
              Postulate
            </Link>
          </div>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}
