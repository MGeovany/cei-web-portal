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
    color: theme.dark,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.dark,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: 20
  }
}))

export const CasoCard = ({ imagenEncabezado, titulo, cuerpo }) => {
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
        titulo: titulo,
        subtitulo: titulo + ' ~ subtitulo',
        desc: cuerpo
      }
    })

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{
        backgroundImage: imagenEncabezado ? `url(${imagenEncabezado}) ` : ''
      }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {titulo}
        </Title>
        <Text className={classes.category} size='xs'>
          {titulo + ' ~ description shorter'}
        </Text>
      </div>
      <Button variant='white' color='dark' onClick={openCasosModal}>
        Leer Caso
      </Button>
    </Paper>
  )
}
