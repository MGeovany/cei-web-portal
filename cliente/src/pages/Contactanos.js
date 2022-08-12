import React from 'react'
import '../styles/Contactanos.css'
import { TextInput, Textarea, NumberInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

export const Contactanos = () => {
  const form = useForm({
    initialValues: {
      nombre_postulante: '',
      correo: '',
      celular: '',
      comentario: ''
    },
    validate: {
      nombre_postulante: (value) =>
        value.length < 2 ? '*Nombre debe de contener mas de dos letras' : null,
      correo: (value) => (/^\S+@\S+$/.test(value) ? null : '*Correo invalido'),
      celular: (value) =>
        value.length < 8
          ? '*Numero de telefono debe de contener mas de 8 digitos'
          : null,
      comentario: (value) =>
        value.length < 10
          ? '*Comentario debe de contener mas de 10 letras'
          : null
    }
  })

  return (
    <div className='contactanos'>
      <div className='container_contactanos flex'>
        <div className='section-title titulo_contactanos'>
          PONTE EN <span style={{ color: '#e1575f' }}>CONTACTO📢</span>
        </div>
        <div className='contactanos-form'>
          <form
            className='form-contactanos'
            onSubmit={form.onSubmit(console.log)}
          >
            <div className='form-input'>
              <div className='form-seccion'>
                <TextInput
                  className='text'
                  required
                  label='Tú Nombre:'
                  placeholder='Ingresa tu nombre'
                  {...form.getInputProps('nombre_postulante')}
                />
                <TextInput
                  className='text'
                  required
                  label='Correo Electronico: '
                  placeholder='Ingrese su correo'
                  {...form.getInputProps('correo')}
                />
                <TextInput
                  className='text'
                  required
                  label='Tú Numero:'
                  placeholder='Ingrese su número de telefono'
                  {...form.getInputProps('celular')}
                />
              </div>
              <div className='form-seccion'>
                <Textarea
                  placeholder='Tus Comentarios Aqui'
                  label='Comentarios:'
                  className='contactanos-textarea'
                  required
                  minRows={7}
                  {...form.getInputProps('comentario')}
                />
                <div className='contactanos-btns'>
                  <Button
                    type='submit'
                    mt='sm'
                    style={{ boxShadow: '3px 3px 17px #00000029' }}
                  >
                    Enviar
                  </Button>
                  <Button
                    type='reset'
                    mt='sm'
                    color='red'
                    style={{ boxShadow: '3px 3px 17px #00000029' }}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
