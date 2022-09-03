/* eslint-disable react/prop-types */
import React from 'react'

export const casoModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal'>
      <div className='asset__content'>
        <div className='asset__modal__title'>{innerProps.titulo}</div>
        <div className='asset__modal__subtitle'>{innerProps.subtitulo}</div>
        <div className='asset__modal__body'>{innerProps.desc}</div>
      </div>

      <div className='asset__modal__integrantes asset__modal__title'>
        Integrantes:
        <div className='hr'>
          <hr id='hr__green' />
        </div>
        <div className='integrantes__list'>
          {innerProps.integrantes?.map((integrante, index) => (
            <div key={index}>
              <div className='integrante flex'>
                <div className='integrante__img'>
                  <img src={integrante.profile} alt={integrante.nombre} />
                </div>

                <div className='integrante__name flex'>{integrante.nombre}</div>
                <div className='integrante__email'>{integrante.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)
