/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Image, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'

export const BlogCard = ({ blog }) => {
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
        titulo: blog.title,
        autor: blog.autor,
        fecha: blog.fecha,
        desc: blog.contenido
      }
    })
  return (
    <div className='card-container' onClick={openBlogModal}>
      <div style={{ width: 400, margin: '10px 0 120px', height: '100%' }}>
        <Card shadow='sm' p='lg'>
          <Card.Section>
            <Image withPlaceholder src={blog.img} height={200} alt='blg' />
          </Card.Section>
          <div className='card-50'>
            <div className='blog__card__content__title'>{blog.title}</div>
            <button className='blog__card__content__button '>
              <span style={{ color: '#4a79cb' }}>{blog.autor} </span>
              <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
                • {blog.fecha}
              </span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
