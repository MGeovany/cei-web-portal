import React from 'react'

import { Input, Textarea } from '@mantine/core'
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
              <Input.Wrapper
                className='font-sen'
                id='input-nombre-proyecto'
                required
                label='Título'
              >
                <Input id='input-nombre-proyecto' placeholder='Mi Blog' />
              </Input.Wrapper>
            </div>
            <div className='form__main__section asset__m10 s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-nombre-proyecto'
                required
                label='Autor'
              >
                <Input className='font-sen' placeholder='CEI Ceutec' />
              </Input.Wrapper>
            </div>

            <div className='form__main__section s2'>
              <Textarea
                minRows={2}
                maxRows={15}
                className='font-sen'
                placeholder='Más Detalles...'
                label='Detalles'
                required
              />
            </div>
            <div className='form__main__section s1'>
              <div className='form__main__file'>
                <label htmlFor='file-btn-main' className='font-sen'>
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
                className='font-sen'
                required
              />
            </div>
          </div>
        </div>
        <div className='add-blog font-sen'>Agregar Blog</div>
      </form>
    </div>
  )
}
