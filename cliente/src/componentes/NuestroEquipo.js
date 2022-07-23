import React from 'react'
import '../styles/NuestroEquipo.css'

export const NuestroEquipo = () => {
  return (
    <div>
      <div className='nuestro-equipo flex'>
        <div className='section-title'>
          NUESTRO <span style={{ color: '#E35961' }}> EQUIPO🏆</span>
        </div>
        <div className='nuestro-equipo-container '>
          <div className='nuestro-equipo-item flex'>
            <div className='nuestro-equipo-item-img'>
              <img
                src='/assets/team/Claudia.jpg'
                alt='equipo-1'
                style={{ border: '7px solid #a75bf2' }}
              />
            </div>
            <div className='nuestro-equipo-item-container'>
              <div className='nuestro-equipo-item-name'>Claudia Damian</div>
              <div className='nuestro-equipo-item-job'>
                Coordinador del Centro de Emprendimiento <br /> e Innovación
              </div>
              <div className='nuestro-equipo-item-description'>
                CEUTEC Tegucigalpa
              </div>
              <hr style={{ border: '2px solid #a75bf2' }} />
            </div>
          </div>
          <div className='nuestro-equipo-item flex'>
            <div className='nuestro-equipo-item-img'>
              <img
                src='/assets/team/Dax.jpg'
                alt='equipo-1'
                style={{ border: '7px solid #5bf288' }}
              />
            </div>
            <div className='nuestro-equipo-item-container'>
              <div
                className='nuestro-equipo-item-name'
                style={{ 'text-align': 'right' }}
              >
                Dax Paz
              </div>
              <div
                className='nuestro-equipo-item-job'
                style={{ 'text-align': 'right' }}
              >
                Coordinador del Centro de Emprendimiento <br /> e Innovación
              </div>
              <div
                className='nuestro-equipo-item-description'
                style={{ 'text-align': 'right' }}
              >
                CEUTEC San Pedro Sula
              </div>
              <hr style={{ border: '2px solid #5bf288' }} />
            </div>
          </div>
          <div className='nuestro-equipo-item flex'>
            <div className='nuestro-equipo-item-img '>
              <img
                src='/assets/team/Carlos.jpg'
                alt='equipo-1'
                style={{ border: '7px solid #5bddf2' }}
              />
            </div>
            <div className='nuestro-equipo-item-container'>
              <div className='nuestro-equipo-item-name'>Carlos Damian</div>
              <div className='nuestro-equipo-item-job'>
                Coordinador del Centro de Emprendimiento <br /> e Innovación
              </div>
              <div className='nuestro-equipo-item-description'>
                CEUTEC La Ceiba
              </div>
              <hr style={{ border: '2px solid #5bddf2' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
