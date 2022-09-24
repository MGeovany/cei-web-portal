/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
import { createStyles } from '@mantine/core'
import '../styles/EliminarContactoModal.css'
import { closeModal } from '@mantine/modals'

// const use_Styles = createStyles((theme, _params, getRef) => ({
//   blogTablastyle:{
//     padding:'0px',
//     width:'100%',
//     '@media (max-width: 550px)': {
//       display:'none'
//       },
//   },
//   blogTablastyleR:{
//     padding:'0px',
//     width:'100%',
//     '@media (min-width: 550px)': {
//       display:'none'
//       },
//   }
// }));

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
  // const { classes } = use_Styles();

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
