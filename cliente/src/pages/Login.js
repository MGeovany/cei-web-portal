/* eslint-disable space-before-function-paren */
import React from 'react'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button
} from '@mantine/core'
import '../styles/Login.css'

import { useForm } from '@mantine/form'

export function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo Inválido')
    }
  })

  return (
    <>
      <div className='login-container'>
        <Container size={820} my={60}>
          <Title
            align='center'
            sx={(theme) => ({
              fontFamily: `Poppins, ${theme.fontFamily}`,
              fontWeight: 900,
              color: '#333'
            })}
          >
            Bienvenido de vuelta!
          </Title>
          <Text color='dimmed' size='sm' align='center' mt={5}>
            Aun no tienes una cuenta?
            <a href='/admin/blog' size='sm'>
              Crear cuenta
            </a>
          </Text>
          <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                label='Correo'
                placeholder='nombre@unitec.edu'
                required
                {...form.getInputProps('email')}
              />
              <PasswordInput
                label='Contraseña'
                placeholder='Tu Contraseña'
                required
                mt='md'
                {...form.getInputProps('password')}
              />
              <Group position='apart' mt='md'>
                <Checkbox label='Recordarme' />
                <a
                  onClick={(event) => event.preventDefault()}
                  href='/login'
                  size='sm'
                >
                  Olvidó su contraseña?
                </a>
              </Group>
              <Button type='submit' fullWidth mt='xl'>
                Ingresar
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </>
  )
}
