//importo en framework express
//const express = require('express')//version vieja de importar
import express from 'express'

//importo las rutas de la api
import {rutas} from '../routes/rutas.js'

export class Servidor{
    constructor(){
        this.app = express()
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
}