import React from 'react'

import { InputWrapper, Input, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'

export const BlogForm = () => {
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
    <div>
      <form
        className='form__caso__center'
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <div className='form__proyecto'>
          <div className='form__main__center'>
            <div className='form__main__section s1'>
              <InputWrapper id='input-nombre-proyecto' required label='Título'>
                <Input id='input-nombre-proyecto' placeholder='Mi Blog' />
              </InputWrapper>
            </div>
            <div className='form__main__section asset__m10 s1'>
              <InputWrapper id='input-nombre-proyecto' required label='Autor'>
                <Input id='input-nombre-proyecto' placeholder='CEI Ceutec' />
              </InputWrapper>
            </div>

            <div className='form__main__section s2'>
              <Textarea
                minRows={2}
                maxRows={15}
                placeholder='Más Detalles...'
                label='Detalles'
                required
              />
            </div>
            <div className='form__main__section s1'>
              <div className='form__main__file'>
                <label htmlFor='file-btn-main'>
                  Imagen <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  className='file-btn-main'
                  type='file'
                  name='archivosubido'
                />
              </div>
            </div>

            <div className='form__main__section s3'>
              <Textarea
                minRows={13}
                maxRows={15}
                placeholder='Más Detalles'
                label='Detalles'
                required
              />
            </div>
          </div>
        </div>
        <div className='form__btn'>
          <button className='btn__form' type='submit'>
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  )
}
