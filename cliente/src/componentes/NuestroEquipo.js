import React, { useEffect, useState } from 'react'
import '../styles/NuestroEquipo.css'
import { motion } from 'framer-motion'

export const NuestroEquipo = () => {
  const [integrantes, setIntegrantes] = useState([])

  useEffect(() => {
    const fetchEquipo = async () => {
      const response = await fetch('http://localhost:5000/1.0.0/inicio')
      const data = await response.json()
      setIntegrantes(data.integrantes)
    }
    fetchEquipo()
  }, [])

  return (
    <div className='nuestro-equipo flex'>
      <div className='section-title'>
        NUESTRO <span style={{ color: '#E35961' }}> EQUIPO🏆</span>
      </div>
      <div className='nuestro-equipo-container '>
        <motion.div
          className='nuestro-equipo-item flex'
          whileInView={{ opacity: [0, 0, 0, 0.3, 0.5, 0.8, 1] }}
        >
          <div className='nuestro-equipo-item-img'>
            <img
              src={integrantes[0]?.imagen}
              alt='equipo-1'
              style={{ border: '7px solid #a75bf2' }}
            />
          </div>
          <div className='nuestro-equipo-item-container'>
            <div className='nuestro-equipo-item-name'>
              {integrantes[0]?.nombre}
            </div>
            <div className='nuestro-equipo-item-job'>
              {integrantes[0]?.titulo}
            </div>
            <div className='nuestro-equipo-item-description'>
              {integrantes[0]?.descripcion}
            </div>
            <hr style={{ border: '2px solid #a75bf2' }} />
          </div>
        </motion.div>
        <motion.div
          className='nuestro-equipo-item flex'
          whileInView={{ opacity: [0, 0, 0, 0.3, 0.5, 0.8, 1] }}
        >
          <div className='nuestro-equipo-item-img'>
            <img
              src={integrantes[1]?.imagen}
              alt='equipo-1'
              style={{ border: '7px solid #5bf288' }}
            />
          </div>
          <div className='nuestro-equipo-item-container'>
            <div
              className='nuestro-equipo-item-name'
              style={{ textAlign: 'right' }}
            >
              {integrantes[1]?.nombre}
            </div>
            <div
              className='nuestro-equipo-item-job'
              style={{ textAlign: 'right' }}
            >
              {integrantes[0]?.titulo}
            </div>
            <div
              className='nuestro-equipo-item-description'
              style={{ textAlign: 'right' }}
            >
              {integrantes[0]?.descripcion}
            </div>
            <hr
              style={{
                border: '2px solid #64f38f',
                backgroundColor: '#64f38f'
              }}
            />
          </div>
        </motion.div>
        <motion.div
          className='nuestro-equipo-item flex'
          whileInView={{ opacity: [0, 0, 0, 0.3, 0.5, 0.8, 1] }}
        >
          <div className='nuestro-equipo-item-img '>
            <img
              src={integrantes[2]?.imagen}
              alt='equipo-1'
              style={{ border: '7px solid #5bddf2' }}
            />
          </div>
          <div className='nuestro-equipo-item-container'>
            <div className='nuestro-equipo-item-name'>
              {integrantes[1]?.nombre}
            </div>
            <div className='nuestro-equipo-item-job'>
              {integrantes[1]?.titulo}
            </div>
            <div className='nuestro-equipo-item-description'>
              {integrantes[1]?.descripcion}
            </div>
            <hr
              style={{
                border: '2px solid #5bddf2',
                backgroundColor: '#5bddf2'
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
