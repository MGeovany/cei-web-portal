/* eslint-disable react/prop-types */
import React from 'react'
import { CasoTabla } from '../componentes/CasoTabla'

export const verCasoModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal asset__col'>
      <div className='asset__modal__title'>
        VER
        <span style={{ color: '#4A79CB' }}> CASOS DE EXITO</span>
      </div>
      <CasoTabla />
    </div>
  </>
)
