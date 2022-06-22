import React from 'react'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { DatePicker } from '@mantine/dates'
import '../styles/Calendario.css'

export const EditarEventos = () => {
  const form = useForm({
    initialValues: {
      evento: '',
      descrip_event: '',
      fecha: Date
    }
  })

  return (
    <>
      <div className='cal__asset__modal '>
        <div className='cal__modal__title'>
          EDITAR <span style={{ color: '#4A79CB' }}>EVENTO</span>
        </div>
        <form className='calendario__form'>
          <div>
            <TextInput
              required
              label='Evento'
              placeholder='Nombre del evento'
              {...form.getInputProps('evento')}
            />
          </div>
          <TextInput
            required
            label='Descripción'
            placeholder='Descripción del evento'
            {...form.getInputProps('descrip_event')}
          />
          <DatePicker
            placeholder='Fecha del Evento'
            label='Fecha_evento'
            required
          />
          <div className='cal__caso__button'>Editar Evento</div>
        </form>
      </div>
    </>
  )
}
