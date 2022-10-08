/* eslint-disable react/prop-types */
import React from 'react'
import { useModals } from '@mantine/modals'

import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    height: 500,
    width: 430,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  title: {
    fontFamily: theme.fontFamily,
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.gray,
    opacity: 0.2,
    fontWeight: 700,
    fontSize: 20,
    textTransform: 'uppercase'
  }
}))

export const CasoCard = ({
  id,
  tipo,
  titulo,
  cuerpo,
  imagenEncabezado,
  usuarioCreador,
  fechaCreado,
  seccionCasos
}) => {
  const { classes } = useStyles()
  const modals = useModals()
  const theme = useMantineTheme()

  const openCasosModal = () =>
    modals.openContextModal('casoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      overflow: 'outside',

      size: 'calc(100% - 2rem)',
      innerProps: {
        type: tipo,
        title: titulo,
        description: cuerpo,
        image: imagenEncabezado,
        user: usuarioCreador,
        dateCreated: fechaCreado,
        section: seccionCasos
      }
    })

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${imagenEncabezado})` }}
      className={classes.card}
    >
      <div>
        <Text align='left' className={classes.category} size='xs'>
          {fechaCreado}
        </Text>
        <Title order={3} className={classes.title}>
          {titulo}
        </Title>
        <Text className={classes.category} size='xs'>
          {seccionCasos}
        </Text>
      </div>
      <Button variant='white' color='dark' onClick={openCasosModal}>
        Leer Caso
      </Button>
    </Paper>
  )
}
