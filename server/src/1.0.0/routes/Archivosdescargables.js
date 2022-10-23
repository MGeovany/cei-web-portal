const express = require("express");
const router = express.Router();
const config = require("../lib/config");
const sql = require("mssql");
const ArchivosModule = require("../class/Archivosdescargables");

router.get("/archivosdescargables", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let archivo = new ArchivosModule(data);
    let pool = await sql.connect(config);
    let response = await pool.request().query(archivo.queryGet);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordsets);
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.post("/archivosdescargables", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let archivo = new ArchivosModule(data);
    let pool = await sql.connect(config);
    let response = await pool.request()
      .input("nombre_archivo", sql.VarChar(250), archivo.nombre_archivo)
      .input("descripcion", sql.VarChar(250), archivo.descripcion)
      .input("titulo", sql.VarChar(250), archivo.titulo)
      .input("imagen_tarjeta", sql.VarChar(250), archivo.imagen_tarjeta)
      .input("autor", sql.VarChar(250), archivo.autor)
      .query(archivo.queryInsert);
      res.status(200).json({ message: "Agregado correctamente" });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.delete("/archivosdescargables/:id", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let archivo = new ArchivosModule(data);
    let pool = await sql.connect(config);
    let response = await pool.request()
      .input("id",sql.Int,archivo.id)
      .query(archivo.queryDelete);

    res.status(200).json({ message: "Datos han sido Eliminados" });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.get("/archivosdescargables/:id", async (req, res) => {
    try {
      let data = { ...req.body, ...req.params };
      let archivo = new ArchivosModule(data);
      let pool = await sql.connect(config);
      let response = await pool.request()
      .input('id', sql.Int, archivo.id)
      .query(archivo.queryGetById);
      if (response.rowsAffected <= 0) {
        throw "No existe datos con esos parámetros";
      }
      res.status(200).json(response.recordsets);
    } catch (error) {
      console.error(`Hay clavo tio ${error}`);
      res.status(400).json({ error: `Hay clavo tio ${error}` });
    }
  });

router.put("/archivosdescargables/:id", async (req, res) => {
    try {
      let data = { ...req.body, ...req.params };
      let archivo = new ArchivosModule(data);
      let pool = await sql.connect(config);
      let response = await pool
        .request()
        .input('id', sql.Int, archivo.id)
        .input("nombre_archivo", sql.VarChar(250), archivo.nombre_archivo)
        .input("descripcion", sql.VarChar(250), archivo.descripcion)
        .input("titulo", sql.VarChar(250), archivo.titulo)
        .input("imagen_tarjeta", sql.VarChar(250), archivo.imagen_tarjeta)
        .input("autor", sql.VarChar(250), archivo.autor)
        .query(archivo.queryUpdate);
        res.status(200).json({data:data,message:"Modificado exitosamente"})

    } catch (error) {
      console.error(`Hay clavo tio ${error}`);
      res.status(400).json({ error: `Hay clavo tio ${error}` });
    }
  });




module.exports = router;
