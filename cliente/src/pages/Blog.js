import React from 'react'
import { BlogsRecientes } from '../componentes/BlogsRecientes'
import '../styles/Blog.css'

export const Blog = () => {
  return (
    <div>
      <div className='blog'>
        <div className='blog-container flex'>
          <div className='casos-title section-title'>
            NUESTRO<span style={{ color: '#7AC678' }}> BlOG 🛸</span>
            <div className='casos-subtitle'>RECURSOS & CONOCIMIENTOS</div>
          </div>
          <div className='casos-content'>
            <div className='casos-section'>
              <BlogsRecientes />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
