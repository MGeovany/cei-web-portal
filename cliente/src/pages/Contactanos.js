import React, { useState, useEffect } from 'react'
import '../styles/Contactanos.css'
import { TextInput, Textarea, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import {
  IconCheck,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandFacebook
} from '@tabler/icons'

export const Contactanos = () => {
  const [dataF, setDataF] = useState({})

  useEffect(() => {}, [dataF])

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
    showNotification({
      icon: <IconCheck />,
      title: 'Enviado',
      color: 'green',
      message:
        'Gracias por contactarnos ! Nos pondremos en contacto contigo lo antes posible.'
    })
    form.setValues({
      nombre: '',
      email: '',
      telefono: '',
      comentario: ''
    })
    const response = await fetch(
      'https://cei1.herokuapp.com/1.0.0/Contactanos/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )
    const data = await response.json()

    setDataF(data)
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
                  required
                  className='text'
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
                <div
                  className='contact-icons'
                  style={{
                    marginTop: '1rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span>Encuentranos en:</span>
                  <span
                    style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      width: '40%',
                      justifyContent: 'space-around',
                      cursor: 'pointer'
                    }}
                  >
                    <IconBrandTelegram />
                    <IconBrandWhatsapp />
                    <IconBrandFacebook />
                  </span>
                </div>
              </div>
              <div className='form-seccion'>
                <Textarea
                  placeholder='Tus Comentarios Aqui'
                  label='Comentarios:'
                  className='contactanos-textarea'
                  minRows={7}
                  {...form.getInputProps('comentario')}
                />
                <div className='contactanos-btns'>
                  <Button
                    type='submit'
                    mt='sm'
                    size='md'
                    style={{
                      boxShadow: '3px 3px 17px #00000029',
                      backgroundColor: '#072958'
                    }}
                  >
                    Enviar
                  </Button>
                  <Button
                    type='reset'
                    mt='sm'
                    size='md'
                    style={{
                      boxShadow: '3px 3px 17px #00000029',
                      backgroundColor: '#e1575f'
                    }}
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
