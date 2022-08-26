/* eslint-disable react/prop-types */
import React from 'react'

import { createStyles, Paper, Text, Title, Button } from '@mantine/core'

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
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: 20
  }
}))

export const CasoCard = ({ image, title, desc }) => {
  const { classes } = useStyles()

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.category} size='xs'>
          {desc}
        </Text>
      </div>
      <Button variant='white' color='dark'>
        Leer Caso
      </Button>
    </Paper>
  )
}
