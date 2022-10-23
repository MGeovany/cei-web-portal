/* eslint-disable react/prop-types */
import React from 'react'
import { BlogTabla } from '../componentes/BlogTabla'
import { createStyles } from '@mantine/core';

const use_Styles = createStyles((theme, _params, getRef) => ({
  blogTablastyle:{
    padding:'0px',
    width:'100%'
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
        <BlogTabla></BlogTabla>
        </div>
    </div>
  </>
)


}
