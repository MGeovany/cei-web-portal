import { getConnection } from "../database/connection";

export const getContactanos = async (req, res) => {
  const pool = await getConnection()
  const result= await pool.request().query("SELECT * FROM [DB_CEI].[dbo].TCNT");
  console.log(result);

  res.json(result.recordset);
};

export const createNewContactanos = (req, res) => {
    
    const{ nombre, email, celular, comentario, fecha_registro} = req.body
    
    if (nombre == null || email == null || celular == null || comentario == null || fecha_registro == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill all Fields'})
    }


    console.log(nombre, email, celular, comentario, fecha_registro)

    res.json('new contact');
}