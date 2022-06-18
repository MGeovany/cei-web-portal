import React from 'react'
import '../styles/Contactanos.css'
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

export const Contactanos = () => {

    const form = useForm({
        initialValues: {
          nombre_postulante: '',
          correo: '',
          celular: '',
          comentario: ''
        }
      });

  return (
    <div>
    <div className='contactanos'>
    <div className='container_contactanos flex'>
    <div className="section-title titulo_contactanos">FORMULARIO DE <span style={{ color: '#7ac678' }}> CONTACTO🎯</span></div>
   <Box sx={{ maxWidth: 800 }} mx="auto">
     <form className='form_contactanos' onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          className='text'
          required
          label="Nombres:"
          placeholder="Ingrese su nombre completo"
          {...form.getInputProps('apellidos_postulante')}
        />
        <TextInput
        className='text'
          required
          label="Correo Electronico: "
          placeholder="Ingrese su correo"
          {...form.getInputProps('correo')}
        />
        <TextInput
        className='text'
          required
          label="Numero de Telefono / Celular:"
          placeholder="Ingrese su numero de telefono"
          {...form.getInputProps('Celular:')}
        />
        <TextInput
        className='text'
          required
          label="Comentario:"
          placeholder="Comentario adicional"
          {...form.getInputProps('Comentario')}
        />
        <Group position="right" mt="md">
          <Button className='btn_contacto'>Enviar</Button>
        </Group>
      </form>
    </Box>
    </div>
    </div>
    </div>
  )
}
