/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { NativeSelect, Input, Textarea, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
export const CasoForm = () => {
  const form = useForm({
    initialValues: {
      titulo: '',
      cuerpo: '',
      seccionCasos: 'Social',
      tipo: 3,
      usuarioCreador: 3,
      imagenEncabezado:
        'https://images.pexels.com/photos/13260611/pexels-photo-13260611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    validate: {
      titulo: (value) =>
        value.length < 2
          ? '*Nombre del proyecto debe de ser mas extenso'
          : null,
      cuerpo: (value) =>
        value.length < 10 ? '*Detalles debe de contener mas palabras' : null
    }
  })

  const createCaso = async (values) => {
    console.log(values)
    showNotification({
      icon: <IconCheck />,
      title: 'Enviado',
      color: 'green',
      message: 'Se ha agregado exitosamente un nuevo caso'
    })
    form.setValues({
      titulo: '',
      cuerpo: '',
      seccionCasos: 'Social'
    })
    const response = await fetch('https://cei1.herokuapp.com/1.0.0/casos', {
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
    <form
      className='form__caso'
      onSubmit={form.onSubmit((values) => createCaso(values))}
    >
      <div className='form__proyecto'>
        <div className='form__main'>
          <div className='form__main__section s1'>
            <NativeSelect
              data={['Tecnología', 'Comercial', 'Social', 'Salud']}
              placeholder='Select...'
              className='font-sen'
              label='Sección de Caso'
              {...form.getInputProps('seccionCasos')}
            />
          </div>
          <div className='form__main__section asset__m10 s1'>
            <TextInput
              className='font-sen'
              id='input-nombre-proyecto'
              label='Nombre del Proyecto'
              placeholder='Mi Proyecto'
              {...form.getInputProps('titulo')}
            />
          </div>

          <div className='form__main__section s2'>
            <TextInput
              className='font-sen'
              id='input-demo'
              label='Breve Descripción'
              placeholder='Este es mi proyecto sobre tecnología'
              {...form.getInputProps('imagenEncabezado')}
            />
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
              placeholder='Más Detalles'
              label='Detalles'
              {...form.getInputProps('cuerpo')}
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
              <TextInput
                className='font-sen'
                id='input-int-1'
                label='Nombre'
                placeholder='Nombre de integrante'
              />
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section s1'>
              <TextInput
                className='font-sen'
                id='input-int-1'
                label='Nombre'
                placeholder='Nombre de integrante'
              />
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                label='Email'
                placeholder='your@email.com'
                {...form.getInputProps('email')}
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-int-1'
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </Input.Wrapper>
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
            <div className='form__int__section s1'>
              <Input.Wrapper
                className='font-sen'
                id='input-int-1'
                label='Nombre'
              >
                <Input
                  id='input-nombre-proyecto'
                  placeholder='Nombre de integrante'
                />
              </Input.Wrapper>
            </div>
            <div className='form__int__section s2'>
              <TextInput
                className='font-sen'
                label='Email'
                placeholder='your@email.com'
              />
            </div>
            <div className='form__main__section'>
              <input className='file-btn' type='file' name='archivosubido' />
            </div>
          </div>
          <div className='form__int__section form__int__btns'>
            <Button
              type='submit'
              mt='sm'
              sx={{ marginRight: '20px' }}
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
  )
}
