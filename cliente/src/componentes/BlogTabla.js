import React, { useEffect, useState } from 'react'

import { Table, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'

const elements = [
  {
    titulo:
      'Lorem Ipsum is simply dummy text of the printing and typesetting' +
      ' industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    fecha: 'Sun Jun 12',
    autor: 'Marlon G Castro',
    detalles:
      'Lorem Ipsum is simply dummy text of the printing and typesetting' +
      ' industry. Lorem Ipsum has been the industrys standard dummy text ever since' +
      ' the 1500s, when an unknown printer took a galley of type and scrambled it to' +
      ' make a type specimen book. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was' +
      ' popularised in the 1960s with the release of Letraset sheets containing Lorem ' +
      ' Ipsum passages, and more recently with desktop publishing software like Aldus ' +
      ' PageMaker including versions of Lorem Ipsum.'
  },
  {
    titulo:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    fecha: 'Sun Jun 12',
    autor: 'CEI Ceutec',
    detalles:
      'Lorem Ipsum is simply dummy text of the printing and typesetting' +
      ' industry. Lorem Ipsum has been the industrys standard dummy text ever since' +
      ' the 1500s, when an unknown printer took a galley of type and scrambled it to' +
      ' make a type specimen book. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was' +
      ' popularised in the 1960s with the release of Letraset sheets containing Lorem ' +
      ' Ipsum passages, and more recently with desktop publishing software like Aldus ' +
      ' PageMaker including versions of Lorem Ipsum.'
  },
  {
    titulo: 'Proyect331',
    fecha: 'Aurelion Sol',
    autor: 'Comercial',
    detalles: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  }
]

export const BlogTabla = () => {
  const modals = useModals()
  const theme = useMantineTheme()

  const EditarBlogModal = () =>
    modals.openContextModal('EditarBlogModal', {
      centered: true,
      size: 'mg',
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3
    })

  const [events, setEvents] = useState(elements)

  const deleteElement = (name, e) => {
    e.preventDefault()

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
  }

  useEffect(() => {
    setEvents(elements)
  }, [events])

  const rows = elements.map((element) => (
    <tr key={element.titulo}>
      <td>
        <div className='td__content'>{element.titulo}</div>
      </td>
      <td>
        <div className='td__content'>{element.autor}</div>
      </td>
      <td>
        <div className='td__content'>{element.fecha}</div>
      </td>
      <td>
        <div className='td__content'>{element.detalles}</div>
      </td>
      <td>
        <div className='tab__btns flex'>
          <div className='btn__editar' onClick={EditarBlogModal}>
            Editar
          </div>
          <div
            className='btn__eliminar'
            onClick={(e) => deleteElement(element.autor, e)}
          >
            Eliminar
          </div>
        </div>
      </td>
    </tr>
  ))

  return (
    <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
      <thead>
        <tr>
          <th>
            <div className='th__title'>Titulo</div>
          </th>
          <th>
            <div className='th__title'>Autor</div>
          </th>
          <th>
            <div className='th__title'>Fecha</div>
          </th>
          <th>
            <div className='th__title'>Detalles</div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
