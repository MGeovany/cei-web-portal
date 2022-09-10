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