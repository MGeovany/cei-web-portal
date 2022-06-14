import React from 'react'
import { Table } from '@mantine/core'

const elements = [
  {
    nombre:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    fecha: 'Sun Jun 12',
    seccion: 'Tecnologia',
    detalles:
      'Lorem Ipsum is simply dummy text of the printing and typesetting' +
      ' industry. Lorem Ipsum has been the industrys standard dummy text ever since' +
      ' the 1500s, when an unknown printer took a galley of type and scrambled it to' +
      ' make a type specimen book. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was' +
      ' popularised in the 1960s with the release of Letraset sheets containing Lorem ' +
      ' Ipsum passages, and more recently with desktop publishing software like Aldus ' +
      ' PageMaker including versions of Lorem Ipsum.'
  },
  {
    nombre:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    fecha: 'Sun Jun 12',
    seccion: 'Tecnologia',
    detalles:
      'Lorem Ipsum is simply dummy text of the printing and typesetting' +
      ' industry. Lorem Ipsum has been the industrys standard dummy text ever since' +
      ' the 1500s, when an unknown printer took a galley of type and scrambled it to' +
      ' make a type specimen book. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was' +
      ' popularised in the 1960s with the release of Letraset sheets containing Lorem ' +
      ' Ipsum passages, and more recently with desktop publishing software like Aldus ' +
      ' PageMaker including versions of Lorem Ipsum.'
  },
  {
    nombre: 'Proyect331',
    fecha: 'Sun Jun 14',
    seccion: 'Comercial',
    detalles: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  }
]

export const CasoTabla = () => {
  const rows = elements.map(element => (
    <tr key={element.nombre}>
      <td>
        <div className='td__content'>{element.nombre}</div>
      </td>
      <td>
        <div className='td__content'>{element.fecha}</div>
      </td>
      <td>
        <div className='td__content'>{element.seccion}</div>
      </td>
      <td>
        <div className='td__content'>{element.detalles}</div>
      </td>
      <td>
        <div className='tab__btns flex'>
          <div className='btn__editar'>Editar</div>
          <div className='btn__eliminar'>Eliminar</div>
        </div>
      </td>
    </tr>
  ))

  return (
    <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
      <thead>
        <tr>
          <th>
            <div className='th__title'>Nombre</div>
          </th>
          <th>
            <div className='th__title'>Fecha de Registro</div>
          </th>
          <th>
            <div className='th__title'>Sección de Casos</div>
          </th>
          <th>
            <div className='th__title'>Detalles</div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
