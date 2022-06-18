/* eslint-disable react/prop-types */
import React from 'react'
import { BlogTabla } from '../componentes/BlogTabla'

export const verBlogModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal asset__col'>
      <div className='asset__modal__title'>
        TODOS LOS <span style={{ color: '#7AC678' }}>RECURSOS</span>
      </div>
      <BlogTabla />
    </div>
  </>
)
