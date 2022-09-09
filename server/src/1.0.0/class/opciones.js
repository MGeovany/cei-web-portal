module.exports = class Opciones{
  constructor(data,filter){
      this.getLugarSede=`
        SELECT 
          LS.id 'value',
          LS.nombre 'label',
          S.nombre 'group'
          from lugarsede LS
        INNER JOIN Sede S
        on LS.sede =S.id
        ;`

      this.getOrganizador=`
        SELECT
          id 'value',
          nombre 'label'
          from Organizador;
      `

  }

}