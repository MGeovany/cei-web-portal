import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logout, getSession } from '../store/slices/login/loginSlice'
import { Popover, Text, Button } from '@mantine/core';
import { ThemeIcon, Space, Center } from '@mantine/core';
import { IconAdjustments, IconLogout, IconUser } from '@tabler/icons';


export const NavbarAdmin = () => {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')
  const [isOpen, setIsOpen] = useState(window.location.pathname)
  const dispatch = useDispatch();

  const rutas = {
    'inicio' : '/admin',
    'calendario' : '/admin/calendario',
    'casos-de-exito' : '/admin/casos-de-exito',
    'blog' : '/admin/blog',
  };

  const salir = () => {
      dispatch(logout());
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
    }, 200);
  }
  return (
    <nav className='nav'>
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
                isOpen === rutas['calendario'] ? 'nav__link dot' : 'nav__link-calendario'
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
        <li>
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button variant="light" color="red">
              <ThemeIcon color="red" size="sm" radius="xl" variant="outline">
                <IconUser size={34} />
              </ThemeIcon>
              <Space w="xs" />
                {getSession().nombre}
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Center>
                <Button color="red" leftIcon={<IconLogout size={14} />} size="md" compact onClick={(()=> salir())}>
                  Cerrar session
                </Button>
              </Center>
            </Popover.Dropdown>
          </Popover>
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
