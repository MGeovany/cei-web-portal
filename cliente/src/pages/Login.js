/* eslint-disable space-before-function-paren */
import React from 'react'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Container,
  Group,
  Button
} from '@mantine/core'
import '../styles/Login.css'

import { useForm } from '@mantine/form'

import { useDispatch } from 'react-redux'
import { login } from '../store/slices/login/loginSlice'

export function Login() {
  const dispatch = useDispatch()

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo Inválido')
    }
  })

  const validateAuth = () => {
    return form.onSubmit((values) => {
      console.log(values)
      dispatch(login({ email: values.email, password: values.password }))
    })
  }

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
          <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
            <form onSubmit={validateAuth()}>
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
