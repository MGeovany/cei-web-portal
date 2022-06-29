import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')

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
        <li className='nav__item'>
          <Link to='/' className='nav__link'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/calendario' className='nav__link'>
            Actividades
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/casos-de-exito' className='nav__link'>
            Casos de Éxito
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/blog' className='nav__link'>
            blog
          </Link>
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
