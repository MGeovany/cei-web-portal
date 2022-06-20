/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Image, Group, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'

export const CasoCard = (props) => {
  const modals = useModals()

  const theme = useMantineTheme()

  const openCasoModal = () =>
    modals.openContextModal('casoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: 'calc(100% - 6rem)',
      innerProps: {
        titulo: props.caso.titulo,
        subtitulo: props.caso.subtitulo,
        desc: props.caso.descripcion,
        img: props.caso.img,
        integrantes: props.caso.integrantes
      }
    })

  return (
    <div className='card-container' onClick={openCasoModal}>
      <div style={{ width: 400, margin: '10px 0 10px', height: '100%' }}>
        <Card shadow='sm' p='lg'>
          <Card.Section>
            <Image
              withPlaceholder
              src={props.caso.img}
              height={160}
              alt='Norway'
            />
          </Card.Section>

          <Group
            position='apart'
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div className='casos__card__content__title'>
              {props.caso.titulo}
            </div>
          </Group>

          <div className='casos__card__content__desc'>{props.caso.desc}</div>

          <hr className='hr__gray' id='hr__gray' />
          <button
            className='casos__card__content__button'
            onClick={openCasoModal}
          >
            Leer Mas
          </button>
        </Card>
      </div>
    </div>
  )
}
/*
CasoCard.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  casosTec: PropTypes.array.isRequired,
  caso: PropTypes.object.isRequired
}
 */
