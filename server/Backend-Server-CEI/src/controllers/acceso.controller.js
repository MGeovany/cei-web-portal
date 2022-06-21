import { request } from "express";
import { token } from "morgan";
import { getConnection, sql, queries2 } from "../database";


export const getAcceso = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries2.getAllAcceso);
    res.json(result.recordset);
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const createNewAcceso = async (req, res) => {
  const { id_user, token } = req.body;

  if (
    id_user == null ||
    token == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }

  try {
    const pool = await getConnection();

    //mandamos los parametros que vamos a capturar
    await pool
      .request()
      .input("id_user", sql.Int, id_user)
      .input("token", sql.VarChar, token)
      .query(queries2.addNewAcceso);

    res.json({ id_user, token });
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const getAccesoByID = async (req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
   .request()
  .input("id_acceso", id)
  .query(queries2.getAccesoByID)
  console.log(result);
  res.send(result.recordset)
}

export const updateAcceso = async(req, res)=>{
  const { id_user, token } = req.body;
  const {id} = req.params;
  if (
    id_user == null ||
    token == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }
 
  const pool = await getConnection();
  await pool.request()
     .input("id_user", sql.Int, id_user)
      .input("token", sql.VarChar, token)    
      .input("id_acceso", id)
      .query(queries2.updateAcceso);

}