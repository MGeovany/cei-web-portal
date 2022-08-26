import React from 'react'
import { BlogsRecientes } from '../componentes/BlogsRecientes'
import '../styles/Blog.css'
import { RecursosDescargables } from '../componentes/RecursosDescargables'

export const Blog = () => {
  return (
    <div>
      <div className='blog'>
        <div className='blog-container flex'>
          <div className='casos-title section-title'>
            NUESTRO<span style={{ color: '#e1575f' }}> BlOG 🛸</span>
            <div className='casos-subtitle'>RECURSOS & CONOCIMIENTOS</div>
          </div>
          <div className='casos-content'>
            <div className='casos-section'>
              <BlogsRecientes  section={'Blog Recientemente Publicados'} />
              <RecursosDescargables/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// export const Casos = () => {
//   return (
//     <div className='casos'>
//       <div className='casos-container'>
//         <div className='casos-title section-title'>
//           CASOS QUE <span style={{ color: '#e1575f' }}>INSPIRAN🥇</span>
//         </div>
//         <CasoCarousel data={casosTec} section={'Tecnología'} />
//         <CasoCarousel data={casosCom} section={'Comercial'} />
//         <CasoCarousel data={casosSoc} section={'Social'} />
//         <CasoCarousel data={casosSal} section={'Salud'} />
//       </div>
//     </div>
//   )
// }
