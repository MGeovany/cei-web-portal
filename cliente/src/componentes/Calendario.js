/* eslint-disable react/prop-types */
import React from 'react'

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

export const Calendario = ({eventos}) => {

  return (
    <div>
      <div className='calendario-container flex'>
        <Calendar
          onSelectEvent={event => console.log(event)}
          localizer={localizer}
          events={eventos}
          startAccessor='start'
          endAccessor='end'
          style={{ height: '600px', margin: '50px', width: '100%' }}
        />
      </div>
    </div>
  )
}
