import React from 'react'
import '../styles/PostulateAdmin.css'
import { Table } from '@mantine/core'

const elements = [
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario_extra: 'empresa para gatos',
    equipo_trabajo: 'no'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario_extra: 'empresa para gatos',
    equipo_trabajo: 'no'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario_extra: 'empresa para gatos',
    equipo_trabajo: 'no'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario_extra: 'empresa para gatos',
    equipo_trabajo: 'no'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario_extra: 'empresa para gatos',
    equipo_trabajo: 'no'
  },
  {
    nombre_completo: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario_extra: 'empresa para gatos',
    equipo_trabajo: 'no'
  }
]

export const PostulateAdmin = () => {
  const rows = elements.map((element) => (
    <tr key={element.nombre_completo}>
      <td horizontalSpacing='lg'>{element.nombre_completo}</td>
      <td horizontalSpacing='xs'>{element.correo}</td>
      <td horizontalSpacing='xs'>{element.celular}</td>
      <td horizontalSpacing='xs'>{element.genero}</td>
      <td horizontalSpacing='md'>{element.empresa}</td>
      <td horizontalSpacing='xs'>{element.comentario_extra}</td>
      <td horizontalSpacing='xs'>{element.equipo_trabajo}</td>
    </tr>
  ))

  return (
    <div className='postulate_admin'>
      <div className='container_postulate_admin flex'>
        <div className='section-title postulate-admin-title' align='center'>
          IDEAS <span style={{ color: '#7ac678' }}> POSTULADAS🎯</span>
        </div>
        <div className='tabla_postulate_admin'>
          <Table highlightOnHover>
            <thead>
              <tr className='text'>
                <th>Nombre Postulante</th>
                <th>Correo</th>
                <th>Genero</th>
                <th>Telefono</th>
                <th>Nombre de la Empresa</th>
                <th>Comentarios</th>
                <th>Equipo de Trabajo</th>
              </tr>
            </thead>
            <tbody className='textBody'>{rows}</tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
