/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  Notification,
  Space
} from '@mantine/core'
import '../styles/Login.css'
import { IconX } from '@tabler/icons';
import { useForm } from '@mantine/form'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/login/loginSlice'
import { Auth } from '../API'

export function Login() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationLoading, setNotificationLoading] = useState(true)
  const [messageNotificationError, setMessageNotificationError] = useState(true)
  const dispatch = useDispatch()

  const form = useForm({
    initialValues: {
      usuario: '',
      password: ''
    },
  })

  const validateAuth = () => {
    return form.onSubmit((values) => {
      setShowNotification(true);
      setNotificationLoading(true);
      Auth.validate(values.usuario, values.password).then(response => {
        if(response.access){
          let data = response.data;
          dispatch(login({ usuario: data.usuario, correo: data.correo, nombre: data.nombre }))
        }else{
          setMessageNotificationError(response.data);
          setNotificationLoading(false);
        }
      });
    })
  }

  const NotificationLogin = () => {
    if (showNotification) {
      return notificationLoading ? (
        <Notification
          loading
          title="Verificando acceso"
          disallowClose
        ></Notification>
      ) : (
        <Notification
          icon={<IconX size={18} />}
          color="red"
          onClose={() => setShowNotification(false)}
        >{messageNotificationError}</Notification>
      )
    }
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
                label='Usuario'
                placeholder='Tu usuario'
                required
                {...form.getInputProps('usuario')}
              />
              <PasswordInput
                label='Contraseña'
                placeholder='Tu Contraseña'
                required
                mt='md'
                {...form.getInputProps('password')}
              />
              <Group position='apart' mt='md'>
              <Space w="md" />
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
          <br/>
          <NotificationLogin/>
        </Container>
      </div>
    </>
  )
}
