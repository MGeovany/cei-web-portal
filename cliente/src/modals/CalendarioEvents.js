import React, { useEffect, useState } from 'react'
import '../styles/CalendarioEvents.css'
import { Table, useMantineTheme } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { useModals } from '@mantine/modals'
import { Eventos } from '../API'
import { Grid } from '@mantine/core'
import moment from 'moment'

export const CalendarioEvents = () => {
  const [events, setEvents] = useState([])
  const modals = useModals()
  const theme = useMantineTheme()

  useEffect(() => {
    Eventos.get()
      .then((data) => {
        setEvents(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const OpenEditEventos = (selectedEvent) => {
    modals.openContextModal('AgregarEventos', {
      centered: true,
      size: 'xl',
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      innerProps: {
        ...selectedEvent
      }
    })
  }

  const deleteElement = (name, e) => {
    e.preventDefault()
    const newEvents = [...events]
    newEvents.splice(name, 1)
    setEvents(newEvents)
    showNotification({
      title: 'Eliminado',
      color: 'blue',
      message: `Evento eliminado correctamente! ${name}`
    })

    events.splice(name, 1)
  }

  const rows = events.map((element, index) => (
    <tr key={index}>
      <td>
        <div className='td__content'>
          {moment(element.fechaInicio).format('D MMM YY, hh:mm a')}
        </div>
      </td>
      <td>
        <div className='td__content elipsis'>{element.titulo}</div>
      </td>
      <td>
        <div className='td__content'>{element.semana}</div>
      </td>
      <td>
        <div className='td__content'>{element.nombreSede}</div>
      </td>

      <td>
        <div className='tab__btns flex'>
          <div
            className='btn__editar'
            onClick={(e) => OpenEditEventos(element)}
          >
            Editar
          </div>
          <div
            className='btn__eliminar'
            onClick={(e) => deleteElement(element.titulo, e)}
          >
            Eliminar
          </div>
        </div>
      </td>
    </tr>
  ))

  return (
    <Grid>
      <div className='cal__modal__title'>
        {' '}
        VER PRÓXIMOS <span style={{ color: '#e1575f' }}>EVENTOS</span>
      </div>

      <Table fontSize='md' highlightOnHover verticalSpacing='xs'>
        <thead>
          <tr className='text'>
            <th>
              <div className='th__title'>Fecha</div>
            </th>
            <th>
              <div className='th__title'>Titulo</div>
            </th>
            <th>
              <div className='th__title'>Semana</div>
            </th>
            <th>
              <div className='th__title'>Sede</div>
            </th>
            <th>
              <div className='th__title'>Opciones</div>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Grid>
  )
}
