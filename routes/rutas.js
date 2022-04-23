import express from 'express'

//IMPORTO EL CONTROLADOR DE HABITACIONES
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'

//CREO UN OBJETO DE LA CLASE CONTROLADORHABITACION
let controladorHabitacion = new ControladorHabitacion()
//UTILIZO EL METODO Router() DE EXPRESS
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
  rutas.get('/api/v1/sabado', controladorHabitacion.buscarTodas)


  rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)
  
  rutas.post('/api/v1/sabado', function (req, res) {
    res.send('Hola soy un POST')
  })
  rutas.put('/api/v1/sabado', function (req, res) {
    res.send('Hola soy un PUT')
  })
  rutas.delete('/api/v1/sabado', function (req, res) {
    res.send('Hola soy un DELETE')
  })