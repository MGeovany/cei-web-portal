const express = require("express");
const router = express.Router();
const config = require("../lib/config");
const sql = require("mssql");
const IntegrantesModule = require("../class/Integrantes");

router.get("/casos/:idproyecto/integrantes", async (req, res) => {
  //get all
  try {
    let data = { ...req.body, ...req.params };
    let integrantes = new IntegrantesModule(data);
    console.log(integrantes.idproyecto);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("idproyecto", sql.Int, integrantes.idproyecto)
      .query(integrantes.queryGet);

    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(...response.recordsets);
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.get("/casos/:idproyecto/integrantes/:id", async (req, res) => {
  // get by id
  try {
    let data = { ...req.body, ...req.params };
    let integrantes = new IntegrantesModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("idproyecto", sql.Int, data.idproyecto)
      .input("id", sql.Int, integrantes.id)
      .query(integrantes.queryGetById);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordsets);
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.post("/casos/:idproyecto/integrantes", async (req, res) => {
  //agregar
  try {
    let data = { ...req.body, ...req.params };
    let integrantes = new IntegrantesModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("idproyecto", sql.Int, data.idproyecto)
      .input("nombre", sql.VarChar, integrantes.nombre)
      .input("correo", sql.VarChar, integrantes.correo)
      .query(integrantes.querySave);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json({ message: "Agregado correctamente", data: data });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.put("/casos/:idproyecto/integrantes/:id", async (req, res) => {
  //modificar
  try {
    let data = { ...req.body, ...req.body };
    let integrantes = new IntegrantesModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, integrantes.id)
      .input("idproyecto", sql.Int, data.idproyecto)
      .input("nombre", sql.VarChar, integrantes.nombre)
      .input("correo", sql.VarChar, integrantes.correo)
      .query(integrantes.queryUpdateIntegrantes);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json({ message: "ok", data: data });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

router.delete("/casos/:idproyecto/integrantes/:id", async (req, res) => {
  //eliminar
  try {
    let data = { ...req.body, ...req.params };
    let integrantes = new IntegrantesModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("idproyecto", sql.Int, integrantes.idproyecto)
      .input("id", sql.Int, integrantes.id)
      .query(integrantes.queryDelete);
    res.status(200).json({ message: "Datos han sido Eliminados" });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(400).json({ error: `Hay clavo tio ${error}` });
  }
});

module.exports = router;
