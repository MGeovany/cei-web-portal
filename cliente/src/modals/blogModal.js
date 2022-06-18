/* eslint-disable react/prop-types */
import React from 'react'

export const blogModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal'>
      <div className='asset__content'>
        <div className='asset__modal__title'>
          <div className='title-50'>{innerProps.titulo}</div>
        </div>
        <div className='asset__modal__subtitle'>
          <span style={{ color: '#7ac678', fonWeight: 'bold' }}>
            {innerProps.autor}
          </span>
          <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
            • {innerProps.fecha}
          </span>
        </div>
        <div className='asset__modal__body lh-2'>{innerProps.desc}</div>
      </div>
    </div>
  </>
)
