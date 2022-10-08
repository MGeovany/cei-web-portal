import React from 'react'
import '../styles/QuienesSomos.css'

export const QuienesSomos = ({ dataHome }) => {
  return (
    <div className='quienes-somos flex'>
      <div className='section-title'>
        QUIENES <span style={{ color: '#e1575f' }}>SOMOS</span>🍃
      </div>
      <div className='quienes-somos-text flex'>
        <div className='quienes-somos-text-title'>
          <h1>¿QUÉ ES EL CEI?</h1>
          <div>
            <hr />
          </div>
        </div>
        <div className='quienes-somos-text-cnt'>
          {dataHome?.descripcion_quienessomos}
        </div>
      </div>
    </div>
  )
}
