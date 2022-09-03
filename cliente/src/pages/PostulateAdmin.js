import React from 'react'
import '../styles/PostulateAdmin.css'
import { Table } from '@mantine/core'

const elements = [
  {
    titulo: 'Proyecto1',
    nombre: 'Valeria Sofia Figueroa',
    apellido: 'Gonzalez',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    equipo: 'no',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    empresa: 'mechas'
  },
  {
    titulo: 'Proyecto1',
    nombre: 'Valeria Sofia Figueroa',
    apellido: 'Gonzalez',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    equipo: 'no',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    empresa: 'mechas'
  },
  {
    titulo: 'Proyecto1',
    nombre: 'Valeria Sofia Figueroa',
    apellido: 'Gonzalez',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    equipo: 'no',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    empresa: 'mechas'
  },
  {
    titulo: 'Proyecto1',
    nombre: 'Valeria Sofia Figueroa',
    apellido: 'Gonzalez',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    equipo: 'no',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    empresa: 'mechas'
  },
  {
    titulo: 'Proyecto31',
    nombre: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    equipo: 'no'
  },
  {
    titulo: 'Proyecto133',
    nombre: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    equipo: 'no'
  },
  {
    titulo: 'Proyecto1332',
    nombre: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',
    equipo: 'no'
  },
  {
    titulo: 'Proyecto332',
    nombre: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario: 'empresa para gatos',
    fecha: 'Sun Jun 21 2019',

    equipo: 'no'
  },
  {
    titulo: 'Proyecto1w',
    nombre: 'Valeria Sofia Figueroa',
    correo: 'valeriafigueroa587@gmail.com',
    celular: '95583206',
    genero: 'femenino',
    empresa: 'mechas',
    comentario: 'empresa para gatos',
    equipo: 'no',
    fecha: 'Sun Jun 21 2019'
  }
]

export const PostulateAdmin = () => {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{<div className='td__content'>{element.titulo}</div>}</td>
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
        <div className='td__content'>{element.genero}</div>
      </td>
      <td>
        <div className='td__content'>{element.equipo}</div>
      </td>
      <td>
        <div className='td__content'>{element.comentario}</div>
      </td>
      <td>
        <div className='td__content'>{element.fecha}</div>
      </td>
    </tr>
  ))

  const rows_responsive = elements.map((element, index) =>    
   (
      <div className='table_content'>
        <div className='td__content'>{element.titulo}</div>
        <div className='td__content'>{element.nombre}</div>
        <div className='td__content'>{element.apellido}</div>
        <div className='td__content'>{element.correo}</div>
        <div className='td__content'>{element.celular}</div>
        <div className='td__content'>{element.genero}</div>
        <div className='td__content'>{element.equipo}</div>
        <div className='td__content'>{element.comentario}</div>
        <div className='td__content'>{element.fecha}</div>
      </div>
  ))


  return (
    <>
      <div className='casos'>
        <div className='casos-container flex'>
          <div className='casos-title section-title'>
            IDEAS <span style={{ color: '#e1575f' }}>POSTULADAS</span>
          </div>
          <div className='table__container'>
            <div className='table_noResponsive'>
              <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
                <thead>
                  <tr>
                    <th>
                      <div className='th__title'>Título</div>
                    </th>
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
                      <div className='th__title'>Género</div>
                    </th>
                    <th>
                      <div className='th__title'>Equipo</div>
                    </th>
                    <th>
                      <div className='th__title'>Comentario</div>
                    </th>
                    <th>
                      <div className='th__title'>Fecha</div>
                    </th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </div>
            <div className='table_responsive'>
                <div className='table_content titles_table'>
                    <div className='td__content'>TITULO</div>
                    <div className='td__content'>NOMBRE</div>
                    <div className='td__content'>APELLIDO</div>
                    <div className='td__content'>CORREO</div>
                    <div className='td__content'>CELULAR</div>
                    <div className='td__content'>GENERO</div>
                    <div className='td__content'>EQUIPO</div>
                    <div className='td__content'>COMENTARIO</div>
                    <div className='td__content'>FECHA</div>
                </div>
                {rows_responsive}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
