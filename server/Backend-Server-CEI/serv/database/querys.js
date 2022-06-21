"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;

var _contactanos = require("../controllers/contactanos.controller");

var _postulate = require("../controllers/postulate.controller");

var queries = {
  getAllContactanos: 'SELECT * FROM [DB_CEI].[dbo].TCNT',
  addNewContactanos: 'INSERT INTO TCNT (nombre, email, celular, comentario, fecha_registro) VALUES (@nombre, @email, @celular, @comentario, @fecha_registro)',
  getContactanosByID: 'SELECT * FROM [DB_CEI].[dbo].TCNT WHERE id_contacto = @id_contacto',
  deleteContactanos: 'DELETE FROM [DB_CEI].[dbo].TCNT WHERE id_contacto = @id_contacto',
  updateContactanos: 'UPDATE TCNT SET nombre=@nombre, email=@email, celular=@celular, comentario=@comentario,fecha_registro=@fecha_registro WHERE id_contacto = @id_contacto'
};
exports.queries = queries;