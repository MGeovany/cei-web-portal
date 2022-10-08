/* eslint-disable react/prop-types */
import { useRef, React } from 'react'
import { ActividadesCard } from './ActividadesCard'
import { Arrow } from '../utils/svgIcons'
import '../styles/Calendario.css'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from "framer-motion"


export const Actividades = (props) => {
  const data = props.data
  const slides = data.map((item, i) => (
    <Carousel.Slide key={i}>
      <ActividadesCard {...item} />
    </Carousel.Slide>
  ))
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className='ctividades'>
      <div className='actividades-container-section'>
        <div className='actividades-section-title'>
          Actividades celebradas por el CEI
          <motion.span animate={{ scale: [1,1.2,1.3,1.4,1.3,1.2,1] }}
                transition={{ ease: "linear", duration: 1, repeat: Infinity }} style={{ marginLeft: '12px' }}>
            <Arrow height={30} width={25} fill='#e1575f' />
          </motion.span>
        </div>
        <div className='container-carrouselact'>
        <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize='25%'
        slideGap='xs'
        align='center'
        dragFree
        loop
        breakpoints={[
          { maxWidth: 'xl', slideSize: '30%', slideGap: 'xs'},
          { maxWidth: 'lg', slideSize: '35%', slideGap: 'xs'},
          { maxWidth: 'md', slideSize: '45%', slideGap: 'xs'},
          { maxWidth: 'sm', slideSize: '60%', slideGap: 'xs'},
          { maxWidth: 'xs', slideSize: '100%', slideGap: 'xs'}
        ]}
      >
        {slides}
      </Carousel>
        </div>
      </div>
    </div>
  )
}
