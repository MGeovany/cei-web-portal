/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import '../styles/Blog.css'
import { DescargablesCarousel } from '../componentes/DescargablesCarousel'

const API_URL = 'https://cei1.herokuapp.com/1.0.0/Archivosdescargables'

export const RecursosDescargables = () => {
  const descargables = [
    {
      id: 1,
      title: 'PLANTILLA PARA UN RESUMEN EJECUTIVO',
      autor: 'CEI CEUTEC',
      fecha: '18/05/2020',
      img: 'https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      doc: 'hols'
    },
    {
      id: 2,
      title: 'PLANTILLA PARA UN RESUMEN EJECUTIVO',
      autor: 'CEI CEUTEC',
      fecha: '18/05/2020',
      img: 'https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      doc: 'hols'
    },
    {
      id: 3,
      title: 'PLANTILLA PARA UN RESUMEN EJECUTIVO',
      autor: 'CEI CEUTEC',
      fecha: '18/05/2020',
      img: 'https://images.pexels.com/photos/7680681/pexels-photo-7680681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      doc: 'hols'
    },
    {
      id: 4,
      title: 'PLANTILLA PARA UN RESUMEN EJECUTIVO',
      autor: 'CEI CEUTEC',
      fecha: '18/05/2020',
      img: 'https://images.pexels.com/photos/4968571/pexels-photo-4968571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      doc: 'hols'
    }
  ]

  const [resources, setResources] = useState(descargables)

  useEffect(() => {
    const fetchRecursos = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setResources(data[0])
      console.log(resources)
    }
    fetchRecursos()
  }, [])

  return (
    <div className='casos'>
      <DescargablesCarousel
        data={resources}
        section={'Recursos Descargables'}
      />
    </div>
  )
}
