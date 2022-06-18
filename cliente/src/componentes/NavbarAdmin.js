import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'

export const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState('home')

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <Link
          to='/admin'
          className={isOpen === 'home' ? 'navbar__link dot' : 'navbar__link'}
          onClick={() => setIsOpen('home')}
        >
          Home
        </Link>
        <Link
          to='/admin/calendario'
          className={isOpen === 'cal' ? 'navbar__link dot' : 'navbar__link'}
          onClick={() => setIsOpen('cal')}
        >
          Calendario
        </Link>
        <Link
          to='/admin/casos-de-exito'
          className={isOpen === 'casos' ? 'navbar__link dot' : 'navbar__link'}
          onClick={() => setIsOpen('casos')}
        >
          Casos de exito
        </Link>
        <Link
          to='/admin/blog'
          className={isOpen === 'blog' ? 'navbar__link dot' : 'navbar__link'}
          onClick={() => setIsOpen('blog')}
        >
          Blog
        </Link>
      </div>
      <div className='navbar-btns'>
        <Link
          to='/admin/contactanos'
          className='btn__contactanos'
          onClick={() => setIsOpen('contact')}
        >
          Contactanos
        </Link>
        <Link
          to='/admin/postulate'
          className='btn__postulate'
          onClick={() => setIsOpen('postulate')}
        >
          Postulate
        </Link>
      </div>
    </div>
  )
}
