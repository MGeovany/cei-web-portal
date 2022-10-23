import React from 'react'
import { Card, Center, Image, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import '../styles/Calendario.css'
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWhatsapp
} from '@tabler/icons'

export const ActividadesCard = ({
  descripcion,
  duracion,
  fechaCreado,
  fechafin,
  fechaInicio,
  id,
  nombreSede,
  sede,
  semana,
  titulo,
  usuarioCreador
}) => {
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
        desc: descripcion,
        duration: duracion,
        createdDate: fechaCreado,
        endDate: fechafin,
        startDate: fechaInicio,
        id: id,
        sede: nombreSede,
        sedeId: sede,
        week: semana,
        title: titulo,
        author: usuarioCreador
      }
    })

  return (
    <div className='card-actividades-container'>
      <div
        style={{
          width: 350,
          margin: '10px 0 10px',
          height: '80%',
          alignItems: Center
        }}
      >
        <Card shadow='sm' p='sm'>
          <Card.Section onClick={openActividadesModal}>
            <Image withPlaceholder height={150} alt='blg' />
          </Card.Section>
          <div className='card-actividades'>
            <div
              className='actividad__card__content__title'
              onClick={openActividadesModal}
            >
              {titulo}
            </div>

            <div className='actividad__card__content__button'>
              <div>Compartir:</div>
              <div className='actividad__socials'>
                <IconBrandTwitter />
                <IconBrandFacebook />
                <IconBrandWhatsapp />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
