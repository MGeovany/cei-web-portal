/* eslint-disable no-unused-vars */
import React from 'react'
import { Calendario } from '../componentes/Calendario'
import '../styles/Calendario.css'
import { Button, Group, useMantineTheme, MantineProvider } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { NavbarAdmin } from '../componentes/NavbarAdmin'


// static data, this will be loaded from a server in production.

const events = [
  {
    title: 'Jaula de Jaguares',
    allDay: true,
    start: new Date(2022, 5, 12),
    end: new Date(2022, 5, 12)
  },
  {
    title: 'Webinar de Emprendimiento',
    allDay: true,
    start: new Date(2022, 6, 2),
    end: new Date(2022, 6, 2)
  },
  {
    title: 'Celebración del dia del emprendedor',
    allDay: false,
    start: new Date(2022, 5, 14),
    end: new Date(2022, 5, 17)
  },
  {
    title: 'Feriado Nacional',
    allDay: true,
    start: new Date(2022, 5, 23),
    end: new Date(2022, 0, 2)
  }
]
const sizemodal = window.innerWidth > 1000 ? 'calc(90% - 6rem)' : 'calc(100% - 0rem)'

export const CalendarioAdmin = () => {
  const modals = useModals()
  const theme = useMantineTheme()

  const OpenEventosCalendar = () =>
    modals.openContextModal('CalendarioEvents', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,

      size: sizemodal,
      innerProps: {}
    })

  const OpenAddEventos = () =>
    modals.openContextModal('AgregarEventos', {
      overflow: 'inside',
      centered: true,
      size: 'xl',
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3
    })

  return (
    <div>
      <MantineProvider
        theme={{ fontFamily: 'Poppins, sans-serif' }}
        withGlobalStyles
      >
        <div className='casos '>
          <div className='casos-container flex'>
            <div className='title-calendario'>
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
            <Calendario events={events} />
          </div>
        </div>
      </MantineProvider>
    </div>
  )
}
