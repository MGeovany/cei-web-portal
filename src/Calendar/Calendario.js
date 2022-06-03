import './Calendario.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

const locales = {
    "en-US": require("date-fns/locale/en-US")
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
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022,5,12),
      end: new Date(2022,5,12)
    },
    {
      title: "HBD",
      allDay: true,
      start: new Date(2022,6,2),
      end: new Date(2022,6,2)
    },
    {
      title: "OTRO",
      allDay: true,
      start: new Date(2022,6,2),
      end: new Date(2022,6,2)
    },
    {
      title: "2JUNIO",
      allDay: true,
      start: new Date(2022,0,2),
      end: new Date(2022,0,2)
    }
  ]

function Calendario() {
  return (
    <div className="Calen">
      <h4>CALENDARIO DE EVENTOS</h4>
     <Calendar localizer={localizer} events={events}
     startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}/>
    </div>
  )
}

export default Calendario;