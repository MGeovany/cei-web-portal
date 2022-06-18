/* eslint-disable no-unused-vars */
import React from 'react'
import { Calendario } from '../componentes/Calendario'
import '../styles/Calendario.css'

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

export const CalendarioPage = () => {
  return (
    <div className='calendario'>
      <div className='section-title calendario-title'>
        CALENDARIO DE <span style={{ color: '#7ac678' }}> EVENTOS🎯</span>
      </div>
      <Calendario events={events} />
    </div>
  )
}
