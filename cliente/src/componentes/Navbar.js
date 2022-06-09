import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <Link to='/' className='navbar__link'>Home</Link>
        <Link to='/calendario' className='navbar__link'>Calendario</Link>
        <Link to='/casos-de-exito' className='navbar__link'>Casos de exito</Link>
        <Link to='/recursos' className='navbar__link'>Recursos</Link>
      </div>
      <div className='navbar-btns'>
        <Link to='/contactanos' className='btn__contactanos'>Contactanos</Link>
        <Link to='/postulate' className='btn__postulate'>Postulate</Link>
      </div>
    </div>
  )
}
