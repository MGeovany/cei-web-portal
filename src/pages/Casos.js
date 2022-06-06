import React from 'react'
import { CasoComercial } from '../componentes/CasoComercial'
import { CasoSalud } from '../componentes/CasoSalud'
import { CasoTecnologia } from '../componentes/CasoTecnologia'
import { CasoSocial } from '../componentes/CasoSocial'
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

export const Casos = () => {
  return (
    <div>
      <div className="casos">
        <div className="casos-container flex">
          <div className="casos-title section-title">Casos que Inspiran🥇</div>
          <div className="casos-content">
            <div className="casos-tec">
              <CasoTecnologia casosTec={casosTec}/>
              <CasoComercial casosTec={casosTec}/>
              <CasoSalud casosTec={casosTec}/>
              <CasoSocial casosTec={casosTec}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
