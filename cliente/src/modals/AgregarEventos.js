import React from 'react'
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';

export const AgregarEventos = () => {
    const form = useForm({
        initialValues: {
          evento: '',
          descrip_event: '',
          fecha: Date
        }
      });

  return (
    <Box sm={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Evento"
          placeholder="Nombre del evento"
          {...form.getInputProps('evento')}
        />
        <TextInput
          required
          label="Descripcion"
          placeholder="Descripcion del evento"
          {...form.getInputProps('descrip_event')}
        />
        <DatePicker 
         placeholder="Fecha del Evento" 
         label="Fecha_evento" 
         required />
        
        <Group position="right" mt="md">
          <Button type="submit">Agregar</Button>
        </Group>
      </form>
    </Box>
  )
}
