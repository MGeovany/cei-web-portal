import React from 'react'
import '../styles/CalendarioEvents.css'
import { Table, useMantineTheme,Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { useModals } from '@mantine/modals'
import { Eventos } from '../API'
import {Grid} from '@mantine/core'
import moment from 'moment'
import { clampUseMovePosition } from '@mantine/hooks'
import { openConfirmModal } from '@mantine/modals';

export const CalendarioEvents = () => {
  const [events, setEvents] = React.useState([])
  const modals = useModals()
  const theme = useMantineTheme()

  React.useEffect(() => {
    Eventos.get().then(data => {
      setEvents(data)
    }).catch(err => { console.error(err) })
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
        ...selectedEvent,
        action:(element)=>{
          console.log(element)
          onEdit(element)
        },
      },

    })
  }
  const OpenConfirmDelete = (element) => {
    openConfirmModal({
      title: 'Eliminar evento',
      children: (
        <Text size="sm"> ¿Estás seguro de eliminar el evento <b>{element.titulo}</b>?</Text>
      ),
      labels: { confirm: 'Sí', cancel: 'No' },
      onCancel: () => {},
      onConfirm: () =>onDelete(element),
    });
  }

  function onEdit(element){

    Eventos.update(element.id, element).then(data => {
      const newEvents = [...events]
      newEvents[element.id] = element
      setEvents(newEvents)
    }).catch(err => { console.error(err) })
  }
  function onDelete(element){
    Eventos.delete(element.id).then(data => {
      const newEvents = [...events]
      newEvents.splice(element.id, 1)
      setEvents(newEvents)
    }).catch(err => { console.error(err) })
  }

  const rows = events.map((element, index) => (
    <tr key={index}>
      <td><div className='td__content'>{moment(element.fechaInicio).format('D MMM YY, hh:mm a')}</div></td>
      <td><div className='td__content elipsis'>{element.titulo}</div></td>
      <td><div className='td__content'>{element.semana}</div></td>
      <td><div className='td__content'>{element.nombreSede}</div></td>
      <td>
        <div className='tab__btns flex'>
          <div className='btn__editar' onClick={(e) => OpenEditEventos(element)}>
            Editar
          </div>
          <div
            className='btn__eliminar'
            onClick={(e) => OpenConfirmDelete(element)}
          >
            Eliminar
          </div>
        </div>
      </td>
    </tr>
  ))

  return (
    <Grid>
      <div className='cal__modal__title'> VER PRÓXIMOS <span style={{ color: '#e1575f' }}>EVENTOS</span></div>

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
