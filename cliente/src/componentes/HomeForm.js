import { Button, Grid, Input, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import { useState, useRef } from 'react'
import { FileButton, Group, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
export const HomeForm = ({ setOpened }) => {
  const form = useForm({
    initialValues: {
      titulo: '',
      subtitulo: '',
      imagen: '',
      titulo_seccion_carousel: '',
      cei_descripcion: '',
      carousel: [''],
      integrantes: ['']
    }
  })
  const createPost = async (values) => {
    showNotification({
      icon: <IconCheck />,
      title: 'Enviado',
      color: 'green',
      message: 'Edito exitosamente!'
    })
    form.setValues({
      titulo: '',
      subtitulo: '',
      imagen: '',
      titulo_seccion_carousel: '',
      cei_descripcion: '',
      carousel: [''],
      integrantes: ['']
    })
    const response = await fetch('http://localhost:5000/1.0.0/Inicio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const data = await response.json()
    console.log(data)
  }

  const [file, setFile] = useState(null)
  const resetRef = useRef(null)

  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }

  return (
    <div>
      <form
        className='form__caso__center'
        onSubmit={form.onSubmit((values) => createPost(values))}
      >
        <Grid grow columns={24}>
          <Grid.Col span={12}>
            <Input.Wrapper className='font-sen' id='input-title' label='Título'>
              <Input
                id='input-title'
                placeholder='Bienvenidos al CEI'
                {...form.getInputProps('titulo')}
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
              {...form.getInputProps('subtitulo')}
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
                onClick={() => setFile(null)}
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

          <Group>
            <Text className='font-sen'>Imagen Carousel</Text>
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
              label='Descripcion'
            >
              <Input id='input-nombre-proyecto' placeholder='Casos de exito' />
            </Input.Wrapper>
          </Grid.Col>
          <Group>
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
              label='Descripcion'
            >
              <Input id='input-nombre-proyecto' placeholder='Casos de exito' />
            </Input.Wrapper>
          </Grid.Col>
          <Group>
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
              label='Descripcion'
            >
              <Input id='input-nombre-proyecto' placeholder='Casos de exito' />
            </Input.Wrapper>
          </Grid.Col>
          <Group>
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
              label='Descripcion'
            >
              <Input id='input-nombre-proyecto' placeholder='Casos de exito' />
            </Input.Wrapper>
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
              label='Descripcion'
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
              label='Titulo'
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
              label='Titulo'
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
              label='Titulo'
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
                onClick={() => setOpened()}
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
