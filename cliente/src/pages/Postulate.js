/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/Postulate.css'
import {
  TextInput,
  Button,
  Group,
  RadioGroup,
  Radio,
  NativeSelect,
  MultiSelect
} from '@mantine/core'
import { Navbar } from '../componentes/Navbar'

const data = [
  {
    value: 'mentorias',
    label: 'Mentoria para el desarrollo de la idea de negocio.'
  },
  {
    value: 'formación',
    label: 'Formación/asesoramiento en temas de emprendimiento'
  },
  { value: 'networking', label: 'Networking y presencia de marca' },
  { value: 'testeo', label: 'Testeo de mi prototipo' },
  { value: 'formalización', label: 'Formalizar legalmente mi emprendimiento' },
  {
    value: 'conexiones',
    label: 'Conectar con otros programas del ecosistema emprendedor'
  },
  { value: 'espacio_cei', label: 'Uso de espacio Co-working' }
]

export const Postulate = () => {
  const [value, setValue] = useState('react')

  return (
    <div>
      <Navbar />
      <div className='postulate'>
        <div className='container_postulate flex'>
          <div className='section-title '>
            POSTULA TU
            <span style={{ color: '#4A79CB' }}> IDEA💡</span>
          </div>
          <form className='form-postulate'>
            <div className='postulate-grid'>
              <div className='postulate-grid-item'>
                <TextInput
                  required
                  className='text'
                  label='Representante:'
                  placeholder='Ingrese su nombre completo'
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <TextInput
                  required
                  label='Correo: '
                  className='text'
                  placeholder='Ingrese su correo'
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <TextInput
                  required
                  label='Número de cuenta:'
                  className='text'
                  placeholder='Ingrese su número de cuenta'
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <TextInput
                  required
                  className='text'
                  label='Celular: '
                  placeholder='Ingrese su número de teléfono'
                  size='md'
                />
              </div>

              <div className='postulate-grid-item'>
                <NativeSelect
                  className='text'
                  data={['Seleccione...', 'Masculino', 'Femenino', 'Otro']}
                  placeholder='Género'
                  label='Género: '
                  required
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <NativeSelect
                  className='text'
                  data={['Seleccione...', 'Idea', 'Emprendimiento']}
                  placeholder='Etapa'
                  label='Etapa: '
                  required
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <TextInput
                  required
                  className='text'
                  label='Nombre de tu idea/emprendimiento'
                  placeholder='Describe brevemente tu idea/emprendimiento'
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <NativeSelect
                  className='text'
                  data={[
                    'Seleccione...',
                    'San Pedro Sula',
                    'Tegucigalpa',
                    'La Ceiba'
                  ]}
                  label='Sede: '
                  required
                  size='md'
                />
              </div>
              <div className='postulate-grid-item'>
                <RadioGroup
                  orientation='vertical'
                  className='text'
                  onChange={setValue}
                  label='¿Cuentas con redes sociales?'
                  required
                  size='md'
                >
                  <Radio value='Si' label='Si' />
                  <Radio value='No' label='No' />
                </RadioGroup>
              </div>
              <div className='postulate-grid-item'>
                <RadioGroup
                  orientation='vertical'
                  className='text'
                  onChange={setValue}
                  label='¿Tienes equipo de trabajo?'
                  required
                  size='md'
                >
                  <Radio value='Si' label='Si' />
                  <Radio value='No' label='No' />
                </RadioGroup>
              </div>
              <div className='postulate-grid-item'>
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
                    label='Comercial (Compra y comercialización de productos o servicios.)'
                  />
                  <Radio
                    value='social'
                    label="Social (Fundaciones, ONG's, empresas con misión social)"
                  />
                  <Radio
                    value='emprendimiento'
                    label='Emprendimiento tecnológico'
                  />
                  <Radio value='healt_care' label='Healt Care (Salud)' />
                  <Radio
                    value='artesanal'
                    label='Artesanal (Productos elaborados comestibles y no comestibles)'
                  />
                </RadioGroup>
              </div>
              <div className='postulate-grid-item'>
                <MultiSelect
                  className='text'
                  size='md'
                  data={data}
                  label='¿Que esperas del proceso de pre-incubación del CEI de CEUTEC?'
                  placeholder='Elige...'
                />
              </div>
              <div className='postulate-grid-item'></div>
              <div className='postulate-grid-item'></div>
              <div className='postulate-grid-item'>
                <Group position='right' mt='md'>
                  <Button className='btn__postulate'>Postularse</Button>
                  <div className='btn__descartar'>Descartar</div>
                </Group>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
