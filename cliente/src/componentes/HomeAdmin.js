import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, HeroBanner } from '../utils/svgIcons'
import { Group, Modal } from '@mantine/core'
import { HomeForm } from './HomeForm'
import '../styles/Home.css'

export const HomeAdmin = () => {
  const [opened, setOpened] = useState(false)

  return (
      <div className='home'>
        <div className='home__banner'>
          <HeroBanner />
        </div>
        <div className='home__text'>
          <h1 className='home__title'>
            Bienvenido al panel administrativo del CEI
          </h1>
          <div className='home__btns'>
            <div
              className='home__btn__propuesta'
              onClick={() => setOpened(true)}
            >
              Editar Contenido
            </div>

            <Link to='/'>
              <div className='home__btn__blog'>
                Ver Vista Principal
                <Arrow fill='#ffffff' width={24} height={23} />
              </div>
            </Link>
          </div>
        </div>
        <div className='home__img'>
          <img src='/assets/people/Startup.png' alt='Startup' />
        </div>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overlayOpacity={0.55}
        centered={true}
        padding={'xl'}
        size={'calc(100% - 1rem)'}
        overlayBlur={3}
      >
        <Group position='left'>
          <div className='asset__modal__title'>
            Editar Contenido de{' '}
            <span style={{ color: '#e1575f' }}>Pagina Inicio</span>
          </div>
        </Group>
        <HomeForm setOpened={setOpened} />
      </Modal>
      </div>
  )
}
