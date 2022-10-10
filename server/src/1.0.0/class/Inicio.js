module.exports = class inicio{
    constructor(data, filter){
        this.db = 'Inicio'
//pagina inicio
        this.id= data.id || '';
        this.titulo_inicio = data.titulo_inicio || '';
        this.subtitulo_inicio = data.subtitulo_inicio || '';
        this.imagen = data.imagen || '';
//carousel
        this.titulo_carousel = data.titulo_carousel || '';
        this.seccion_carousel = data.seccion_carousel || '';
        this.detalles_carousel = data.detalles_carousel || '';
//quienessomos
        this.descripcion_quienessomos = data.descripcion_quienessomos || '';
//nuestroequipo
        this.integrante = data.integrante || '';
        this.descripcion_nuestroequipo = data.descripcion_nuestroequipo || '';
        this.subtitulo_nuestroequipo = data.subtitulo_nuestroequipo || '';


        this.querySave = `INSERT INTO ${this.db} 
        (titulo_inicio, subtitulo_inicio,
         imagen, titulo_carousel, seccion_carousel, 
         detalles_carousel, descripcion_quienessomos, 
         integrante, descripcion_nuestroequipo, subtitulo_nuestroequipo) 
         VALUES 
        (@titulo_inicio, @subtitulo_inicio, @imagen, 
         @titulo_carousel, @seccion_carousel, @detalles_carousel, @descripcion_quienessomos, 
         @integrante, @descripcion_nuestroequipo, @subtitulo_nuestroequipo)`;

        this.querygetAll = `SELECT * FROM ${this.db}`;

        this.queryUpdate = `UPDATE ${this.db} SET
        titulo_inicio=@titulo_inicio,
        subtitulo_inicio=@subtitulo_inicio,
        imagen=@imagen,
        titulo_carousel=@titulo_carousel,
        seccion_carousel=@seccion_carousel,
        detalles_carousel=@detalles_carousel,
        descripcion_quienessomos=@descripcion_quienessomos,
        integrante=@integrante,
        descripcion_nuestroequipo=@descripcion_nuestroequipo,
        subtitulo_nuestroequipo=@subtitulo_nuestroequipo
        WHERE id = @id`;

        this.queryDelete = `DELETE FROM ${this.db} WHERE id = @id`

        this.querygetById = `SELECT * FROM ${this.db} WHERE id = @id`
    }
}