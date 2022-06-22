import React from 'react'
import { BlogForm } from '../componentes/BlogForm'

export const EditarBlogModal = () => {
  return (
    <>
      <div className='add__asset__modal asset__col'>
        <div className='asset__modal__title'>
          Editar <span style={{ color: '#4A79CB' }}>blog</span>
        </div>
        <BlogForm />
      </div>
    </>
  )
}
