/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { NativeSelect, Input, Textarea, TextInput } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { useForm } from '@mantine/form'

export const CasoForm = (props) => {
  const modals = useModals()
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo Invalido')
    }
  })

  return (
    <form
      className='form__caso'
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <div className='form__proyecto form__proyecto_responsive'>
        <div className='form__main form__main_responsive'>
          <div className='form__main__section form__main__section_responsive s1'>
            <NativeSelect
              data={['Tecnología', 'Comercial', 'Social', 'Salud']}
              placeholder='Select...'
              className='font-sen'
              label='Sección de Caso'
              required
            />
          </div>
          <div className='form__main__section form__main__section_responsive asset__m10_r s1'>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Nombre del Proyecto'
            >
              <Input id='input-nombre-proyecto' placeholder='Mi Proyecto' />
            </Input.Wrapper>
          </div>

          <div className='form__main__section form__main__section_responsive s2'>
            <Input.Wrapper
              className='font-sen'
              id='input-demo'
              required
              label='Breve Descripción'
            >
              <Input
                id='input-demo'
                placeholder='Este es mi proyecto sobre tecnología'
              />
            </Input.Wrapper>
          </div>
          <div className='form__main__section form__main__section_responsive s1'>
            <div className='form__main__file'>
              <label htmlFor='file-btn-main' className='font-sen'>
                Imagen de proyecto <span style={{ color: 'red' }}>*</span>{' '}
              </label>
              <input
                className='file-btn-main '
                type='file'
                name='archivosubido'
              />
            </div>
          </div>

          <div className='form__main__section form__main__section_responsive s3'>
            <Textarea
              minRows={10}
              maxRows={15}
              className='font-sen'
              placeholder='Más Detalles'
              label='Detalles'
              required
            />
          </div>
        </div>

        <div className='form__integrantes asset__modal__title'>
          Integrantes:
          <div className='hr'>
            <hr id='hr__green' />
          </div>
          <div className='form__int'>
            <div className='form__int__section form__main__section_responsive s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </Input.Wrapper>
            </div>
            <div className='form__int__section form__main__section_responsive s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section form__main__section_responsive'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section form__main__section_responsive s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </Input.Wrapper>
            </div>
            <div className='form__int__section form__main__section_responsive s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
                {...form.getInputProps('email')}
              />
            </div>
            <div className='form__main__section form__main__section_responsive'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section form__main__section_responsive s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </Input.Wrapper>
            </div>
            <div className='form__int__section form__main__section_responsive  s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section form__main__section_responsive'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section form__main__section_responsive s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </Input.Wrapper>
            </div>
            <div className='form__int__section form__main__section_responsive s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section form__main__section_responsive'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
          </div>
          <div className='form__int__section form__int__btns'>
            <div className='form__caso__button'>Enviar</div>
            <div className='form__desc__button'>Descartar</div>
          </div>
        </div>
      </div>
    </form>
  )
}
