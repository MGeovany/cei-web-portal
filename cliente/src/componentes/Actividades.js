import React from 'react'
import { ActividadesCard } from './ActividadesCard'
import { Arrow } from '../utils/svgIcons'
import Slider from 'react-slick'
import '../styles/Calendario.css'

const data = [
  {
    id: 1,
    title: 'SHOW AND TELL 2022',
    fecha: '18/05/2020',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido:
      'Como promotor de la cultura del emprendimiento en el país, el HUB de UNITEC también se suma a la gran celebración del Día Mundial del Emprendimiento, el cual fomenta el espíritu emprendedor, homenajea a todas aquellas personas que decidieron perseguir sus sueños y comenzar una iniciativa y concientiza sobre el impacto y la contribución de estas en la sociedad. ¿Cómo se define un emprendedor? Los perfiles de los emprendedores, así como sus motivaciones, son muy variados, pero todos tienen una serie de características en común: desean causar un impacto social, tienen la capacidad de innovar y buscan continuamente oportunidades de mejora. Estos aspiran a dejar su huella en el mundo por medio de soluciones creativas que resuelvan problemas específicos de la sociedad. Tienen la habilidad de ver el mundo desde una perspectiva de mejora constante y visualizar lo que actualmente no hay como una posibilidad de innovar. Además, siempre están buscando la manera de ofrecer productos o servicios que optimicen los recursos que la sociedad dispone para facilitar la vida de las personas. Este es el segundo año consecutivo que toca celebrar el Día Mundial del Emprendimiento en medio de una crisis global como lo es la pandemia de Covid-19, pero resulta increíble la actitud, carácter, resiliencia, creatividad y cooperación con que la comunidad emprendedora de Honduras se unió reactivar la economía del país y combatir el coronavirus, superando de esta forma sus limitantes.'
  },
  {
    id: 2,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 2'
  },
  {
    id: 3,
    title: 'SHOW DE EMPRENDEDORES',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/9405431/pexels-photo-9405431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 32'
  },
  {
    id: 33,
    title: 'FERIA MICRO-EMPRESAS',
    autor: 'Autor del blog 33',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/7175611/pexels-photo-7175611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 332323,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/10970424/pexels-photo-10970424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 3234,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/12175850/pexels-photo-12175850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 332333423,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/11763620/pexels-photo-11763620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 4,
    title: 'CELEBRACION DEL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 4'
  }
]

export const Actividades = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    vertical: false
  }
  return (
    <div className='ctividades'>
      <div className='actividades-container-section'>
        <div className='actividades-section-title'>
          Actividades celebradas por el CEI
          <span>
            <Arrow height={25} width={25} fill='#e1575f' />
          </span>
        </div>
        <div className='container-carrousel'>
          <Slider {...settings}>
            {data.map((actividad, index) => (
              <div key={actividad.id}>
                <ActividadesCard actividad={actividad} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
