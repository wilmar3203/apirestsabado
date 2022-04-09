//importo las variables de entorno
//require('dotenv').config() / forma vieja de importar
import 'dotenv/config'

//importo la clase serividor
import {Servidor} from './Server/Servidor.js'

//crear un objeto de clase servidor
let servidor = new Servidor()

//despertar el servidor
servidor.despertarServidor()




