module.exports = class Contactanos{
    constructor(data){
        this.db = 'Contactanos';
        this.id = data.id;
        this.nombre = data.nombre;
        this.email = data.email;
        this.comentario = data.comentario;
        this.telefono = data.telefono;


        this.queryGet = `SELECT * FROM ${this.db}`

        this.querySave = `INSERT INTO ${this.db} (nombre, email, comentario, telefono) 
        VALUES (@nombre, @email, @comentario, @telefono)`

        this.queryGetById = `SELECT * FROM ${this.db} WHERE id = @id`

        this.queryDelete = `DELETE FROM ${this.db} WHERE id = @id`

        this.queryUpdate = `UPDATE ${this.db} SET nombre = @nombre, email = @email, comentario = @comentario,
        telefono = @telefono WHERE id = @id`
    }
    
}