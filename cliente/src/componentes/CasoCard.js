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
      size: 'calc(100% - 1rem)',
      innerProps: {
        titulo: props.caso.titulo,
        subtitulo: props.caso.subtitulo,
        desc: props.caso.descripcion,
        img: props.caso.img,
        integrantes: props.caso.integrantes
      }
    })

  return (
    <div className='card-container'>
      <div style={{ width: 350, margin: '20px 0 20px', height: '60%' }}>
        <Card style={{boxShadow: '0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
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
            style={{ marginBottom: 5, marginTop: theme.spacing.sm  }}
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
