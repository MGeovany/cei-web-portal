import React from 'react'
import '../styles/NuestroEquipo.css'

export const NuestroEquipo = () => {
  return (
    <div>
      <div className='nuestro-equipo flex'>
        <div className='section-title'>
          NUESTRO <span style={{ color: '#E35961' }}> EQUIPO🏆</span>
        </div>
        <div className='nuestro-equipo-cards flex'>
          <div className='nuestro-equipo-card'>
            <div className='card-img'>
              <img src='/assets/team/Dax.jpg' alt='int1' />
            </div>
            <div className='card-name'>
              <h2>Dax Paz </h2>
            </div>
            <div className='card-cargo'>
              <p>
                Industrial Engineer & Master in International Business
                management.
              </p>
              <hr />
              <div className='card-read-more'>
                <span style={{ color: '#4a79cb' }}>
                  Coordinador | San Pedro Sula
                </span>
              </div>
            </div>
          </div>

          <div className='nuestro-equipo-card'>
            <div className='card-img'>
              <img src='/assets/team/Claudia.jpg' alt='int2' />
            </div>
            <div className='card-name'>
              <h2>Claudia Pagoaga </h2>
            </div>
            <div className='card-cargo'>
              <p>
                Docente en CEUTEC y Coordinadora de Emprendimiento e Innovación.
              </p>
              <hr />
              <div className='card-read-more'>
                <span style={{ color: '#4a79cb' }}>
                  Coordinador | Tegucigalpa
                </span>
              </div>
            </div>
          </div>

          <div className='nuestro-equipo-card'>
            <div className='card-img'>
              <img src='/assets/team/Carlos.jpg' alt='int3' />
            </div>
            <div className='card-name'>
              <h2>Carlos Alberto Cabrera</h2>
            </div>
            <div className='card-cargo'>
              <p>
                Docente en CEUTEC y Coordinador de Emprendimiento e Innovación.
              </p>
              <hr />
              <div className='card-read-more'>
                <span style={{ color: '#4a79cb', fontWeight: 'bolder' }}>
                  Coordinador | La Ceiba
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
