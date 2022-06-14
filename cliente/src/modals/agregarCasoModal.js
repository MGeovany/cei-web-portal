/* eslint-disable react/prop-types */
import React from 'react'
import { CasoForm } from '../componentes/CasoForm'
import '../styles/CasoForm.css'

export const agregarCasoModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset__modal asset__col'>
      <div className='asset__modal__title'>
        Agregar Nuevo <span style={{ color: '#7AC678' }}>Caso de Exito</span>
      </div>
      <CasoForm />
    </div>
  </>
)
