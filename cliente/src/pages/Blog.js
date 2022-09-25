import React from 'react'
import { BlogsRecientes } from '../componentes/BlogsRecientes'
import '../styles/Blog.css'
import '../styles/TableCardsRecursive.css'
import { RecursosDescargables } from '../componentes/RecursosDescargables'
import { motion } from "framer-motion"

export const Blog = () => {
  return (
    <div>
      <div className='blog'>
        <div className='blog-container flex'>
          <motion.div animate={{ scale: [1,1.2,1] }}
                transition={{ type: "spring", duration: 5, bounce: 0.6 }} className='casos-title section-title'>
            NUESTRO<span style={{ color: '#e1575f' }}> BlOG 🛸</span>
            <motion.div animate={{ rotate: [0,-1,-2,-3,-4,-5,5,-5,0] }}
                transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatDelay: 5, delay: 5 }} className='casos-subtitle'>RECURSOS & CONOCIMIENTOS</motion.div>
          </motion.div>
          <div className='casos-content'>
            <div className='casos-section'>
              <BlogsRecientes section={'Blog Recientemente Publicados'} />
              <RecursosDescargables />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
