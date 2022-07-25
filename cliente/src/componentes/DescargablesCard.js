/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Image, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { MdFileDownload } from 'react-icons/md'

export const DescargablesCard = ({ descargables }) => {
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
        titulo: descargables.title,
        autor: descargables.autor,
        fecha: descargables.fecha
      }
    })

  return (
    <div className='card-container'>
      <div style={{ width: 350, margin: '10px 0 10px', height: '80%' }}>
        <Card shadow='sm' p='lg'>
          <Card.Section>
            <Image
              withPlaceholder
              src={descargables.img}
              height={200}
              alt='blg'
            />
          </Card.Section>
          <div className='card-50'>
            <div className='blog__card__content__title'>
              {descargables.title}
            </div>
            <button className='blog__card__content__button '>
              <span style={{ color: '#4a79cb' }}>{descargables.autor} </span>
              <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
                • {descargables.fecha}
              </span>
              <span
                className='btn_descarga'
                style={{ color: '#AAAEB8', opacity: '0.6' }}
              >
                • <MdFileDownload width={50} height={50} />
              </span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
