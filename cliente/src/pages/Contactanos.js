import React, { useEffect } from 'react'
import '../styles/Contactanos.css'
import { TextInput, Textarea, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

export const Contactanos = () => {
  const form = useForm({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      comentario: ''
    },
    validate: {
      nombre: (value) =>
        value.length < 2 ? '*Nombre debe de contener mas de dos letras' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : '*email invalido'),
      telefono: (value) =>
        value.length < 8
          ? '*Numero de telefono debe de contener mas de 8 digitos'
          : null,
      comentario: (value) =>
        value.length < 10
          ? '*Comentario debe de contener mas de 10 letras'
          : null
    }
  })
  const createPost = async (values) => {
    console.log('Form submitted', values)
    const response = await fetch('http://localhost:3055/1.0.0/contactanos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className='contactanos'>
      <div className='container_contactanos flex'>
        <div className='section-title titulo_contactanos'>
          PONTE EN <span style={{ color: '#e1575f' }}>CONTACTO📢</span>
        </div>
        <div className='contactanos-form'>
          <form
            className='form-contactanos'
            onSubmit={form.onSubmit((values) => createPost(values))}
          >
            <div className='form-input'>
              <div className='form-seccion'>
                <TextInput
                  className='text'
                  required
                  label='Tú Nombre:'
                  placeholder='Ingresa tu nombre'
                  {...form.getInputProps('nombre')}
                />
                <TextInput
                  className='text'
                  required
                  label='Correo Electronico: '
                  placeholder='Ingrese su email'
                  {...form.getInputProps('email')}
                />
                <TextInput
                  className='text'
                  required
                  label='Tú Numero:'
                  placeholder='Ingrese su número de telefono'
                  {...form.getInputProps('telefono')}
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
                    onClick={() =>
                      form.setValues({
                        nombre: '',
                        email: '',
                        telefono: '',
                        comentario: ''
                      })
                    }
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
