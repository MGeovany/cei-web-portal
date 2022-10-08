import React from 'react'
import '../styles/NuestroEquipo.css'
import { motion } from "framer-motion"

export const NuestroEquipo = () => {
  return (
    <div className='nuestro-equipo flex'>
      <div className='section-title'>
        NUESTRO <span style={{ color: '#E35961' }}> EQUIPO🏆</span>
      </div>
      <div className='nuestro-equipo-container '>
        <motion.div className='nuestro-equipo-item flex'
        whileInView={{ opacity: [0,0,0,0.3,0.5,0.8, 1] }}>
          <div className='nuestro-equipo-item-img'>
            <img
              src='/assets/team/Claudia.jpg'
              alt='equipo-1'
              style={{ border: '7px solid #a75bf2' }}
            />
          </div>
          <div className='nuestro-equipo-item-container'
          >
            <div className='nuestro-equipo-item-name'>Claudia Pagoaga</div>
            <div className='nuestro-equipo-item-job'>
              Coordinador del Centro de Emprendimiento <br /> e Innovación
            </div>
            <div className='nuestro-equipo-item-description'>
              CEUTEC Tegucigalpa
            </div>
            <hr style={{ border: '2px solid #a75bf2' }} />
          </div>
        </motion.div>
        <motion.div className='nuestro-equipo-item flex'
        whileInView={{ opacity: [0,0,0,0.3,0.5,0.8, 1] }}>
          <div className='nuestro-equipo-item-img'>
            <img
              src='/assets/team/Dax.jpg'
              alt='equipo-1'
              style={{ border: '7px solid #5bf288' }}
            />
          </div>
          <div className='nuestro-equipo-item-container'>
            <div className='nuestro-equipo-item-name'>Dax Paz</div>
            <div
              className='nuestro-equipo-item-job'
              style={{ textAlign: 'right' }}
            >
              Coordinador del Centro de Emprendimiento <br /> e Innovación
            </div>
            <div
              className='nuestro-equipo-item-description'
              style={{ textAlign: 'right' }}
            >
              CEUTEC San Pedro Sula
            </div>
            <hr
              style={{
                border: '2px solid #64f38f',
                backgroundColor: '#64f38f'
              }}
            />
          </div>
        </motion.div>
        <motion.div className='nuestro-equipo-item flex'
        whileInView={{ opacity: [0,0,0,0.3,0.5,0.8, 1] }}>
          <div className='nuestro-equipo-item-img '>
            <img
              src='/assets/team/Carlos.jpg'
              alt='equipo-1'
              style={{ border: '7px solid #5bddf2' }}
            />
          </div>
          <div className='nuestro-equipo-item-container'>
            <div className='nuestro-equipo-item-name'>Carlos Cabrera</div>
            <div className='nuestro-equipo-item-job'>
              Coordinador del Centro de Emprendimiento <br /> e Innovación
            </div>
            <div className='nuestro-equipo-item-description'>
              CEUTEC La Ceiba
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
