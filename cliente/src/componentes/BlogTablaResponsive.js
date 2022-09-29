import React, { useEffect, useState } from 'react'

import { useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { Carousel } from '@mantine/carousel';


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

export const BlogTablaResponsive = () => {
  const modals = useModals()
  const theme = useMantineTheme()


  
  const EditarBlogModal = () =>
    modals.openContextModal('EditarBlogModal', {
      centered: true,
      size: 'mg',
      overlayColor:
        theme.colorScheme === 'red'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      responsive:[
        {breakpoint: 690,
        
  
        }
      ]
    })

  const [events, setEvents] = useState(elements)
  const sizemodal = window.innerWidth > 1000 ? 'calc(31%)' : 'calc(80% - 0rem)'

  const deleteElement = (name, e) => {


    console.log(name)
    modals.openContextModal('EliminarBlogsModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'sm',
      size: sizemodal,
      innerProps: {
        name:name,
        events:events,
        setEvents:setEvents,
        elements:elements
      }
    })

  }

  useEffect(() => {
    setEvents(elements)
  }, [events])



  const rows = elements.map((element) => (


    <Carousel.Slide className='card_table_responsive' key={element.titulo}> 

        <div >
            <div className='header_nav_Class'>

                <div className='title_card'>
                {element.titulo}
                </div>
                <div className='title_card_autor'>
                {element.autor}
                    <span className='date_card'>
                        {element.fecha}
                    </span>
                </div>
            </div>
            <div className='body_card_responsive'>
                {element.detalles}
            </div>
                <div className='cont_btn_card_responsive'>
                    <div className='btn__editar' onClick={EditarBlogModal}>
                            Editar
                    </div>
                    <div className='btn__eliminar' onClick={(e) => deleteElement(element.autor, e)}>
                            Eliminar
                    </div>
                </div>

        </div>


    </Carousel.Slide>


  ))

  return (


        <Carousel slideSize="50%" height={700} orientation="vertical" slideGap="md" dragFree >
          {rows}
            
        </Carousel>


  )
}
