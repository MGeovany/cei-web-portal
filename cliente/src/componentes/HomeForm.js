import { Button, Grid, Input, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import { useState, useRef } from 'react'
import { FileButton, Group, Text } from '@mantine/core'
export const HomeForm = () => {
  const [file, setFile] = useState(null)
  const resetRef = useRef(null)

  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }

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
        <Grid grow columns={24}>
          <Grid.Col span={12}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Título'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='Bienvenidos al CEI'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              minRows={2}
              maxRows={15}
              className='font-sen'
              placeholder='Sitio Web del Centro de Emprendimiento e Innovación'
              label='Subtitulo'
              required
            />
          </Grid.Col>
          <Grid.Col span={24}>
            <Group position='left'>
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
            </Group>
            {file && (
              <Text size='sm' align='left' mt='sm'>
                Archivo seleccionado: {file.name}
              </Text>
            )}
          </Grid.Col>
          {/* 
              CAROUSEL CONTENT
          */}
          <Grid.Col span={24}>
            <Group position='left'>
              <div className='asset__modal__title'>
                Editar Contenido del{' '}
                <span style={{ color: '#e1575f' }}>Carousel</span>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Título'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='Proyecto Manos de Vida'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Sección'
            >
              <Input id='input-nombre-proyecto' placeholder='Casos de exito' />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={24}>
            <Textarea
              minRows={2}
              maxRows={15}
              className='font-sen'
              placeholder='Manos de Vida es una plataforma...'
              label='Detalles'
              required
            />
          </Grid.Col>
          {/* 
              QuienesSomos CONTENT
          */}
          <Grid.Col span={24}>
            <Group position='left'>
              <div className='asset__modal__title'>
                Editar Contenido de{' '}
                <span style={{ color: '#e1575f' }}>Quienes Somos</span>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={24}>
            <Textarea
              minRows={2}
              maxRows={25}
              className='font-sen'
              placeholder='Es un espacio creativo ideal para que emprendedores...'
              label='Descripción'
              required
            />
          </Grid.Col>

          {/* 
              Integrantes CONTENT
          */}
          <Grid.Col span={24}>
            <Group position='left'>
              <div className='asset__modal__title'>
                Editar Contenido de{' '}
                <span style={{ color: '#e1575f' }}>Nuesto Equipo</span>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Integrante #1'
            >
              <Input id='input-nombre-proyecto' placeholder='Jhon Doe' />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Descripción'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='Coordinador del Centro de Emprendimiento e Innovación'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Subtitulo'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='CEUTEC Tegucigalpa '
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={24}>
            <Group position='left'>
              <Text className='font-sen'>Fotografia</Text>
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
            </Group>
            {file && (
              <Text size='sm' align='left' mt='sm'>
                Archivo seleccionado: {file.name}
              </Text>
            )}
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Integrante #2'
            >
              <Input id='input-nombre-proyecto' placeholder='Jhon Doe' />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Descripción'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='Coordinador del Centro de Emprendimiento e Innovación'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Subtitulo'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='CEUTEC Tegucigalpa '
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={24}>
            <Group position='left'>
              <Text className='font-sen'>Fotografia</Text>
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
            </Group>
            {file && (
              <Text size='sm' align='left' mt='sm'>
                Archivo seleccionado: {file.name}
              </Text>
            )}
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Integrante #3'
            >
              <Input id='input-nombre-proyecto' placeholder='Jhon Doe' />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Descripción'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='Coordinador del Centro de Emprendimiento e Innovación'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Subtitulo'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='CEUTEC Tegucigalpa '
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={24}>
            <Group position='left'>
              <Text className='font-sen'>Fotografia</Text>
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
            </Group>
            {file && (
              <Text size='sm' align='left' mt='sm'>
                Archivo seleccionado: {file.name}
              </Text>
            )}
          </Grid.Col>

          {/* 
              Footer CONTENT
          */}

          <Grid.Col span={24}>
            <Group position='left'>
              <div className='asset__modal__title'>
                Editar Contenido de{' '}
                <span style={{ color: '#e1575f' }}>Footer</span>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Facebook URL'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='facebook.com/cei'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Instagram URL'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='instagram.com/cei'
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              className='font-sen'
              id='input-nombre-proyecto'
              required
              label='Telegram URL'
            >
              <Input
                id='input-nombre-proyecto'
                placeholder='telegram.com/cei'
              />
            </Input.Wrapper>
          </Grid.Col>
          {/* 
            BUTTONS CONTENT
           */}
          <Grid.Col span={24}>
            <Group position='right'>
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
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}
