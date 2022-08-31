const API_SERVER = 'http://localhost:3055/1.0.0';

export const Eventos = {
    calendarEvents: async function(){
        try{
          let result = await fetch(`${API_SERVER}/calendario/eventos`)
          return result.json()
        }catch(err){ throw err }
    },
    get: async function(){
        try{
            let result = await fetch(`${API_SERVER}/eventos`)
            return result.json()
        }catch(err){ throw err }
    },
    add: async function(evento){
        try{
            let result = await fetch(`${API_SERVER}/eventos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(evento)
            })
            if (result.status === 200){
                return result.json()
            } else{ throw result }
            
        }catch(err){ 
            console.error(err)
            throw err
            return err
        }
    },
    update:async function(id, evento){
        try{
            let result = await fetch(`${API_SERVER}/eventos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(evento)
            })
            if (result.status === 200){
                return result.json()
            } else{ throw result }
        }catch(err){ throw err }
    },
    detele:async function(id){
        try{
            let result = await fetch(`${API_SERVER}/eventos/${id}`, {
                method: 'DELETE'
            })
            return result.json()
        }catch(err){ throw err }
    }
}


export const Opciones= {
    getLugarSede: async function(){
        try{
            let result = await fetch(`${API_SERVER}/opciones/lugarsede`)
            return result.json()
        }catch(err){ throw err }
    },
    getOrganizador: async function(){
        try{
            let result = await fetch(`${API_SERVER}/opciones/organizador`)
            return result.json()
        }catch(err){ throw err }
    }
}