const bcrypt = require('bcrypt');
const SALT = process.env.SECRET_SALT;

module.exports = class Usuario {
  constructor(data) {
    this.db = "Usuario";
    this.id = data.id || '';
    this.usuario = data.usuario || '';
    this.contrasena = bcrypt.hashSync(data.contrasena || '',SALT);
    this.correo = data.correo || '';
    this.nombre = data.nombre || '';

    this.queryGet = `SELECT * FROM ${this.db}`;
    this.queryGetByID = `SELECT id, usuario, contrasena, correo FROM ${this.db} WHERE id = @id`;
    this.querySave = `INSERT INTO ${this.db} (nombre,usuario, contrasena, correo) VALUES (@nombre,@usuario, @contrasena, @correo)`;
    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`;
    this.queryUpdate = `UPDATE ${this.db} SET 
    nombre = @nombre,
    usuario = @usuario,
    correo = @correo
    WHERE id = @id`;

    this.queryUpdateWithPassword = `UPDATE ${this.db} SET 
    nombre = @nombre,
    usuario = @usuario,
    contrasena = @contrasena,
    correo = @correo
    WHERE id = @id`;
    this.comaparePassword = (contrasena,contrasenaDB) => bcrypt.compareSync(contrasena,contrasenaDB);
}};
