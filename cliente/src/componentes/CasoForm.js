/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  NativeSelect,
  InputWrapper,
  Input,
  Textarea,
  TextInput
} from '@mantine/core'
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
      <div className='form__proyecto'>
        <div className='form__main'>
          <div className='form__main__section s1'>
            <NativeSelect
              data={['Tecnologia', 'Comercial', 'Social', 'Salud']}
              placeholder='Select'
              className='font-sen'
              label='Seccion de Caso'
              required
            />
          </div>
          <div className='form__main__section asset__m10 s1'>
            <InputWrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Nombre del Proyecto'
            >
              <Input id='input-nombre-proyecto' placeholder='Mi Proyecto' />
            </InputWrapper>
          </div>

          <div className='form__main__section s2'>
            <InputWrapper
              className='font-sen'
              id='input-demo'
              required
              label='Breve Descripcion'
            >
              <Input
                id='input-demo'
                placeholder='Este es mi proyecto sobre tecnologia'
              />
            </InputWrapper>
          </div>
          <div className='form__main__section s1'>
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

          <div className='form__main__section s3'>
            <Textarea
              minRows={10}
              maxRows={15}
              className='font-sen'
              placeholder='Mas Detalles'
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
            <div className='form__int__section s1'>
              <InputWrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </InputWrapper>
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section s1'>
              <InputWrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </InputWrapper>
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
                {...form.getInputProps('email')}
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section s1'>
              <InputWrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </InputWrapper>
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                required
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section s1'>
              <InputWrapper
                className='font-sen'
                id='input-int-1'
                required
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </InputWrapper>
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                required
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section'>
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
