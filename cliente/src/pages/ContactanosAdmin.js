import React from 'react'
import '../styles/ContactanosAdmin.css'
import { Table } from '@mantine/core'

const elements = [
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    mensaje: 'Quisiera contactarme con el CEI...'
  }
]

export const ContactanosAdmin = () => {
  const rows = elements.map((element) => (
    <tr key={element.nombre_completo}>
      <td horizontalSpacing='lg'>{element.nombre_completo}</td>
      <td horizontalSpacing='xs'>{element.correo}</td>
      <td horizontalSpacing='xs'>{element.celular}</td>
      <td horizontalSpacing='xs'>{element.mensaje}</td>
    </tr>
  ))

  return (
    <div className='postulate_admin'>
      <div className='container_postulate_admin flex'>
        <div className='section-title contactanos-admin-title' align='center'>
          PERSONAS QUE SE{' '}
          <span style={{ color: '#7ac678' }}> CONTACTARON🎯</span>
        </div>
        <div className='tabla_contacto_admin'>
          <Table highlightOnHover>
            <thead>
              <tr className='text'>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Mensaje</th>
              </tr>
            </thead>
            <tbody className='textBody'>{rows}</tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
