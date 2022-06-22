import React from 'react'
import '../styles/ContactanosAdmin.css'
import { Table } from '@mantine/core'
import { NavbarAdmin } from '../componentes/NavbarAdmin'

const elements = [
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',
    correo: 'valeria587@gmail.com',
    celular: '+005 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  },
  {
    nombre: 'Valeria Sofia ',
    apellido: 'Figueroa',

    correo: 'valeria587@gmail.com',
    celular: '+504 9558 3206',
    mensaje: 'Quisiera contactarme con el CEI',
    fecha: 'Sun Jun 21 2019'
  }
]

export const ContactanosAdmin = () => {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>
        <div className='td__content'>{element.nombre}</div>
      </td>
      <td>
        <div className='td__content'>{element.apellido}</div>
      </td>
      <td>
        <div className='td__content'>{element.correo}</div>
      </td>
      <td>
        <div className='td__content'>{element.celular}</div>
      </td>
      <td>
        <div className='td__content'>{element.mensaje}</div>
      </td>
      <td>
        <div className='td__content'>{element.fecha}</div>
      </td>
      <td>
        <div className='tab__btns flex'>
          <div className='btn__editar'>Aceptar</div>
          <div className='btn__eliminar'>Eliminar</div>
        </div>
      </td>
    </tr>
  ))

  return (
    <>
      <NavbarAdmin />

      <div className='casos'>
        <div className='casos-container flex'>
          <div className='casos-title section-title'>
            PERSONAS QUE SE
            <span style={{ color: '#e1575f' }}> CONTACTARON</span>
          </div>
          <div className='contactanos__table__container'>
            <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
              <thead>
                <tr>
                  <th>
                    <div className='th__title'>Nombre</div>
                  </th>
                  <th>
                    <div className='th__title'>Apellido</div>
                  </th>
                  <th>
                    <div className='th__title'>Correo</div>
                  </th>
                  <th>
                    <div className='th__title'>Celular</div>
                  </th>
                  <th>
                    <div className='th__title'>Mensaje</div>
                  </th>
                  <th>
                    <div className='th__title'>Fecha</div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
