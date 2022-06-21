import { request } from "express";
import { getConnection, sql, queries2 } from "../database";


export const getRoles = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries2.getAllRoles);
    res.json(result.recordset);
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const createNewRoles = async (req, res) => {
  const { name_rol, estado } = req.body;

  if (
    name_rol == null ||
    estado == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }

  try {
    const pool = await getConnection();

    //mandamos los parametros que vamos a capturar
    await pool
      .request()
      .input("name_rol", sql.VarChar, name_rol)
      .input("estado", sql.Char, estado)
      .query(queries2.addNewRoles);

    res.json({ name_rol, estado });
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const getRolesByID = async (req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
   .request()
  .input("id_rol", id)
  .query(queries2.getRolesByID)
  console.log(result);
  res.send(result.recordset)
}
//por id
export const deleteRoles = async(req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
  .request()
  .input("id_rol", id)
  .query(queries2.deleteRoles)
  res.sendStatus(204);
 
}

export const updateRoles = async(req, res)=>{
  const { name_rol, estado } = req.body;
  const {id} = req.params;
  if (
    name_rol == null ||
    estado == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }
 
  const pool = await getConnection();
  await pool.request()
     .input("name_rol", sql.VarChar, name_rol)
      .input("estado", sql.Char, estado)    
      .input("id_rol", id)
      .query(queries2.updateRoles);

}