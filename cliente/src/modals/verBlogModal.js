/* eslint-disable react/prop-types */
import React from 'react'
import { BlogTabla } from '../componentes/BlogTabla'
import { BlogTablaResponsive } from '../componentes/BlogTablaResponsive'
import { createStyles } from '@mantine/core';

const use_Styles = createStyles((theme, _params, getRef) => ({
  blogTablastyle:{
    padding:'0px',
    width:'100%',
    '@media (max-width: 1050px)': {
      display:'none'
      },
  },
  blogTablastyleR:{
    padding:'0px',
    width:'100%',
    '@media (min-width: 1050px)': {
      display:'none'
      },
  }
}));


export const verBlogModal = ({ context, id, innerProps }) => {

 
 
  const { classes } = use_Styles();


return(
  <>
    <div className='add__asset__modal asset__col'>
      <div className='asset__modal__title'>
        TODOS LOS <span style={{ color: '#e1575f' }}>RECURSOS</span>
      </div>
        <div className={classes.blogTablastyle}>
        <BlogTabla   ></BlogTabla>
        </div>
        <div className={classes.blogTablastyleR}>
        <BlogTablaResponsive/>
        </div>
    </div>
  </>
)


}
