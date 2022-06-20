import React from 'react'
import { BlogsRecientes } from '../componentes/BlogsRecientes'
import '../styles/Blog.css'
import { Navbar } from '../componentes/Navbar'

export const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className='blog'>
        <div className='blog-container flex'>
          <div className='casos-title section-title'>
            NUESTRO<span style={{ color: '#4A79CB' }}> BlOG 🛸</span>
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
