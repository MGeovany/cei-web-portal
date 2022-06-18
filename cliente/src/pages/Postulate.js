/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/Postulate.css'
import {
  TextInput,
  Button,
  Group,
  Box,
  RadioGroup,
  Radio,
  NativeSelect,
  MultiSelect
} from '@mantine/core'
import { useForm } from '@mantine/form'

const data = [
  {
    value: 'mentorias',
    label: 'Mentoria para el desarrollo de la idea de negocio.'
  },
  {
    value: 'formacion',
    label: 'Formacion/asesoramiento en temas de emprendimiento'
  },
  { value: 'networking', label: 'Networking y presencia de marca' },
  { value: 'testeo', label: 'Testeo de mi prototipo' },
  { value: 'formalizacion', label: 'Formalizar legalmente mi emprendimiento' },
  {
    value: 'conexiones',
    label: 'Conectar con otros programas del ecosistema emprendedor'
  },
  { value: 'espacio_cei', label: 'Uso de espacio Co-working' }
]

export const Postulate = () => {
  const [value, setValue] = useState('react')

  const form = useForm({
    initialValues: {
      nombre_representante: '',
      correo: '',
      numero_cuenta: '',
      telefono: '',
      genero: '',
      etapa_proyecto: '',
      nombre_emprendimiento: '',
      equipo_trabajo: '',
      sede_ceu: '',
      facultad_representada: '',
      carrera: '',
      rubro_empredimiento: '',
      descripcion_emprendimiento: '',
      expectativas_proceso: '',
      redes_sociales: ''
    }
  })

  return (
    <div>
      <div className='postulate'>
        <div className='container_postulate flex'>
          <div className='section-title titulo_postulate'>
            FORMULARIO DE{' '}
            <span style={{ color: '#7ac678' }}> INSCRIPCION🎯</span>
          </div>
          <Box sx={{ maxWidth: 800 }} mx='auto'>
            <form
              className='form_postulate'
              onSubmit={form.onSubmit((values) => console.log(values))}
            >
              <TextInput
                required
                className='text'
                label='Nombres:'
                placeholder='Ingrese su nombre completo'
                size='md'
                {...form.getInputProps('apellidos_postulante')}
              />
              <TextInput
                required
                label='Correo Electronico: '
                className='text'
                placeholder='Ingrese su correo'
                size='md'
              />
              <TextInput
                required
                label='Ingrese su numero de cuenta: '
                className='text'
                placeholder='Ingrese su numero de cuenta'
                size='md'
              />
              <TextInput
                required
                className='text'
                label='Ingrese su numero de telefono: '
                placeholder='Ingrese su numero de telefono'
                size='md'
              />

              <NativeSelect
                className='text'
                data={['Seleccione...', 'Masculino', 'Femenino']}
                placeholder='Genero'
                label='Seleccion su genero: '
                required
                size='md'
              />

              <RadioGroup
                orientation='vertical'
                className='text'
                onChange={setValue}
                label='¿En que etapa se encuentra tu emprendimiento?'
                required
                size='md'
              >
                <Radio value='idea' label='Idea' />
                <Radio value='emprendimiento' label='Emprendimiento' />
              </RadioGroup>

              <RadioGroup
                orientation='vertical'
                className='text'
                onChange={setValue}
                label='¿Cuenta con un equipo de trabajo?'
                required
                size='md'
              >
                <Radio value='Si' label='Si' />
                <Radio value='No' label='No' />
              </RadioGroup>

              <RadioGroup
                orientation='vertical'
                className='text'
                onChange={setValue}
                label='¿A que sede pertenece?'
                required
                size='md'
              >
                <Radio value='tgu' label='Tegucigalpa' />
                <Radio value='sps' label='San Pedro Sula' />
                <Radio value='cei' label='Ceiba' />
              </RadioGroup>

              <RadioGroup
                orientation='vertical'
                className='text'
                onChange={setValue}
                label='¿En que rubro se encuntra tu proyecto?'
                required
                size='md'
              >
                <Radio
                  value='comercial'
                  label='Comercial (Compra y comercializacion de productos o servicios.)'
                />
                <Radio
                  value='social'
                  label="Social (Fundaciones, ONG's, empresas con mision social)"
                />
                <Radio
                  value='emprendimiento'
                  label='Emprendimiento tecnologico'
                />
                <Radio value='healt_care' label='Healt Care (Salud)' />
                <Radio
                  value='artesanal'
                  label='Artesanal (Productos elaborados comestibles y no comestibles)'
                />
              </RadioGroup>

              <TextInput
                required
                className='text'
                label='Descripcion del Emprendimiento'
                placeholder='Describe brevemente tu idea/emprendimiento'
                size='md'
              />
              <MultiSelect
                className='text'
                size='md'
                data={data}
                label='¿Que esperas del proceso de pre-incubacion del CEI de CEUTEC?'
                placeholder='Elige...'
              />

              <RadioGroup
                orientation='vertical'
                className='text'
                onChange={setValue}
                label='¿Tu emprendimiento cuenta con redes sociales?'
                required
                size='md'
              >
                <Radio value='Si' label='Si' />
                <Radio value='No' label='No' />
              </RadioGroup>

              <Group position='right' mt='md'>
                <Button className='btn__postulate'>Postularse</Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </div>
  )
}
