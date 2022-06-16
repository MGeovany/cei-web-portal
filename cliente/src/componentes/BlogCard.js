/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Image } from '@mantine/core'

export const BlogCard = ({ blog }) => {
  console.log('blog', blog.img)
  return (
    <div className='card-container'>
      <div style={{ width: 400, margin: '10px 0 120px', height: '100%' }}>
        <Card shadow='sm' p='lg'>
          <Card.Section>
            <Image withPlaceholder src={blog.img} height={200} alt='blg' />
          </Card.Section>
          <div className='card-50'>
            <div className='blog__card__content__title'>{blog.title}</div>
            <button className='blog__card__content__button'>
              <span style={{ color: '#7ac678' }}>{blog.autor} </span>
              <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
                el {blog.fecha}
              </span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
