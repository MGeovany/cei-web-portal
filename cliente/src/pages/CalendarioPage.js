/* eslint-disable no-unused-vars */
import React from 'react'
import { Calendario } from '../componentes/Calendario'
import '../styles/Calendario.css'
import { Navbar } from '../componentes/Navbar'
import { Actividades } from '../componentes/Actividades'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// static data, this will be loaded from a server in production.
const data = [
  {
    id: 1,
    title: 'SHOW AND TELL 2022',
    fecha: '18/05/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/7413868/pexels-photo-7413868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido:
      'Como promotor de la cultura del emprendimiento en el país, el HUB de UNITEC también se suma a la gran celebración del Día Mundial del Emprendimiento, el cual fomenta el espíritu emprendedor, homenajea a todas aquellas personas que decidieron perseguir sus sueños y comenzar una iniciativa y concientiza sobre el impacto y la contribución de estas en la sociedad. ¿Cómo se define un emprendedor? Los perfiles de los emprendedores, así como sus motivaciones, son muy variados, pero todos tienen una serie de características en común: desean causar un impacto social, tienen la capacidad de innovar y buscan continuamente oportunidades de mejora. Estos aspiran a dejar su huella en el mundo por medio de soluciones creativas que resuelvan problemas específicos de la sociedad. Tienen la habilidad de ver el mundo desde una perspectiva de mejora constante y visualizar lo que actualmente no hay como una posibilidad de innovar. Además, siempre están buscando la manera de ofrecer productos o servicios que optimicen los recursos que la sociedad dispone para facilitar la vida de las personas. Este es el segundo año consecutivo que toca celebrar el Día Mundial del Emprendimiento en medio de una crisis global como lo es la pandemia de Covid-19, pero resulta increíble la actitud, carácter, resiliencia, creatividad y cooperación con que la comunidad emprendedora de Honduras se unió reactivar la economía del país y combatir el coronavirus, superando de esta forma sus limitantes.',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 2,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/6340656/pexels-photo-6340656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 2',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 3,
    title: 'SHOW DE EMPRENDEDORES',
    fecha: '01/22/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/7433839/pexels-photo-7433839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 32',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 33,
    title: 'FERIA MICRO-EMPRESAS',
    autor: 'CEI CEUTEC',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/6172540/pexels-photo-6172540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 332323,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/6829536/pexels-photo-6829536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 3234,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/7698815/pexels-photo-7698815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 332333423,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/6914343/pexels-photo-6914343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  },
  {
    id: 4,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    autor: 'CEI CEUTEC',
    img: 'https://images.pexels.com/photos/6476186/pexels-photo-6476186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 4',
    photos: [
      {
        img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      },
      {
        img: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descrip: 'Grupo de trabajo'
      }
    ]
  }
]

const events = [
  {
    title: 'Jaula de Jaguares',
    allDay: true,
    start: new Date(2022, 5, 12),
    end: new Date(2022, 5, 12)
  },
  {
    title: 'Webinar de Emprendimiento',
    allDay: true,
    start: new Date(2022, 6, 2),
    end: new Date(2022, 6, 2)
  },
  {
    title: 'Celebración del dia del emprendedor',
    allDay: false,
    start: new Date(2022, 5, 14),
    end: new Date(2022, 5, 17)
  },
  {
    title: 'Feriado Nacional',
    allDay: true,
    start: new Date(2022, 5, 23),
    end: new Date(2022, 0, 2)
  }
]

export const CalendarioPage = () => {
  return (
    <>
      <div className='container-actividades'>
        <div className='calendario'>
          <div className='section-title calendario-title'>
            CALENDARIO DE <span style={{ color: '#e1575f' }}> EVENTOS🎯</span>
          </div>
          <Calendario events={events} />
        </div>
        <div >
          <Actividades data={data}/>
        </div>
      </div>
    </>
  )
}
