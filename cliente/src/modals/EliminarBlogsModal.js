/* eslint-disable react/prop-types */
import React , {useState} from 'react'
import { showNotification } from '@mantine/notifications'
import '../styles/EliminarContactoModal.css'
import { closeAllModals, closeModal } from '@mantine/modals'

export const EliminarBlogsModal = ({ name , id , innerProps}) => {

  const deleteBlog = async (name, e) => {
    e.preventDefault()
    const events = innerProps.events
    const elements = innerProps.elements
    const setEvents = innerProps.setEvents

    showNotification({
      id: 'load-data',

      title: 'Eliminado',
      color: 'blue',
      message: `Blog eliminado correctamente! Blog de ${name}`
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
        Esta seguro de que desea eliminar el  Blog de {innerProps.name} ?
        <div className='cont-butons'>
          <button
          onClick={(e) => deleteBlog(innerProps.name,e)}
          >
            Eliminar
          </button>
          <button onClick={() => closeModal(id)}>Cancelar</button>
        </div>
      </div>
    </>
  )
}
