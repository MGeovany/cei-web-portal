/* eslint-disable react/prop-types */
import React from 'react'

export const ActividadesModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal'>
      <div className='asset__content'>
        <div className='asset__modal__title'>
          <div>{innerProps.titulo}</div>
        </div>
        <div className='asset__modal__subtitle'>
          <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
            • {innerProps.fecha}
          </span>
        </div>
        <div className='asset__modal__body lh-2'>{innerProps.desc}</div>
      </div>
    </div>
  </>
)
