//importo en framework express
//const express = require('express')//version vieja de importar
import express from 'express'


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
        //servicios de mi api
        this.app.get('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un GET')
          })
          this.app.get('/api/v1/sabado/:id', function (req, res) {
            res.send('Hola soy un GET')
          })
          this.app.post('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un POST')
          })
          this.app.put('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un PUT')
          })
          this.app.delete('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un DELTE')
          })
    }
}