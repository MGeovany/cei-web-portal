import React from 'react'
import '../styles/CalendarioEvents.css'
import { Table } from '@mantine/core'

const elements = [
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' },
  { fecha: 'Sun Jun 12', titulo: 'Jaula de Jaguares' }
]

export const CalendarioEvents = () => {
  const rows = elements.map((element) => (
    <tr key={element.fecha}>
      <td>
        <div className='td__content'>{element.fecha}</div>
      </td>
      <td>
        <div className='td__content'>{element.titulo}</div>
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
        <tr className='text'>
          <th>
            <div className='th__title'>Fecha</div>
          </th>
          <th>
            <div className='th__title'>Evento</div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
