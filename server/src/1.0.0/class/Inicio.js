module.exports = class inicio{
    constructor(data, filter){
        this.db = 'Inicio'

        this.id= data.id || '';
        this.titulo = data.titulo || '';
        this.subtitulo = data.subtitulo || '';
        this.imagen = data.imagen || '';
        this.titulo_seccion_carousel = data.titulo_seccion_carousel || '';
        this.cei_descripcion = data.cei_descripcion || '';
        this.querygetAll = `SELECT * FROM ${this.db}`;
        this.queryUpdate = `UPDATE ${this.db} SET
        titulo = @titulo,
        subtitulo = @subtitulo,
        imagen = @imagen,
        titulo_seccion_carousel = @titulo_seccion_carousel,
        cei_descripcion = @cei_descripcion
        `;

    }
}