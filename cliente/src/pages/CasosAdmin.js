import React from 'react'
import { CasoCarousel } from '../componentes/CasoCarousel'
import { Button, MantineProvider, useMantineTheme } from '@mantine/core'
import { useModals } from '@mantine/modals'
import '../styles/Casos.css'

// static data

const casosTec = [
  {
    image:
      'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'BeLeaf',
    subtitulo: 'Tecnología',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      },
      {
        nombre: 'Pauline L Revilla',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025402124543.jpg',
        email: 'Pauline.cro@hotmail.com'
      },
      {
        nombre: 'Idell J Thomas',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025402124543.jpg',
        email: 'araceli.cro@hotmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/12406415/pexels-photo-12406415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titulo: 'Cerebro de confianza',
    subtitulo: 'Tecnología',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    integrantes: [
      {
        nombre: 'Juan',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Pedro',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Marlon',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titulo: 'Xchematic',
    subtitulo: 'Tecnología',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    integrantes: [
      {
        nombre: 'Juan',
        image:
          'https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Pedro',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Marlon',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/6942818/pexels-photo-6942818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titulo: 'Planets Friend',
    subtitulo: 'Tecnología',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion: 'Save hundreds of admin hours by reducing back and forth',
    integrantes: [
      {
        nombre: 'Juan',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Pedro',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Marlon',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria',
        image:
          'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        email: 'marlongeo1999@gmail.com'
      }
    ]
  }
]

const casosCom = [
  {
    image:
      'https://images.pexels.com/photos/12168556/pexels-photo-12168556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titulo: 'Kubernets',
    subtitulo: 'Comercial',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/4221068/pexels-photo-4221068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titulo: 'Clive',
    subtitulo: 'Comercial',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/11577405/pexels-photo-11577405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titulo: 'Kim',
    subtitulo: 'Comercial',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/11987412/pexels-photo-11987412.jpeg',
    titulo: 'Fausto',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  }
]

const casosSal = [
  {
    image:
      'https://images.pexels.com/photos/11258764/pexels-photo-11258764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubet',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/9771524/pexels-photo-9771524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Guiran',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/9726492/pexels-photo-9726492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salubit',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/5535714/pexels-photo-5535714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Salud & More',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  }
]

const casosSoc = [
  {
    image:
      'https://images.pexels.com/photos/2102632/pexels-photo-2102632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Dame la mano HN',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/7900687/pexels-photo-7900687.jpeg?cs=srgb&dl=pexels-efecan-efe-7900687.jpg&fm=jpg',
    titulo: 'CJOL',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/9277357/pexels-photo-9277357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'Chilas',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  },
  {
    image:
      'https://images.pexels.com/photos/10572220/pexels-photo-10572220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    titulo: 'XCHEMATIC',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitulo: 'Comercial',
    descripcion:
      'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
    integrantes: [
      {
        nombre: 'Marlon Geovany Castro Mejia',
        image:
          'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
        email: 'marlongeo1999@gmail.com'
      },
      {
        nombre: 'Maria Fernanda Velasquez Amaya',
        image:
          'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
        email: 'marifer@gmail.com'
      }
    ]
  }
]

export const CasosAdmin = () => {
  const modals = useModals()
  const theme = useMantineTheme()

  const agregarCasoModal = () => {
    const sizemodal =
      window.innerWidth > 1000 ? 'calc(100% - 4rem)' : 'calc(100% - 0rem)'

    modals.openContextModal('agregarCasoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: sizemodal,
      innerProps: {}
    })
  }

  const verCasoModal = () => {
    modals.openContextModal('verCasoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      overflow: 'outside',
      size: 'calc(100% - 4rem)',

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
              CASOS QUE <span style={{ color: '#e1575f' }}>INSPIRAN🥇</span>
            </div>
            <div className='casos-admin-btns'>
              <div>
                <Button
                  radius='xs'
                  size='md'
                  uppercase
                  variant='gradient'
                  gradient={{ from: 'indigo', to: 'cyan' }}
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
                  color='#e1575f'
                  onClick={verCasoModal}
                >
                  Ver Casos
                </Button>
              </div>
            </div>

            <div className='casos-content'>
              <div className='casos-section'>
                <CasoCarousel data={casosTec} section={'Tecnología'} />
                <CasoCarousel data={casosCom} section={'Comercial'} />
                <CasoCarousel data={casosSoc} section={'Social'} />
                <CasoCarousel data={casosSal} section={'Salud'} />
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
    </div>
  )
}
