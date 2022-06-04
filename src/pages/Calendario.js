import React from 'react'
import '../styles/Calendario.css'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

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
    allDay: true,
    start: new Date(2022, 6, 2),
    end: new Date(2022, 6, 2)
  },
  {
    title: 'Feriado Nacional',
    allDay: true,
    start: new Date(2022, 0, 2),
    end: new Date(2022, 0, 2)
  }
]

function Calendario () {
  return (
    <div className="calendario">
      <div className="calendario-title">CALENDARIO DE EVENTOS🎯</div>
      <div className='caleandario-container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px', width: '100%' }}
      />
      </div>
    </div>
  )
}

export default Calendario
