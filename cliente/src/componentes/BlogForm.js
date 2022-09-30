import React, { useState, useRef } from 'react'

import { Input, Textarea, Button, FileButton, Text } from '@mantine/core'
import { useForm } from '@mantine/form'

import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'

export const BlogForm = () => {
  const [file, setFile] = useState(null)
  const resetRef = useRef(null)
  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }
  const min_rows = window.innerWidth > 1000 ? 10 : 5

  const form = useForm({
    initialValues: {
      tipo: '',
      titulo: '',
      usuarioCreador: '',
      cuerpo: '',
      //  detalles: '',
      imagenEncabezado:
        'https://images.pexels.com/photos/13260611/pexels-photo-13260611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    validate: {
      titulo: (value) =>
        value.length < 2 ? '*Nombre del blog debe de ser mas extenso' : null,
      detalles: (value) =>
        value.length < 10 ? '*Detalles debe de contener mas palabras' : null
    }
  })
  const createRecurso = async (values) => {
    console.log(values)
    showNotification({
      icon: <IconCheck />,
      title: 'Enviado',
      color: 'green',
      message: 'Se ha agregado exitosamente un nuevo caso'
    })
    form.setValues({
      titulo: '',
      autor: '',
      detalles: '',
      desc: ''
    })
    const response = await fetch('https://cei1.herokuapp.com/1.0.0/Post', {
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
    <div>
      <form
        className='form__caso__center'
        onSubmit={form.onSubmit((values) => createRecurso(values))}
      >
        <div className='form__proyecto form__proyecto_responsive '>
          <div className='form__main__center '>
            <div className='form__main__section form__main__section_responsive'>
              <Input.Wrapper
                className='font-sen'
                id='input-nombre-proyecto'
                required
                label='Título'
                placeholder='Mi Blog'
              >
                <Input
                  className='font-sen'
                  placeholder='Nuevo Blog'
                  {...form.getInputProps('titulo')}
                />
              </Input.Wrapper>
            </div>
            <div className='form__main__section form__main__section_responsive'>
              <Input.Wrapper
                className='font-sen'
                id='input-nombre-proyecto'
                required
                label='Autor'
              >
                <Input className='font-sen' placeholder='CEI Ceutec' />
              </Input.Wrapper>
            </div>

            <div className='form__main__section s2 form__main__section_responsive'>
              <Textarea
                minRows={2}
                maxRows={15}
                className='font-sen'
                placeholder='Descripcion corta...'
                label='Descripcion'
                required
                {...form.getInputProps('cuerpo')}
              />
            </div>
            <div className='form__main__section s1 form__main__section_responsive'>
              <div className='form__main__file'>
                <Text className='font-sen'>Imagen principal</Text>
                <FileButton
                  resetRef={resetRef}
                  onChange={setFile}
                  accept='image/png,image/jpeg'
                  color='cyan'
                  radius='xl'
                  size='xs'
                >
                  {(props) => <Button {...props}>Seleccionar imagen</Button>}
                </FileButton>
                <Button
                  disabled={!file}
                  onClick={clearFile}
                  color='red'
                  radius='xl'
                  size='xs'
                >
                  Reiniciar
                </Button>
                {file && (
                  <Text size='sm' align='left' mt='sm'>
                    Archivo seleccionado: {file.name}
                  </Text>
                )}
              </div>
            </div>

            <div className='form__main__section s3 form__main__section_responsive textarea_responsive'>
              <Textarea
                minRows={min_rows}
                maxRows={10}
                placeholder='Más Detalles'
                label='Detalles'
                className='font-sen'
                required
              />
            </div>
            <Button
              type='submit'
              mt='sm'
              sx={{ marginRight: '20px' }}
              size='md'
              style={{
                boxShadow: '3px 3px 17px #00000029',
                backgroundColor: '#072958'
              }}
              onClick={() => createRecurso()}
            >
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
