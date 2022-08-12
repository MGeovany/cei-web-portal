/* eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }] */
import '../styles/ContactanosAdmin.css'
import { Table } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import React, { useEffect, useState } from 'react'

export const ContactanosAdmin = () => {
  const [contactanos, setContactanos] = useState([])

  const deleteElement = (name, e) => {
    e.preventDefault()
    const newEvents = [...contactanos]
    newEvents.splice(name, 1)
    setContactanos(newEvents)

    showNotification({
      title: 'Eliminado',
      color: 'blue',
      message: `Contacto de ${name} eliminado!`
    })

    contactanos.splice(name, 1)
  }

  useEffect(() => {
    setContactanos(contactanos)
  }, [contactanos])

  useEffect(() => {
    const fetchContactanos = async () => {
      const response = await fetch('http://localhost:3055/1.0.0/contactanos')
      const data = await response.json()
      setContactanos(data)
    }
    fetchContactanos()
  }, [])

  const rows = contactanos.map((element, index) => (
    <tr key={element.id}>
      <td>
        <div className='td__content'>{element.nombre}</div>
      </td>
      <td>
        <div className='td__content'>{element.email}</div>
      </td>
      <td>
        <div className='td__content'>+504 {element.telefono}</div>
      </td>
      <td>
        <div className='td__content'>{element.comentario}</div>
      </td>
      <td>
        <div className='tab__btns flex'>
          <div className='btn__editar'>Aceptar</div>
          <div
            className='btn__eliminar'
            onClick={(e) => deleteElement(element.nombre, e)}
          >
            Rechazar
          </div>
        </div>
      </td>
    </tr>
  ))

  return (
    <>
      <div
        className='casos'
        style={{ paddingBottom: '2rem', minHeight: '100vh' }}
      >
        <div className='casos-container flex'>
          <div className='casos-title section-title'>
            PERSONAS QUE SE
            <span style={{ color: '#e1575f' }}> CONTACTARON</span>
          </div>
          <div className='contactanos__table__container'>
            <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
              <thead>
                <tr>
                  <th>
                    <div className='th__title'>Nombre</div>
                  </th>

                  <th>
                    <div className='th__title'>Correo</div>
                  </th>
                  <th>
                    <div className='th__title'>Celular</div>
                  </th>
                  <th>
                    <div className='th__title'>Mensaje</div>
                  </th>

                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
