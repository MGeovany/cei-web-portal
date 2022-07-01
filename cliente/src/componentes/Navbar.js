import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')
  const [isOpen, setIsOpen] = useState('')

  const navToggle = (e) => {
    setIsOpen(e.target.value)
    console.log('e', e.target.value)
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
            value='home'
            className={isOpen === 'home' ? 'nav__link dot' : 'nav__link'}
            onClick={(e) => navToggle(e)}
          >
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/calendario'
            className={isOpen === 'cal' ? 'nav__link dot' : 'nav__link'}
            onClick={(() => setIsOpen('cal'), navToggle)}
          >
            Actividades
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/casos-de-exito'
            className={isOpen === 'casos' ? 'nav__link dot' : 'nav__link'}
            onClick={(() => setIsOpen('casos'), navToggle)}
          >
            Casos de Éxito
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/blog'
            className={isOpen === 'blog' ? 'nav__link dot' : 'nav__link'}
            onClick={(() => setIsOpen('blog'), navToggle)}
          >
            blog
          </Link>
        </li>
        <li>
          <div className='navbar-btns'>
            <Link
              to='/contactanos'
              className='btn__contactanos'
              onClick={(() => setIsOpen(''), navToggle)}
            >
              Contáctanos
            </Link>
            <Link
              to='/postulate'
              className='btn__postulate'
              onClick={(() => setIsOpen(''), navToggle)}
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
