module.exports = class Post{
    constructor(data,filter){
        this.db ='Post';
        this.id= data.id || '';
        this.tipo= data.tipo || '';
        this.titulo= data.titulo || '';
        this.cuerpo= data.cuerpo || ''; 
        this.imagenEncabezado= data.imagenEncabezado || '';
        this.usuarioCreador= data.usuarioCreador || '';
        this.fechaCreado= data.fechaCreado || '';
        this.descripcion_corta= data.descripcion_corta || '';

        this.queryGetFirst10=`
        SELECT TOP 10
            id
            ,tipo
            ,titulo
            ,cuerpo
            ,imagenEncabezado
            ,usuarioCreador
            ,fechaCreado
            ,descripcion_corta
            FROM Post WHERE tipo = 1
            ORDER BY fechaCreado;`

        this.queryGetById=` SELECT 
            id
            ,tipo
            ,titulo
            ,cuerpo
            ,imagenEncabezado
            ,usuarioCreador
            ,fechaCreado
            ,descripcion_corta
            FROM Post
            WHERE id=@id AND tipo = 1
            ORDER BY fechaCreado;`
        
        this.queryInsert=`INSERT INTO ${this.db} 
        (tipo ,titulo,cuerpo,imagenEncabezado,usuarioCreador,fechaCreado, ,descripcion_corta) 
        VALUES 
        ( 1 ,@titulo,@cuerpo,@imagenEncabezado,@usuarioCreador,GETDATE(), @descripcion_corta);`

        this.queryUpdate=`UPDATE ${this.db} SET 
            titulo=@titulo,
            cuerpo=@cuerpo,
            imagenEncabezado=@imagenEncabezado,
            usuarioCreador=@usuarioCreador,
            descripcion_corta=@descripcion_corta
            WHERE id=@id AND tipo = 1;`
        this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id AND tipo = 1`   
    }
  
  }