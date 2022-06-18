import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState('')

  return (
    <>
      <div className='navbar'>
        <div className='navbar-links'>
          <div>
            <Link
              to='/'
              className={
                isOpen === 'home' ? 'navbar__link dot' : 'navbar__link'
              }
              onClick={() => setIsOpen('home')}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to='/calendario'
              className={isOpen === 'cal' ? 'navbar__link dot' : 'navbar__link'}
              onClick={() => setIsOpen('cal')}
            >
              Calendario
            </Link>
          </div>
          <div>
            <Link
              to='/casos-de-exito'
              className={
                isOpen === 'casos' ? 'navbar__link dot' : 'navbar__link'
              }
              onClick={() => setIsOpen('casos')}
            >
              Casos de exito
            </Link>
          </div>
          <div>
            <Link
              to='/blog'
              className={
                isOpen === 'blog' ? 'navbar__link dot' : 'navbar__link'
              }
              onClick={() => setIsOpen('blog')}
            >
              Blog
            </Link>
          </div>
        </div>
        <div className='navbar-btns'>
          <Link
            to='/contactanos'
            className='btn__contactanos'
            onClick={() => setIsOpen('contact')}
          >
            Contactanos
          </Link>
          <Link
            to='/postulate'
            className='btn__postulate'
            onClick={() => setIsOpen('postulate')}
          >
            Postulate
          </Link>
        </div>
      </div>
    </>
  )
}
