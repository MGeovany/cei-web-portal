const express = require("express");
const router = express.Router();
const config = require("../lib/config");
const sql = require("mssql");
const RecursosModule = require("../class/Recursos_descargables");

router.get("/recursos", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let recurso = new RecursosModule(data);
    let pool = await sql.connect(config);
    let response = await pool.request().query(recurso.queryGet);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordsets);
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.post("/recursos", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let recurso = new RecursosModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("nombre_archivo", sql.VarChar(250), recurso.nombre_archivo)
      .input("descripcion", sql.VarChar(250), recurso.descripcion)
      .input("descripcion", sql.VarChar(250), recurso.descripcion)
      .input("imagen_tarjeta", sql.VarChar(250), recurso.imagen_tarjeta)
      .input("autor", sql.VarChar(250), recurso.autor)
      .query(recurso.queryGet);
      res.status(200).json({ message: "Agregado correctamente" });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.delete("/recursos/:id", async (req, res) => {
  try {
    let data = { ...req, ...res };
    let recurso = new RecursosModule(data);
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("id", sql.Int, recurso.id)
      .query(recurso.queryDelete);

    res.status(200).json({ message: "Datos han sido Eliminados" });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(300).json({ error: `Hay clavo tio ${error}` });
  }
});

router.get("/recursos/:id", async (req, res) => {
    try {
      let data = { ...req.body, ...req.params };
      let recurso = new RecursosModule(data);
      let pool = await sql.connect(config);
      let response = await pool.request()
      .input('id', sql.Int, recurso.id)
      .query(recurso.queryGetById);
      if (response.rowsAffected <= 0) {
        throw "No existe datos con esos parámetros";
      }
      res.status(200).json(response.recordsets);
    } catch (error) {
      console.error(`Hay clavo tio ${error}`);
      res.status(400).json({ error: `Hay clavo tio ${error}` });
    }
  });

  router.put("/recursos/:id", async (req, res) => {
    try {
      let data = { ...req.body, ...req.params };
      let recurso = new RecursosModule(data);
      let pool = await sql.connect(config);
      let response = await pool
        .request()
        .input('id', sql.Int, recurso.id)
        .input("nombre_archivo", sql.VarChar(250), recurso.nombre_archivo)
        .input("descripcion", sql.VarChar(250), recurso.descripcion)
        .input("descripcion", sql.VarChar(250), recurso.descripcion)
        .input("imagen_tarjeta", sql.VarChar(250), recurso.imagen_tarjeta)
        .input("autor", sql.VarChar(250), recurso.autor)
        .query(recurso.queryUpdate);
        res.status(200).json({data:data,message:"Modificado exitosamente"})

    } catch (error) {
      console.error(`Hay clavo tio ${error}`);
      res.status(400).json({ error: `Hay clavo tio ${error}` });
    }
  });




module.exports = router;
