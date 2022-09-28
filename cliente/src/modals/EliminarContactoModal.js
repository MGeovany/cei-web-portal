/* eslint-disable react/prop-types */
import React from 'react'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
import '../styles/EliminarContactoModal.css'
import { closeModal } from '@mantine/modals'

export const EliminarContactoModal = ({ context, id, innerProps }) => {
  console.log(innerProps.id)

  const deleteContactanos = async (id) => {
    const contactanos = innerProps.contactanos
    const setContactanos = innerProps.setContactanos

    try {
      await fetch(`https://cei1.herokuapp.com/1.0.0/Contactanos/${id}`, {
        method: 'DELETE'
      })
      setContactanos(contactanos.filter((contactanos) => contactanos.id !== id))
      showNotification({
        icon: <IconCheck />,
        title: 'Rechazado',
        color: 'green',
        message: 'Contacto eliminado correctamente!'
      })
    } catch (err) {
      console.error(err.message)
    }

    closeModal()
  }

  return (
    <>
      <div className='cont-principal'>
        Esta seguro de que desea eliminar este contacto ?
        <div className='cont-butons'>
          <button
            onClick={() => {
              deleteContactanos(innerProps.id)
            }}
          >
            Eliminar
          </button>
          <button onClick={() => closeModal()}>Cancelar</button>
        </div>
      </div>
    </>
  )
}
