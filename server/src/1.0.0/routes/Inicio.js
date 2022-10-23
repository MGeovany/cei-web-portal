const express = require("express");
const router = express.Router();
const config = require("../lib/config");
const sql = require("mssql");
const InicioModule = require("../class/Inicio");
const InicioCarouselModule = require('../class/InicioCarousel')
const InicioIntegrantesModule = require('../class/InicioIntegrantes')

router.get("/inicio", async (req, res) => {// get all
  try {
    let data = { ...req.body, ...req.params };
    let inicio = new InicioModule(data);
    let inicioCarousel = new InicioCarouselModule();
    let inicioIntegrantes = new InicioIntegrantesModule();
    let pool = await sql.connect(config);
    let result = await pool.request().query(inicio.querygetAll)
    let resultCarousel = await pool.request().query(inicioCarousel.queryGet)
    let resultIntegrantes = await pool.request().query(inicioIntegrantes.queryGet)
    let HomeData = result.recordset[0]

    if (result.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json({
        
          titulo:HomeData.titulo,
          subtitulo:HomeData.subtitulo,
          imagen:HomeData.imagen,
          titulo_seccion_carousel: HomeData.titulo_seccion_carousel,
          cei_descripcion: HomeData.cei_descripcion,
          carousel:resultCarousel.recordsets[0],
          integrantes:resultIntegrantes.recordsets[0]
          });

  } catch (error) {
    console.error(error)
    res.status(300).json({error:`Hay clavo tio ${error}`})
  }
});

router.put('/inicio/', async(req, res)=>{ //modificar
  try {
    let data = {...req.body,...req.params};
        let inicio = new InicioModule(data);
        let pool =  await sql.connect(config);

         await pool.request()
        .input('titulo',sql.VarChar(300),inicio.titulo)
        .input('subtitulo',sql.VarChar(600),inicio.subtitulo)
        .input('imagen',sql.VarChar(300),inicio.imagen)

        .input('titulo_seccion_carousel',sql.VarChar(300),inicio.titulo_seccion_carousel)
        .input('cei_descripcion',sql.VarChar(300),inicio.cei_descripcion)
        .query(inicio.queryUpdate)
        res.status(200).json({data:data,message:"Modificado exitosamente"})

  } catch (error) {
    console.error(`Hay clavo tio ${error}`)
    res.status(300).json({error:`Hay clavo tio ${error}`})
  }
});





module.exports = router;
