/* eslint-disable react/prop-types */
import React from 'react'
import {  useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import '../styles/Calendario.css'
import { createStyles, Paper, Text, Title, Button } from '@mantine/core'


export const ActividadesCard = ({ title, fecha , autor , contenido ,photos ,img }) => {
  const modals = useModals()

  const theme = useMantineTheme()

  const openActividadesModal = () =>
    modals.openContextModal('ActividadesModal', {
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
        fecha: fecha,
        autor: autor,
        desc: contenido,
        photos: photos
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
        backgroundPosition: 'center',
      padding:"1rm"
      },
    
      title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: 25,
        marginTop: theme.spacing.xs
      },
    
      category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase'
      },
  
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
      <Text
      align="left"
       className={classes.category} size='xs' >
        {fecha}
        {/* {contenido} */}
      </Text>
      <Title order={3} className={classes.title}>
        {title}
      </Title>
    </div>
    <Button variant='white' color='dark' onClick={openActividadesModal}>
     Leer Articulo
    </Button>
  </Paper>
  )
}
