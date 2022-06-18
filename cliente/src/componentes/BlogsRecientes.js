import React from 'react'
import '../styles/Blog.css'
import { Arrow } from '../utils/svgIcons'
import { BlogCard } from './BlogCard'

const blogs = [
  {
    id: 1,
    title:
      'UNITEC RENUEVA Y AMPLÍA LAS INSTALACIONES DEL HUB DE EMPRENDIMIENTO DE SU CAMPUS EN SAN PEDRO SULA',
    subtitle: 'Subtitulo del blog 1',
    autor: 'CEI CEUTEC',
    fecha: '18/05/2020',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido:
      'Como promotor de la cultura del emprendimiento en el país, el HUB de UNITEC también se suma a la gran celebración del Día Mundial del Emprendimiento, el cual fomenta el espíritu emprendedor, homenajea a todas aquellas personas que decidieron perseguir sus sueños y comenzar una iniciativa y concientiza sobre el impacto y la contribución de estas en la sociedad.¿Cómo se define un emprendedor? Los perfiles de los emprendedores, así como sus motivaciones, son muy variados, pero todos tienen una serie de características en común: desean causar un impacto social, tienen la capacidad de innovar y buscan continuamente oportunidades de mejora. Estos aspiran a dejar su huella en el mundo por medio de soluciones creativas que resuelvan problemas específicos de la sociedad. Tienen la habilidad de ver el mundo desde una perspectiva de mejora constante y visualizar lo que actualmente no hay como una posibilidad de innovar. Además, siempre están buscando la manera de ofrecer productos o servicios que optimicen los recursos que la sociedad dispone para facilitar la vida de las personas. Este es el segundo año consecutivo que toca celebrar el Día Mundial del Emprendimiento en medio de una crisis global como lo es la pandemia de Covid-19, pero resulta increíble la actitud, carácter, resiliencia, creatividad y cooperación con que la comunidad emprendedora de Honduras se unió reactivar la economía del país y combatir el coronavirus, superando de esta forma sus limitantes.'
  },
  {
    id: 2,
    title: 'EN EL HUB DE UNITEC, CELEBRAMOS EL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    subtitle: 'Subtitulo del blog 2',
    autor: 'Marlon G Castro',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 2'
  },
  {
    id: 3,
    title:
      'REACTIVANDO LA ECONOMÍA DE LA CAPITAL INDUSTRIAL CON EL LANZAMIENTO DE BAZAR EN LÍNEA',
    subtitle: 'Subtitulo del blog 3',
    autor: 'Aurelio Soto',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/9405431/pexels-photo-9405431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 32'
  },
  {
    id: 33,
    title: '7 COSAS QUE DEBES SABER PARA EMPEZAR A EMPRENDER',
    subtitle: 'Subtitulo del blog 333',
    autor: 'Autor del blog 33',
    fecha: '01/22/2020',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 332323,
    title: 'EN EL HUB DE UNITEC, CELEBRAMOS EL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    subtitle: 'Subtitulo del blog 333',
    autor: 'Autor del blog 33',
    fecha: '01/22/2020',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 3234,
    title: 'EN EL HUB DE UNITEC, CELEBRAMOS EL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    autor: 'Autor del blog 33',
    fecha: '01/22/2020',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 332333423,
    title: 'EN EL HUB DE UNITEC, CELEBRAMOS EL DÍA MUNDIAL DEL EMPRENDIMIENTO',
    subtitle: 'Subtitulo del blog 333',
    autor: 'Autor del blog 33',
    fecha: '01/22/2020',
    contenido: 'Contenido del blog 3222'
  },
  {
    id: 4,
    title:
      'REACTIVANDO LA ECONOMÍA DE LA CAPITAL INDUSTRIAL CON EL LANZAMIENTO DE BAZAR EN LÍNEA',
    subtitle: 'Subtitulo del blog 4',
    autor: 'Autor del blog 4',
    fecha: '01/22/2020',
    img: 'https://images.pexels.com/photos/7971174/pexels-photo-7971174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contenido: 'Contenido del blog 4'
  }
]

export const BlogsRecientes = () => {
  return (
    <div className='casos-tecnologia'>
      <div className='casos-container-section'>
        <div className='blog-section-title'>
          Blog recientemente publicados
          <span>
            <Arrow height={32} width={30} fill='#7ac678' />
          </span>
        </div>

        <div className='casos-section-content'>
          {blogs.map((blog, index) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
