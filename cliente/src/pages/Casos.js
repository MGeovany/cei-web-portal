import React from 'react'

import { CasoCarousel } from '../componentes/CasoCarousel'

import '../styles/Casos.css'

// static data

const casosTec = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    desc: 'Tecnología'
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    desc: 'Tecnología'
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    desc: 'Tecnología'
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    desc: 'Tecnología'
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    desc: 'Tecnología'
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    desc: 'Tecnología'
  }
]

const casosCom = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    desc: 'nature'
  },
  {
    image:
      'https://images.pexels.com/photos/12168556/pexels-photo-12168556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Kubernets',
    subtitle: 'Comercial',
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
    title: 'Clive',
    subtitle: 'Comercial',
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
    title: 'Kim',
    subtitle: 'Comercial',
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
    title: 'Fausto',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
      'https://images.pexels.com/photos/12168556/pexels-photo-12168556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Kubernets',
    subtitle: 'Comercial',
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
  }
]
const casosSal = [
  {
    image:
      'https://images.pexels.com/photos/11258764/pexels-photo-11258764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Salubet',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'Guiran',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'Salubit',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'Salud & More',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'Dame la mano HN',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'CJOL',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'Chilas',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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
    title: 'XCHEMATIC',
    desc: 'Save hundreds of admin hours by reducing back and forth',
    subtitle: 'Comercial',
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

export const Casos = () => {
  return (
    <div className='casos'>
      <div className='casos-container'>
        <div className='casos-title section-title'>
          CASOS QUE <span style={{ color: '#e1575f' }}>INSPIRAN🥇</span>
        </div>
        <CasoCarousel data={casosTec} section={'Tecnología'} />
        <CasoCarousel data={casosCom} section={'Comercial'} />
        <CasoCarousel data={casosSoc} section={'Social'} />
        <CasoCarousel data={casosSal} section={'Salud'} />
      </div>
    </div>
  )
}
