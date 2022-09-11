const API_SERVER = 'http://localhost:3055/1.0.0';

export class Eventos {
    static calendarEvents = async function(){
          let result = await fetch(`${API_SERVER}/calendario/eventos`)
          return result.json()
    }
    static get = async function(){
        let result = await fetch(`${API_SERVER}/eventos`)
        return result.json()
    }
}

export class Auth {
    static validate = async function(usuario, contrasena){
          let resultValidate = {'access':false, 'data':null};

          return await fetch('https://cei1.herokuapp.com/1.0.0/login',{
            method: "POST",
            body: JSON.stringify({usuario: usuario, contrasena: contrasena}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json())
          .then(json => {
            if(json.usuario){
                resultValidate.access = true;
                resultValidate.data =  json
                return resultValidate;
            }else{
                resultValidate.access = false;
                resultValidate.data = 'Usuario o contraseña incorrecta';
                return resultValidate;
            }
          })
          .catch(err => {
            resultValidate.access = false;
            resultValidate.data = 'Ocurrio un error al validar el acceso';
            return resultValidate;
        });
    }
}