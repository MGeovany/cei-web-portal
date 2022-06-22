/* eslint-disable react/prop-types */
import React from 'react'
import { BlogForm } from '../componentes/BlogForm'
import '../styles/CasoForm.css'

export const agregarBlogModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal asset__col'>
      <div className='asset__modal__title'>
        COMPARTIR NUEVO <span style={{ color: '#e1575f' }}>RECURSO</span>
      </div>
      <BlogForm />
    </div>
  </>
)
