import React from 'react'
import '../styles/Contactanos.css'
import { TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Navbar } from '../componentes/Navbar'

export const Contactanos = () => {
  const form = useForm({
    initialValues: {
      nombre_postulante: '',
      correo: '',
      celular: '',
      comentario: ''
    }
  })

  return (
    <div>
      <Navbar />
      <div className='contactanos'>
        <div className='container_contactanos flex'>
          <div className='section-title titulo_contactanos'>
            PONTE EN <span style={{ color: '#4A79CB' }}>CONTACTO📢</span>
          </div>
          <div className='contactanos-form'>
            <form
              className='form-contactanos'
              onSubmit={form.onSubmit((values) => console.log(values))}
            >
              <div className='form-input'>
                <div className='form-seccion'>
                  <TextInput
                    className='text'
                    required
                    label='Tu Nombre:'
                    placeholder='Ingresa tu nombre'
                  />
                  <TextInput
                    className='text'
                    required
                    label='Correo Electronico: '
                    placeholder='Ingrese su correo'
                  />
                  <TextInput
                    className='text'
                    required
                    label='Tu Numero:'
                    placeholder='Ingrese su numero de telefono'
                  />
                </div>
                <div className='form-seccion'>
                  <Textarea
                    placeholder='Tus Comentarios Aqui'
                    label='Comentarios:'
                    className='contactanos-textarea'
                    required
                    minRows={7}
                  />
                  <div className='contactanos-btns'>
                    <div className='btne'>Enviar</div>
                    <div className='btnd'>Descartar</div>
                  </div>
                </div>
              </div>
              <div className='form-socials'>
                <div className='form-social-seccion'></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
