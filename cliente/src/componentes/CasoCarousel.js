/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { CasoCard } from './CasoCard'
import { useMediaQuery } from '@mantine/hooks'
import { Button, Paper, Text, anime, useMantineTheme } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { createStyles } from '@mantine/core'
import { useCasos } from '../hooks/useCasos'

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

  anime: {
    fontFamily: theme.fontFamily,
    fontWeight: 900,
    color: theme.dark,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  quote: {
    color: theme.dark,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: 20
  }
}))

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    anime: 'Best forests to visit in North America',
    quote: 'nature'
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    anime: 'Hawaii beaches review: better than you think',
    quote: 'beach'
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    anime: 'Mountains at night: 12 best locations to enjoy the view',
    quote: 'nature'
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    anime: 'Aurora in Norway: when to visit for best experience',
    quote: 'nature'
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    anime: 'Best places to visit this winter',
    quote: 'tourism'
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    anime: 'Active volcanos reviews: travel at your own risk',
    quote: 'nature'
  }
]
export const CasoCarousel = ({ section }) => {
  const { datas, loading, error } = useCasos(
    'https://animechan.vercel.app/api/quotes'
  )
  if (error) {
    console.log(error)
  }
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
  const { classes } = useStyles()

  const [casos, setCasos] = useState([''])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://animechan.vercel.app/api/quotes')
      const data = await response.json()
      console.log(data)
      setCasos(data)
    }

    getData()
  }, [])

  const slides = casos?.map((item, i) => (
    <Carousel.Slide key={i}>
      <Card {...item} />
    </Carousel.Slide>
  ))
  return (
    <div style={{ padding: '1rem', marginTop: '4rem' }}>
      <div className='casos-section-anime'>ala</div>

      <Carousel
        slideSize='25%'
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap='xl'
        align='start'
        loop
        dragFree
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </div>
  )
}
function Card({ anime, quote }) {
  const { classes } = useStyles()

  return (
    <Paper shadow='md' p='xl' radius='md' className={classes.card}>
      <div>
        <Text className={classes.quote} size='xs'>
          {anime}
        </Text>
        <div order={3} className={classes.anime}>
          {quote}
        </div>
      </div>
      <Button variant='white' color='dark'>
        Read article
      </Button>
    </Paper>
  )
}
