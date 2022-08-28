import React from 'react'
import { TextInput, Textarea, Grid,Select } from '@mantine/core'
import { useForm } from '@mantine/form'
import { DatePicker,TimeInput } from '@mantine/dates'
//import DateTimePicker from '../componentes/DateTimePicker'
import '../styles/Calendario.css'

export const AgregarEventos = ({ innerProps }) => {
  console.log(innerProps)
  const form = useForm({
    initialValues: {
      ...innerProps
    }
  })

  return (
    <>
      <div className='cal__modal__title'>
        {' '}
        AGREGAR NUEVO <span style={{ color: '#e1575f' }}>EVENTO</span>{' '}
      </div>
      <form className='calendario__form'>
        <Grid grow>
        <Grid.Col md={6} xs={6}>
            <DatePicker
              placeholder='Fecha Inicio'
              label='Fecha Inicio'
              inputFormat="MM/DD/YYYY"
              labelFormat="MM/YYYY"
              required
              {...form.getInputProps('fechaInicio')}
            />
        </Grid.Col>
        <Grid.Col md={6} xs={6}>
            <TimeInput
              placeholder='Hora Inicio'
              label='Hora Inicio'
              format='12'
              clearable
              required
              {...form.getInputProps('horaInicio')}
            />
        </Grid.Col>
        <Grid.Col md={6} xs={6}>
            <DatePicker
              placeholder='Fecha Fin'
              label='Fecha Fin'
              inputFormat="MM/DD/YYYY"

              required
              withinPortal
              {...form.getInputProps('fechaFin')}
            />
        </Grid.Col>
        <Grid.Col md={6} xs={6}>
            <TimeInput
              placeholder='Hora Fin'
              label='Hora Fin'
              format='12'
              clearable
              required
              {...form.getInputProps('horaFin')}
            />
        </Grid.Col>
          <Grid.Col md={7} xs={12}  >
            <TextInput
              required
              label='Evento'
              placeholder='Título'
              {...form.getInputProps('titulo')}
            />
          </Grid.Col>
          <Grid.Col md={12} xs={12}>
            <Textarea
              required
              label='Descripción'
              placeholder='Descripción del evento'
              {...form.getInputProps('descripcion')}
            />
          </Grid.Col>
          <Grid.Col md={4} xs={12}>
            <Select
              label="Semana"
              placeholder="Escoja uno"
              data={[
                { value: '0', label: 'Por definir' },
                { value: '1', label: 'Semana 1' },
                { value: '2', label: 'Semana 2' },
                { value: '3', label: 'Semana 3' },
                { value: '4', label: 'Semana 4' },
                { value: '5', label: 'Semana 5' },
                { value: '6', label: 'Semana 6' },
                { value: '7', label: 'Semana 7' },
                { value: '8', label: 'Semana 8' },
                { value: '9', label: 'Semana 9' },
                { value: '10', label: 'Semana 10' },
              ]}
            />
          </Grid.Col>

          <Grid.Col md={4} xs={12}>
            <Select
              label="Sede"
              value={form.values.sede}
              placeholder="Escoja uno"
              data={[
                { value: '0', label: 'San Pedro Sula' },
                { value: '1', label: 'Sede norte' },
                { value: '2', label: 'Tegucigalpa' },
                { value: '3', label: 'La Ceiba' },
              ]}
            />
          </Grid.Col>

        </Grid>
        <div className='cal__caso__button' onClick={()=>console.log(form.values)}>Agregar Evento</div>
      </form>
    </>
  )
}
