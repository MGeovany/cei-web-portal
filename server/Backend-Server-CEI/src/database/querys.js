import { createNewContactanos } from "../controllers/contactanos.controller";

 
 export const queries = {
    getAllContactanos: 'SELECT * FROM [DB_CEI].[dbo].TCNT',
    addNewContactanos: 'INSERT INTO TCNT (nombre, email, celular, comentario, fecha_registro) VALUES (@nombre, @email, @celular, @comentario, @fecha_registro)'
 }