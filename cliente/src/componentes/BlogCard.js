/* eslint-disable react/prop-types */
import React from 'react'

import { createStyles, Paper, Text, Title, Button } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { useMantineTheme } from '@mantine/core'

export const BlogCard = ({
  cuerpo,
  fechaCreado,
  id,
  imagenEncabezado,
  tipo,
  titulo,
  usuarioCreador
}) => {
  const modals = useModals()
  const theme = useMantineTheme()

  const openBlogModal = () =>
    modals.openContextModal('blogModal', {
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
        autor: usuarioCreador,
        fecha: fechaCreado,
        desc: cuerpo
      }
    })

  const useStyles = createStyles((theme) => ({
    card: {
      height: 440,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.black,
      lineHeight: 1.2,
      fontSize: 25,
      marginTop: theme.spacing.xs,
      textAlign: 'left'
    },

    category: {
      color: theme.gray,
      opacity: 0.2,
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }))

  const { classes } = useStyles()

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
      </div>
      <Button variant='white' color='dark' onClick={openBlogModal}>
        Leer Articulo
      </Button>
    </Paper>
  )
}
