import React from 'react'
import '../styles/CalendarioEvents.css'
import { Table } from '@mantine/core'
import { useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'

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
  const modals = useModals()
  const theme = useMantineTheme()

  const OpenEditEventos = () =>
    modals.openContextModal('EditarEventos', {
      overflow: 'inside',
      centered: true,
      size: 'sm',
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3
    })

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
          <div className='btn__editar' onClick={OpenEditEventos}>
            Editar
          </div>
          <div className='btn__eliminar'>Eliminar</div>
        </div>
      </td>
    </tr>
  ))

  return (
    <div className='cal__table__container '>
      <div className='cal__modal__title'>
        VER PRÓXIMOS <span style={{ color: '#e1575f' }}>EVENTOS</span>
      </div>

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
    </div>
  )
}
