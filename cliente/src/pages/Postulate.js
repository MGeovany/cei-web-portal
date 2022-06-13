import React from 'react'
//import '../styles/Postulate.css'
import { TextInput, Checkbox, Button, Group, Box, CheckboxGroup } from '@mantine/core';
import { useForm } from '@mantine/form';

export const Postulate = () => {

    const form = useForm({
        initialValues: {
          nombre_postulante: '',
          apellido_postulante: '',
          correo: '',
          celular: '',
          genero: '',
          nombre_empresa: '',
          equipo_trabajo: '',
          comentario: ''
        }
      });

  return (
    <div>
    <div className='postulate'>
    <div className='container_postulate flex'>
    <div className="section-title titulo_postulate">FORMULARIO DE <span style={{ color: '#7ac678' }}> INSCRIPCION🎯</span></div>
   <Box sx={{ maxWidth: 500 }} mx="auto">
     <form className='form_postulate' onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Nombres:"
          placeholder="Ingrese su nombre"
          {...form.getInputProps('apellidos_postulante')}
        />
        <TextInput
          required
          label="Apellidos:"
          placeholder="Ingrese su apellido"
          {...form.getInputProps('apellidos_postulante')}
        />
        <TextInput
          required
          label="Correo Electronico: "
          placeholder="Ingrese su correo"
          {...form.getInputProps('correo')}
        />
        <TextInput
          required
          label="Numero de Telefono / Celular:"
          placeholder="Ingrese su numero de telefono"
          {...form.getInputProps('Celular:')}
        />

        <CheckboxGroup
        defaultValue={['react']}
        label="Seleccione su genero:"
        required
        >
        <Checkbox radius='xl' value="Femenino" label="Si" />
        <Checkbox radius='xl' value="Masculino" label="No" />
        </CheckboxGroup>

        <TextInput
          required
          label="Nombre de su Emprendimiento"
          placeholder="Ingrese en nombre de su empresa"
          {...form.getInputProps('nombre_empresa')}
        />

        <CheckboxGroup
        defaultValue={['react']}
        label="¿Cuenta con equipo de trabajo?"
        required
        >
        <Checkbox radius='xl' value="Si" label="Si" />
        <Checkbox radius='xl' value="No" label="No" />
        </CheckboxGroup>

        <TextInput
          required
          label="Comentario:"
          placeholder="Comentario adicional"
          {...form.getInputProps('Comentario')}
        />

        <Group position="right" mt="md">
          <Button className='btn__postulate'>Postularse</Button>
        </Group>
      </form>
    </Box>
    </div>
    </div>
    </div>
    
  )
}