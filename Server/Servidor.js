//importo en framework express
//const express = require('express')//version vieja de importar
import express from 'express'

//importo las rutas de la api
import {rutas} from '../routes/rutas.js'
//importo conexion a bd
import {conectarConBD} from '../database/conexion.js'

export class Servidor{
    constructor(){
        this.app = express()
        this.conectarBD()
        this.llamarAuxiliares() //activo midlewares o ayudas
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`SERVIDOR ENCENDIDO EN ${process.env.PORT}`)
        }) 

    }

    atenderPeticiones(){
     //llamando al archivo de rutas
     this.app.use('/',rutas)       
    }

    llamarAuxiliares(){
        this.app.use(express.json())  //AYUDANTE PARA RECIBIR DATOS POR EL BODY DE LA PETICION
    }

    conectarBD(){
        conectarConBD()
    }
}