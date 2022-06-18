import React from 'react'
import '../styles/CalendarioEvents.css'
import { Table, Button, Group } from '@mantine/core'

const elements = [
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' },
  { event: 6, descrip_event: 12.011, fecha: 'C' }
]

export const CalendarioEvents = () => {
  const rows = elements.map((element) => (
    <tr key={element.event}>
      <td>{element.event}</td>
      <td>{element.descrip_event}</td>
      <td>{element.fecha}</td>
      <td>
        <Group position='center'>
          <Button className='Btn_Eventos_Calendario'>Editar</Button>
          <Button className='Btn_Eventos_Calendario'>Eliminar</Button>
        </Group>
      </td>
    </tr>
  ))

  return (
    <Table highlightOnHover>
      <thead>
        <tr className='text'>
          <th>Evento</th>
          <th>Descripcion del Evento</th>
          <th>Fecha</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
