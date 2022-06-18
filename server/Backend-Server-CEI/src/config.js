//Importacion para variables de entorno
import {config} from 'dotenv'
config();


export default{
    port:process.env.PORT || 4000
}