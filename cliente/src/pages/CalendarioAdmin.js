/* eslint-disable no-unused-vars */
import React from 'react'
import { Calendario } from '../componentes/Calendario'
import '../styles/Calendario.css'
import { Button, Group, useMantineTheme, MantineProvider } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { NavbarAdmin } from '../componentes/NavbarAdmin'
import { Eventos } from '../API'
import { showNotification } from '@mantine/notifications'

export const CalendarioAdmin = () => {
  const [eventos, setEventos] = React.useState([])
  const modals = useModals()
  const theme = useMantineTheme()

  React.useState(()=>{
    Eventos.calendarEvents().then(data =>{ 
      let formattedData = data.map(evento => ({
          title: evento.title,
          start: new Date(evento.start),
          end: new Date(evento.end),
          allDay: evento.allDay > 480
        }))

        setEventos(formattedData)
    })
    .catch(err=>console.error(err))
  },[])

  function onAddEvent(element){
    Eventos.add(element).then(data => {
      showNotification({
        message: 'Evento agregado',
        type: 'success',
        duration: 3000
      })
    }).catch(err => { 
      showNotification({
      message: JSON.stringify(err),
      type: 'error',
      duration: 3000
    }) })
  }
  const OpenEventosCalendar = () =>
    modals.openContextModal('CalendarioEvents', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      size: 'calc(90% - 6rem)',
      innerProps: {
        action:(element)=>onAddEvent(element),
      }
    })

  const OpenAddEventos = () =>
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
        action:(element)=>onAddEvent(element),
      },

    })

  return (
    <div>
      <MantineProvider
        theme={{ fontFamily: 'Poppins, sans-serif' }}
        withGlobalStyles
      >
        <div className='casos '>
          <div className='casos-container flex'>
            <div className='casos-title section-title'>
              CALENDARIO DE <span style={{ color: '#e1575f' }}> EVENTOS🎯</span>{' '}
            </div>
            <div className='casos-admin-btns'>
              <div>
                <Button
                  radius='xs'
                  size='md'
                  uppercase
                  variant='gradient'
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  onClick={OpenAddEventos}
                >
                  Agregar Evento
                </Button>
              </div>
              <div>
                <Button
                  radius='xs'
                  size='md'
                  uppercase
                  variant='outline'
                  onClick={OpenEventosCalendar}
                >
                  Ver Eventos
                </Button>
              </div>
            </div>
            <Calendario events={eventos} />
          </div>
        </div>
      </MantineProvider>
    </div>
  )
}
