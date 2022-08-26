/* eslint-disable react/prop-types */
import React from 'react'

import { createStyles, Paper, Text, Title, Button } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { AlignLeft } from 'tabler-icons-react'
import { Card, Image, useMantineTheme } from '@mantine/core'

export const BlogCard = ({ img, title, contenido, autor, fecha }) => {
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
        titulo: title,
        autor: autor,
        fecha: fecha,
        desc: contenido
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
      sx={{ backgroundImage: `url(${img})` }}
      className={classes.card}
    >
      <div>
        <Text align='left' className={classes.category} size='xs'>
          {fecha}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant='white' color='dark' onClick={openBlogModal}>
        Leer Articulo
      </Button>
    </Paper>
  )
}
