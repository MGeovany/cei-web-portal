const express = require("express");
const router = express.Router();
const config = require("../lib/config");
const sql = require("mssql");
const CasosModule = require("../class/Casos");
const IntegrantesModule = require("../class/Integrantes");

router.get("/casos", async (req, res) => {
  // get all
  try {
    let data = { ...req.body, ...req.query };
    let casos = new CasosModule(data);

    let pool = await sql.connect(config);
    console.log(casos.seccionCasos);
    let response = await pool
      .request()
      .input("seccionCasos", sql.VarChar, casos.seccionCasos)
      .query(casos.queryGetFirst10);

    if (response.rowsAffected <= 0 && response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordsets[0]);
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(300).json({ error: `Hay clavo tio ${error}` });
  }
});

router.get("/casos/:id", async (req, res) => {
  //get by id
  try {
    let data = { ...req.body, ...req.params };
    let casos = new CasosModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, casos.id)
      .query(casos.queryGetById);

    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }

    res.status(200).json(response.recordsets) ; 
    {
      nombre:response.nombre
      descripcion:response.descripcion
      integrantes : [...responseintegrantes]
    }

  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(300).json({ error: `Hay clavo tio ${error}` });
  }
});

router.post("/casos", async (req, res) => {
  //agregar
  try {
    let data = { ...req.body, ...req.params };
    let casos = new CasosModule(data);
    let pool = await sql.connect(config);

    let response = await pool
      .request()
      .input("titulo", sql.NVarChar(100), casos.titulo)
      .input("cuerpo", sql.NText, casos.cuerpo)
      .input("tipo", sql.TinyInt, casos.tipo)
      .input("imagenEncabezado", sql.VarChar, casos.imagenEncabezado)
      .input("usuarioCreador", sql.Int, casos.usuarioCreador)
      .input("seccionCasos", sql.VarChar(250), casos.seccionCasos)
      .query(casos.queryInsert);
    if (response.rowsAffected <= 0 && result.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordset[0]);
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(300).json({ error: `Hay clavo tio ${error}` });
  }
});

router.put("/casos", async (req, res) => {
  //Modificar
  try {
    let data = { ...req.body, ...req.params };
    let casos = new CasosModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, casos.id)
      .input("titulo", sql.NVarChar(100), casos.titulo)
      .input("cuerpo", sql.NText, casos.cuerpo)
      .input("tipo", sql.TinyInt, casos.tipo)
      .input("imagenEncabezado", sql.VarChar, casos.imagenEncabezado)
      .input("usuarioCreador", sql.Int, casos.usuarioCreador)
      .input("seccionCasos", sql.VarChar(250), casos.seccionCasos)
      .query(casos.queryInsert);
    if (response.rowsAffected <= 0 && result.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json({ message: "Registrado", data: data });
  } catch (error) {
    console.error(`Hay clavo tio ${error}`);
    res.status(300).json({ error: `Hay clavo tio ${error}` });
  }
});

router.delete("/casos/:id", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let casos = new CasosModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, casos.id)
      .query(casos.queryDelete);
    res.status(200).json({ message: "Datos han sido Eliminados" });
  } catch (error) {}
});

module.exports = router;
