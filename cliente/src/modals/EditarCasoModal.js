import React from 'react'
import { CasoForm } from '../componentes/CasoForm'
import '../styles/CasoForm.css'

export const EditarCasoModal = () => {
  return (
    <>
      <div className='add__asset__modal asset__col'>
        <div className='asset__modal__title'>
          Editar <span style={{ color: '#4A79CB' }}>Caso de Exito</span>
        </div>
        <CasoForm />
      </div>
    </>
  )
}
