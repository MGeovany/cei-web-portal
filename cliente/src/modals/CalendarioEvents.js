import React, { useEffect, useState } from 'react'
import '../styles/CalendarioEvents.css'
import { Table, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { Eventos } from '../API'
import { Grid } from '@mantine/core'
import moment from 'moment'
import '../styles/recursiveEvents.css'

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
  const sizemodal = window.innerWidth > 1000 ? 'calc(31%)' : 'calc(90% - 0rem)'

  const deleteElement = (name, e) => {
    console.log(name)
    modals.openContextModal('EliminarBlogsModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'sm',
      size: sizemodal,
      innerProps: {
        name:name,
        events:events,
        setEvents:setEvents,
        elements:element
      }
    })

  }


  const element = [
    {
      fechaInicio:'20-02-2000',
      titulo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        ' industry. Lorem Ipsum has been the industrys standard dummy text ever since',
      semana: 'semana 10',
      nombreSede: 'sps',
     
    }, {
      fechaInicio:'20-02-2000',
      titulo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        ' industry. Lorem Ipsum has been the industrys standard dummy text ever since',
      semana: 'semana 10',
      nombreSede: 'sps',
     
    }, {
      fechaInicio:'20-02-2000',
      titulo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        ' industry. Lorem Ipsum has been the industrys standard dummy text ever since',
      semana: 'semana 10',
      nombreSede: 'sps',
     
    }
  ]



  const rows = element.map((element, index) => (
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
            className='btn__editar '
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




  const rows_recursive = element.map((element, index) => (
    <div key={index} className='event-recursive'>
        <div className='td__content' style={{ color: '#717171' , fontWeight:'lighter'}}>
          {moment(element.fechaInicio).format('D MMM YY, hh:mm a')}
        </div>
        <div className='td__content elipsis'><span style={{ color: '#e1575f' , fontWeight:'bold'}}> Titulo : </span>{element.titulo}</div>
        <div className='td__content'><span style={{ color: '#339BFF' , fontWeight:'bold'}}> Semana : </span>{element.semana}</div>
        <div className='td__content'><span style={{ color: '#68BB91' , fontWeight:'bold'}}> nombre de sede : </span>{element.nombreSede}</div>
        <div className='tab__btns btn-container-event'>
          <div
            className='btn-editar-recursive btn-recursive-event'
            onClick={(e) => OpenEditEventos(element)}
            
          >
            Editar
          </div>
          <div
            className='btn-eliminar-recursive btn-recursive-event'
            onClick={(e) => deleteElement(element.titulo, e)}
          >
            Eliminar
          </div>
        </div>
    </div>
  ))
  return (
    <Grid>
      <div className='cal__modal__title'>
        {' '}
        VER PRÓXIMOS <span style={{ color: '#e1575f' }}>EVENTOS</span>
      </div>

      <Table fontSize='md' highlightOnHover verticalSpacing='xs' className='normal-events-cont'>
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
      <div className='recursive-events-cont'>
        {rows_recursive}
      </div>
      
    </Grid>
  )
}
