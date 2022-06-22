import React from 'react'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { DatePicker } from '@mantine/dates'
import '../styles/Calendario.css'

export const AgregarEventos = () => {
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
          AGREGAR NUEVO <span style={{ color: '#e1575f' }}>EVENTO</span>
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
            label='Descripcion'
            placeholder='Descripcion del evento'
            {...form.getInputProps('descrip_event')}
          />
          <DatePicker
            placeholder='Fecha del Evento'
            label='Fecha_evento'
            required
          />
<<<<<<< Updated upstream
          <div className='cal__caso__button'>Agregar Evento</div>
=======
          <div className='cal__caso__button' >Editar Evento</div>
>>>>>>> Stashed changes
        </form>
      </div>
    </>
  )
}