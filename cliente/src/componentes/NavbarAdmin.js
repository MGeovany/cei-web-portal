import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const NavbarAdmin = () => {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')
  const [isOpen, setIsOpen] = useState('')

  const navToggle = (e) => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active')
    } else setActive('nav__menu')

    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle')
    } else setIcon('nav__toggler')

    setIsOpen(e.target.classList.value)
  }
  return (
    <nav className='nav'>
      <ul className={active}>
        <li className='nav__item'></li>
        <li className='nav__item'>
          <Link to='/admin'>
            <div
              className={
                isOpen === 'nav__link-home' ? 'nav__link dot' : 'nav__link-home'
              }
              onClick={(e) => navToggle(e)}
              value='home'
            >
              Inicio
            </div>
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/admin/calendario'>
            <div
              className={
                isOpen === 'nav__link-calendario'
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
          <Link to='/admin/casos-de-exito'>
            <div
              className={
                isOpen === 'nav__link-casos'
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
          <Link to='/admin/blog'>
            <div
              className={
                isOpen === 'nav__link-blog' ? 'nav__link dot' : 'nav__link-blog'
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
              to='/admin/contactanos'
              value='contactanos'
              className='btn__contactanos'
              onClick={(() => setIsOpen('contactanos'), navToggle)}
            >
              Contáctanos
            </Link>
            <Link
              to='/admin/postulate'
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
    </nav>
  )
}
