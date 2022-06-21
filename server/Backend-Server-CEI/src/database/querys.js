import { createNewContactanos, deleteContactanos, getContactanos, getContactanosByID, updateContactanos } from "../controllers/contactanos.controller";
import { createNewRoles, deleteRoles, getRoles, getRolesByID, updateRoles } from "../controllers/roles.controller";
import { createNewUsuarios, deleteUsuarios, getUsuarios, getUsuariosByID, updateUsuarios } from "../controllers/usuarios.controller";
import { createNewAcceso, deleteAcceso, getAcceso, getAccesoByID, updateAcceso } from "../controllers/acceso.controller";
import { createNewPostulate } from "../controllers/postulate.controller"; 


 export const queries = {
   //Querys de la tabla Contactanos
    getAllContactanos: 'SELECT * FROM [DB_CEI].[dbo].TCNT',
    addNewContactanos: 'INSERT INTO [DB_CEI].[dbo].TCNT (nombre, email, celular, comentario, fecha_registro) VALUES (@nombre, @email, @celular, @comentario, @fecha_registro)',
    getContactanosByID: 'SELECT * FROM [DB_CEI].[dbo].TCNT WHERE id_contacto = @id_contacto',
    deleteContactanos:  'DELETE FROM [DB_CEI].[dbo].TCNT WHERE id_contacto = @id_contacto',
    updateContactanos:  'UPDATE [DB_CEI].[dbo].TCNT SET nombre=@nombre, email=@email, celular=@celular, comentario=@comentario,fecha_registro=@fecha_registro WHERE id_contacto = @id_contacto',
 }

 export const queries2 = {
   //Querys de la tabla Roles
   getAllRoles: 'SELECT * FROM [DB_CEI].[dbo].TROL',
   addNewRoles: 'INSERT INTO [DB_CEI].[dbo].TROL ( name_rol, estado) VALUES (@name_rol, @estado)',
   getRolesByID: 'SELECT * FROM [DB_CEI].[dbo].TROL WHERE id_rol = @id_rol',
   deleteRoles:  'DELETE FROM [DB_CEI].[dbo].TROL WHERE id_rol = @id_rol',
   updateRoles:  'UPDATE [DB_CEI].[dbo].TROL SET name_rol=@name_rol, estado=@estado WHERE id_rol = @id_rol',

   //Querys de la tabla Users
   getAllUsers: 'SELECT * FROM [DB_CEI].[dbo].TUSR',
   addNewUsers: 'INSERT INTO [DB_CEI].[dbo].TUSR ( user_name, password, id_rol, estado) VALUES (@user_name, @password, @id_rol, @estado)',
   getUsersByID: 'SELECT * FROM [DB_CEI].[dbo].TUSR WHERE id_user = @id_user',
   deleteUsers:  'DELETE FROM [DB_CEI].[dbo].TUSR WHERE id_user = @id_user',
   updateUsers:  'UPDATE [DB_CEI].[dbo].TUSR SET name_rol=@name_rol, estado=@estado WHERE id_user = @id_user',

   //Querys de la tabla Acceso
   getAllAcceso: 'SELECT * FROM [DB_CEI].[dbo].TACS',
   addNewAcceso: 'INSERT INTO [DB_CEI].[dbo].TACS ( id_user, token) VALUES (@id_user, @token)',
   getAccesoByID: 'SELECT * FROM [DB_CEI].[dbo].TACS WHERE id_acceso = @id_acceso',
   updateAcceso:  'UPDATE [DB_CEI].[dbo].TACS SET id_user=@id_user, token=@token WHERE id_acceso = @id_acceso'
}