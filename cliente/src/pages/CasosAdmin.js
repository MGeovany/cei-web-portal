/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { CasoComercial } from '../componentes/CasoComercial'
import { CasoSocial } from '../componentes/CasoSocial'
import { CasoSalud } from '../componentes/CasoSalud'
import { CasoTecnologia } from '../componentes/CasoTecnologia'
import { Button, MantineProvider, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'

import '../styles/Casos.css'

// static data

const casosTec = [
  {
    img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'BeLeaf',
    subtitulo: 'Tecnologia',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        img: 'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        img: 'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      },
      {
        nombre: 'Idell J Thomas',
        img: 'https://www.fakepersongenerator.com/Face/female/female20161025402124543.jpg',
        email: 'araceli.cro@hotmail.com'
      },
      {
        nombre: 'Donnie B Mitchell',
        img: 'https://www.fakepersongenerator.com/Face/male/male1084960869262.jpg',
        email: 'alex_altenw@gmail.com'
      }
    ]
  },
  {
    img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'Cerebro de confianza',
    subtitulo: 'Tecnologia',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    integrantes: [
      {
        nombre: 'Juan',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Pedro',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Marlon',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      }
    ]
  },
  {
    img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'Xchematic',
    subtitulo: 'Tecnologia',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    integrantes: [
      {
        nombre: 'Juan',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Pedro',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Marlon',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      }
    ]
  },
  {
    img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'Planets Friend',
    subtitulo: 'Tecnologia',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    integrantes: [
      {
        nombre: 'Juan',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Pedro',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Marlon',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria',
        img: 'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      }
    ]
  }
]

const casosCom = [
  {
    img: 'https://images.pexels.com/photos/11987412/pexels-photo-11987412.jpeg',
    titulo: 'Kubernets',
    subtitulo: 'Comercial',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        img: 'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        img: 'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    img: 'https://images.pexels.com/photos/11405496/pexels-photo-11405496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubet',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/3371355/pexels-photo-3371355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Day One',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/3864605/pexels-photo-3864605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Rentie',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

const casosSal = [
  {
    img: 'https://images.pexels.com/photos/11258764/pexels-photo-11258764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubet',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/9771524/pexels-photo-9771524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Guiran',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/9726492/pexels-photo-9726492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubit',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/5535714/pexels-photo-5535714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salud & More',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

const casosSoc = [
  {
    img: 'https://images.pexels.com/photos/2102632/pexels-photo-2102632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Dame la mano HN',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/7900687/pexels-photo-7900687.jpeg?cs=srgb&dl=pexels-efecan-efe-7900687.jpg&fm=jpg',
    titulo: 'CJOL',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/9277357/pexels-photo-9277357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Chilas',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  },
  {
    img: 'https://images.pexels.com/photos/10572220/pexels-photo-10572220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'XCHEMATIC',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    link: 'https://www.grupomar.com/'
  }
]

export const CasosAdmin = () => {
  const modals = useModals()
  const theme = useMantineTheme()

  const agregarCasoModal = () => {
    const id = modals.openContextModal('agregarCasoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: '1580px',
      innerProps: {}
    })
  }
  const verCasoModal = () => {
    const id = modals.openContextModal('verCasoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      overflow: 'outside',
      size: '1580px',

      innerProps: {}
    })
  }
  return (
    <div>
      <MantineProvider
        theme={{ fontFamily: 'Poppins, sans-serif' }}
        withGlobalStyles
      >
        <div className='casos'>
          <div className='casos-container flex'>
            <div className='casos-title section-title'>
              CASOS QUE <span style={{ color: '#7ac678' }}>INSPIRAN🥇</span>
            </div>
            <div className='casos-admin-btns'>
              <div>
                <Button
                  radius='xs'
                  size='md'
                  uppercase
                  variant='gradient'
                  gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                  onClick={agregarCasoModal}
                >
                  Agregar Casos
                </Button>
              </div>
              <div>
                <Button
                  radius='xs'
                  size='md'
                  uppercase
                  variant='outline'
                  color='green'
                  onClick={verCasoModal}
                >
                  Ver Casos
                </Button>
              </div>
            </div>

            <div className='casos-content'>
              <div className='casos-section'>
                <CasoTecnologia casosTec={casosTec} />
                <CasoComercial casosCom={casosCom} />
                <CasoSocial casosSoc={casosSoc} />
                <CasoSalud casosSal={casosSal} />
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
    </div>
  )
}
