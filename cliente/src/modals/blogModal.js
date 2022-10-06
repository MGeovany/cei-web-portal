/* eslint-disable react/prop-types */
import React from 'react'
import { RichTextEditor } from '@mantine/rte'

export const blogModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal'>
      <div className='asset__content'>
        <div className='asset__modal__title'>
          <div className='title-50'>{innerProps.titulo}</div>
        </div>
        <div className='asset__modal__subtitle'>
          <span style={{ color: '#e1575f', fonWeight: 'bold' }}>
            {innerProps.autor}
          </span>
          <span style={{ color: '#AAAEB8', opacity: '0.6' }}>
            • {innerProps.fecha}
          </span>
        </div>
        <div className='asset__modal__body lh-2'>
          <RichTextEditor readOnly value={innerProps.desc} id='rte' />
        </div>
      </div>
    </div>
  </>
)
