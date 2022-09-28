module.exports = class Integrantes{
    constructor(data, filter){
        this.db = 'Integrantes'
        this.id= data.id || '';
        this.nombre = data.nombre || '';
        this.correo = data.correo || '';
        this.proyecto= data.proyecto || '';
        this.idproyecto= data.idproyecto || '';
        this.queryGet=`
        SELECT 
        id
        ,nombre
        ,correo
        ,proyecto
        ,idproyecto
        FROM Integrantes 
        WHERE idproyecto = @idproyecto`

        this.queryGetById=` SELECT 
            id
            ,nombre
            ,correo
           ,proyecto
            FROM Integrantes
            WHERE id=@id
            ORDER BY proyecto;`
        
        this.querySave=`INSERT INTO ${this.db} 
        (nombre ,correo, idproyecto)
        OUTPUT Inserted.id  
        VALUES 
        (@nombre,@correo, @idproyecto);`

       
            
        this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`
    }
}