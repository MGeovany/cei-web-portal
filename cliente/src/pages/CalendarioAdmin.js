/* eslint-disable no-unused-vars */
import React from 'react'
import { Calendario } from '../componentes/Calendario'
import '../styles/Calendario.css'
import { Button, Group, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'

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
    title: 'Celebracion del dia del emprendedor',
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

export const CalendarioAdmin = () => {
  const modals = useModals()
  const theme = useMantineTheme()

  const OpenEventosCalendar = () =>
    modals.openContextModal('CalendarioEvents', {
      overflow: 'inside',
      centered: true,
      size: 'xl',
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      title: <div className='titulo_modal_agregarEventos'>Eventos</div>
    })

  const OpenAddEventos = () =>
    modals.openContextModal('AgregarEventos', {
      overflow: 'inside',
      centered: true,
      size: 'sm',
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      title: <div className='titulo_modal_agregarEventos'> Agregar Eventos</div>
    })

  return (
    <div className='calendario'>
      <div className='section-title calendario-title'>
        CALENDARIO DE <span style={{ color: '#7ac678' }}> EVENTOS🎯</span>
        <Group className='grupo_btn_calendar' position='center'>
          <Button className='btn_modals' onClick={OpenEventosCalendar}>
            Ver Eventos
          </Button>
          <Button className='btn_modals' onClick={OpenAddEventos}>
            Crear Eventos
          </Button>
        </Group>
      </div>
      <Calendario events={events} />
    </div>
  )
}
