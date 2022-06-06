import React from 'react'
import { CasoComercial } from '../componentes/CasoComercial'
import { CasoSocial } from '../componentes/CasoSocial'
import { CasoSalud } from '../componentes/CasoSalud'
import { CasoTecnologia } from '../componentes/CasoTecnologia'

import '../styles/Casos.css'

const casosTec = [
  {
    img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'BeLeaf',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/12074421/pexels-photo-12074421.jpeg?cs=srgb&dl=pexels-renata-meneses-12074421.jpg&fm=jpg',
    titulo: 'Cerebro de confianza',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/12253368/pexels-photo-12253368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Xchematic',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/10012721/pexels-photo-10012721.jpeg?cs=srgb&dl=pexels-elizaveta-rukhtina-10012721.jpg&fm=jpg',
    titulo: 'Planets Friend',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

const casosCom = [
  {
    img: 'https://images.pexels.com/photos/10776722/pexels-photo-10776722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Vision Marketing',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/11405496/pexels-photo-11405496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubet',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/3371355/pexels-photo-3371355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Day One',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/3864605/pexels-photo-3864605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Rentie',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

const casosSal = [
  {
    img: 'https://images.pexels.com/photos/11258764/pexels-photo-11258764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubet',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/9771524/pexels-photo-9771524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Guiran',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/9726492/pexels-photo-9726492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubit',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/5535714/pexels-photo-5535714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salud & More',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

const casosSoc = [
  {
    img: 'https://images.pexels.com/photos/2102632/pexels-photo-2102632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Dame la mano HN',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/7900687/pexels-photo-7900687.jpeg?cs=srgb&dl=pexels-efecan-efe-7900687.jpg&fm=jpg',
    titulo: 'CJOL',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/9277357/pexels-photo-9277357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Chilas',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/10572220/pexels-photo-10572220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'XCHEMATIC',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

export const Casos = () => {
  return (
    <div>
      <div className="casos">
        <div className="casos-container flex">
          <div className="casos-title section-title">Casos que Inspiran🥇</div>
          <div className="casos-content">
            <div className="casos-section">
              <CasoTecnologia casosTec={casosTec}/>
              <CasoComercial casosCom={casosCom}/>
              <CasoSocial casosSoc={casosSoc}/>
              <CasoSalud casosSal={casosSal}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
