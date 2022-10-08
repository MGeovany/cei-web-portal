/* eslint-disable react/prop-types */
import React from 'react'
import { useMantineTheme } from '@mantine/core'
import { createStyles, Paper, Text, Title, Button } from '@mantine/core'
import { useModals } from '@mantine/modals'

export const DescargablesCard = ({
  autor,
  descripcion,
  fecha_creado,
  id,
  imagen_tarjeta,
  nombre_archivo,
  titulo
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
        author: autor,
        desc: descripcion,
        date: fecha_creado,
        id: id,
        image: imagen_tarjeta,
        file: nombre_archivo,
        title: titulo
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
      fontSize: 32,
      marginTop: theme.spacing.xs,
      textAlign: 'left'
    },

    category: {
      color: theme.gray,
      opacity: 0.3,
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'initial'
    }
  }))

  const { classes } = useStyles()

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${imagen_tarjeta})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {fecha_creado}
        </Text>
        <Title order={3} className={classes.title}>
          {titulo}
        </Title>
      </div>
      <Button variant='white' color='dark' onClick={openBlogModal}>
        Descargar
      </Button>
    </Paper>
  )
}
