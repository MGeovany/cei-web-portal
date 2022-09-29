/* eslint-disable react/prop-types */
import React , {useState} from 'react'
import { showNotification } from '@mantine/notifications'
import '../styles/EliminarContactoModal.css'
import { closeAllModals, closeModal } from '@mantine/modals'

export const EliminarCasosModal = ({ name , id , innerProps}) => {

  const deleteCasos = async (name, e) => {
    e.preventDefault()
    const events = innerProps.events
    const elements = innerProps.elements
    const setEvents = innerProps.setEvents

    showNotification({
      title: 'Eliminado',
      color: 'blue',
      message: `Caso eliminado correctamente! Nombre: ${name}`
    })


    const newEvents = [...events]
    newEvents.splice(name, 1)
    setEvents(newEvents)
    elements.splice(name, 1)

    closeModal(id)

  }

  return (
    <>
      <div className='cont-principal'>
        Esta seguro de que desea eliminar el caso de {innerProps.name} ?
        <div className='cont-butons'>
          <button
          onClick={(e) => deleteCasos(innerProps.name,e)}
          >
            Eliminar
          </button>
          <button onClick={() => closeModal(id)}>Cancelar</button>
        </div>
      </div>
    </>
  )
}
