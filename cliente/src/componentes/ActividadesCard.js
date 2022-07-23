/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Center, Image, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import '../styles/Calendario.css'

export const ActividadesCard = ({ actividad }) => {
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
        titulo: actividad.title,
        fecha: actividad.fecha,
        desc: actividad.contenido,
        photos: actividad.photos
      }
    })

  return (
    <div className='card-container' onClick={openActividadesModal}>
      <div
        style={{
          width: 400,
          margin: '80px 0 80px',
          height: '100%',
          alignItems: Center
        }}
      >
        <Card shadow='sm' p='sm'>
          <Card.Section>
            <Image withPlaceholder src={actividad.img} height={150} alt='blg' />
          </Card.Section>
          <div className='card-50'>
            <div className='actividad__card__content__title'>
              {actividad.title}
            </div>
            <button className='blog__card__content__button '>
              <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
                • {actividad.fecha}
              </span>
              <span></span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
