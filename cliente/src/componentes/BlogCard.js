/* eslint-disable react/prop-types */
import React from 'react'

import { createStyles, Paper, Text, Title, Button } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { useMantineTheme } from '@mantine/core'

export const BlogCard = ({ dataBlog }) => {
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
        titulo: dataBlog?.titulo,
        autor: dataBlog?.usuarioCreador,
        fecha: dataBlog?.fechaCreador,
        desc: dataBlog?.cuerpo
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
      color: theme.white,
      lineHeight: 1.2,
      fontSize: 25,
      marginTop: theme.spacing.xs,
      textAlign: 'left'
    },

    category: {
      color: theme.white,
      opacity: 0.7,
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
      sx={{ backgroundImage: `url(${dataBlog?.imgenEncabezado})` }}
      className={classes.card}
    >
      <div>
        <Text align='left' className={classes.category} size='xs'>
          {dataBlog?.fechaCreado}
        </Text>
        <Title order={3} className={classes.title}>
          {dataBlog?.titulo}
        </Title>
      </div>
      <Button variant='white' color='dark' onClick={openBlogModal}>
        Leer Articulo
      </Button>
    </Paper>
  )
}
